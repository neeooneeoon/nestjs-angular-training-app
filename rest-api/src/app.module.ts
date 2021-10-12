import { Module } from "@nestjs/common";
import { CoursesModule } from "./courses/courses.module";
import { MongooseModule } from "@nestjs/mongoose";
import { MONGO_CONNECTION } from "./constants";
import { HelloWorldModule } from "./hello-world/hello-world.module";
import { AuthModule } from "./auth/auth.module";

@Module({
    imports: [
        HelloWorldModule,
        CoursesModule,
        AuthModule,
        MongooseModule.forRoot(MONGO_CONNECTION)
    ]
})
export class AppModule {

}