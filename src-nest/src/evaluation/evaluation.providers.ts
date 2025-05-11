import { DataSource } from "typeorm"
import { Evaluation } from "./entities/evaluation.entity"

export const evalutionsProviders = [
    {
        provide: 'EVALUATION_REPOSITORY',
        useFactory: (dataSource: DataSource) => {
            return dataSource.getRepository(Evaluation)
        },
        inject: ['DATA_SOURCE']
    }
]