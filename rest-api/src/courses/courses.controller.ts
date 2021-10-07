import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    Get,
    HttpException,
    Param,
    ParseIntPipe,
    Post,
    Put,
    UseFilters,
} from '@nestjs/common';
import { HttpExceptionFilter } from '../filters/http.filter';
import { Course } from '../../../shared/course';
import { CoursesRepository } from './courses.repository';
import { ToIntegerPipe } from '../pipes/to-integer.pipe';

@Controller('courses')
export class CoursesController {
    constructor(private coursesDB: CoursesRepository) { }

    @Get()
    async findAllCourses(): Promise<Course[]> {
        return this.coursesDB.findAll();
    }

    @Post()
    async createCourse(@Body() course: Partial<Course>): Promise<Course> {
        return this.coursesDB.addCourse(course);
    }

    @Put(':courseId')
    async updateCourse(
        @Param('courseId') courseId: string,
        @Body("seqNo", ParseIntPipe) seqNo: number,
        @Body() changes: Partial<Course>,
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
