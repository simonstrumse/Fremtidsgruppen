import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";
import { Button } from "../ui/button";

const FloatingCta = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Show the CTA after 5 seconds
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setIsVisible(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [hasInteracted]);

  const handleClose = () => {
    setIsVisible(false);
    setIsOpen(false);
    setHasInteracted(true);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setHasInteracted(true);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-8 left-8 z-50"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          {isOpen ? (
            <motion.div
              className="bg-white rounded-lg shadow-xl p-4 w-72"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-bold text-gray-800">Trenger du hjelp?</h3>
                <button
                  onClick={handleClose}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={18} />
                </button>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Få et gratis tilbud på din digitale løsning innen 24 timer!
              </p>
              <Button
                asChild
                className="w-full bg-black hover:bg-gray-800 transition-colors"
              >
                <a href="#kontakt">Kontakt oss nå</a>
              </Button>
            </motion.div>
          ) : (
            <motion.button
              className="bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleToggle}
            >
              <MessageCircle size={24} />
            </motion.button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCta;
