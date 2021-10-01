import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Course } from "../../../shared/course";
import { CoursesRepository } from "./courses.repository";

@Controller("courses")
export class CoursesController {

    constructor(private coursesDB: CoursesRepository) {

    }

    @Get()
    async findAllCourses(): Promise<Course[]> {
        return this.coursesDB.findAll();
    }

    @Post()
    async createCourse(course: Partial<Course>): Promise<Course> {
        return this.coursesDB.addCourse(course);
    }

    @Put(':courseId')
    async updateCourse(@Param("courseId") courseId: string,
                       @Body() changes: Partial<Course>): Promise<Course> {        
        return this.coursesDB.updateCourse(courseId, changes);
    }

    @Delete(':courseId')
    async deleteCourse(@Param("courseId") courseId: string) {
        return this.coursesDB.deleteCourse(courseId);
    }

}