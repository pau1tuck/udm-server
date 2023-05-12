import { MiddlewareFn } from "type-graphql";
import { IContext } from "../types/context.interface.js";

export const isAuthenticated: MiddlewareFn<IContext> = ({ context }, next) => {
    if (!context.req.session.userId) {
        throw new Error("User not authenticated");
    }
    return next();
};
