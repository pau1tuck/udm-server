// @/config/env.config.ts
import dotenv from "dotenv";

dotenv.config();

const {
    NAME,
    NODE_ENV,
    WEB_CONCURRENCY,
    DEBUG,
    HOST,
    PORT,
    CLIENT_DOMAIN_NAME,
    SESSION_NAME,
    SESSION_SECRET,
    DB_HOST,
    DB_PORT,
    DB_NAME,
    DB_USER,
    DB_PASS,
    REDIS_HOST,
    REDIS_PORT,
    REDIS_FAMILY,
    REDIS_PASS,
    REDIS_DB,
} = process.env;

const PRODUCTION = NODE_ENV === "production";

const env = {
    NAME: NAME || "server",
    PRODUCTION: Boolean(PRODUCTION) || false,
    WORKERS: Number(WEB_CONCURRENCY) || 1,
    DEBUG: Boolean(DEBUG) || true,
    HOST: HOST || "localhost",
    PORT: Number(PORT) || 5000,
    CLIENT_DOMAIN_NAME: CLIENT_DOMAIN_NAME || "http://localhost:3000",
    SESSION_NAME: SESSION_NAME || "session",
    SESSION_SECRET: SESSION_SECRET || "secret",
    DB_HOST: DB_HOST || "localhost",
    DB_PORT: Number(DB_PORT) || 5432,
    DB_NAME: DB_NAME || "",
    DB_USER: DB_USER || "admin",
    DB_PASS: DB_PASS || "badpassword",
    REDIS_HOST: REDIS_HOST || "localhost",
    REDIS_PORT: Number(REDIS_PORT) || 6379,
    REDIS_FAMILY: Number(REDIS_FAMILY) || 4,
    REDIS_PASS: REDIS_PASS || "",
    REDIS_DB: Number(REDIS_DB) || 0,
};

export default env;
