require('dotenv').config(); //Carrega as variáveis do .env

const { Sequelize } = require('sequelize');

// Cria uma instância do Sequelize com as configurações do .env
const sequelize = new Sequelize({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dialect: 'postgres', // Indica que está usando o PostgreSQL
});

module.exports = sequelize;

