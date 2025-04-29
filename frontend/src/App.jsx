import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import Sidebar from "./components/Sidebar";
import DashboardPage from "./pages/DashboardPage";
import Cidadaos from "./pages/Cidadaos";

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />

        <div className="flex-1 flex flex-col">
          {/* Header comum */}
          <header className="flex justify-between items-center bg-white shadow p-4">
            <h1 className="text-2xl font-bold text-gray-800">Sistema de Gabinete</h1>
            <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded">
              Logout
            </button>
          </header>

          {/* Área de rotas */}
          <main className="flex-1 overflow-y-auto p-6">
            <Routes>
              <Route path="" element={<DashboardPage />} />
              <Route path="/cidadaos" element={<Cidadaos />} />
              {/* Você pode adicionar outras rotas aqui */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
