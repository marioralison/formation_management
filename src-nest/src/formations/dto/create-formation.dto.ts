import { IsInt, IsISO8601, IsString, MaxLength } from "class-validator";
import { Formateur } from "src/formateurs/entities/formateur.entity";

export class CreateFormationDto {
    
    @MaxLength(6,{message: 'code is too long. max lentgh is $constraint1 characters'})
    code: string;

    @MaxLength(255,{message: 'intitule is too long. max lentgh is $constraint1 characters'})
    intitule: string;

    @IsString()
    module: string;

    @IsISO8601() // (ex. 2002-11-01)
    date_debut: string | Date;

    formateur: Formateur;
}
