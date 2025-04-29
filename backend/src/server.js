// backend/src/server.js

const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const eleitorRoutes = require('./routes/eleitorRoutes');

const app = express();

// Libera o frontend (React) para se comunicar com o backend
app.use(cors({
    origin: 'http://localhost:5173', // Altere para o endereço do seu frontend se necessário
    credentials: true
}));

// Middleware para ler JSON do corpo da requisição
app.use(express.json());

// Rotas principais do sistema
app.use('/api', eleitorRoutes);

// Rota teste
app.get('/', (req, res) => {
    res.send('Servidor está funcionando!');
});

// Testa a conexão com o banco de dados e sincroniza as tabelas
sequelize.authenticate()
    .then(() => {
        console.log('✅ Conexão com o banco de dados bem-sucedida!');
        return sequelize.sync(); // Sincroniza modelos com o banco
    })
    .then(() => {
        console.log('✅ Tabelas sincronizadas com o banco de dados!');
    })
    .catch((error) => {
        console.error('❌ Erro ao conectar ou sincronizar com o banco de dados:', error);
    });

// Inicia o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
