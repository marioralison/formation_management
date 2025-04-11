import { Module } from '@nestjs/common';
import { FormateursService } from './formateurs.service';
import { FormateursController } from './formateurs.controller';

@Module({
  controllers: [FormateursController],
  providers: [FormateursService],
})
export class FormateursModule {}
