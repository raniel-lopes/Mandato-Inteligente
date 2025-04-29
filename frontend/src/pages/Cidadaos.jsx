import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";

const FiltrosCidadaos = () => {
    const [selectedTag, setSelectedTag] = useState('');
    const [isTagOpen, setIsTagOpen] = useState(false);

    return (
        <div className="bg-white p-4 rounded-xl shadow mb-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Selecione Tags */}
            <Select>
                <SelectTrigger onClick={() => setIsTagOpen(!isTagOpen)}>
                    <SelectValue>{selectedTag || 'Selecione Tags'}</SelectValue>
                </SelectTrigger>
                <SelectContent isOpen={isTagOpen}>
                    <SelectItem value="tag1" onClick={() => setSelectedTag('tag1')}>Tag 1</SelectItem>
                    <SelectItem value="tag2" onClick={() => setSelectedTag('tag2')}>Tag 2</SelectItem>
                </SelectContent>
            </Select>

            {/* Checkbox Somente Líder */}
            <div className="flex items-center space-x-2">
                <Checkbox id="lider" />
                <label htmlFor="lider" className="text-sm">Somente Líder?</label>
            </div>

            {/* Checkbox Somente Autoridade */}
            <div className="flex items-center space-x-2">
                <Checkbox id="autoridade" />
                <label htmlFor="autoridade" className="text-sm">Somente Autoridade?</label>
            </div>

            {/* Inputs para Potencial e Observação */}
            <Input placeholder="Potencial mínimo" />
            <Input placeholder="Observação" />

            {/* Selecione Cidade */}
            <Select>
                <SelectTrigger>
                    <SelectValue>Selecione Cidade</SelectValue>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="salvador">Salvador</SelectItem>
                    <SelectItem value="salvador2">Salvador 2</SelectItem>
                    <SelectItem value="salvador3">Salvador 3</SelectItem>
                </SelectContent>
            </Select>

            {/* Selecione Bairro */}
            <Select>
                <SelectTrigger>
                    <SelectValue>Selecione Bairro</SelectValue>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="pau">Pau da Lima</SelectItem>
                    <SelectItem value="sussu">Sussu</SelectItem>
                    <SelectItem value="boquira">Boquira</SelectItem>
                </SelectContent>
            </Select>

            {/* Selecione Rua */}
            <Select>
                <SelectTrigger>
                    <SelectValue>Selecione Rua</SelectValue>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="rua1">Rua 1</SelectItem>
                    <SelectItem value="rua2">Rua 2</SelectItem>
                    <SelectItem value="rua3">Rua 3</SelectItem>
                </SelectContent>
            </Select>

            {/* Selecione Indicado por */}
            <Select>
                <SelectTrigger>
                    <SelectValue>Indicado por</SelectValue>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="joao">João</SelectItem>
                    <SelectItem value="maria">Maria</SelectItem>
                    <SelectItem value="pedro">Pedro</SelectItem>
                </SelectContent>
            </Select>

            {/* Selecione Origem */}
            <Select>
                <SelectTrigger>
                    <SelectValue>Origem</SelectValue>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="evento">Evento</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                </SelectContent>
            </Select>

            {/* Selecione Gênero */}
            <Select>
                <SelectTrigger>
                    <SelectValue>Gênero</SelectValue>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="masculino">Masculino</SelectItem>
                    <SelectItem value="feminino">Feminino</SelectItem>
                </SelectContent>
            </Select>

            {/* Selecione Cadastrado por */}
            <Select>
                <SelectTrigger>
                    <SelectValue>Cadastrado por</SelectValue>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="user">User</SelectItem>
                </SelectContent>
            </Select>

            {/* Selecione Ocupação */}
            <Select>
                <SelectTrigger>
                    <SelectValue>Ocupação</SelectValue>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="professor">Professor</SelectItem>
                    <SelectItem value="engenheiro">Engenheiro</SelectItem>
                </SelectContent>
            </Select>

            {/* Inputs de Idade e Período */}
            <Input placeholder="Idade mínima" type="number" />
            <Input placeholder="Idade máxima" type="number" />
            <Input type="date" placeholder="Período início" />
            <Input type="date" placeholder="Período fim" />
        </div>
    );
};

const ListaCidadaos = () => {
    const [cidadaos] = useState([
        {
            nome: "Rafael Souza Dos Santos",
            telefone: "(71) 98406-5775",
            bairro: "BOCA DA MATA",
            cidade: "SALVADOR",
            tags: "",
            votos: 0,
        },
        {
            nome: "Ricardo Almeida porto de macedo",
            telefone: "(71) 96503-535",
            bairro: "PAU DA LIMA",
            cidade: "SALVADOR",
            tags: "",
            votos: 0,
        },
        {
            nome: "Dirlene dos Santos Correia Sousa",
            telefone: "(71) 99347-2409",
            bairro: "PAU DA LIMA",
            cidade: "SALVADOR",
            tags: "",
            votos: 0,
        },
        {
            nome: "Manoel Santana batista",
            telefone: "(71) 99659-9106",
            bairro: "SUSSUARANA",
            cidade: "SALVADOR",
            tags: "",
            votos: 0,
        },
    ]);

    return (
        <div className="bg-white p-4 rounded-xl shadow">
            <div className="flex flex-col md:flex-row justify-between mb-4 gap-2">
                <Input placeholder="Buscar..." className="md:w-1/3" />
                <div className="space-x-2">
                    <Button variant="outline">Selecionar Duplicados</Button>
                    <Button className="bg-blue-600 text-white hover:bg-blue-700">
                        Novo Cidadão
                    </Button>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-sm table-auto">
                    <thead>
                        <tr className="text-left border-b">
                            <th className="p-2">Nome</th>
                            <th className="p-2">Telefone</th>
                            <th className="p-2">Bairro</th>
                            <th className="p-2">Cidade</th>
                            <th className="p-2">Tags</th>
                            <th className="p-2">Potencial de Votos</th>
                            <th className="p-2">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cidadaos.map((c, i) => (
                            <tr key={i} className="border-b hover:bg-gray-50">
                                <td className="p-2 text-blue-600 underline cursor-pointer">{c.nome}</td>
                                <td className="p-2 flex items-center gap-2 text-green-600">
                                    {c.telefone}
                                    <span role="img" aria-label="telefone">📱</span>
                                </td>
                                <td className="p-2">{c.bairro}</td>
                                <td className="p-2">{c.cidade}</td>
                                <td className="p-2">{c.tags}</td>
                                <td className="p-2">{c.votos}</td>
                                <td className="p-2">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger>
                                            <MoreVertical className="h-4 w-4 cursor-pointer" />
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuItem onClick={() => alert("Editar cidadão")}>Editar</DropdownMenuItem>
                                            <DropdownMenuItem onClick={() => alert("Excluir cidadão")}>Excluir</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default function Cidadaos() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-4">Cidadãos</h1>
            <FiltrosCidadaos />
            <ListaCidadaos />
        </div>
    );
};
