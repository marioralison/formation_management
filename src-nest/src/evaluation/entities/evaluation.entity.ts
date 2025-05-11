import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Etudiants } from "src/etudiants/entities/student.entity";


@Entity()
export class Evaluation {
    @PrimaryGeneratedColumn({type: "int"})
    id: number;

    @Column({type: "varchar", length: 255 })
    type: string;

    @Column({type: "datetime"})
    date_limite: Date;

    @ManyToOne(() => Etudiants, (etudiants) => etudiants.evaluations,{
        cascade: ["update"],
        onDelete: "RESTRICT"
    })
    etudiant: Etudiants;

    @Column()
    notes: string;
}
