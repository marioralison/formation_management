import { Inject, Injectable } from '@nestjs/common';
import { CreateFormateurDto } from './dto/create-formateur.dto';
import { Repository } from 'typeorm';
import { Formateur } from './entities/formateur.entity';

@Injectable()
export class FormateursService {

  constructor(
    @Inject('FORMATEUR_REPOSITORY')
    private formateurRepository: Repository<Formateur>
  ) {}

  create(createFormateurDto: CreateFormateurDto): Promise<Formateur> {
    return this.formateurRepository.save(createFormateurDto);
  }

  findAll(): Promise<Formateur[]> {
    return this.formateurRepository.find();
  }

  findOne(numero: number): Promise<Formateur | null> {
    return this.formateurRepository.findOneBy({ numero });
  }

  remove(formateur: Formateur) {
    return this.formateurRepository.remove(formateur);
  }
}
