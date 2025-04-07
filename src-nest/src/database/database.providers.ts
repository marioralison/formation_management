import * as mongoose from "mongoose";

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async (): Promise<typeof mongoose> => 
            await mongoose.connect(process.env.DATABASE_URL_MONGODB ?? "mongodb://127.0.0.1:27017/formation_management"), 
    }
]