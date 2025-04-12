import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn, OneToMany, JoinTable  } from "typeorm";
import { Formateur } from "../../formateurs/entities/formateur.entity";
import { Inscription } from "src/inscriptions/entities/inscription.entity";



@Entity()
export class Formations {
    @PrimaryColumn({type: "char",length: 6})
    code: string;

    @Column({type: "varchar",length: 255 })
    intitule: string;

    @Column({type: "date"})
    date_debut: Date;

    @Column({type: "text"})
    module: string;

    // La clé étrangère est toujours située du côté Many
    @ManyToOne(() => Formateur, (formateur) => formateur.formations,{
        cascade: ["update"],
        onDelete: "RESTRICT"
    })
    formateur: Formateur

    @OneToMany(() => Inscription, (inscription) => inscription.formation)
    inscriptions: Inscription[]
}


