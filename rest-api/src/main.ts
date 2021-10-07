import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { FallbackExceptionFilter } from "./filters/fallback.filter";
import { HttpExceptionFilter } from "./filters/http.filter";
import * as mongoose from "mongoose";
import { ValidationPipe } from "@nestjs/common";

mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix("api");
    app.useGlobalFilters(new FallbackExceptionFilter(), new HttpExceptionFilter());
    app.useGlobalPipes(new ValidationPipe({
        skipMissingProperties: true
    }));
    await app.listen(9000);
}

bootstrap();