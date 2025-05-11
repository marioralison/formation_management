import { Module } from '@nestjs/common';
import { EvaluationService } from './evaluation.service';
import { EvaluationController } from './evaluation.controller';
import { StudentsModule } from 'src/etudiants/students.module';
import { DatabaseModule } from 'src/database/database.module';
import { evalutionsProviders } from './evaluation.providers';

@Module({
  imports: [StudentsModule,DatabaseModule],
  controllers: [EvaluationController],
  providers: [EvaluationService,...evalutionsProviders],
})
export class EvaluationModule {}
