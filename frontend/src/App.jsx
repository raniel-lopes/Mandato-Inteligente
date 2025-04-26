import React from 'react';
import './index.css';  // Importa os estilos do Tailwind CSS

// Componentes para o Dashboard
import MetricsCard from "./components/MetricsCard";
import Agenda from "./components/Agenda";
import Anniversaries from "./components/Anniversaries";
import CitizenList from "./components/CitizenList";

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-800 text-white p-5">
        <h2 className="text-2xl font-bold mb-6">Gabinete Inteligente</h2>
        <ul>
          <li className="mb-4">Dashboard</li>
          <li className="mb-4">Projetos</li>
          <li className="mb-4">Atendimentos</li>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div>
            <button className="bg-blue-600 text-white py-2 px-4 rounded">Logout</button>
          </div>
        </header>

        {/* Main cards */}
        <div className="grid grid-cols-3 gap-6">
          <MetricsCard />
          <Agenda />
          <Anniversaries />
        </div>
      </div>
    </div>
  );
}

export default App;