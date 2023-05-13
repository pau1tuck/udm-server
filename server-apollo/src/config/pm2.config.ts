import { StartOptions } from "pm2";
import env from "./env.config";

const pm2Options: StartOptions = {
    name: "udm-server-apollo",
    script: "dist/index.js",
    exec_mode: "cluster",
    instances: env.WORKERS,
    env: {
        PORT: env.PORT.toString(), // Convert PORT to a string
    },
};

export default pm2Options;
