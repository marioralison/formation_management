import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { studentProviders } from './students.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [StudentsController],
  providers: [StudentsService,...studentProviders],
})
export class StudentsModule {}
