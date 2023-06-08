export default () => ({
    database: {
        host: process.env.DB_HOST || "127.0.0.1",
        port: Number(process.env.DB_PORT) || 5432,
        name: process.env.DB_NAME || "test",
        user: process.env.DB_USER || "postgres",
        password: process.env.DB_PASS || "postgres",
    },
});
