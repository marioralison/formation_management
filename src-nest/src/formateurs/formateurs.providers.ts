import { DataSource } from "typeorm";
import { Formateur } from "./entities/formateur.entity";


export const formateurProviders = [
    {
        provide: 'FORMATEUR_REPOSITORY',
        useFactory: (dataSource: DataSource) => {
            return dataSource.getRepository(Formateur)
        },
        inject: ['DATA_SOURCE']
    }
]