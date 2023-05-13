import Redis from "ioredis";
import session from "express-session";
import ConnectRedis from "connect-redis";
import env from "./env.config";

export const redisClient = new Redis({
    host: env.REDIS_HOST,
    port: env.REDIS_PORT,
    family: env.REDIS_FAMILY,
    password: env.REDIS_PASS,
    db: env.REDIS_DB,
    enableReadyCheck: true,
});

export const RedisStore = new ConnectRedis({ client: redisClient });
