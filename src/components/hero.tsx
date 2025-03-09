import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const footer = document.querySelector("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToNextSteps = (e: React.MouseEvent) => {
    e.preventDefault();
    const nextSteps = document.getElementById("next-steps");
    if (nextSteps) {
      nextSteps.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-slate-100 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-50 animate-pulse"
          style={{ animationDuration: "15s" }}
        ></div>
        <div
          className="absolute top-60 -left-20 w-60 h-60 bg-blue-100 rounded-full opacity-40 animate-pulse"
          style={{ animationDuration: "12s" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-40 h-40 bg-blue-100 rounded-full opacity-30 animate-pulse"
          style={{ animationDuration: "10s" }}
        ></div>
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            Prosjektleveranse til Fremtidsgruppen
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 mb-8">
            En strategisk designet nettside med konvertering i fokus
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2" onClick={scrollToContact}>
              Kontakt Oss <ArrowRight className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToNextSteps}>
              Neste Steg
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
