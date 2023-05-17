// @/utils/check-permission.ts
import { NextFunction, Request, Response } from "express";
import { IContext } from "../types/context.interface";

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req.session as IContext["req"]["session"];

    if (!userId) {
        return res.status(401).json({ message: "User not authenticated." });
    }

    next();
    return undefined;
};

const checkRole = (role: string) => (req: Request, res: Response, next: NextFunction) => {
    const { roles } = req.session as IContext["req"]["session"];

    if (!roles.includes(role)) {
        return res.status(401).json({ message: "User not authorized." });
    }

    next();
    return undefined;
};

export const isMember = checkRole("MEMBER");
export const isStaff = checkRole("STAFF");
export const isSuperUser = checkRole("SUPERUSER");
