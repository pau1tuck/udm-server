// @/config/redis.config.ts
import Redis from "ioredis";
import ConnectRedis from "connect-redis";
import env from "./env.config";

export const redisClient = new Redis({
    host: env.REDIS_HOST,
    port: env.REDIS_PORT,
    name: env.REDIS_DB_NAME,
    username: env.REDIS_USER,
    password: env.REDIS_PASS,
    // family: env.REDIS_FAMILY,
    // db: env.REDIS_DB,
    enableReadyCheck: true,
});

export const RedisStore = new ConnectRedis({
    client: redisClient,
    disableTouch: true,
    disableTTL: true,
});
