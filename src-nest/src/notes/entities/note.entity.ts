import { Evaluation } from "src/evaluation/entities/evaluation.entity";
import { Entity, Column, ManyToOne, PrimaryGeneratedColumn  } from "typeorm";


@Entity()
export class Note {
    @PrimaryGeneratedColumn({type: "int"})
    id: number;

    @Column({type: "varchar",length: 255 })
    valeur: string;

    @Column({type: "text"})
    commentaire: string;

    @ManyToOne(() => Evaluation, (evaluation) => evaluation.notes,{
        cascade: ["update"],
        onDelete: "RESTRICT"
    })
    evaluation: Evaluation
}
