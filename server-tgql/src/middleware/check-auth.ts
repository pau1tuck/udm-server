import { AuthChecker } from "graphql";
import { IContext } from "../types/context.interface.js";

export const authChecker: AuthChecker<IContext> = ({ context }, roles) => {
    if (roles.length === 0) {
        return context.req.session.userId !== undefined;
    }

    if (!context.req.session.userId) {
        return false;
    }
    if (context.req.session.roles?.some((role: string) => roles.includes(role))) {
        return true;
    }
    return false;
};
