/**
 * Config Database
 * @author João Ponte
 * @type {{password: string, database: string, dialect: string, host: string, pool: {min: number, max: number, idle: number, acquire: number}, define: {timestamps: boolean, underscored: boolean}, operatorsAliases: number, logging: boolean, username: string}}
 */
module.exports = {
    host: process.env.MYSQL_HOST,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    dialect: process.env.MYSQL_DIALECT,
    operatorsAliases: parseInt(process.env.MYSQL_OPERATORALIASES, 10),
    pool: {
        max: parseInt(process.env.MYSQL_MAX, 10),
        min: parseInt(process.env.MYSQL_MIN, 10),
        acquire: parseInt(process.env.MYSQL_ACQUIRE, 10),
        idle: parseInt(process.env.MYSQL_IDLE, 10)
    },
    define: {
        timestamps: true,
        underscored: true
    },
    logging: Boolean(parseInt(process.env.SEQUELIZE_LOG)) ?? false, // disable logging; default: console.log
};