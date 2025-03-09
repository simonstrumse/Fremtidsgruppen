import { Container } from "@/components/ui/container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  ClipboardList,
  FileEdit,
  Send,
} from "lucide-react";

export default function NextSteps() {
  return (
    <section id="next-steps" className="py-16 md:py-24 bg-slate-50">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Neste Steg
          </h2>
          <p className="text-lg text-slate-600">
            For å ferdigstille prosjektet trenger vi din tilbakemelding
          </p>
        </div>

        <Card className="mb-8 border-2 border-blue-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl">
              Gjennomgang og Tilbakemelding
            </CardTitle>
            <CardDescription>
              Det som gjenstår nå er at Fremtidsgruppen går gjennom hele
              nettsiden og kommer med ønskede endringer
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-6">
              For å sikre at det endelige produktet møter alle deres
              forventninger og krav, ber vi om en grundig gjennomgang av
              leveransen. Vi ønsker at dere:
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-full mt-0.5">
                  <ClipboardList className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Gjennomgå hele nettsiden</h3>
                  <p className="text-slate-600">
                    Se gjennom alle sider, funksjoner og elementer for å sikre
                    at alt er i tråd med deres forventninger.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-full mt-0.5">
                  <FileEdit className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">
                    Dokumenter ønskede endringer
                  </h3>
                  <p className="text-slate-600">
                    Lag et dokument der dere skriver hva dere vil ha endret og
                    hva dere vil ha det endret til, punkt for punkt og
                    detaljert.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-full mt-0.5">
                  <Send className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">
                    Send for endelig revisjon
                  </h3>
                  <p className="text-slate-600">
                    Send dokumentet til oss for en final revisjon før produktet
                    leveres.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-md border border-blue-100 mb-6">
              <h4 className="font-medium flex items-center gap-2 mb-2">
                <CheckCircle className="h-5 w-5 text-green-600" /> Viktig
                informasjon
              </h4>
              <p className="text-sm">
                Jo mer spesifikke og detaljerte tilbakemeldingene er, desto
                bedre kan vi tilpasse det endelige produktet til deres behov.
                Vær gjerne konkrete med eksempler, skjermbilder eller referanser
                der det er mulig.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Tidslinje</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Uke 1-2:</strong> Gjennomgang og tilbakemelding
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Uke 3:</strong> Implementering av endringer
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Uke 4:</strong> Endelig leveranse
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Kontaktperson</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=William"
                    alt="Avatar"
                    className="h-10 w-10 rounded-full"
                  />
                </div>
                <div>
                  <p className="font-medium">William Lindholm</p>
                  <p className="text-sm text-slate-600">Prosjektleder</p>
                </div>
              </div>
              <p className="text-sm mb-1">
                <strong>Telefon:</strong> +47 921 67 474
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm">
                Har du spørsmål eller trenger hjelp med gjennomgangen? Vi er her
                for å hjelpe.
              </p>
              <Button variant="outline" className="w-full mb-2">
                Send e-post
              </Button>
              <Button variant="outline" className="w-full">
                Ring support: +47 921 67 474
              </Button>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}
