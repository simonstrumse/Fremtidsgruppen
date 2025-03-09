import React from "react";
import { motion } from "framer-motion";

interface LogoScrollerProps {
  title?: string;
  subtitle?: string;
}

const LogoScroller = ({
  title = "Våre Samarbeidspartnere",
  subtitle = "Vi er stolte av å samarbeide med ledende aktører i bransjen",
}: LogoScrollerProps) => {
  const logos = [
    {
      name: "Amedia",
      src: "https://static.wixstatic.com/media/b5b1bc_ea33809c528f4cbcbf507f07e709c271~mv2.jpg/v1/fill/w_153,h_153,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/standard_compressed_Amedia_logo.jpg",
    },
    {
      name: "Wix",
      src: "https://static.wixstatic.com/media/b5b1bc_bb2ccb6e8c974b73967c72f4f0867975~mv2.jpg/v1/fill/w_160,h_160,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/277773414_386288333504437_100383973065952603_n.jpg",
    },
    {
      name: "Creditsafe",
      src: "https://static.wixstatic.com/media/b5b1bc_9484268fec3a435caf3776dd81f7aa4c~mv2.webp/v1/fill/w_179,h_59,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/b5b1bc_9484268fec3a435caf3776dd81f7aa4c~mv2.webp",
    },
    {
      name: "Stripe",
      src: "https://static.wixstatic.com/media/b5b1bc_6be68235f2314561ab5d5c9d59314d5e~mv2.png/v1/fill/w_136,h_59,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/stripe.png",
    },
    {
      name: "Vipps",
      src: "https://static.wixstatic.com/media/b5b1bc_510d813a815e4958875ce29b7aefb10c~mv2.png/v1/fill/w_196,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo_no_dpi.png",
    },
    {
      name: "Klarna",
      src: "https://static.wixstatic.com/media/b5b1bc_61ab623a6429458eaf305530971bbbb9~mv2.png/v1/fill/w_235,h_30,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b5b1bc_61ab623a6429458eaf305530971bbbb9~mv2.png",
    },
  ];

  return (
    <section className="py-10 px-4 md:px-8 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-white to-transparent"></div>

          <motion.div
            className="flex items-center space-x-16 py-4"
            animate={{
              x: ["-10%", "-60%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {/* Double the logos to create a seamless loop */}
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-16 flex items-center justify-center bg-white rounded-lg px-6 py-2"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-12 max-w-[120px] object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LogoScroller;
