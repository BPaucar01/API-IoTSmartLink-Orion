import { Sequelize } from "sequelize";
import {usuarioModel} from './src/models/usuarioModel.js';
import {
    DB_PORT,
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE,
    DB_CLIENT
} from './src/config.js';

export const database = new Sequelize({
    dialect: 'mysql',
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    logging: false,

})


