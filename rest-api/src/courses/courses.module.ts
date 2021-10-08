import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { LessonsSchema } from "./lessons/lessons.schema";
import { CoursesController } from "./courses.controller";
import { CoursesRepository } from "./courses.repository";
import { CoursesSchema } from "./courses.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: "Course", schema: CoursesSchema},
            {name: "Lesson", schema: LessonsSchema}
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