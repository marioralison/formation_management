import { Module } from '@nestjs/common';
import { FormationsService } from './formations.service';
import { FormationsController } from './formations.controller';
import { FormateursModule } from 'src/formateurs/formateurs.module';
import { formationProviders } from './formations.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [FormateursModule,DatabaseModule],
  controllers: [FormationsController],
  providers: [FormationsService,...formationProviders],
  exports: [FormationsService,...formationProviders]
})
export class FormationsModule {}
