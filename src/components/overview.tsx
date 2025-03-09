import { Container } from "@/components/ui/container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, Lightbulb, Target, Users } from "lucide-react";

export default function Overview() {
  return (
    <section id="overview" className="py-16 md:py-24 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Prosjektoversikt
          </h2>
          <p className="text-lg text-slate-600">
            Vi har utviklet en konverteringsdrevet nettside for Fremtidsgruppen
            med fokus på strategisk design og brukeropplevelse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-2 border-blue-100 transition-all duration-300 hover:border-blue-300 hover:shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Lightbulb className="h-5 w-5 text-blue-700" />
                </div>
                <CardTitle>Strategisk Design</CardTitle>
              </div>
              <CardDescription>
                Hvert designvalg er forankret i konverteringspsykologi
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span>Visuell hierarki som konverteringsdriver</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span>Sekvensielle animasjoner for styrt oppmerksomhet</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span>Transparent navigasjon for økt tilgjengelighet</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-100 transition-all duration-300 hover:border-blue-300 hover:shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Users className="h-5 w-5 text-blue-700" />
                </div>
                <CardTitle>Brukerreise</CardTitle>
              </div>
              <CardDescription>
                Nøye utformet brukerflyt som leder til konvertering
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span>Første inntrykk med engasjerende elementer</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span>Utforsking av tjenester med interaktive elementer</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span>Strategisk plasserte konverteringspunkter</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-100 transition-all duration-300 hover:border-blue-300 hover:shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Target className="h-5 w-5 text-blue-700" />
                </div>
                <CardTitle>Konverteringsmål</CardTitle>
              </div>
              <CardDescription>
                Designet for å maksimere konvertering av besøkende
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span>Multiple kontaktpunkter for ulike preferanser</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span>Verdihierarkisk prismodell (Gull/Platinum)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span>Tillitsbyggende visuelle signaler</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-100 transition-all duration-300 hover:border-blue-300 hover:shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-100 p-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-blue-700" />
                </div>
                <CardTitle>Leveranse</CardTitle>
              </div>
              <CardDescription>
                Komplett leveranse klar for implementering
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span>Fullstendig strategisk designdokumentasjon</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span>Detaljert brukerreise med konverteringspunkter</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                  <span>Klar for gjennomgang og siste justeringer</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}
