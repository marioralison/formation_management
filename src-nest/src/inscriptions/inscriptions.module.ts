import { Module } from '@nestjs/common';
import { InscriptionsService } from './inscriptions.service';
import { InscriptionsController } from './inscriptions.controller';
import { inscriptionProviders } from './inscription.provider';
import { DatabaseModule } from 'src/database/database.module';
import { FormationsModule } from 'src/formations/formations.module';
import { StudentsModule } from 'src/etudiants/students.module';

@Module({
  imports: [DatabaseModule,FormationsModule,StudentsModule],
  controllers: [InscriptionsController],
  providers: [InscriptionsService,...inscriptionProviders],
})
export class InscriptionsModule {}
