import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { etudiantsProviders } from './students.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [
    StudentsController
  ],
  providers: [
    ...etudiantsProviders,
    StudentsService
  ],
})
export class StudentsModule {}
