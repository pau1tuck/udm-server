// @/config/env.config.ts
import dotenv from "dotenv";

dotenv.config();

const {
    NODE_ENV,
    WEB_CONCURRENCY,
    DEBUG,
    HOST,
    PORT,
    DOMAIN_NAME,
    CORS_ORIGIN,
    SESSION_NAME,
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
    PRODUCTION: Boolean(PRODUCTION) || false,
    WORKERS: Number(WEB_CONCURRENCY) || 1,
    DEBUG: Boolean(DEBUG) || true,
    HOST: HOST || "localhost",
    PORT: Number(PORT) || 5000,
    DOMAIN_NAME,
    CORS_ORIGIN: CORS_ORIGIN || "http://localhost:3000",
    SESSION_NAME: SESSION_NAME || "session",
    SESSION_SECRET: SESSION_SECRET || "secret",
    DB_HOST: DB_HOST || "localhost",
    DB_PORT: Number(DB_PORT) || 5432,
    DB_NAME: DB_NAME || "",
    DB_USER: DB_USER || "admin",
    DB_PASS: DB_PASS || "badpassword",
    REDIS_HOST: REDIS_HOST || "localhost",
    REDIS_PORT: Number(REDIS_PORT) || 6379,
};

export default env;
