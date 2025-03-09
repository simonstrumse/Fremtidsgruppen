import React from "react";
import { motion } from "framer-motion";

interface ClientsSectionProps {
  title?: string;
  subtitle?: string;
  clients?: {
    name: string;
    logo: string;
  }[];
}

const ClientsSection = ({
  title = "Våre Kunder",
  subtitle = "Vi er stolte av å samarbeide med disse fantastiske bedriftene",
  clients = [
    {
      name: "Bedrift 1",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80",
    },
    {
      name: "Bedrift 2",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80",
    },
    {
      name: "Bedrift 3",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80",
    },
    {
      name: "Bedrift 4",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80",
    },
    {
      name: "Bedrift 5",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80",
    },
    {
      name: "Bedrift 6",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80",
    },
  ],
}: ClientsSectionProps) => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-16 max-w-full grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
