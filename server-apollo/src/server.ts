// @/server.ts
import "reflect-metadata";
import path from "path";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express, { Application, Request, Response } from "express";
import session from "express-session";
import passport from "passport";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import pm2 from "pm2";
import env from "./config/env.config";
import dataSource from "./config/database.config";
import sessionConfig from "./config/session.config";
import "./config/passport/local.passport";
import { redisClient } from "./config/redis.config";
import pm2Config from "@/config/pm2.config";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./resolvers/resolvers";
import routes from "./routes/routes";

type TContext = {
	token?: string;
};

const server = async () => {
	// Initialize TypeOrm if database configuration exists:
	if (env.DB_NAME) {
		dataSource
			.initialize()
			.then(async () => {
				console.log(`Database ${env.DB_NAME} initialized on ${env.DB_HOST}:${env.DB_PORT}.`);
			})
			.catch((error) => console.log(error));
	}

	// Monitor Redis commands and log them to the console
	redisClient.monitor((error, monitor) => {
		if (!error) {
			console.log(`Connected to Redis database on ${env.REDIS_HOST}:${env.REDIS_PORT}`);
		}
		if (env.DEBUG) {
			if (monitor) {
				monitor.on("monitor", (time, args, source) => {
					console.log(time, args, source);
				});
			}
		}
	});

	// Initialize Express server:
	const app: Application = express();

	// httpServer handles incoming requests to the Express app:
	const httpServer = http.createServer(app);

	app.disable("x-powered-by");

	app.use(
		cors({
			origin: env.CLIENT_DOMAIN_NAME,
			credentials: true,
		}),
	);

	// Set the view engine to ejs:
	app.set("view engine", "ejs");
	app.set("views", path.join(__dirname, "views"));

	// Create an Express session to store user session data:
	app.use(session(sessionConfig));

	// Configure Passport.js middleware
	app.use(passport.initialize());
	app.use(passport.session());

	// Initialize Apollo Server:
	const apolloServer = new ApolloServer<TContext>({
		typeDefs,
		resolvers,
		// Apollo Server should drain httpServer, allowing the server to shut down gracefully.
		plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
	});

	// Ensure we wait for our server to start
	await apolloServer.start();

	// Set up Express middleware with "app.use()":
	app.use(
		"/graphql",
		// Middleware function that enables Cross-Origin Resource Sharing (CORS) support for "/" route:
		cors<cors.CorsRequest>(),
		// Middleware function that parses incoming request bodies in JSON format:
		bodyParser.json(),
		// Middleware function that integrates Apollo Server and context with Express:
		expressMiddleware(apolloServer, {
			context: async ({ req, res }: { req: Request; res: Response }) => ({
				req,
				res,
				token: req.headers.token,
				redisClient,
			}),
		}),
	);

	app.use("/", routes);

	// Modified server startup as an asynchronous promise:
	await new Promise<void>((resolve) => httpServer.listen({ port: env.PORT }, resolve));
};

const initializeServer = () => {
	server()
		.then(() => {
			console.log(`🚀 Server running on ${env.HOST}:${env.PORT}.`);
		})
		.catch((error) => {
			console.error(`Failed to start the server on ${env.HOST}:${env.PORT}:`, error);
		});
};

// Start the server with PM2
pm2.start(pm2Config, (error, _) => {
	if (error) {
		console.error("Failed to start the server with PM2:", error);
		process.exit(1); // Exit the process if PM2 fails to start
	}

	console.log("Starting server with PM2...");
	initializeServer();
});
