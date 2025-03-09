import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import VideoBackground from "./VideoBackground";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

const HeroSection = ({
  title = "Din Digitale Fremtid Starter Her",
  subtitle = "Fremtid Gruppen – din partner for digital innovasjon, nettsideutvikling, SEO, markedsføring og sikkerhet.",
  ctaText = "Gratis Konsultasjon",
  ctaLink = "#kontakt",
}: HeroSectionProps) => {
  // Animation variants for sequential fade-in
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, type: "spring", stiffness: 100 },
    },
  };

  return (
    <section className="relative h-[800px] w-full overflow-hidden">
      {/* Video Background */}
      <VideoBackground
        videoSrc="https://vibecoding-norge.b-cdn.net/4210440-uhd_3840_2160_25fps.mp4"
        opacity={0.85}
      />

      {/* Content Container */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white drop-shadow-lg"
            variants={itemVariants}
          >
            {title}
          </motion.h1>

          <motion.p
            className="mx-auto mb-10 max-w-2xl text-xl text-white font-medium drop-shadow-md"
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-black px-8 py-6 text-lg font-medium hover:bg-gray-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <a href="#produkter" className="inline-flex items-center">
                Se våre produkter
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
            <Button
              asChild
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg font-medium border-white text-white bg-transparent backdrop-blur-sm hover:bg-white/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <a href={ctaLink} className="inline-flex items-center">
                {ctaText}
              </a>
            </Button>
          </motion.div>

          <motion.div
            className="mt-16 flex justify-center space-x-6"
            variants={itemVariants}
          >
            <div className="flex items-center">
              <motion.div
                className="flex -space-x-2"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                {[1, 2, 3].map((i) => (
                  <motion.img
                    key={i}
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=client${i}`}
                    alt="Client"
                    className="h-10 w-10 rounded-full border-2 border-white"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.2 + i * 0.2, type: "spring" }}
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                  />
                ))}
              </motion.div>
              <motion.span
                className="ml-3 text-sm font-medium text-white drop-shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.8 }}
              >
                Wix Legend Partner
              </motion.span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator with enhanced animation */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="flex flex-col items-center">
          <motion.span
            className="mb-2 text-sm font-medium text-white drop-shadow-md"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            Scroll for mer
          </motion.span>
          <motion.div
            className="h-10 w-1 rounded-full bg-white"
            animate={{
              height: [10, 20, 10],
              opacity: [0.3, 0.8, 0.3],
              backgroundColor: [
                "rgba(255,255,255,0.7)",
                "rgba(255,255,255,1)",
                "rgba(255,255,255,0.7)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
