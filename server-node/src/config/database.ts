import path from "path";
import { createConnection } from "typeorm";
import { User } from "../entity/user.entity.js";
import { Track } from "../entity/track.entity.js";

export default {
    type: "postgres",
    url: process.env.DB_URL,
    synchronize: true,
    logging: process.env.DEBUG || true,
    ssl: false,
    entities: [User, Track],
    migrations: ["../migration/**/*.ts"],
    subscribers: ["../subscriber/**/*.ts"],
    cli: {
        migrationsDir: "../migration",
    },
} as Parameters<typeof createConnection>[0];
