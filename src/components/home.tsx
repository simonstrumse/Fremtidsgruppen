import React, { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import MetaTags from "../components/seo/MetaTags";
import { getSeoConfig } from "../components/seo/SeoConfig";

// Import all the required components
import Navbar from "./layout/Navbar";
import HeroSection from "./home/HeroSection";
import HomeAboutSection from "./home/HomeAboutSection";
import HomeServicesSection from "./home/HomeServicesSection";
import HomeContactSection from "./home/HomeContactSection";
import ProductSection from "./home/ProductSection";
import ClientsSection from "./home/ClientsSection";
import CtaSection from "./home/CtaSection";
import NewsSection from "./home/NewsSection";
import Footer from "./layout/Footer";
import { ArrowUp } from "lucide-react";
import FloatingCta from "./home/FloatingCta";
import LogoScroller from "./home/LogoScroller";

interface HomePageProps {
  // Props for customizing the homepage if needed
  heroTitle?: string;
  heroSubtitle?: string;
  servicesTitle?: string;
  servicesSubtitle?: string;
  aboutTitle?: string;
  aboutSubtitle?: string;
  newsTitle?: string;
  newsSubtitle?: string;
  contactTitle?: string;
  contactSubtitle?: string;
}

const HomePage = ({
  heroTitle,
  heroSubtitle,
  servicesTitle,
  servicesSubtitle,
  aboutTitle,
  aboutSubtitle,
  newsTitle,
  newsSubtitle,
  contactTitle,
  contactSubtitle,
}: HomePageProps) => {
  const { scrollYProgress } = useScroll();
  const scrollButtonOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Scroll to section when hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Handle initial hash on load
    if (window.location.hash) {
      setTimeout(handleHashChange, 500); // Delay to ensure components are rendered
    }

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Set loaded state after a short delay to trigger animations
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Page transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="relative min-h-screen bg-white overflow-x-hidden"
      initial="initial"
      animate="animate"
      variants={pageVariants}
    >
      {/* SEO tags will be added once the component is ready */}
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative">
        <AnimatePresence>
          {isLoaded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <HeroSection title={heroTitle} subtitle={heroSubtitle} />
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Logo Scroller - Partners */}
      <LogoScroller />

      {/* Product Section - Moved to top for better conversions */}
      <ProductSection />

      {/* CTA Section */}
      <CtaSection />

      {/* Services Section - Simplified for homepage */}
      <HomeServicesSection title={servicesTitle} subtitle={servicesSubtitle} />

      {/* About Section - Simplified for homepage */}
      <HomeAboutSection title={aboutTitle} subtitle={aboutSubtitle} />

      {/* News Section */}
      <NewsSection title={newsTitle} subtitle={newsSubtitle} />

      {/* Contact Section - Simplified for homepage */}
      <HomeContactSection title={contactTitle} subtitle={contactSubtitle} />

      {/* Footer */}
      <Footer />

      {/* Scroll to top button */}
      <AnimatePresence>
        <motion.button
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-black text-white shadow-lg hover:bg-gray-800 transition-all duration-300"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ y: 0 }}
          style={{
            opacity: scrollButtonOpacity,
            scale: scrollButtonOpacity,
          }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{ duration: 0.5, type: "spring" }}
          whileHover={{
            scale: 1.2,
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
            backgroundColor: "#333333",
          }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="h-6 w-6" />
        </motion.button>
      </AnimatePresence>

      {/* Floating CTA */}
      <FloatingCta />
    </motion.div>
  );
};

export default HomePage;
