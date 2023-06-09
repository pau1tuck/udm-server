import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "~/app.module";

async function bootstrap() {
    try {
        const app = await NestFactory.create(AppModule);

        const config = app.get(ConfigService);

        const HOST = config.get<string>("HOST") || "localhost";
        const PORT = config.get<number>("PORT") || 3000;

        await app.listen(PORT);
        console.log(`\nServer running on ${HOST}:${PORT}`);
    } catch (error) {
        console.log("Error while starting Nest.js server:", error);
        process.exit(1);
    }
}
bootstrap();
