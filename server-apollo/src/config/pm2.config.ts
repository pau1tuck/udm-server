import { StartOptions } from "pm2";
import env from "./env.config";

const pm2Config: StartOptions = {
    name: env.NAME,
    script: "dist/server.js",
    exec_mode: "cluster",
    instances: env.WORKERS,
    env: {
        PORT: env.PORT.toString(),
    },
};

export default pm2Config;
