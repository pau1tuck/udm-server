// @/config/typeorm.config.ts
import "reflect-metadata";
import { DataSource } from "typeorm";
import env from "./env.config";

const dataSource = new DataSource({
    type: "postgres",
    host: env.DB_HOST,
    port: env.DB_PORT,
    database: env.DB_NAME,
    username: env.DB_USER,
    password: env.DB_PASS,
    synchronize: true,
    logging: !env.PRODUCTION,
    entities: [],
    migrations: [],
    subscribers: [],
});

export default dataSource;
