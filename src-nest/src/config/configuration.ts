export default () => ({
    port: parseInt(process.env.PORT ?? '3000'),
    database: {
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DABASE_PORT?? '3306'),
        username: process.env.DATABASE_USERNAME ?? '',
        password: process.env.DATABASE_PASSWORD ?? '',
        database: process.env.DATABASE_BD ?? '',

    } 
})