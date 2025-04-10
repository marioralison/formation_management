import { DataSource } from "typeorm";
import User from "../users/entities/user.entity";
import { Photo } from "src/photo/photo.entity";


export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'mysql',
                host: 'sql8.freesqldatabase.com',
                port: 3306,
                username: 'sql8772453',
                password: 'XxSMpbjHax',
                database: 'sql8772453',
                entities: [User,Photo],
                synchronize: true
            })
            return dataSource.initialize();
        }
    }
]