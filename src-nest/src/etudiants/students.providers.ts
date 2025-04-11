import { DataSource } from "typeorm";
import { Etudiants } from "./entities/student.entity";


export const etudiantsProviders = [
    {
        provide: 'ETUDIANT_REPOSITORY',
        useFactory: (dataSource: DataSource) => {
            return dataSource.getRepository(Etudiants)
        },
        inject: ['DATA_SOURCE']
    }
]