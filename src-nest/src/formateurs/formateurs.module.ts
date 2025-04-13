import { Module } from '@nestjs/common';
import { FormateursService } from './formateurs.service';
import { FormateursController } from './formateurs.controller';
import { formateurProviders } from './formateurs.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [FormateursController],
  providers: [
    ...formateurProviders,
    FormateursService
  ],
  exports: [FormateursService,...formateurProviders]
})
export class FormateursModule {}


