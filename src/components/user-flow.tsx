import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MermaidDiagram from "./mermaid-diagram";

export default function UserFlow() {
  return (
    <section id="user-flow" className="py-16 md:py-24 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Brukerreise og Flytdiagram
          </h2>
          <p className="text-lg text-slate-600">
            En strategisk utformet brukerreise som leder til konvertering
          </p>
        </div>

        <Card className="mb-8 overflow-hidden">
          <CardContent className="p-4 md:p-8">
            <MermaidDiagram
              chart={`graph TD
                A[Bruker lander på hjemmesiden] --> B[Ser videobakgrunn og fade-in animasjoner]
                B --> C[Transparent navigasjonsmeny skaper moderne inntrykk]
                C --> D{Er brukeren engasjert?}
                D -->|Ja| E[Bruker ser hovedelementer i tjenesteseksjonen]
                D -->|Nei| Z[Forlater siden]
                
                %% Konverteringsmål for hvert steg
                A -.-> A1[Konverteringsmål: Skape interesse]
                B -.-> B1[Konverteringsmål: Fange oppmerksomhet]
                C -.-> C1[Konverteringsmål: Bygge tillit]
                
                %% Fortsettelse av hovedflyt
                E --> F[Hover-effekt på tjenestekort viser mer informasjon]
                F --> G[Bruker klikker på tjenestekort]
                G --> H[Laster detaljert tjenesteside med problem-løsning struktur]
                
                %% Konverteringsmål for disse stegene
                E -.-> E1[Konverteringsmål: Utforske tjenester]
                F -.-> F1[Konverteringsmål: Øke engasjement]
                G -.-> G1[Konverteringsmål: Mikroforpliktelse]
                H -.-> H1[Konverteringsmål: Forstå verdiforslag]
                
                %% Fortsettelse av hovedflyt
                H --> I[Ser partner-logoer i LogoScroller]
                I --> J[Registrerer Wix Legend Partner og sertifiseringer]
                J --> K[Utforsker produktpakker med Gull/Platinum-fordeler]
                
                %% Konverteringsmål for disse stegene
                I -.-> I1[Konverteringsmål: Bygge tillit]
                J -.-> J1[Konverteringsmål: Etablere autoritet]
                K -.-> K1[Konverteringsmål: Vurdere tilbud]
                
                %% Fortsettelse av hovedflyt
                K --> L[Leser Om Oss-seksjonen med selskapets historie]
                L --> M[Leser kundevitnesbyrd og suksesshistorier]
                M --> N[Ser nyheter og oppdateringer som bygger relevans]
                
                %% Konverteringsmål for disse stegene
                L -.-> L1[Konverteringsmål: Emosjonell tilknytning]
                M -.-> M1[Konverteringsmål: Sosiale bevis]
                N -.-> N1[Konverteringsmål: Aktualitet]
                
                %% Fortsettelse av hovedflyt
                N --> O[Når kontaktseksjonen med tydelige CTAs]
                O --> P{Hvordan ta kontakt?}
                P -->|Skjema| Q[Fyller ut kontaktskjema]
                P -->|Chat| R[Starter live chat]
                P -->|Telefon/E-post| S[Kontakter via telefon eller e-post]
                Q --> T[KONVERTERING: Starter prosjektsamarbeid]
                R --> T
                S --> T
                
                %% Konverteringsmål for disse stegene
                O -.-> O1[Konverteringsmål: Nå beslutningspunkt]
                P -.-> P1[Konverteringsmål: Velge kontaktmetode]
                Q -.-> Q1[Konverteringsmål: Fullføre skjema]
                R -.-> R1[Konverteringsmål: Starte samtale]
                S -.-> S1[Konverteringsmål: Direkte kontakt]
                
                %% Styling
                style A fill:#f9f9f9,stroke:#2563eb,stroke-width:2px
                style D fill:#f0f9ff,stroke:#2563eb,stroke-width:2px
                style P fill:#f0f9ff,stroke:#2563eb,stroke-width:2px
                style T fill:#dbeafe,stroke:#2563eb,stroke-width:3px,color:#1e40af,font-weight:bold
                style Z fill:#fee2e2,stroke:#ef4444,stroke-width:2px
                
                %% Konverteringsmål styling
                style A1 fill:#e6f7ff,stroke:#0ea5e9,stroke-width:1px,color:#0369a1,font-style:italic
                style B1 fill:#e6f7ff,stroke:#0ea5e9,stroke-width:1px,color:#0369a1,font-style:italic
                style C1 fill:#e6f7ff,stroke:#0ea5e9,stroke-width:1px,color:#0369a1,font-style:italic
                style E1 fill:#e6f7ff,stroke:#0ea5e9,stroke-width:1px,color:#0369a1,font-style:italic
                style F1 fill:#e6f7ff,stroke:#0ea5e9,stroke-width:1px,color:#0369a1,font-style:italic
                style G1 fill:#e6f7ff,stroke:#0ea5e9,stroke-width:1px,color:#0369a1,font-style:italic
                style H1 fill:#e6f7ff,stroke:#0ea5e9,stroke-width:1px,color:#0369a1,font-style:italic
                style I1 fill:#e6f7ff,stroke:#0ea5e9,stroke-width:1px,color:#0369a1,font-style:italic
                style J1 fill:#e6f7ff,stroke:#0ea5e9,stroke-width:1px,color:#0369a1,font-style:italic
                style K1 fill:#e6f7ff,stroke:#0ea5e9,stroke-width:1px,color:#0369a1,font-style:italic
                style L1 fill:#e6f7ff,stroke:#0ea5e9,stroke-width:1px,color:#0369a1,font-style:italic
                style M1 fill:#e6f7ff,stroke:#0ea5e9,stroke-width:1px,color:#0369a1,font-style:italic
                style N1 fill:#e6f7ff,stroke:#0ea5e9,stroke-width:1px,color:#0369a1,font-style:italic
                style O1 fill:#e6f7ff,stroke:#0ea5e9,stroke-width:1px,color:#0369a1,font-style:italic
                style P1 fill:#e6f7ff,stroke:#0ea5e9,stroke-width:1px,color:#0369a1,font-style:italic
                style Q1 fill:#e6f7ff,stroke:#0ea5e9,stroke-width:1px,color:#0369a1,font-style:italic
                style R1 fill:#e6f7ff,stroke:#0ea5e9,stroke-width:1px,color:#0369a1,font-style:italic
                style S1 fill:#e6f7ff,stroke:#0ea5e9,stroke-width:1px,color:#0369a1,font-style:italic
              `}
              className="w-full overflow-auto"
            />
          </CardContent>
        </Card>

        <Tabs defaultValue="phase1" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="phase1">Fase 1: Første Inntrykk</TabsTrigger>
            <TabsTrigger value="phase2">Fase 2: Utforsking</TabsTrigger>
            <TabsTrigger value="phase3">Fase 3: Om Bedriften</TabsTrigger>
            <TabsTrigger value="phase4">Fase 4: Konvertering</TabsTrigger>
          </TabsList>

          <TabsContent value="phase1" className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">
                  Fase 1: Første Inntrykk
                </h3>
                <p className="mb-4">
                  Brukerens første møte med nettsiden er kritisk for å etablere
                  interesse og tillit:
                </p>
                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <p className="font-medium">Bruker lander på hjemmesiden</p>
                    <p className="text-slate-600">
                      Det første møtet med nettsiden setter tonen for hele
                      opplevelsen.
                    </p>
                    <p className="text-blue-600 italic mt-1">
                      Konverteringsmål: Skape interesse og forhindre umiddelbar
                      avvisning
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">
                      Ser videobakgrunn og fade-in animasjoner
                    </p>
                    <p className="text-slate-600">
                      Animasjonene skaper et moderne inntrykk og reduserer
                      umiddelbar avvisning av siden.
                    </p>
                    <p className="text-blue-600 italic mt-1">
                      Konverteringsmål: Fange oppmerksomhet og øke tid på siden
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">
                      Transparent navigasjonsmeny skaper moderne inntrykk
                    </p>
                    <p className="text-slate-600">
                      Den transparente menyen balanserer fremvisning av innhold
                      og tilgjengelighet til navigasjon.
                    </p>
                    <p className="text-blue-600 italic mt-1">
                      Konverteringsmål: Bygge tillit gjennom profesjonelt design
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">
                      Beslutningspunkt: Er brukeren engasjert?
                    </p>
                    <p className="text-slate-600">
                      Hvis ja, fortsetter brukeren å utforske. Hvis nei,
                      forlater brukeren siden.
                    </p>
                    <p className="text-blue-600 italic mt-1">
                      Konverteringsmål: Få brukeren til å scrolle videre og
                      utforske tjenester
                    </p>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="phase2" className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">
                  Fase 2: Utforsking av Tjenester
                </h3>
                <p className="mb-4">
                  I denne fasen utforsker brukeren tjenestene som tilbys:
                </p>
                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <p className="font-medium">
                      Bruker ser hovedelementer i tjenesteseksjonen
                    </p>
                    <p className="text-slate-600">
                      Tjenestene presenteres i et oversiktlig og tilgjengelig
                      format.
                    </p>
                    <p className="text-blue-600 italic mt-1">
                      Konverteringsmål: Få brukeren til å identifisere relevante
                      tjenester
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">
                      Hover-effekt på tjenestekort viser mer informasjon
                    </p>
                    <p className="text-slate-600">
                      Hover-effektene øker engasjement og forbereder brukeren på
                      klikk.
                    </p>
                    <p className="text-blue-600 italic mt-1">
                      Konverteringsmål: Øke engasjement og interaksjon med
                      innholdet
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">
                      Bruker klikker på tjenestekort
                    </p>
                    <p className="text-slate-600">
                      Dette representerer en mikroforpliktelse fra brukerens
                      side.
                    </p>
                    <p className="text-blue-600 italic mt-1">
                      Konverteringsmål: Oppnå første mikroforpliktelse fra
                      brukeren
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">
                      Laster detaljert tjenesteside med problem-løsning struktur
                    </p>
                    <p className="text-slate-600">
                      Problem-løsning strukturen bygger forståelse for
                      verdiforslaget.
                    </p>
                    <p className="text-blue-600 italic mt-1">
                      Konverteringsmål: Skape forståelse for verdiforslaget
                    </p>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="phase3" className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">
                  Fase 3: Om Bedriften
                </h3>
                <p className="mb-4">
                  I denne fasen bygges tillit gjennom informasjon om bedriften:
                </p>
                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <p className="font-medium">
                      Ser partner-logoer i LogoScroller
                    </p>
                    <p className="text-slate-600">
                      Partner-logoene bygger tillit gjennom assosiasjon med
                      kjente merkevarer.
                    </p>
                    <p className="text-blue-600 italic mt-1">
                      Konverteringsmål: Bygge tillit gjennom assosiasjoner
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">
                      Registrerer Wix Legend Partner og sertifiseringer
                    </p>
                    <p className="text-slate-600">
                      Sertifiseringer fungerer som autoritetsmarkører som øker
                      troverdighet.
                    </p>
                    <p className="text-blue-600 italic mt-1">
                      Konverteringsmål: Etablere autoritet og ekspertise
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">
                      Utforsker produktpakker med Gull/Platinum-fordeler
                    </p>
                    <p className="text-slate-600">
                      Verdihierarkiet i prismodellen fremhever verdien av alle
                      tilbud.
                    </p>
                    <p className="text-blue-600 italic mt-1">
                      Konverteringsmål: Få brukeren til å vurdere konkrete
                      tilbud
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">
                      Leser Om Oss-seksjonen med selskapets historie
                    </p>
                    <p className="text-slate-600">
                      Personlig historie skaper emosjonell tilknytning til
                      merkevaren.
                    </p>
                    <p className="text-blue-600 italic mt-1">
                      Konverteringsmål: Skape emosjonell tilknytning til
                      merkevaren
                    </p>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="phase4" className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">
                  Fase 4: Konverteringspunkter
                </h3>
                <p className="mb-4">
                  Den avsluttende fasen hvor brukeren tar beslutningen om å
                  konvertere:
                </p>
                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <p className="font-medium">
                      Leser kundevitnesbyrd og suksesshistorier
                    </p>
                    <p className="text-slate-600">
                      Sosiale bevis reduserer opplevd risiko og øker tillit.
                    </p>
                    <p className="text-blue-600 italic mt-1">
                      Konverteringsmål: Redusere opplevd risiko gjennom sosiale
                      bevis
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">
                      Ser nyheter og oppdateringer som bygger relevans
                    </p>
                    <p className="text-slate-600">
                      Aktuelle nyheter demonstrerer at bedriften er aktiv og
                      oppdatert.
                    </p>
                    <p className="text-blue-600 italic mt-1">
                      Konverteringsmål: Etablere aktualitet og relevans
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">
                      Når kontaktseksjonen med tydelige CTAs
                    </p>
                    <p className="text-slate-600">
                      Strategisk plasserte CTAs øker konverteringssannsynlighet.
                    </p>
                    <p className="text-blue-600 italic mt-1">
                      Konverteringsmål: Lede brukeren til beslutningspunktet
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">
                      Beslutningspunkt: Hvordan ta kontakt?
                    </p>
                    <p className="text-slate-600">
                      Brukeren velger foretrukket kontaktmetode: skjema, chat
                      eller telefon/e-post.
                    </p>
                    <p className="text-blue-600 italic mt-1">
                      Konverteringsmål: Få brukeren til å velge foretrukket
                      kontaktmetode
                    </p>
                  </li>
                  <li>
                    <p className="font-medium">
                      KONVERTERING: Starter prosjektsamarbeid
                    </p>
                    <p className="text-slate-600">
                      Målet er nådd - brukeren har konvertert til kunde.
                    </p>
                    <p className="text-blue-600 italic mt-1">
                      Konverteringsmål: Fullføre konverteringen og starte
                      kundeforholdet
                    </p>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </Container>
    </section>
  );
}
