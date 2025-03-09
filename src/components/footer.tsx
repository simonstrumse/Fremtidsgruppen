import { Container } from "@/components/ui/container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-200 py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Prosjektleveranse</h3>
            <p className="text-slate-400 mb-4">
              Strategisk designet nettside med konvertering i fokus.
            </p>
            <p className="text-sm text-slate-500">
              © {currentYear} Konsulentbyrået. Alle rettigheter reservert.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Kontakt</h4>
            <ul className="space-y-2 text-slate-400">
              <li>E-post: kontakt@konsulentbyrået.no</li>
              <li>Telefon: +47 123 45 678</li>
              <li>Adresse: Storgata 1, 0000 Oslo</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Lenker</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#overview"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Prosjektoversikt
                </a>
              </li>
              <li>
                <a
                  href="#prd"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Strategisk Design
                </a>
              </li>
              <li>
                <a
                  href="#user-flow"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Brukerreise
                </a>
              </li>
              <li>
                <a
                  href="#next-steps"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Neste Steg
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          <p>
            Denne presentasjonen er en prosjektleveranse til Fremtidsgruppen og
            inneholder konfidensiell informasjon.
          </p>
        </div>
      </Container>
    </footer>
  );
}
