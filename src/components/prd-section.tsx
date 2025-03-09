import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PrdSection() {
  return (
    <section id="prd" className="py-16 md:py-24 bg-slate-50">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Strategisk Designtankegang
          </h2>
          <p className="text-lg text-slate-600">
            Fremtid Gruppens konverterende nettside er bygget på solid
            strategisk designtankegang
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="overview">Oversikt</TabsTrigger>
            <TabsTrigger value="visual">Visuell Strategi</TabsTrigger>
            <TabsTrigger value="funnel">Konverteringstrakt</TabsTrigger>
            <TabsTrigger value="trust">Tillitsbygging</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">
                  Konverteringsdrevet Design
                </h3>
                <p className="mb-4">
                  Nettsiden for Fremtid Gruppen er utviklet med én overordnet
                  tanke: å skape en konverteringsmaskin som transformerer
                  besøkende til betalende kunder. Hvert designvalg, hvert
                  visuelt element og hver interaksjon har et strategisk formål
                  forankret i både psykologi og brukeratferdsforskning.
                </p>
                <p>
                  Den visuelle designen er skapt med en nøye gjennomtenkt
                  balanse mellom profesjonalitet og kreativitet. Den blå
                  fargepaletten er ikke tilfeldig valgt – studier viser at blå
                  kommuniserer både profesjonalitet og tillit, noe som er
                  avgjørende i en bransje der kunder overlater sin digitale
                  tilstedeværelse til et byrå.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="visual" className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">
                  Visuell Hierarki som Konverteringsdriver
                </h3>
                <p className="mb-4">
                  Den animerte bakgrunnen med subtile pulserende elementer
                  skaper visuell interesse uten å distrahere. Dette er en
                  bevisst strategi:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>
                    <strong>Strategisk tankegang:</strong> Når
                    bakgrunnsanimasjonene pulserer i en langsommere rytme enn en
                    persons normale hjerteslag, skaper det en beroligende effekt
                    og øker tiden besøkende bruker på siden – et nøkkeltall som
                    korrelerer direkte med konverteringsrater.
                  </li>
                  <li>
                    <strong>Konverteringsimplikasjon:</strong> Lengre tid på
                    siden = høyere sannsynlighet for konvertering. Vi utnytter
                    subtilt menneskets biologiske respons på visuelle stimuli.
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">
                  Sekvensielle Fade-in Animasjoner
                </h3>
                <p className="mb-4">
                  De sekvensielle fade-in animasjonene styrer brukerens øye i en
                  forhåndsdefinert reise gjennom innholdet:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Strategisk tankegang:</strong> Ved å kontrollere
                    rekkefølgen informasjonen avdekkes i, skaper vi en
                    "informasjonskaskade" som bygger forståelse og interesse i
                    riktig sekvens.
                  </li>
                  <li>
                    <strong>Konverteringsimplikasjon:</strong> Når brukeren når
                    CTAs (Call-to-Action), har de allerede absorbert den
                    nødvendige informasjonen for å ta en informert beslutning.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="funnel" className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">
                  Konverteringstraktens Visuelle Manifestasjon
                </h3>
                <p className="mb-4">
                  Nettsidens struktur er en bevisst visualisering av en
                  konverteringstrakt, hvor hvert segment strategisk leder
                  besøkende mot neste handling.
                </p>

                <h4 className="text-lg font-medium mb-2">
                  1. Første Inntrykksfasen: Fange Interessen
                </h4>
                <p className="mb-4">
                  Hero-seksjonen er designet etter AIDA-modellen (Attention,
                  Interest, Desire, Action):
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>
                    <strong>Attention:</strong> Den animerte bakgrunnen og
                    pulserende elementer fanger umiddelbart oppmerksomheten
                  </li>
                  <li>
                    <strong>Interest:</strong> Det kraftfulle verdiforslaget
                    vekker interesse
                  </li>
                  <li>
                    <strong>Desire:</strong> Visuell fremstilling av ekspertise
                    og resultater skaper ønske
                  </li>
                  <li>
                    <strong>Action:</strong> Strategisk plassert primær CTA
                    konverterer disse følelsene til handling
                  </li>
                </ul>

                <h4 className="text-lg font-medium mb-2">
                  2. Tjenestekort med Hover-Effekter
                </h4>
                <p className="mb-4">
                  De interaktive tjenestekortene skaper små
                  "mikrokonverteringer" på veien mot hovedkonverteringen:
                </p>
                <p>
                  <strong>Strategisk tankegang:</strong> Hver hover-interaksjon
                  representerer et aktivt valg fra brukerens side – en
                  mikroforpliktelse. Psykologisk sett øker små forpliktelser
                  sannsynligheten for større forpliktelser senere.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trust" className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">
                  Visuell Tillitsbygging: Strategiske Signaler
                </h3>

                <h4 className="text-lg font-medium mb-2">
                  Partner-Logoer og Sertifiseringer
                </h4>
                <p className="mb-4">
                  Fremvisningen av partnerlogoer og sertifiseringer utnytter
                  både autoritetsprinsippet og sosiale bevis:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>
                    <strong>Strategisk tankegang:</strong> Mennesker stoler på
                    autoriteter og tar snarveier i beslutningsprosessen basert
                    på hvem andre stoler på. Partnerlogene fra kjente aktører
                    som Creditsafe, Amedia og Gule Sider overfører tillit.
                  </li>
                  <li>
                    <strong>Konverteringsimplikasjon:</strong>{" "}
                    Autoritetsmarkører kan øke konverteringsrater med opptil 40%
                    i bransjer der tillit er en kritisk faktor.
                  </li>
                </ul>

                <h4 className="text-lg font-medium mb-2">
                  Whitespace og Typografi
                </h4>
                <p className="mb-4">
                  Den strategiske bruken av whitespace og typografisk hierarki:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Strategisk tankegang:</strong> Riktig mengde
                    whitespace reduserer kognitiv belastning og øker
                    informasjonsabsorpsjon. Typografihierarkiet guider øyet og
                    skaper en naturlig flyt gjennom innholdet.
                  </li>
                  <li>
                    <strong>Konverteringsimplikasjon:</strong> Redusert kognitiv
                    belastning betyr at brukeren har mer mental kapasitet
                    tilgjengelig for å vurdere tilbudet – og dermed større
                    sannsynlighet for å konvertere.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-8 text-center">
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
            onClick={(e) => {
              e.preventDefault();
              window.open("/prd-full.pdf", "_blank");
            }}
          >
            Last ned fullstendig PRD dokumentasjon
          </a>
        </div>
      </Container>
    </section>
  );
}
