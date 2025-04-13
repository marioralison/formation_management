import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn, PrimaryGeneratedColumn  } from "typeorm";
import { Formateur } from "../../formateurs/entities/formateur.entity";
import { Etudiants } from "src/etudiants/entities/student.entity";
import { Formations } from "src/formations/entities/formation.entity";



@Entity()
export class Inscription {
    @PrimaryGeneratedColumn({type: "int"})
    numero: number;

    @Column({type: "date"})
    date: Date;

    @ManyToOne(() => Etudiants, (etudiant) => etudiant.inscriptions, {
        cascade: ["update"],
        onDelete: "RESTRICT"
    })
    etudiant: Etudiants;

    @ManyToOne(() => Formations, (formation) => formation.inscriptions, {
        cascade: ["update"],
        onDelete: "RESTRICT"
    })
    formation: Formations;
}
