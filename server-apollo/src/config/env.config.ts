// @/config/env.config.ts
import dotenv from "dotenv";

dotenv.config();

const {
    NODE_ENV,
    DEBUG,
    HOST,
    PORT,
    DOMAIN_NAME,
    CORS_ORIGIN,
    SESSION_COOKIE,
    SESSION_SECRET,
    DB_HOST,
    DB_PORT,
    DB_NAME,
    DB_USER,
    DB_PASS,
    REDIS_HOST,
    REDIS_PORT,
} = process.env;

const PRODUCTION = NODE_ENV === "production";

const env = {
    PRODUCTION: Boolean(PRODUCTION),
    DEBUG: Boolean(DEBUG),
    HOST,
    PORT: Number(PORT),
    DOMAIN_NAME,
    CORS_ORIGIN,
    SESSION_COOKIE,
    SESSION_SECRET,
    DB_HOST,
    DB_PORT: Number(DB_PORT),
    DB_NAME,
    DB_USER,
    DB_PASS,
    REDIS_HOST,
    REDIS_PORT: Number(REDIS_PORT),
};

export default env;
