const { format } = require('sequelize/lib/utils');
const Cidadao = require('../models/Cidadao');

// Função auxiliar para formatar o número de celular
function formatarCelular(numero) {
    const digits = numero.replace(/\D/g, ''); // Remove tudo que não for número
    if (digits.length === 11) {
        return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
    }
    return numero; // Retorna como está se não tiver 11 dígitos
}

// Criar um novo cidadão
exports.createCidadao = async (req, res) => {
    try {
        const { nomeCompleto, celular } = req.body;

        if (!nomeCompleto || !celular) {
            return res.status(400).json({ error: 'Nome e celular são obrigatórios' });
        }

        // Formata o celular
        const celularFormatado = formatarCelular(celular);

        // Cria o cidadão com os dados formatados
        const cidadao = await Cidadao.create({
            ...req.body,
            celular: celularFormatado,
        });

        res.status(201).json(cidadao);
    } catch (error) {
        console.error('❌ Erro ao criar cidadão:', error);
        res.status(500).json({ error: 'Erro ao criar cidadão' });
    }
};

// Listar todos os cidadãos
exports.getCidadaos = async (req, res) => {
    try {
        const cidadaos = await Cidadao.findAll();
        res.status(200).json(cidadaos);
    } catch (error) {
        console.error('❌ Erro ao buscar cidadãos:', error);
        res.status(500).json({ error: 'Erro ao buscar cidadãos' });
    }
};

// Buscar cidadão por ID
exports.getCidadaoPorId = async (req, res) => {
    const { id } = req.params;
    try {
        const cidadao = await Cidadao.findByPk(id);
        if (!cidadao) {
            return res.status(404).json({ error: 'Cidadão não encontrado' });
        }
        res.status(200).json(cidadao);
    } catch (error) {
        console.error('❌ Erro ao buscar cidadão por ID:', error);
        res.status(500).json({ error: 'Erro ao buscar cidadão' });
    }
};

// Atualizar cidadão
exports.atualizarCidadao = async (req, res) => {
    const { id } = req.params;
    const { nomeCompleto, celular } = req.body;

    if (!nomeCompleto || !celular) {
        return res.status(400).json({ error: 'Nome e celular são obrigatórios' });
    }

    try {
        const cidadao = await Cidadao.findByPk(id);
        if (!cidadao) {
            return res.status(404).json({ error: 'Cidadão não encontrado' });
        }

        // Atualiza os dados do cidadão
        cidadao.nomeCompleto = nomeCompleto;
        cidadao.celular = formatarCelular(celular);
        await cidadao.save();

        res.status(200).json(cidadao);
    } catch (error) {
        console.error('❌ Erro ao atualizar cidadão:', error);
        res.status(500).json({ error: 'Erro ao atualizar cidadão' });
    }
};

// Excluir cidadão
exports.excluirCidadao = async (req, res) => {
    const { id } = req.params;
    try {
        const cidadao = await Cidadao.findByPk(id);
        if (!cidadao) {
            return res.status(404).json({ error: 'Cidadão não encontrado' });
        }

        await cidadao.destroy();
        res.status(200).json({ message: 'Cidadão deletado com sucesso' });
    } catch (error) {
        console.error('❌ Erro ao excluir cidadão:', error);
        res.status(500).json({ error: 'Erro ao excluir cidadão' });
    }
};