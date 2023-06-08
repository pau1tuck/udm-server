import { Module } from "@nestjs/common";
// ConfigModule exposes a ConfigService to load the dotenv file:
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
    imports: [ConfigModule.forRoot()], // Environment variable key-value pairs are parsed and resolved
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
