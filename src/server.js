const express = require('express');
const sequelize = require('./config/database');

const app = express();
app.use(express.json());

const eleitorRoutes = require('./routes/eleitorRoutes');
app.use('/api', eleitorRoutes);

app.get('/', (req, res) => {
    res.send('Servidor está funcionando!');
});

// Testa a conexão com o banco de dados
sequelize.authenticate()
    .then(() => {
        console.log('✅ Conexão com o banco de dados bem-sucedida!');

        // Sincroniza as tabelas com o banco de dados
        return sequelize.sync();
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
