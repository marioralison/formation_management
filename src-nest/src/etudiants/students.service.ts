import { Inject, Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Repository } from 'typeorm';
import { Etudiants } from './entities/student.entity';

@Injectable()
export class StudentsService {

  constructor(
    @Inject('ETUDIANT_REPOSITORY')
    private readonly etudientRepository: Repository<Etudiants>
  ){}

  create(createStudentDto: CreateStudentDto) {
    console.log(createStudentDto);
    
    return 'This action adds a new student';
  }

  findAll(): Promise<Etudiants[]> {
    return this.etudientRepository.find();
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
