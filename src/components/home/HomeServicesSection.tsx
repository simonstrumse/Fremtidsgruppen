import React from "react";
import { motion } from "framer-motion";
import { Globe, Shield, BarChart, Search, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

interface HomeServicesSectionProps {
  title?: string;
  subtitle?: string;
}

const HomeServicesSection = ({
  title = "Våre Tjenester",
  subtitle = "Vi tilbyr et bredt spekter av digitale tjenester for å hjelpe din bedrift å vokse",
}: HomeServicesSectionProps) => {
  const services = [
    {
      title: "Nettsideutvikling",
      description:
        "Profesjonelle og brukervennlige nettsider som reflekterer din bedrifts identitet.",
      icon: <Globe size={24} />,
      iconBgColor: "bg-blue-100",
      link: "/tjenester",
    },
    {
      title: "Brannmur og DDoS",
      description:
        "Beskyttelse mot cyberangrep og skadelig trafikk for stabil og sikker drift.",
      icon: <Shield size={24} />,
      iconBgColor: "bg-green-100",
      link: "/tjenester",
    },
    {
      title: "Markedsføring",
      description:
        "Strategisk digital markedsføring som hjelper deg å nå de riktige kundene.",
      icon: <BarChart size={24} />,
      iconBgColor: "bg-purple-100",
      link: "/tjenester",
    },
    {
      title: "SEO-Optimalisering",
      description:
        "Høyere rangering i søkemotorer slik at potensielle kunder finner deg først.",
      icon: <Search size={24} />,
      iconBgColor: "bg-orange-100",
      link: "/tjenester",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-white">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              whileHover={{ y: -10 }}
            >
              <div
                className={`${service.iconBgColor} w-12 h-12 rounded-full flex items-center justify-center mb-4 text-black`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 flex-grow">
                {service.description}
              </p>
              <motion.div
                className="flex items-center text-black font-medium cursor-pointer group"
                whileHover={{ x: 5 }}
              >
                <a href={service.link} className="inline-flex items-center">
                  Les mer
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-black hover:bg-gray-800 transition-colors"
          >
            <a href="/tjenester">Se alle våre tjenester</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeServicesSection;
