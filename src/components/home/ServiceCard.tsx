import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  features?: string[];
  benefits?: string;
  icon: React.ReactNode;
  iconBgColor?: string;
  delay?: number;
  ctaText?: string;
  ctaLink?: string;
}

const ServiceCard = ({
  title,
  description,
  features = [],
  benefits = "",
  icon,
  iconBgColor = "bg-blue-100",
  delay = 0.2,
  ctaText = "Kontakt oss",
  ctaLink = "#kontakt",
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
      whileHover={{
        y: -10,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      }}
      className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-500 flex flex-col h-full w-full"
    >
      <motion.div
        className={`${iconBgColor} w-16 h-16 rounded-full flex items-center justify-center mb-5 text-black`}
        whileHover={{
          scale: 1.1,
          rotate: 5,
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {icon}
        </motion.div>
      </motion.div>

      <motion.h3
        className="text-xl font-semibold mb-3 text-gray-800"
        whileHover={{ color: "#000000" }}
      >
        {title}
      </motion.h3>

      <p className="text-gray-600 mb-4">{description}</p>

      {features.length > 0 && (
        <div className="mb-4">
          <p className="font-semibold text-gray-700 mb-2">Hva du får:</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {benefits && <p className="text-gray-600 mb-5">{benefits}</p>}

      <div className="mt-auto">
        <motion.div
          className="flex items-center text-black font-medium cursor-pointer group"
          whileHover={{ x: 8 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <a href={ctaLink} className="inline-flex items-center">
            {ctaText}
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
                repeatType: "reverse",
              }}
            >
              <ArrowRight
                size={18}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
