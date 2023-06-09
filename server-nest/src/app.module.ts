import { Module } from "@nestjs/common";
// ConfigModule exposes a ConfigService to load the dotenv file:
import { ConfigModule } from "@nestjs/config";
import { AppController } from "~/app.controller";
import { AppService } from "~/app.service";
import database from "~/config/database.config";
import http from "~/config/http.config";

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [http, database],
            isGlobal: true,
            expandVariables: true,
            cache: true,
        }),
    ], // Environment variable key-value pairs are parsed and resolved
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
