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

  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
