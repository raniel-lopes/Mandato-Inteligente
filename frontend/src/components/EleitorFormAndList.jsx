import { useEffect, useState } from 'react';
import axios from 'axios';

export default function EleitorFormAndList() {
    const [eleitores, setEleitores] = useState([]);
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [celular, setCelular] = useState('');

    // Buscar eleitores ao carregar o componente
    useEffect(() => {
        axios.get('http://localhost:5000/api/eleitores')
            .then(res => setEleitores(res.data))
            .catch(err => console.error('Erro ao buscar eleitores:', err));
    }, []);

    // Enviar novo eleitor
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/eleitores', {
                nomeCompleto,
                celular
            });
            setEleitores([...eleitores, res.data]);
            setNomeCompleto('');
            setCelular('');
        } catch (err) {
            console.error('Erro ao adicionar eleitor:', err);
        }
    };

    return (
        <div style={{ padding: '1rem' }}>
            <h2>Cadastrar Eleitor</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nome Completo"
                    value={nomeCompleto}
                    onChange={e => setNomeCompleto(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Celular"
                    value={celular}
                    onChange={e => setCelular(e.target.value)}
                    required
                />
                <button type="submit">Cadastrar</button>
            </form>

            <h3>Lista de Eleitores</h3>
            <ul>
                {eleitores.map((eleitor) => (
                    <li key={eleitor.id}>{eleitor.nomeCompleto} - {eleitor.celular}</li>
                ))}
            </ul>
        </div>
    );
}
