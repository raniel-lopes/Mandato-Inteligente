const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cidadao = sequelize.define('Cidadao', {
    nomeCompleto: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apelido: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    celular: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefoneFixo: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    redeSocial: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    ocupacao: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    observacoes: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    tags: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    dataNascimento: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    cep: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    bairro: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    numero: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    complemento: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    regiao: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    lider: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    autoridade: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    potencialVotos: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    contatoFrequente: {
        type: DataTypes.INTEGER, // 'X' dias para entrar em contato
        allowNull: true,
    },
    indicadoPor: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    timestamps: true, // Adiciona createdAt e updatedAt
    tableName: 'cidadaos', // Nome da tabela no banco de dados
});

module.exports = Cidadao;