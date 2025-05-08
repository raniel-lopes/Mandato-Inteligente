import React from "react";

export default function LoginPage() {
    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Login realizado!");
    };

    return (
        <div className="flex items-center justify-center h-screen w-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                {/* Logo do vereador */}
                <div className="flex justify-center mb-6">
                    <img
                        src="./images/logoNinho.png" // Substitua pelo caminho correto da logo
                        alt="Logo do Vereador"
                        className="h-20 w-auto"
                    />
                </div>
                <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                    Sistema do Vereador
                </h1>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Usuário</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Digite seu usuário"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Senha</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            placeholder="Digite sua senha"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                    >
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
}