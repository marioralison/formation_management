import { Formations } from "../../formations/entities/formation.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinTable  } from "typeorm";


@Entity()
export class Formateur {
    @PrimaryGeneratedColumn({type: "int"})
    numero: number;
    
    @Column({type: "varchar",length: 255 })
    nom: string;

    @Column({type: "varchar",length: 255 })
    prenom: string;

    @Column({type:"varchar",length: 255,nullable: true })
    specialite: string;

    @Column({type: "varchar",length: 255 })
    email: string

    @Column({type: "text",nullable: true})
    experience: string;

    @OneToMany(() => Formations,(formations) => formations.formateur)
    formations: Formations[];
}
