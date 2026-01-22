import { AppShell } from "@/components/AppShell";

export default function DashboardPage() {
  return (
    <AppShell>
      <h1 className="text-2xl font-semibold">Painel</h1>
      <p className="mt-2 text-neutral-700">
        Visão geral: turnos do mês, mensagens e progresso na academia. (MVP)
      </p>
    </AppShell>
  );
}
