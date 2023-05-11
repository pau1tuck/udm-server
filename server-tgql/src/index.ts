import express from "express";
import session from "express-session";
import { ApolloServer } from "@apollo/server";

const app = express();

app.use(
    session({
        secret: "your secret here",
        resave: false,
        saveUninitialized: true,
    })
);

const server = new ApolloServer({
    typedefs: "",
    resolvers: "",
});

server.applyMiddleware({ app });

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
