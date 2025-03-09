import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Users, Award, TrendingUp } from "lucide-react";

interface AboutSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  features?: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
}

const AboutSection = ({
  title = "Om Oss",
  subtitle = "Les Fremtid Gruppen sin historie",
  description = "Fremtid Gruppen AS ble grunnlagt med en klar visjon: å forenkle og optimalisere det digitale landskapet for bedrifter og enkeltpersoner. Vi er drevet av en lidenskap for innovasjon og har samlet et team av spesialister innen teknologi, design og digital markedsføring. Vår misjon er å levere skreddersydde løsninger som kombinerer høy kvalitet, funksjonalitet og verdi – alltid med fremtiden i fokus.",
  features = [
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
  ],
}: AboutSectionProps) => {
  return (
    <section id="omoss" className="py-20 px-4 md:px-8 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <h3 className="text-xl font-semibold text-black mb-4">{subtitle}</h3>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 line-clamp-3 mb-2">
              {description.substring(0, 150)}...
            </p>
            <details className="group">
              <summary className="text-black font-medium cursor-pointer hover:underline inline-flex items-center">
                Les mer
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
              <p className="text-lg text-gray-600 mt-2">{description}</p>
            </details>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
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

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-4">
              <h4 className="text-4xl font-bold text-black mb-2">500+</h4>
              <p className="text-gray-600">Prosjekter Fullført</p>
            </div>
            <div className="p-4">
              <h4 className="text-4xl font-bold text-black mb-2">98%</h4>
              <p className="text-gray-600">Kundetilfredshet</p>
            </div>
            <div className="p-4">
              <h4 className="text-4xl font-bold text-black mb-2">10+</h4>
              <p className="text-gray-600">Års Erfaring</p>
            </div>
            <div className="p-4">
              <h4 className="text-4xl font-bold text-black mb-2">250%</h4>
              <p className="text-gray-600">Gjennomsnittlig ROI</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
