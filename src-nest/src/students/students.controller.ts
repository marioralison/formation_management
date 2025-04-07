import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { IStudent } from './interface/student.interface';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  async addNew(@Body() createStudentDto: CreateStudentDto): Promise<IStudent | null> {
    return this.studentsService.create(createStudentDto);
  }

  @Get()
  async getAll(): Promise<IStudent[]> {
    return this.studentsService.findAll();
  }

  @Get(':email')
  async getOne(@Param('email') email: string): Promise<IStudent | null> {
    return this.studentsService.findOne(email);
  }

  @Patch(':email')
  updateByEmail(@Param('email') email: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentsService.updateOne(email, updateStudentDto);
  }

  @Delete(':email')
  remove(@Param('email') email: string) {
    return this.studentsService.remove(email);
  }
}



