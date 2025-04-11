export default () => ({
    port: parseInt(process.env.PORT ?? '3000'),
    database: {
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DABASE_PORT?? '3306')
    } 
})