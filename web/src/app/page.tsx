import Link from "next/link";
import { AppShell } from "@/components/AppShell";

export default function Home() {
  return (
    <AppShell>
      <div className="grid gap-8">
        <section className="rounded-2xl bg-white border p-8">
          <h1 className="text-3xl font-semibold tracking-tight">Nephone.Nurse</h1>
          <p className="mt-3 text-neutral-700 leading-relaxed">
            Plataforma profissional para enfermeiros de hemodiálise:
            <strong> turnos</strong>, <strong>comunicação</strong> e{" "}
            <strong>aprendizagem</strong> — num só sítio.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/login"
              className="px-4 py-2 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 text-center"
            >
              Experimentar 7 dias grátis
            </Link>
            <Link
              href="/dashboard"
              className="px-4 py-2 rounded-xl border hover:bg-neutral-50 text-center"
            >
              Ver demo (MVP)
            </Link>
          </div>

          <p className="mt-4 text-sm text-neutral-600">
            Sem WhatsApp. Sem Excel. Sem caos. Feito para o contexto real da diálise.
          </p>
        </section>

        <section className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-white border p-6">
            <h2 className="font-semibold">Mapa de turnos (PL/TCO)</h2>
            <p className="mt-2 text-sm text-neutral-700">
              Regista turnos, valores e totais mensais. Facilita trocas e dá visibilidade à carga de trabalho.
            </p>
          </div>
          <div className="rounded-2xl bg-white border p-6">
            <h2 className="font-semibold">Chat profissional por clínica</h2>
            <p className="mt-2 text-sm text-neutral-700">
              Conversas por equipa/turno com histórico pesquisável, sem números pessoais.
            </p>
          </div>
          <div className="rounded-2xl bg-white border p-6">
            <h2 className="font-semibold">Notas e intercorrências</h2>
            <p className="mt-2 text-sm text-neutral-700">
              Registos estruturados para memória de equipa — sem dados identificáveis do doente.
            </p>
          </div>
          <div className="rounded-2xl bg-white border p-6">
            <h2 className="font-semibold">Academia</h2>
            <p className="mt-2 text-sm text-neutral-700">
              Microlearning e casos clínicos. Evolui com a prática real e promove valorização profissional.
            </p>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
