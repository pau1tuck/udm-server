export default () => ({
    NODE_ENV: process.env.NODE_ENV || "development",
    HOST: process.env.HOST || "localhost",
    PORT: Number(process.env.PORT) || 3000,
    CONCURRENCY: Number(process.env.WEB_CONCURRENCY) || 2,
});
