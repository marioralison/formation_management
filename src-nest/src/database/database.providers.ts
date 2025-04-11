import { DataSource } from "typeorm";
import  Configuration  from "../config/configuration"
import { Etudiants } from "src/etudiants/entities/student.entity";
import { Evaluation } from "src/evaluation/entities/evaluation.entity";
import { Formateur } from "src/formateurs/entities/formateur.entity";
import { Formations } from "src/formations/entities/formation.entity";
import { Inscription } from "src/inscriptions/entities/inscription.entity";
import { Note } from "src/notes/entities/note.entity";


export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'mysql',
                host: Configuration().database.host,
                port: Configuration().database.port,
                username: Configuration().database.username,
                password: Configuration().database.password,
                database: Configuration().database.database,
                entities: [
                    Etudiants,
                    Evaluation,
                    Formateur,
                    Formations,
                    Inscription,
                    Note
                ],
                synchronize: true
            })
            return dataSource.initialize();
        }
    }
]