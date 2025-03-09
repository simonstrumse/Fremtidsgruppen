import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { Globe, Shield, BarChart, Search } from "lucide-react";
import { Button } from "../ui/button";

interface ServicesSectionProps {
  title?: string;
  subtitle?: string;
}

const ServicesSection = ({
  title = "Tjenester",
  subtitle = "Vi tilbyr et bredt spekter av digitale tjenester for å hjelpe din bedrift å vokse",
}: ServicesSectionProps) => {
  const services = [
    {
      title: "Nettsideutvikling",
      description:
        "Vi designer og utvikler moderne, profesjonelle og brukervennlige nettsider som reflekterer din bedrifts identitet og hjelper deg å nå dine forretningsmål.",
      icon: <Globe size={24} />,
      iconBgColor: "bg-blue-100",
      features: [
        "Responsivt design – fungerer sømløst på alle enheter",
        "Skreddersydd funksjonalitet – tilpasset dine unike behov",
        "Brukervennlig administrasjon – enkelt å oppdatere innhold",
        "Effektiv drift og teknisk støtte – stabil og sikker drift",
      ],
      benefits:
        "Fordeler: økt synlighet, høyere engasjement, bedre SEO og løsninger som vokser med din bedrift.",
      ctaText: "Få en gratis konsultasjon",
    },
    {
      title: "Brannmur og DDoS",
      description:
        "Vi beskytter nettsiden din mot cyberangrep og skadelig trafikk, slik at du opprettholder en stabil og sikker drift.",
      icon: <Shield size={24} />,
      iconBgColor: "bg-green-100",
      features: [
        "Brannmur-beskyttelse – filtrerer innkommende trafikk",
        "DDoS-beskyttelse – forhindrer overbelastningsangrep",
        "Sikkerhetsovervåkning – kontinuerlig trusselovervåking",
        "Rask gjenoppretting – minimal nedetid ved angrep",
      ],
      benefits:
        "Fordeler: tryggere nettside, minimal nedetid, høy ytelse og automatisert trusselhåndtering.",
      ctaText: "Få en skreddersydd sikkerhetsløsning",
    },
    {
      title: "Markedsføring",
      description:
        "Vi hjelper deg med å nå de riktige kundene gjennom strategisk digital markedsføring.",
      icon: <BarChart size={24} />,
      iconBgColor: "bg-purple-100",
      features: [
        "Sosiale Medier – skaper engasjement på Facebook, Instagram og LinkedIn",
        "Google Ads – målrettede kampanjer for umiddelbare resultater",
        "E-postmarkedsføring – personlige og automatiserte nyhetsbrev",
        "Analyser og rapportering – optimaliserer kampanjene dine",
      ],
      benefits:
        "Fordeler: økt merkevarekjennskap, høyere konverteringsrate, tydelig resultatmåling og skalerbar vekst.",
      ctaText: "La oss skreddersy en strategi",
    },
    {
      title: "SEO-Optimalisering",
      description:
        "Vi hjelper din bedrift med å rangere høyere i søkemotorer slik at potensielle kunder finner deg først.",
      icon: <Search size={24} />,
      iconBgColor: "bg-orange-100",
      features: [
        "Nøkkelordoptimalisering",
        "Teknisk SEO – optimalisering av struktur, hastighet og ytelse",
        "Lokal SEO – dominerer lokale søkeresultater og Google Maps",
        "Innholdsoptimalisering – engasjerende og autoritativt innhold",
      ],
      benefits:
        "Fordeler: økt organisk trafikk, bedre synlighet, kostnadseffektive leads og langsiktig vekst.",
      ctaText: "Få din bedrift på første side",
    },
  ];

  return (
    <section id="tjenester" className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              features={service.features}
              benefits={service.benefits}
              icon={service.icon}
              iconBgColor={service.iconBgColor}
              delay={0.2 + index * 0.1}
              ctaText={service.ctaText}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 p-8 rounded-lg shadow-md"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Vår Arbeidsprosess
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              {
                step: 1,
                title: "Innledende kontakt",
                description:
                  "Vi starter med en samtale for å forstå dine behov og mål",
                duration: "1–3 dager",
              },
              {
                step: 2,
                title: "Strategi & planlegging",
                description:
                  "Utarbeider en detaljert prosjektplan med milepæler",
                duration: "2–5 dager",
              },
              {
                step: 3,
                title: "Design & utvikling",
                description: "Utvikler nettsiden og kampanjemateriell",
                duration: "5–14 dager",
              },
              {
                step: 4,
                title: "Testing & kvalitetssikring",
                description: "Sikrer ytelse og sikkerhet",
                duration: "2–5 dager",
              },
              {
                step: 5,
                title: "Lansering & overlevering",
                description: "Publisering og opplæring",
                duration: "1–3 dager",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm relative"
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#eb444b] text-white rounded-full flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-800">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-sm mb-2">{step.description}</p>
                <p className="text-[#eb444b] text-xs font-semibold">
                  {step.duration}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <div className="bg-white p-4 rounded-lg inline-block mb-6 border border-gray-200">
              <p className="text-gray-700 font-medium">
                Total tidsramme:{" "}
                <span className="text-[#eb444b] font-bold">19–30 dager</span>{" "}
                for ordinære kunder
              </p>
              <p className="text-gray-700">
                Gull/Platinum-kunder får{" "}
                <span className="font-semibold">
                  raskere levering, prioritert behandling og eksklusiv support
                </span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-[#eb444b] hover:bg-[#df666d] transition-colors text-lg px-8 py-3"
              >
                <a href="#kontakt">Få et uforpliktende tilbud</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#eb444b] text-[#eb444b] hover:bg-red-50 transition-colors text-lg px-8 py-3"
              >
                <a href="#produkter">Se våre pakker</a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
