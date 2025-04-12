import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { FormationsService } from './formations.service';
import { CreateFormationDto } from './dto/create-formation.dto';
import { UpdateFormationDto } from './dto/update-formation.dto';
import { FormateursService } from 'src/formateurs/formateurs.service';

@Controller('formations')
export class FormationsController {
  constructor(
    private readonly formationsService: FormationsService,
    private readonly formateurService: FormateursService
  ) {}

  @Post()
  async create(@Query('numero_formateur',ParseIntPipe) numeroFormateur: number,@Body() createFormationDto: Omit<CreateFormationDto,"formateur" | "code">) {
    try {
      const formateur = await this.formateurService.findOne(numeroFormateur);
      if (!formateur) return;
      const code: string = Math.round(Math.random() * 1000000) + ""
      const newFormation: CreateFormationDto = {...createFormationDto,formateur,code}
      return this.formationsService.create(newFormation);
    } catch (error) {
      throw error;
    }
  }

  @Get()
  findAll() {
    return this.formationsService.findAll();
  }

  @Get(':code')
  findOne(@Param('code') code: string) {
    return this.formationsService.findOne(code);
  }

  @Patch()
  update(@Body() createFormationDto: CreateFormationDto) {
      return this.formationsService.create(createFormationDto);
  }

  @Delete(':code')
  async remove(@Param('code') code: string) {
    const formationsToRemove = await this.formationsService.findOne(code);
    if (!formationsToRemove) return;
    return this.formationsService.remove(formationsToRemove);
  }
}
