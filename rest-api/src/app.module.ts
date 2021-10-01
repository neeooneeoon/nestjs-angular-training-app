import { Module } from "@nestjs/common";
import { CoursesModule } from "./courses/courses.module";
import { MongooseModule } from "@nestjs/mongoose";
import { MONGO_CONNECTION } from "./constants";
import { HelloWorldModule } from "./hello-world/hello-world.module";

@Module({
    imports: [
        HelloWorldModule,
        CoursesModule,
        MongooseModule.forRoot(MONGO_CONNECTION)
    ]
})
export class AppModule {

}