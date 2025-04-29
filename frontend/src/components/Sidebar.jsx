import { useState } from "react";
import { Home, Users, Map, FileText, Calendar, Bell, HelpCircle, Settings } from "lucide-react";

const menuItems = [
    { label: "Visão Geral", icon: <Home size={20} />, link: "/visao-geral" },
    {
        label: "Cidadãos",
        icon: <Users size={20} />,
        subItems: [
            { label: "Lista de Cidadãos", link: "/cidadaos" },
            { label: "Gestão de Tags", link: "/tags" },
            { label: "Ranking Cidadãos", link: "/cidadaos/ranking" },
        ],
    },
    { label: "Mapas", icon: <Map size={20} />, link: "/mapas" },
    { label: "Documentos", icon: <FileText size={20} />, link: "/documentos" },
    { label: "Agenda", icon: <Calendar size={20} />, link: "/agenda" },
    { label: "Notificações", icon: <Bell size={20} />, link: "/notificacoes" },
    { label: "Suporte", icon: <HelpCircle size={20} />, link: "/suporte" },
    { label: "Configurações", icon: <Settings size={20} />, link: "/configuracoes" },
];

export default function Sidebar() {
    const [openMenu, setOpenMenu] = useState(null);

    const toggleMenu = (index) => {
        setOpenMenu(openMenu === index ? null : index);
    };

    return (
        <div className="w-64 h-screen bg-white border-r shadow-lg flex flex-col">
            <div className="flex items-center justify-center h-16 border-b">
                <img src="./images/logoNinho.png" alt="Logo" className="h-10" />
            </div>

            <nav className="flex-1 overflow-y-auto p-4">
                <ul className="space-y-2">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            {item.subItems ? (
                                <>
                                    <button
                                        onClick={() => toggleMenu(index)}
                                        className="flex items-center justify-between w-full text-left p-2 rounded-md hover:bg-gray-100"
                                    >
                                        <div className="flex items-center gap-3">
                                            {item.icon}
                                            <span>{item.label}</span>
                                        </div>
                                        <svg
                                            className={`transition-transform ${openMenu === index ? "rotate-90" : ""}`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </button>
                                    {openMenu === index && (
                                        <ul className="pl-8 mt-1 space-y-1">
                                            {item.subItems.map((subItem, subIndex) => (
                                                <li key={subIndex}>
                                                    <a
                                                        href={subItem.link}
                                                        className="block p-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                                                    >
                                                        {subItem.label}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </>
                            ) : (
                                <a
                                    href={item.link}
                                    className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-100"
                                >
                                    {item.icon}
                                    <span>{item.label}</span>
                                </a>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
