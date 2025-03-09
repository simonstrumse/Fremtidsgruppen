import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Package, Zap, Layers, Rocket } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import LeadForm from "./LeadForm";

interface ProductSectionProps {
  title?: string;
  subtitle?: string;
}

const ProductSection = ({
  title = "Våre Produkter",
  subtitle = "Skreddersydde digitale løsninger for din bedrift",
}: ProductSectionProps) => {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const openLeadForm = (productTitle: string) => {
    setSelectedProduct(productTitle);
    setIsLeadFormOpen(true);
  };
  const products = [
    {
      title: "Nettside Pakker",
      description: "Profesjonelle nettsider skreddersydd for din bedrift",
      features: [
        "Responsivt design for alle enheter",
        "SEO-optimalisert struktur",
        "Brukervennlig administrasjonspanel",
        "Integrert kontaktskjema",
      ],
      price: "Fra 9.990 kr",
      icon: <Package size={32} />,
      color: "bg-gray-100",
      link: "#kontakt",
      popular: false,
      discount: false,
    },
    {
      title: "Digital Markedsføring",
      description: "Målrettet markedsføring som gir resultater",
      features: [
        "Google Ads kampanjer",
        "Facebook og Instagram annonsering",
        "Innholdsproduksjon og strategi",
        "Månedlig rapportering og optimalisering",
      ],
      price: "Fra 4.990 kr/mnd",
      icon: <Rocket size={32} />,
      color: "bg-gray-100",
      link: "#kontakt",
      popular: true,
      discount: true,
      originalPrice: "7.990",
    },
    {
      title: "SEO Pakker",
      description: "Øk din synlighet i søkemotorer og få flere kunder",
      features: [
        "Nøkkelordanalyse og strategi",
        "On-page og teknisk SEO",
        "Innholdsoptimalisering",
        "Lokal SEO og Google My Business",
      ],
      price: "Fra 3.990 kr/mnd",
      icon: <Zap size={32} />,
      color: "bg-gray-100",
      link: "#kontakt",
      popular: false,
      discount: true,
      originalPrice: "6.990",
    },
    {
      title: "Komplett Digital Pakke",
      description: "Alt du trenger for en sterk digital tilstedeværelse",
      features: [
        "Profesjonell nettside",
        "SEO-optimalisering",
        "Digital markedsføring",
        "Månedlig vedlikehold og support",
      ],
      price: "Fra 14.990 kr + 5.990 kr/mnd",
      icon: <Layers size={32} />,
      color: "bg-gray-100",
      link: "#kontakt",
      popular: false,
      discount: false,
    },
  ];

  return (
    <section id="produkter" className="py-20 px-4 md:px-8 bg-white mt-10">
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
          <div className="mt-6 inline-block bg-gray-100 border border-gray-200 rounded-lg px-4 py-2 text-black">
            <p className="font-semibold">
              🔥 Begrenset tilbud: 15% rabatt på alle pakker ved bestilling i
              dag!
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-lg overflow-hidden border ${product.popular ? "border-black" : "border-gray-200"} bg-white shadow-lg flex flex-col h-full`}
            >
              <Badge
                className="absolute top-0 right-0 rounded-bl-lg rounded-tr-none z-10"
                variant={product.discount ? "destructive" : "default"}
              >
                {product.discount ? "Spar 37%" : "Populær"}
              </Badge>

              <div className="p-6">
                <div
                  className={`${product.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 text-black`}
                >
                  {product.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="mb-4">
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-black mr-2">✓</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-auto p-6 pt-0">
                <div className="mb-4">
                  {product.discount ? (
                    <div className="flex flex-col">
                      <span className="text-gray-500 line-through text-sm">
                        Veil. {product.originalPrice},-
                      </span>
                      <p className="text-2xl font-bold text-black">
                        {product.price}
                      </p>
                      <Badge
                        variant="outline"
                        className="bg-green-100 text-green-700 hover:bg-green-100 hover:text-green-700 w-fit mt-1"
                      >
                        Begrenset tilbud
                      </Badge>
                    </div>
                  ) : (
                    <p className="text-2xl font-bold text-black">
                      {product.price}
                    </p>
                  )}
                </div>
                <Button
                  onClick={() => openLeadForm(product.title)}
                  className={`w-full ${product.popular ? "bg-black" : "bg-gray-800"} hover:bg-gray-700 transition-colors text-base font-bold py-3`}
                >
                  <span className="flex items-center justify-center">
                    Bestill nå
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Button>
                <p className="text-center text-xs text-gray-500 mt-2">
                  Ingen bindingstid | 30 dagers pengene-tilbake-garanti
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
            Usikker på hvilken løsning som passer best for din bedrift? Kontakt
            oss for en uforpliktende samtale, så hjelper vi deg med å finne den
            perfekte løsningen tilpasset dine behov og budsjett.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-black hover:bg-gray-800 transition-colors"
          >
            <a href="#kontakt">Få et tilbud</a>
          </Button>
        </motion.div>
      </div>

      {/* Lead Form */}
      <LeadForm
        isOpen={isLeadFormOpen}
        onClose={() => setIsLeadFormOpen(false)}
        productTitle={selectedProduct}
      />
    </section>
  );
};

export default ProductSection;
