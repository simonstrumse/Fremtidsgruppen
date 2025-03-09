import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Users, Award, TrendingUp } from "lucide-react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Button } from "../ui/button";
import MetaTags from "../seo/MetaTags";
import { getSeoConfig } from "../seo/SeoConfig";

const AboutPage = () => {
  const features = [
    {
      icon: <CheckCircle className="text-black" size={24} />,
      title: "Wix Legend Partner",
      description:
        "Vi er stolte av å være verifisert av Wix og inneha den prestisjefylte statusen som Wix Legend Partner. Dette bekrefter vår ekspertise og forpliktelse til å levere førsteklasses løsninger innen webdesign og digital utvikling.",
    },
    {
      icon: <Users className="text-black" size={24} />,
      title: "Ekspertteam",
      description:
        "Våre rådgivere er Google-sertifiserte eksperter og offisielle Wix-partnere, noe som betyr at vi besitter den nyeste kunnskapen og de beste verktøyene for å skape vekst, økt synlighet og målbare resultater.",
    },
    {
      icon: <Award className="text-black" size={24} />,
      title: "Sertifiseringer",
      description:
        "To av våre rådgivere er nå offisielt verifiserte av Wix med SEO Specialist Certification og Wix Developer Certification. I tillegg har en av våre dyktige rådgivere blitt verifisert som SEO-spesialist.",
    },
    {
      icon: <TrendingUp className="text-black" size={24} />,
      title: "Lokal forankring",
      description:
        "Som et norsk selskap med sterk forankring i Finnmark, forstår vi de unike utfordringene og mulighetene i det lokale næringslivet. Vi hjelper bedrifter i hele regionen med å skape en sterk digital tilstedeværelse.",
    },
  ];

  const description =
    "Fremtid Gruppen AS ble grunnlagt med en klar visjon: å forenkle og optimalisere det digitale landskapet for bedrifter og enkeltpersoner. Vi er drevet av en lidenskap for innovasjon og har samlet et team av spesialister innen teknologi, design og digital markedsføring. Vår misjon er å levere skreddersydde løsninger som kombinerer høy kvalitet, funksjonalitet og verdi – alltid med fremtiden i fokus.";

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
                Om Fremtid Gruppen
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Din partner for digital innovasjon, nettsideutvikling, SEO,
                markedsføring og sikkerhet.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Vår Historie
                </h2>
                <div className="prose prose-lg max-w-none text-gray-600">
                  <p>{description}</p>
                  <p className="mt-4">
                    Siden oppstarten har vi vokst til å bli en ledende aktør
                    innen digital utvikling og markedsføring i Nord-Norge. Vår
                    suksess er bygget på et fundament av kundetilfredshet,
                    teknisk ekspertise og en dyp forståelse av lokale
                    markedsbehov.
                  </p>
                  <p className="mt-4">
                    I dag betjener vi over 200 kunder på tvers av ulike
                    bransjer, fra små lokale bedrifter til større regionale
                    aktører. Vår tilnærming er alltid den samme: å levere
                    skreddersydde digitale løsninger som gir målbare resultater.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="rounded-lg overflow-hidden shadow-xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                  alt="Fremtid Gruppen Team"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Hvorfor Velge Oss
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="flex gap-4 p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Våre Resultater
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                  <h4 className="text-4xl font-bold text-black mb-2">500+</h4>
                  <p className="text-gray-600">Prosjekter Fullført</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                  <h4 className="text-4xl font-bold text-black mb-2">98%</h4>
                  <p className="text-gray-600">Kundetilfredshet</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                  <h4 className="text-4xl font-bold text-black mb-2">10+</h4>
                  <p className="text-gray-600">Års Erfaring</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                  <h4 className="text-4xl font-bold text-black mb-2">250%</h4>
                  <p className="text-gray-600">Gjennomsnittlig ROI</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Klar til å starte ditt neste prosjekt?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Vi er her for å hjelpe deg med å nå dine digitale mål. Kontakt
                oss i dag for en uforpliktende samtale.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-black hover:bg-gray-800 transition-colors px-8 py-6 text-lg"
              >
                <a href="/kontakt">Kontakt Oss</a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
