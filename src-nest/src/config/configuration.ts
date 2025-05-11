export default () => {
    if (!process.env.ORIGIN ) throw new Error('ORIGIN not definied in .env');
    if (!process.env.DATABASE_HOST) throw new Error('DATABASE_HOST not definied in .env');
    if (!process.env.DABASE_PORT) throw new Error('DABASE_PORT not definied in .env');
    if (!process.env.DATABASE_USERNAME) throw new Error('DATABASE_USERNAME not definied in .env');
    if (!process.env.DATABASE_PASSWORD) throw new Error('DATABASE_PASSWORD not definied in .env');
    if (!process.env.DATABASE_BD) throw new Error('DATABASE_BD not definied in .env');

    return {
        port: parseInt(process.env.PORT ?? '3000'),
        origin: process.env.ORIGIN ?? 'http://localhost:5173',
        database: {
            host: process.env.DATABASE_HOST,
            port: parseInt(process.env.DABASE_PORT?? '3306'),
            username: process.env.DATABASE_USERNAME ?? '',
            password: process.env.DATABASE_PASSWORD ?? '',
            database: process.env.DATABASE_BD ?? '',
        } 
    }
} 


    
    
