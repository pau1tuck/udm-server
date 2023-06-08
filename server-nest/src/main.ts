import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

const HOST = process.env.NODE_ENV === "development" ? "localhost" : "0.0.0.0";
const PORT = process.env.PORT || 5000;

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(5000);
    console.log(`\nServer running on ${HOST}:${PORT}`);
}
bootstrap();
