const config = require('./index')
// console.log( {
//     "username": config.DB_USERNAME,
//     "password": config.DB_PASSWORD,
//     "database": config.DB_DATABASE,
//     "host": config.DB_HOST,
//     "dialect": config.DB_DIALECT,
//     "port": config.DB_PORT
// })
module.exports = {
    "development": {
        "username": config.DB_USERNAME,
        "password": config.DB_PASSWORD,
        "database": config.DB_DATABASE,
        "host": config.DB_HOST,
        "dialect": config.DB_DIALECT,
        "port": config.DB_PORT
    },
    "test": {
        "username": "root",
        "password": "Colaza875@",
        "database": "expressdb",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "port": "3306"
    },
    "production": {
        "username": config.DB_USERNAME_PROD,
        "password": config.DB_PASSWORD_PROD,
        "database": config.DB_DATABASE_PROD,
        "host": config.DB_HOST_PROD,
        "dialect": config.DB_DIALECT_PROD,
        "port": config.DB_PORT_PROD
    }
}
