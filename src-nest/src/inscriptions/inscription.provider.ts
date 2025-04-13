import { DataSource } from "typeorm";
import { Inscription } from "./entities/inscription.entity";


export const inscriptionProviders = [
    {
        provide: 'INSCRIPTION_REPOSITORY',
        useFactory: (dataSource: DataSource) => {
            return dataSource.getRepository(Inscription)
        },
        inject: ['DATA_SOURCE']
    }
]