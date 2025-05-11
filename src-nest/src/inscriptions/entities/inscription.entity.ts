import { Entity, Column, ManyToOne, PrimaryGeneratedColumn  } from "typeorm";
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
