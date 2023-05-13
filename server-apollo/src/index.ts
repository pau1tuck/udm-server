// index.ts
import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express, { Request, Response } from "express";
import session from "express-session";
import http from "http";
import cors from "cors";
import { json } from "body-parser";
import { v4 as uuid4 } from "uuid";
import { mergeResolvers } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";
import env from "./config/env.config";
import dataSource from "./config/database.config";
import typeDefs from "./graphql/typeDefs";
import trackResolver from "./resolver/track.resolver";

interface MyContext {
    token?: string;
}

const resolvers = mergeResolvers([trackResolver]);

const server = async () => {
    // Initialize TypeOrm database:
    dataSource
        .initialize()
        .then(async () => {
            console.log(`Database ${env.DB_NAME} initialized on port ${env.DB_PORT}.`);
        })
        .catch((error) => console.log(error));

    // Initialize Express server as "app":
    const app = express();

    // httpServer handles incoming requests to the Express app:
    const httpServer = http.createServer(app);

    app.disable("x-powered-by");

    // Create an Express "session" to store user session data:
    app.use(
        session({
            name: env.SESSION_COOKIE,
            genid: () => uuid4(),
            cookie: {
                maxAge: 36000 * 24 * 365,
                httpOnly: true,
                sameSite: "lax",
                secure: "auto",
                domain: env.PRODUCTION ? env.DOMAIN_NAME : undefined,
            },
            secret: env.SESSION_SECRET || "secret",
            resave: false,
            saveUninitialized: false,
        })
    );

    // Same ApolloServer initialization as before, plus the drain plugin
    // for our httpServer.
    const apolloServer = new ApolloServer<MyContext>({
        typeDefs,
        resolvers,
        /* context: ({ req, res }: { req: Request; res: Response }) => ({
            req,
            res,
        }), */
        // Apollo Server should drain httpServer, allowing the server to shut down gracefully. */
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });

    // Ensure we wait for our server to start
    await apolloServer.start();

    // Set up our Express middleware to handle CORS, body parsing,
    // and our expressMiddleware function.
    app.use(
        "/",
        cors<cors.CorsRequest>(),
        json(),
        // expressMiddleware accepts the same arguments:
        // an Apollo Server instance and optional configuration options
        expressMiddleware(apolloServer, {
            context: async ({ req }) => ({ token: req.headers.token }),
        })
    );

    // Modified server startup
    await new Promise<void>((resolve) => httpServer.listen({ port: env.PORT }, resolve));
};

server()
    .then(() => {
        console.log(`🚀 Server running on http://localhost:${env.PORT}.`);
    })
    .catch((error) => {
        console.error(`Failed to start the server on ${env.PORT}:`, error);
    });
