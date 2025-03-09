import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

interface CtaSectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

const CtaSection = ({
  title = "Få et gratis tilbud på din digitale løsning",
  subtitle = "Kontakt oss i dag for en uforpliktende samtale og få et skreddersydd tilbud innen 24 timer.",
  buttonText = "Få gratis tilbud nå",
  buttonLink = "#kontakt",
}: CtaSectionProps) => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-8">
            {subtitle}
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-gray-100 px-8 py-6 text-lg font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              <a href={buttonLink} className="inline-flex items-center">
                {buttonText}
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.div>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
