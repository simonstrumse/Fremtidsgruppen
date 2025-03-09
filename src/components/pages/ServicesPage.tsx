import React from "react";
import { motion } from "framer-motion";
import { Globe, Shield, BarChart, Search, ArrowRight } from "lucide-react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Button } from "../ui/button";
import MetaTags from "../seo/MetaTags";
import { getSeoConfig } from "../seo/SeoConfig";

const ServicesPage = () => {
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
    <div className="min-h-screen flex flex-col">
      {/* SEO tags will be added once the component is ready */}
      <Navbar transparent={false} />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gray-50 py-20 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Våre Tjenester
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Vi tilbyr et bredt spekter av digitale tjenester for å hjelpe
                din bedrift å vokse og lykkes i dagens digitale landskap.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-16 mb-16">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  <div className={index % 2 === 1 ? "order-1 lg:order-2" : ""}>
                    <div
                      className={`${service.iconBgColor} w-16 h-16 rounded-full flex items-center justify-center mb-6 text-black`}
                    >
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Hva du får:
                      </h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-black mr-3 font-bold">✓</span>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="text-gray-700 mb-6">{service.benefits}</p>

                    <Button
                      asChild
                      className="bg-black hover:bg-gray-800 transition-colors"
                    >
                      <a href="/kontakt" className="inline-flex items-center">
                        {service.ctaText}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>

                  <div className={index % 2 === 1 ? "order-2 lg:order-1" : ""}>
                    <img
                      src={
                        index === 0
                          ? "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80" // Web development
                          : index === 1
                            ? "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80" // Security/Firewall
                            : index === 2
                              ? "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&q=80" // Marketing
                              : "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&q=80" // SEO
                      }
                      alt={service.title}
                      className="w-full h-auto rounded-lg shadow-lg object-cover h-[300px]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
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
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="bg-white p-6 rounded-lg shadow-sm relative"
                  >
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <h4 className="text-lg font-semibold mb-2 text-gray-800">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">
                      {step.description}
                    </p>
                    <p className="text-black text-xs font-semibold">
                      {step.duration}
                    </p>
                  </motion.div>
                ))}
              </div>
              <div className="text-center mt-8">
                <div className="bg-white p-4 rounded-lg inline-block mb-6 border border-gray-200">
                  <p className="text-gray-700 font-medium">
                    Total tidsramme:{" "}
                    <span className="text-black font-bold">19–30 dager</span>{" "}
                    for ordinære kunder
                  </p>
                  <p className="text-gray-700">
                    Gull/Platinum-kunder får{" "}
                    <span className="font-semibold">
                      raskere levering, prioritert behandling og eksklusiv
                      support
                    </span>
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    className="bg-black hover:bg-gray-800 transition-colors text-lg px-8 py-3"
                  >
                    <a href="/kontakt">Få et uforpliktende tilbud</a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-black text-black hover:bg-gray-100 transition-colors text-lg px-8 py-3"
                  >
                    <a href="#produkter">Se våre pakker</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
