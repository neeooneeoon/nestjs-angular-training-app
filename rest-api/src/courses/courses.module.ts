import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CoursesController } from "./courses.controller";
import { CoursesRepository } from "./courses.repository";
import { CoursesSchema } from "./courses.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: "Course", schema: CoursesSchema}
        ])
    ],
    controllers: [
        CoursesController
    ],
    providers: [
        CoursesRepository
    ]
})
export class CoursesModule {

}