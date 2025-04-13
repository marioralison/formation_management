import { Inject, Injectable } from '@nestjs/common';
import { CreateFormationDto } from './dto/create-formation.dto';
import { UpdateFormationDto } from './dto/update-formation.dto';
import { Repository } from 'typeorm';
import { Formations } from './entities/formation.entity';

@Injectable()
export class FormationsService {

  constructor(
    @Inject('FORMATION_REPOSITORY')
    private formationRepository: Repository<Formations>
  ) {}

  create(createFormationDto: CreateFormationDto) {
    return this.formationRepository.save(createFormationDto);
  }

  findAll(): Promise<Formations[]> {
    return this.formationRepository.find({
      relations: {
        formateur: true
      }
    });
  }

  findOne(code: string): Promise<Formations | null> {
    return this.formationRepository.findOne({
      where: { code },
      relations: { formateur: true }
    })
  }

  remove(formations: Formations) {
    return this.formationRepository.remove(formations);
  }
}
