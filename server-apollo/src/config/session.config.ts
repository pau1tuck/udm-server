// @/config/session.config.ts
import { v4 as uuid } from "uuid";
import env from "./env.config";

const sessionConfig = {
    name: env.SESSION_NAME,
    genid: () => uuid(),
    cookie: {
        maxAge: 36000 * 24 * 365,
        httpOnly: true,
        sameSite: "lax" as const, // "as const" assertion specifies the exact string value
        secure: "auto" as const,
        domain: env.PRODUCTION ? env.DOMAIN_NAME : undefined,
    },
    secret: env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
};

export default sessionConfig;
