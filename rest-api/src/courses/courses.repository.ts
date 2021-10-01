import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { Course } from "../../../shared/course";

@Injectable()
export class CoursesRepository {

    constructor(@InjectModel('Course')
                private courseModel: Model<Course>) {

    }

    async findAll(): Promise<Course[]> {
        return this.courseModel.find();
    }

    async updateCourse(courseId: string, changes: Partial<Course>): Promise<Course> {
        return this.courseModel.findOneAndUpdate({_id: courseId}, changes, {new: true});
    }

    async deleteCourse(courseId: string) {
        return this.courseModel.deleteOne({_id: courseId});
    }

    async addCourse(course: Partial<Course>): Promise<Course> {
        const newCourse = this.courseModel(course);
        await newCourse.save();
        return newCourse.toObject({versionKey: false});
        //return this.courseModel.create(course);
    }

}