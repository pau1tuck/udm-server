import { v4 as uuid } from "uuid";
import { RedisStore, redisClient } from "./redis.config";
import env from "./env.config";

const sessionConfig = {
    name: env.SESSION_NAME,
    genid: () => uuid(),
    store: RedisStore,
    cookie: {
        maxAge: 36000 * 24 * 365,
        httpOnly: true,
        sameSite: "lax" as const,
        secure: "auto" as const,
        domain: env.PRODUCTION ? env.CLIENT_DOMAIN_NAME : undefined,
    },
    secret: env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
};

export default sessionConfig;
