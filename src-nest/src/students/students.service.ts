import { Injectable, Inject } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { IStudent } from './interface/student.interface';
import { Model } from 'mongoose';

@Injectable()
export class StudentsService {

  constructor(
    @Inject('STUDENT_MODEL')
    private readonly studentModel: Model<IStudent>
  ) {}

  async create(createStudentDto: CreateStudentDto): Promise<IStudent> {
    const createStudent = this.studentModel.create(createStudentDto);
    return createStudent;
  }

  async findAll(): Promise<IStudent[]> {
    return this.studentModel.find().exec();
  }

  async findOne(email: string): Promise<IStudent | null> {
    return this.studentModel.findOne({email: email}).exec();
  }

  async updateOne(email: string, updateStudentDto: UpdateStudentDto) {
    return this.studentModel.updateOne({email: {$eq: email }},{$set: updateStudentDto }).exec();
  }

  async remove(email: string) {
    return this.studentModel.deleteOne({email: email}).exec();
  }
}
