import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { StudentsModule } from './etudiants/students.module';
import { FormationsModule } from './formations/formations.module';
import { FormateursModule } from './formateurs/formateurs.module';
import { EvaluationModule } from './evaluation/evaluation.module';
import { NotesModule } from './notes/notes.module';
import { InscriptionsModule } from './inscriptions/inscriptions.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
    }),
    StudentsModule,
    FormationsModule,
    FormateursModule,
    EvaluationModule,
    NotesModule,
    InscriptionsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
