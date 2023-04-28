import connectRedis from "connect-redis";
import Redis from "ioredis";
import session from "express-session";

export const RedisStore = connectRedis(session);
export const redisClient = new Redis({
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
    family: Number(process.env.REDIS_FAMILY),
    password: process.env.REDIS_PASS,
    db: Number(process.env.REDIS_DB),
    enableReadyCheck: true,
});
