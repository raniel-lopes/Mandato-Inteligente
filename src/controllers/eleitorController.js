const { format } = require('sequelize/lib/utils');
const Eleitor = require('../models/Eleitor');

// Função auxiliar para formatar o número de celular
function formatarCelular(numero) {
    const digits = numero.replace(/\D/g, ''); // Remove tudo que não for número
    if (digits.length === 11) {
        return `(${digits.slice(0, 2)}${digits.slice(2, 7)}-${digits.slice(7)})`;
    }
    return numero; // Retorna como está se não tiver 11 dígitos
}

exports.createEleitor = async (req, res) => {
    try {
        const { nomeCompleto, celular } = req.body;

        if (!nomeCompleto || !celular) {
            return res.status(400).json({ error: 'Nome e celular são obrigatórios' });
        }

        // Formata o celular
        const celularFormatado = formatarCelular(celular);

        // Cria o eleitor com os dados formatados
        const eleitor = await Eleitor.create({
            ...req.body,
            celular: celularFormatado,
        });

        res.status(201).json(eleitor);
    } catch (error) {
        console.error('❌ Erro ao criar eleitor:', error);
        res.status(500).json({ error: 'Erro ao criar eleitor' });
    }
};

exports.getEleitores = async (req, res) => {
    try {
        // Buscando todos os eleitores no banco
        const eleitores = await Eleitor.findAll();
        res.status(200).json(eleitores); // Retorna os eleitores em formato JSON
    } catch (error) {
        console.error('❌ Erro ao buscar eleitores:', error);
        res.status(500).json({ error: 'Erro ao buscar eleitores' });
    }
};

exports.getEleitorPorId = async (req, res) => {
    const { id } = req.params; // Pega o ID dos parâmetros da URL
    try {
        const eleitor = await Eleitor.findByPk(id); // Encontra o eleitor pelo ID
        if (!eleitor) {
            return res.status(404).json({ error: 'Eleitor não encontrado' }); // Se não encontrar 
        }
        res.status(200).json(eleitor); // Retorna o eleitor
    } catch (error) {
        console.error('❌ Erro ao buscar eleitor por ID:', error);
        res.status(500).json({ error: 'Erro ao buscar eleitor' });
    }
};

exports.atualizarEleitor = async (req, res) => {
    const { id } = req.params; // Id do eleitor
    const { nomeCompleto, celular } = req.body;

    if (!nomeCompleto | !celular) {
        return res.status(400).json({ error: 'Nome e celular são obrigatórios' }); // Verifica se os campos obrigatórios estão presentes
    }

    try {
        const eleitor = await Eleitor.findByPk(id); // Encontra o eleitor 
        if (!eleitor) {
            return res.status(404).json({ error: 'Eleitor não encontrado' });
        }

        //Autaliza os dados do eleitor
        eleitor.nomeCompleto = nomeCompleto;
        eleitor.celular = celular;
        await eleitor.save(); // Salva as mudanças

        res.status(200).json(eleitor); // Retorna ao eleitor atualizado

    } catch (error) {
        console.error('❌ Erro ao atualizar o eleitor:', error);
        res.status(500).json({ error: 'Erro ao atualizar o eleitor' });
    }
};

exports.excluirEleitor = async (req, res) => {
    const { id } = req.params;
    try {
        const eleitor = await Eleitor.findByPk(id); // Encontra o eleitor pelo ID
        if (!eleitor) {
            return res.status(404).json({ error: 'Eleitor não encontrado' });
        }

        await eleitor.destroy(); // Exclui o eleitor
        res.status(200).json({ message: 'Eleitor deletado com sucessso' });
    } catch (error) {
        console.error('❌ Erro ao excluir eleitor:', error);
        res.status(500).json({ error: 'Erro ao excluir eleitor' });
    }
};