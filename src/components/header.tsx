import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowRight, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const footer = document.querySelector("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 transition-all duration-200">
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">
              Prosjektleveranse til Fremtidsgruppen
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#overview"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Oversikt
            </a>
            <a
              href="#prd"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Strategisk Design
            </a>
            <a
              href="#user-flow"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Brukerreise
            </a>
            <a
              href="#next-steps"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Neste Steg
            </a>
            <Button size="sm" onClick={scrollToContact}>
              Kontakt Oss <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </nav>

          <button
            className="md:hidden p-2 rounded-md hover:bg-slate-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </Container>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 py-4">
          <Container>
            <nav className="flex flex-col gap-4">
              <a
                href="#overview"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Oversikt
              </a>
              <a
                href="#prd"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Strategisk Design
              </a>
              <a
                href="#user-flow"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Brukerreise
              </a>
              <a
                href="#next-steps"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Neste Steg
              </a>
              <Button size="sm" className="mt-2" onClick={scrollToContact}>
                Kontakt Oss <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
