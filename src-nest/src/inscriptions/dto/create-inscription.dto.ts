import { IsISO8601 } from "class-validator";
import { Etudiants } from "src/etudiants/entities/student.entity";
import { Formations } from "src/formations/entities/formation.entity";

export class CreateInscriptionDto {

    @IsISO8601() // (ex. 2002-11-01)
    date: Date | string;

    etudiant: Etudiants;
    formation: Formations;
}
