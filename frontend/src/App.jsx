import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import Sidebar from "./components/Sidebar";
import DashboardPage from "./pages/DashboardPage";
import Cidadaos from "./pages/Cidadaos";
import LoginPage from "./pages/LoginPage"; // Importe o componente de login

function App() {
  return (
    <Router>
      <div className="h-screen w-screen flex bg-gray-100">
        <Routes>
          {/* Página de login */}
          <Route path="/" element={<LoginPage />} />

          {/* Rotas protegidas */}
          <Route
            path="*"
            element={
              <div className="flex h-screen w-full">
                <Sidebar />
                <div className="flex-1 flex flex-col">
                  <header className="flex justify-between items-center bg-white shadow p-4">
                    <h1 className="text-2xl font-bold text-gray-800">Sistema de Gabinete</h1>
                    <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded">
                      Logout
                    </button>
                  </header>
                  <main className="flex-1 overflow-y-auto p-6">
                    <Routes>
                      <Route path="/visao-geral" element={<DashboardPage />} />
                      <Route path="/cidadaos" element={<Cidadaos />} />
                    </Routes>
                  </main>
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;