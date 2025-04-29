import MetricsCard from "../components/MetricsCard";
import Agenda from "../components/Agenda";
import Anniversaries from "../components/Anniversaries";
import Dashboard from "../components/Dashboard";
import EleitorFormAndList from "../components/EleitorFormAndList";

export default function DashboardPage() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <MetricsCard />
                <Agenda />
                <Anniversaries />
            </div>

            <div className="mt-8">
                <Dashboard />
            </div>

            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Cadastro de Eleitores</h2>
                <EleitorFormAndList />
            </div>
        </>
    );
}
