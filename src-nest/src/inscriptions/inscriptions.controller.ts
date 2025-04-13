import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe, HttpStatus } from '@nestjs/common';
import { InscriptionsService } from './inscriptions.service';
import { CreateInscriptionDto } from './dto/create-inscription.dto';
import { StudentsService } from 'src/etudiants/students.service';
import { FormationsService } from 'src/formations/formations.service';
import { Etudiants } from 'src/etudiants/entities/student.entity';
import { Formations } from 'src/formations/entities/formation.entity';

@Controller('inscriptions')
export class InscriptionsController {
  constructor(
    private readonly inscriptionsService: InscriptionsService,
    private readonly etudiantService: StudentsService,
    private readonly formationService: FormationsService
  ) {}

  @Post()
  async create(
    @Query('numero_etudiant') numero_etudiant: number,
    @Query('code_formation') code_formation: string,
    @Body() createInscriptionDto: Pick<CreateInscriptionDto,"date">
  ) {
    const student: Etudiants | null = await this.etudiantService.findOne(numero_etudiant);
    const formation: Formations | null = await this.formationService.findOne(code_formation);
    if (!formation || !student) return;
    return this.inscriptionsService.create({...createInscriptionDto,etudiant: student,formation});
  }

  @Get()
  findAll() {
    return this.inscriptionsService.findAll();
  }

  @Get(':numero')
  findOne(@Param('numero',new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) numero: number) {
    return this.inscriptionsService.findOne(numero);
  }

  @Delete(':numero')
  async remove(@Param('numero') numero: number) {
    const insciptionToRemove = await this.inscriptionsService.findOne(numero);
    if (!insciptionToRemove) return;
    return this.inscriptionsService.remove(insciptionToRemove);
  }
}
