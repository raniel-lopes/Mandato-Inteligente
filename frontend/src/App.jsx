import React from 'react';
import './index.css'; // Importa os estilos do Tailwind CSS

// Componentes para o Dashboard
import MetricsCard from "./components/MetricsCard";
import Agenda from "./components/Agenda";
import Anniversaries from "./components/Anniversaries";
import CitizenList from "./components/CitizenList";
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center bg-white shadow p-4">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
            Logout
          </button>
        </header>

        {/* Conteúdo Principal */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Grid para Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MetricsCard />
            <Agenda />
            <Anniversaries />
          </div>

          {/* Dashboard (Últimos Atendimentos, etc) */}
          <div className="mt-8">
            <Dashboard />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
