import { Inject, Injectable } from '@nestjs/common';
import { CreateInscriptionDto } from './dto/create-inscription.dto';
import { Repository } from 'typeorm';
import { Inscription } from './entities/inscription.entity';

@Injectable()
export class InscriptionsService {

  constructor(
    @Inject('INSCRIPTION_REPOSITORY')
    private readonly insciptionRepository: Repository<Inscription>
  ) {}

  create(createInscriptionDto: CreateInscriptionDto): Promise<Inscription> {
    return this.insciptionRepository.save(createInscriptionDto);
  }

  findAll(): Promise<Inscription[]> {
    return this.insciptionRepository.find({
      relations: {
        etudiant: true,
        formation: true
      }
    });
  }

  findOne(numero: number): Promise<Inscription | null> {
    return this.insciptionRepository.findOne({
      where: { numero },
      relations: {
        etudiant: true,
        formation: true
      }
    });
  }

  remove(inscription: Inscription) {
    return this.insciptionRepository.remove(inscription);
  }
}
