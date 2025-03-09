import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

interface HomeAboutSectionProps {
  title?: string;
  subtitle?: string;
}

const HomeAboutSection = ({
  title = "Om Fremtid Gruppen",
  subtitle = "Din partner for digital innovasjon og vekst",
}: HomeAboutSectionProps) => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {title}
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Fremtid Gruppen AS ble grunnlagt med en klar visjon: å forenkle og
              optimalisere det digitale landskapet for bedrifter og
              enkeltpersoner. Vi er drevet av en lidenskap for innovasjon og har
              samlet et team av spesialister innen teknologi, design og digital
              markedsføring.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="text-2xl font-bold text-black mb-1">500+</h4>
                <p className="text-gray-600 text-sm">Prosjekter Fullført</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="text-2xl font-bold text-black mb-1">10+</h4>
                <p className="text-gray-600 text-sm">Års Erfaring</p>
              </div>
            </div>
            <Button
              asChild
              className="bg-black hover:bg-gray-800 transition-colors"
            >
              <a href="/om-oss" className="inline-flex items-center">
                Les mer om oss
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
              alt="Fremtid Gruppen Team"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutSection;
