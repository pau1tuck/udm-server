import { AppModule } from "@/app.module";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config = app.get(ConfigService);

    const HOST = config.get<string>("HOST") || "localhost";
    const PORT = config.get<number>("PORT") || 3000;

    await app.listen(PORT);
    console.log(`\nServer running on ${HOST}:${PORT}`);
}
bootstrap();
