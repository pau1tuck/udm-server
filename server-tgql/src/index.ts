import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express, { Request, Response } from "express";
import session from "express-session";
import http from "http";
import cors from "cors";
import { json } from "body-parser";

interface MyContext {
    token?: string;
}

const PRODUCTION = process.env.NODE_ENV === "production";

const server = async () => {
    const app = express();
    // Our httpServer handles incoming requests to our Express app.
    // Below, we tell Apollo Server to "drain" this httpServer,
    // enabling our servers to shut down gracefully.
    const httpServer = http.createServer(app);

    app.disable("x-powered-by");

    app.use(
        session({
            secret: "your secret here",
            resave: false,
            saveUninitialized: true,
        })
    );

    // Same ApolloServer initialization as before, plus the drain plugin
    // for our httpServer.
    const apolloServer = new ApolloServer<MyContext>({
        typeDefs,
        resolvers,
        context: {},
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
    await new Promise<void>((resolve) => httpServer.listen({ port: 5000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:5000/`);
};
