import { IsISO8601, IsString } from "class-validator";
import { Etudiants } from "src/etudiants/entities/student.entity";

export class CreateEvaluationDto {
    

    @IsString()
    type: string;

    @IsISO8601()
    date_limite: Date | string;

    @IsString()
    notes: string;

    etudiant: Etudiants;
}


