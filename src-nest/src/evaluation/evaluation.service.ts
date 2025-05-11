import { Inject, Injectable } from '@nestjs/common';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { UpdateEvaluationDto } from './dto/update-evaluation.dto';
import { Evaluation } from './entities/evaluation.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EvaluationService {

  constructor(
    @Inject('EVALUATION_REPOSITORY')
    private readonly evaluationRepository: Repository<Evaluation>
  ){}

  create(createEvaluationDto: CreateEvaluationDto) {
    return this.evaluationRepository.save(createEvaluationDto);
  }

  findAll() {
    return this.evaluationRepository.find({
      relations: {
        etudiant: true
      }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} evaluation`;
  }

  update(id: number, updateEvaluationDto: UpdateEvaluationDto) {
    return `This action updates a #${id} evaluation`;
  }

  remove(id: number) {
    return `This action removes a #${id} evaluation`;
  }
}
