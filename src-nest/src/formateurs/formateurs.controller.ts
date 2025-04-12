import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, HttpStatus } from '@nestjs/common';
import { FormateursService } from './formateurs.service';
import { CreateFormateurDto } from './dto/create-formateur.dto';
import { Formateur } from './entities/formateur.entity';

@Controller('formateurs')
export class FormateursController {
  constructor(private readonly formateursService: FormateursService) {}

  @Post()
  create(@Body() createFormateurDto: CreateFormateurDto): Promise<Formateur> {
    return this.formateursService.create(createFormateurDto);
  }

  @Get()
  findAll(): Promise<Formateur[]> {
    return this.formateursService.findAll();
  }

  @Get(':numero')
  findOne(@Param('numero', new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) numero: number) {
    return this.formateursService.findOne(+numero);
  }

  @Delete(':numero')
  async remove(@Param('numero',new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) numero: number) {
    const formateurToRemove = await this.formateursService.findOne(numero)
    if (!formateurToRemove) return;
    return this.formateursService.remove(formateurToRemove);
  }
}
