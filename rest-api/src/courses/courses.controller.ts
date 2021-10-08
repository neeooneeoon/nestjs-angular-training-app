import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    Get,
    HttpException,
    NotFoundException,
    Param,
    ParseIntPipe,
    Post,
    Put,
    UseFilters,
} from '@nestjs/common';
import { HttpExceptionFilter } from '../filters/http.filter';
import { Course } from '../../../shared/course';
import { CoursesRepository } from './courses.repository';

@Controller('courses')
export class CoursesController {
    constructor(private coursesDB: CoursesRepository) { }

    @Get()
    async findAllCourses(): Promise<Course[]> {
        return this.coursesDB.findAll();
    }

    @Get(":courseUrl")
    async findCourseByUrl(@Param("courseUrl") courseUrl:string): Promise<Course> {
        const course = this.coursesDB.findCourseByUrl(courseUrl);
        if (!course) {
            throw new NotFoundException("Could not find course for url" + courseUrl);
        }
        return course;
    }

    @Post()
    async createCourse(@Body() course: Course): Promise<Course> {
        return this.coursesDB.addCourse(course);
    }

    @Put(':courseId')
    async updateCourse(
        @Param('courseId') courseId: string,
        @Body() changes: Course,
    ): Promise<Course> {
        if (changes._id) {
            throw new BadRequestException("Can't update course id");
        }
        return this.coursesDB.updateCourse(courseId, changes);
    }

    @Delete(':courseId')
    async deleteCourse(@Param('courseId') courseId: string) {
        return this.coursesDB.deleteCourse(courseId);
    }
}
