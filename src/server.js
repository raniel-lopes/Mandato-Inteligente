const express = require('express');
const sequelize = require('./config/database'); // Importa a configuração do Sequelize

const app = express();
app.use(express.json()); // Permite que o servidor aceite o JSON no corpo das requisições

// Rota de teste
app.get('/', (req, res) => {
    res.send('Servidor está funcionando!');
});

// Testa a conexão com o banco
sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados bem-sucedida');
    })
    .catch((error) => {
        console.log('Erro ao conectar com o banco de dados:', error);
    });

// Inicia o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});