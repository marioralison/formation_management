import { Controller, Get, Post, Body, Param, Delete, ParseIntPipe, HttpStatus, Put } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }

  @Put()
  update(@Body() createStudentDto: CreateStudentDto) {
    // return this.studentsService.create(createStudentDto);
  }

  @Get()
  findAll() {
    return this.studentsService.findAll();
  }

  @Get(':numero')
  findOne(@Param('numero',new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) numero: number) {
    return this.studentsService.findOne(numero);
  }

  @Delete(':numero')
  async remove(@Param('numero',new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) numero: number) {
    const etudiantToRemove = await this.studentsService.findOne(numero);
    if (!etudiantToRemove) return;
    return this.studentsService.remove(etudiantToRemove);
  }
}
