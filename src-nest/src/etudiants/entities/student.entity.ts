import { Evaluation } from "src/evaluation/entities/evaluation.entity";
import { Inscription } from "src/inscriptions/entities/inscription.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, ManyToOne, JoinTable  } from "typeorm";


@Entity()
export class Etudiants {
    @PrimaryGeneratedColumn({type: "int"})
    numero: number;

    @Column({type: "varchar",length:255 })
    nom: string;

    @Column({type: "varchar",length: 255 })
    prenom: string;

    @Column({type: "date",nullable: true })
    date_naissance: Date;

    @Column({type: "varchar",length: 255 })
    email: string;

    @OneToMany(() => Evaluation, (evaluation) => evaluation.etudiant)
    evaluations: Evaluation[]

    @OneToMany(() => Inscription, (inscription) => inscription.etudiant)
    inscriptions: Inscription[]
}
