import { DataSource } from "typeorm";
import { Formations } from "./entities/formation.entity";


export const formationProviders = [
    {
        provide: 'FORMATION_REPOSITORY',
        useFactory: (dataSource: DataSource) => {
            return dataSource.getRepository(Formations)
        },
        inject: ['DATA_SOURCE']
    }
]