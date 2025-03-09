import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

interface FooterProps {
  companyName?: string;
  companyPhone?: string;
  companyEmail?: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
  navigationLinks?: {
    title: string;
    href: string;
  }[];
  copyrightYear?: number;
}

const Footer = ({
  companyName = "Fremtid Gruppen",
  companyPhone = "+47 403 09 640",
  companyEmail = "post@fremtidgruppen.no",
  socialLinks = {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
  navigationLinks = [
    { title: "Hjem", href: "/" },
    { title: "Om Oss", href: "/om-oss" },
    { title: "Tjenester", href: "/tjenester" },
    { title: "Produkter", href: "/#produkter" },
    { title: "Nyheter", href: "/#nyheter" },
    { title: "Kontakt", href: "/kontakt" },
  ],
  copyrightYear = new Date().getFullYear(),
}: FooterProps) => {
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const socialIcons = [
    {
      name: "facebook",
      icon: <Facebook size={20} />,
      link: socialLinks.facebook,
    },
    { name: "twitter", icon: <Twitter size={20} />, link: socialLinks.twitter },
    {
      name: "instagram",
      icon: <Instagram size={20} />,
      link: socialLinks.instagram,
    },
    {
      name: "linkedin",
      icon: <Linkedin size={20} />,
      link: socialLinks.linkedin,
    },
  ];

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
      className="bg-gray-50 pt-12 pb-6 border-t border-gray-200 w-full"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800">{companyName}</h3>
            <p className="text-gray-600 max-w-xs">
              Din partner for digital innovasjon, nettsideutvikling, SEO,
              markedsføring og sikkerhet.
            </p>
            <div className="flex space-x-3">
              {socialIcons.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-black hover:border-gray-800 transition-colors"
                  whileHover={{ y: -3, scale: 1.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Hurtiglenker</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Våre Tjenester</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/tjenester"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Nettsideutvikling
                </a>
              </li>
              <li>
                <a
                  href="/tjenester"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Brannmur og DDoS
                </a>
              </li>
              <li>
                <a
                  href="/tjenester"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Markedsføring
                </a>
              </li>
              <li>
                <a
                  href="/tjenester"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  SEO-Optimalisering
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Kontakt Oss</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-black flex-shrink-0" />
                <a
                  href={`tel:${companyPhone}`}
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  {companyPhone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-black flex-shrink-0" />
                <a
                  href={`mailto:${companyEmail}`}
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  {companyEmail}
                </a>
              </li>
              <li className="flex items-start">
                <MapPin
                  size={18}
                  className="mr-2 text-black mt-1 flex-shrink-0"
                />
                <span className="text-gray-600">Finnmark, Norge</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-200 pt-6 mt-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {copyrightYear} {companyName}. Alle rettigheter reservert.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-600 hover:text-black text-sm transition-colors"
              >
                Personvernerklæring
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-black text-sm transition-colors"
              >
                Vilkår for bruk
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-black text-sm transition-colors"
              >
                Nettstedkart
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
