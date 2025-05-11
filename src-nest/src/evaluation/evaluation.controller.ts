import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { EvaluationService } from './evaluation.service';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { UpdateEvaluationDto } from './dto/update-evaluation.dto';
import { StudentsService } from 'src/etudiants/students.service';

@Controller('evaluation')
export class EvaluationController {
  constructor(
    private readonly evaluationService: EvaluationService,
    private readonly studentService: StudentsService
  ) {}

  @Post()
  async create(@Query('numero_etudiant',ParseIntPipe) numero_etudiant: number, @Body() createEvaluationDto: Omit<CreateEvaluationDto,"etudiant">) {
    const etudiant = await this.studentService.findOne(numero_etudiant);
    if (!etudiant) return;
    return this.evaluationService.create({...createEvaluationDto,etudiant});
  }

  @Get()
  findAll() {
    return this.evaluationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.evaluationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEvaluationDto: UpdateEvaluationDto) {
    return this.evaluationService.update(+id, updateEvaluationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.evaluationService.remove(+id);
  }
}
