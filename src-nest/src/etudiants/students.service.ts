import { Inject, Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { Repository } from 'typeorm';
import { Etudiants } from './entities/student.entity';

@Injectable()
export class StudentsService {

  constructor(
    @Inject('ETUDIANT_REPOSITORY')
    private readonly etudientRepository: Repository<Etudiants>
  ){}

  create(createStudentDto: CreateStudentDto): Promise<Etudiants> {
    return this.etudientRepository.save(createStudentDto);
  }

  findAll(): Promise<Etudiants[]> {
    return this.etudientRepository.find();
  }

  findOne(numero: number): Promise<Etudiants | null> {
    return this.etudientRepository.findOneBy({ numero });
  }

  remove(etudiant: Etudiants): Promise<Etudiants> {
    return this.etudientRepository.remove(etudiant);
  }
}
