import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavbarProps {
  transparent?: boolean;
  links?: Array<{ label: string; href: string }>;
  logo?: React.ReactNode;
}

const Navbar = ({
  transparent = true,
  links = [
    { label: "Hjem", href: "/" },
    { label: "Om Oss", href: "/om-oss" },
    { label: "Tjenester", href: "/tjenester" },
    { label: "Produkter", href: "/#produkter" },
    { label: "Nyheter", href: "/#nyheter" },
    { label: "Kontakt", href: "/kontakt" },
  ],
  logo = (
    <div className="flex items-center">
      <img
        src="https://static.wixstatic.com/media/b5b1bc_32780b352f1e4d1fb800d203eb68deee~mv2.png/v1/fill/w_60,h_71,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IconOnly_Transparent_NoBuffer%20(6).png"
        alt="Fremtid Gruppen Logo"
        className="h-10 mr-2"
      />
      <div className="text-2xl font-bold text-black">Fremtid Gruppen</div>
    </div>
  ),
}: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Update active link based on scroll position
      const sections = links
        .map((link) => link.href)
        .filter((href) => href.startsWith("#"));

      for (const section of sections.reverse()) {
        // Check from bottom to top
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            // 100px from the top
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled, links]);

  const navbarClasses = cn(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full",
    {
      "bg-transparent": transparent && !scrolled,
      "bg-white/90 backdrop-blur-md shadow-md": scrolled || !transparent,
    },
  );

  const getLinkClasses = (href: string) => {
    return cn(
      "text-sm font-medium transition-all duration-300 hover:text-gray-800 relative py-2",
      {
        "text-gray-800": scrolled || !transparent,
        "text-white": transparent && !scrolled,
        "font-semibold": activeLink === href,
      },
    );
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0, overflow: "hidden" },
    open: { opacity: 1, height: "auto", overflow: "hidden" },
  };

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          {logo}
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          className="hidden md:flex items-center space-x-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
        >
          <ul className="flex space-x-8">
            {links.map((link, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.3, type: "spring" }}
              >
                <a
                  href={link.href}
                  className={getLinkClasses(link.href)}
                  onClick={() => setActiveLink(link.href)}
                >
                  {link.label}
                  {activeLink === link.href && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-black w-full"
                      layoutId="activeIndicator"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              </motion.li>
            ))}
          </ul>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
          >
            <Button
              className="bg-black hover:bg-gray-800 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              size="sm"
              asChild
            >
              <a href="#kontakt">
                <Phone className="mr-2 h-4 w-4" /> Kontakt Oss
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn({
              "text-gray-800": scrolled || !transparent,
              "text-white": transparent && !scrolled,
            })}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={mobileMenuOpen ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
          </Button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white/95 backdrop-blur-md absolute w-full shadow-lg"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            transition={{ duration: 0.4, type: "spring" }}
          >
            <div className="container mx-auto px-4 py-4">
              <ul className="flex flex-col space-y-4">
                {links.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                  >
                    <a
                      href={link.href}
                      className={`text-gray-800 text-sm font-medium block py-2 hover:text-blue-600 ${activeLink === link.href ? "text-blue-600 font-semibold" : ""}`}
                      onClick={() => {
                        setActiveLink(link.href);
                        setMobileMenuOpen(false);
                      }}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  className="pt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: links.length * 0.1, type: "spring" }}
                >
                  <Button
                    className="bg-black hover:bg-gray-800 text-white w-full rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                    size="sm"
                    asChild
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <a href="#kontakt">
                      <Phone className="mr-2 h-4 w-4" /> Kontakt Oss
                    </a>
                  </Button>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
