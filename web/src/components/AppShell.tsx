import Link from "next/link";

type Props = {
  title?: string;
  children: React.ReactNode;
};

const nav = [
  { href: "/dashboard", label: "Painel" },
  { href: "/turnos", label: "Turnos" },
  { href: "/chat", label: "Chat" },
  { href: "/notas", label: "Notas" },
  { href: "/academia", label: "Academia" },
];

export function AppShell({ title = "Nephone.Nurse", children }: Props) {
  return (
    <div className="min-h-screen bg-neutral-50">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <Link href="/" className="font-semibold text-lg">
            {title}
          </Link>

          <nav className="flex gap-3 text-sm">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="px-3 py-1.5 rounded-lg hover:bg-neutral-100"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/login"
            className="text-sm px-3 py-1.5 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800"
          >
            Entrar
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>

      <footer className="mt-16 border-t bg-white">
        <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-neutral-600">
          © {new Date().getFullYear()} Nephone.Nurse · Plataforma para enfermeiros de hemodiálise
        </div>
      </footer>
    </div>
  );
}
