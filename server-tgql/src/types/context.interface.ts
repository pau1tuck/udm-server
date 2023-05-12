import { Request, Response } from "express";
import { Redis } from "ioredis";
import { createUserDataLoader } from "../middleware/create-user-dataloader";

export interface IContext {
    req: Request & {
        session: { userId?: number; roles?: string[] };
    };
    res: Response;
    redis: Redis;
    payload?: { userId: string; roles: string[] };
    userLoader: ReturnType<typeof createUserDataLoader>;
}
