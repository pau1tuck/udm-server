import { Request, Response } from "express";
import { Redis } from "ioredis";

export interface IContext {
    req: Request & {
        session: { userId: string; roles: string[] };
    };
    res: Response;
    redis: Redis;
    payload?: { userId: string; roles: string[] };
}
