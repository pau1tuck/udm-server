declare namespace NodeJS {
    export interface ProcessEnv {
        NODE_ENV: string;
        DEBUG: boolean;
        WEB_CONCURRENCY: number;
        HOST: string;
        PORT: number;
        DOMAIN_NAME: string;
        CORS_ORIGIN: string;
        SESSION_COOKIE: string;
        SESSION_SECRET: string;
        DB_HOST: string;
        DB_PORT: number;
        DB_NAME: string;
        DB_USER: string;
        DB_PASS: string;
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
