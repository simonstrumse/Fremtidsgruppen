import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "../ui/button";

interface HomeContactSectionProps {
  title?: string;
  subtitle?: string;
}

const HomeContactSection = ({
  title = "Ta Kontakt Med Oss",
  subtitle = "Vi er her for å hjelpe deg med dine digitale utfordringer",
}: HomeContactSectionProps) => {
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
            <p className="text-lg text-gray-600 mb-8">
              {subtitle}. Fyll ut kontaktskjemaet vårt, ring oss eller send oss
              en e-post, så vil vi svare deg så raskt som mulig.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="bg-black text-white p-3 rounded-full mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Telefon</p>
                  <a
                    href="tel:+4740309640"
                    className="text-lg font-medium text-gray-900 hover:text-black"
                  >
                    (+47) 403 09 640
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-black text-white p-3 rounded-full mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">E-post</p>
                  <a
                    href="mailto:post@fremtidgruppen.no"
                    className="text-lg font-medium text-gray-900 hover:text-black"
                  >
                    post@fremtidgruppen.no
                  </a>
                </div>
              </div>
            </div>

            <Button
              asChild
              className="bg-black hover:bg-gray-800 transition-colors"
            >
              <a href="/kontakt" className="inline-flex items-center">
                Kontakt oss nå
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Hvorfor kontakte oss?
            </h3>

            <ul className="space-y-4">
              {[
                "Gratis innledende konsultasjon for alle nye kunder",
                "Rask responstid – vi svarer innen 24 timer",
                "Skreddersydde løsninger tilpasset ditt budsjett",
                "Personlig oppfølging gjennom hele prosjektet",
                "Kontinuerlig support og vedlikehold etter lansering",
              ].map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <span className="text-black mr-3 font-bold">✓</span>
                  <span className="text-gray-700">{point}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-gray-700 italic">
                "Fremtid Gruppen har vært en uvurderlig partner for vår bedrift.
                Deres ekspertise og dedikasjon har hjulpet oss å oppnå
                resultater langt over forventning."
              </p>
              <p className="text-gray-900 font-medium mt-2">
                — Maria Johansen, Daglig Leder
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeContactSection;
