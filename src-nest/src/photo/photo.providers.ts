import { DataSource } from "typeorm";
import { Photo } from "./photo.entity";


export const photoProviders = [
    {
        provide: 'PHOTO_REPOSITORY',
        useFactory: (dataSource: DataSource) => {
            return dataSource.getRepository(Photo)
        },
        inject: ['DATA_SOURCE']
    }
]