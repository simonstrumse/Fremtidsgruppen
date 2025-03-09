import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

interface NewsSectionProps {
  title?: string;
  subtitle?: string;
}

const NewsSection = ({
  title = "Nyheter & Pressemeldinger",
  subtitle = "Følg med på de siste oppdateringene fra Fremtid Gruppen",
}: NewsSectionProps) => {
  const newsItems = [
    {
      title: "Fremtid Gruppen nevnt i iFinnmark",
      content:
        "Vi er stolte over at Fremtid Gruppen har blitt omtalt i iFinnmark! Artikkelen fremhever vårt engasjement for vekst, innovasjon og bærekraftig utvikling i regionen. Takk til alle som har støttet oss – vi er klare for nye steg sammen med våre samarbeidspartnere.",
      date: "15.03.2025",
      category: "Media",
      link: "#",
    },
    {
      title: "To av våre rådgivere er nå Wix-sertifiserte!",
      content:
        "Vi er stolte av å kunngjøre at to av våre rådgivere nå er offisielt verifiserte av Wix – med SEO Specialist Certification og Wix Developer Certification. Dette beviser vår ekspertise og forpliktelse til å levere topp resultater for våre kunder.",
      date: "10.03.2025",
      category: "Sertifisering",
      link: "#",
    },
    {
      title: "Fremtid Gruppen er nå en Wix Legend Partner!",
      content:
        "Vi er stolte over å ha oppnådd den høyeste partnerstatusen i Wix Partner Program. Med tilgang til eksklusive ressurser og prioritert support, kan vi utvikle enda mer innovative og skreddersydde nettløsninger. Ta kontakt for å styrke din digitale tilstedeværelse.",
      date: "01.03.2025",
      category: "Partnerskap",
      link: "#",
    },
    {
      title: "Fremtid Gruppen Starter Året med Rekordmåned i Januar!",
      content:
        "Januar 2025 har vært vår beste måned noensinne med over 30 nye kunder og 500 000 annonsevisninger på Google Ads og Facebook Ads. Våre målrettede kampanjer har gitt økt trafikk og engasjement – en fantastisk start på året!",
      date: "05.02.2025",
      category: "Resultater",
      link: "#",
    },
    {
      title: "Vi samarbeider med Creditsafe for tryggere forretninger!",
      content:
        "For å sikre solid økonomistyring har vi inngått et samarbeid med Creditsafe. Gjennom grundige kredittsjekker kan vi redusere økonomisk risiko og sikre trygge forretningsbeslutninger.",
      date: "05.03.2025",
      category: "Partnerskap",
      link: "#",
    },
    {
      title: "Fremtid Gruppen inngår samarbeid med Amedia",
      content:
        "Vårt nye samarbeid med Amedia gir oss muligheten til å tilby enda flere effektive annonseringsløsninger, både i trykte og digitale flater. Kombinasjonen av digitale annonser, avismarkedsføring og vår ekspertise innen SEO og nettsideutvikling gir en unik mulighet til å bygge en sterk merkevare.",
      date: "28.02.2025",
      category: "Partnerskap",
      link: "#",
    },
  ];

  return (
    <section id="nyheter" className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="mb-8">
          <details className="group" open>
            <summary className="text-black font-medium cursor-pointer hover:underline inline-flex items-center text-lg">
              Vis alle nyheter og pressemeldinger
              <svg
                className="ml-1 h-5 w-5 group-open:rotate-180 transition-transform"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </summary>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {newsItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start mb-2">
                        <Badge
                          variant="outline"
                          className="bg-gray-100 text-black"
                        >
                          {item.category}
                        </Badge>
                        <span className="text-sm text-gray-500">
                          {item.date}
                        </span>
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {item.content}
                      </p>
                      <motion.div
                        className="flex items-center text-black font-medium cursor-pointer group"
                        whileHover={{ x: 5 }}
                      >
                        <a
                          href={item.link}
                          className="inline-flex items-center"
                        >
                          Les mer
                          <ArrowRight
                            size={16}
                            className="ml-2 group-hover:translate-x-1 transition-transform"
                          />
                        </a>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </details>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 bg-white p-8 rounded-lg shadow-md"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Hvordan Starte med Dropshipping i Norge: En Komplett Guide 2025
          </h3>
          <div className="space-y-4">
            <p className="text-gray-700">
              Følg denne steg-for-steg guiden for å starte en
              dropshipping-bedrift i Norge:
            </p>
            <details className="group" open>
              <summary className="text-black font-medium cursor-pointer hover:underline inline-flex items-center">
                Vis hele guiden
                <svg
                  className="ml-1 h-4 w-4 group-open:rotate-180 transition-transform"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </summary>
              <div className="mt-4">
                <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                  <li>
                    <strong>Velg en Lønnsom Nisje:</strong> Finn en nisje med
                    etterspørsel og lav konkurranse – eksempelvis miljøvennlige
                    produkter, unike kjøkkenredskaper eller treningsutstyr for
                    hjemmebruk.
                  </li>
                  <li>
                    <strong>Finn en Pålitelig Leverandør:</strong> Vurder
                    plattformer som AliExpress, Spocket og SaleHoo for å finne
                    en leverandør som sender direkte til kundene.
                  </li>
                  <li>
                    <strong>Start en ny nettbutikk:</strong> Bruk brukervennlige
                    plattformer som Wix, Shopify eller WooCommerce for å sette
                    opp butikken din.
                  </li>
                  <li>
                    <strong>Betalingsløsninger:</strong> Tilby betalingsmetoder
                    som Vipps, Klarna eller Stripe for en trygg og enkel
                    betaling.
                  </li>
                  <li>
                    <strong>Markedsføring og Kundeservice:</strong> Benytt
                    Facebook- og Instagram-annonser, influencer-markedsføring og
                    SEO for å bygge en lojal kundebase.
                  </li>
                  <li>
                    <strong>Husk Lover og Regler:</strong> Registrer
                    virksomheten, følg norsk forbrukerlovgivning og MVA-regler.
                  </li>
                </ol>
                <p className="text-gray-700 mt-4">
                  Dropshipping er en populær forretningsmodell som lar deg selge
                  produkter uten å investere i lagerbeholdning – og vi er her
                  for å hjelpe deg med hvert steg!
                </p>
              </div>
            </details>
            <div className="mt-6 text-center">
              <Button
                asChild
                className="bg-black hover:bg-gray-800 transition-colors"
              >
                <a href="#kontakt">Få hjelp med din dropshipping-bedrift</a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;
