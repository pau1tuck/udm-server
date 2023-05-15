// @/config/database.config.ts
import "reflect-metadata";
import { DataSource } from "typeorm";
import env from "./env.config";
import User from "../entity/user.entity";
import Track from "../entity/track.entity";

const dataSource = new DataSource({
    type: "postgres",
    host: env.DB_HOST,
    port: env.DB_PORT,
    database: env.DB_NAME,
    username: env.DB_USER,
    password: env.DB_PASS,
    synchronize: true,
    logging: !env.PRODUCTION,
    logger: "advanced-console",
    entities: [User, Track],
    migrations: [],
    subscribers: [],
});

export default dataSource;
