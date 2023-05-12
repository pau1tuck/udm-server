declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: string;
    DEBUG: boolean;
    WEB_CONCURRENCY: number;
    CORS_ORIGIN: string;
    HOST: string;
    PORT: number;
    SESSION_COOKIE: string;
    SESSION_SECRET: string;
    DB_URL: string;
    DB_HOST: string;
    DB_PORT: number;
    REDIS_HOST: string;
    REDIS_PORT: number;
    REDIS_FAMILY: number;
    REDIS_PASS: string;
    REDIS_DB: number;
    SMTP_HOST: string;
    SMTP_PORT: number;
    SMTP_USER: string;
    SMTP_PASS: string;
    TRACKS_CACHE_KEY: string;
  }
}
