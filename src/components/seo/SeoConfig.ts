// SEO Configuration for all pages

export const seoConfig = {
  home: {
    title: "Fremtid Gruppen | Digital Innovasjon & Nettsideutvikling",
    description:
      "Fremtid Gruppen er din partner for digital innovasjon, nettsideutvikling, SEO, markedsføring og sikkerhet. Vi hjelper din bedrift å vokse i det digitale landskapet.",
    keywords:
      "nettsideutvikling, digital markedsføring, SEO, brannmur, DDoS beskyttelse, webdesign, nettbutikk, Finnmark, Norge",
    ogImage:
      "https://vibecoding-norge.b-cdn.net/4210440-uhd_3840_2160_25fps.mp4", // Video background from hero section
    canonicalUrl: "/",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Fremtid Gruppen",
      url: "https://fremtidgruppen.no",
      logo: "https://static.wixstatic.com/media/b5b1bc_32780b352f1e4d1fb800d203eb68deee~mv2.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+4740309640",
        contactType: "customer service",
        availableLanguage: "Norwegian",
      },
      sameAs: [
        "https://www.facebook.com/fremtidgruppen",
        "https://www.instagram.com/fremtidgruppen",
        "https://www.linkedin.com/company/fremtidgruppen",
      ],
    },
  },
  about: {
    title: "Om Oss | Fremtid Gruppen - Din Digitale Partner",
    description:
      "Lær mer om Fremtid Gruppen, vår historie, vårt team og vår visjon om å forenkle og optimalisere det digitale landskapet for bedrifter i Norge.",
    keywords:
      "om fremtid gruppen, digital partner, wix legend partner, nettsideeksperter, finnmark, norge",
    ogImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80", // Team image
    canonicalUrl: "/om-oss",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      mainEntity: {
        "@type": "Organization",
        name: "Fremtid Gruppen",
        description:
          "Fremtid Gruppen AS ble grunnlagt med en klar visjon: å forenkle og optimalisere det digitale landskapet for bedrifter og enkeltpersoner.",
        foundingDate: "2015",
        founders: [
          {
            "@type": "Person",
            name: "Fremtid Gruppen Grunnlegger",
          },
        ],
        numberOfEmployees: "10+",
        award: "Wix Legend Partner",
      },
    },
  },
  services: {
    title: "Våre Tjenester | Nettsideutvikling, SEO & Digital Markedsføring",
    description:
      "Utforsk våre digitale tjenester: nettsideutvikling, brannmur og DDoS-beskyttelse, digital markedsføring og SEO-optimalisering for din bedrift.",
    keywords:
      "nettsideutvikling, brannmur, DDoS beskyttelse, digital markedsføring, SEO optimalisering, google ads, sosiale medier",
    ogImage:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=80", // Web development image
    canonicalUrl: "/tjenester",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "Service",
          position: 1,
          name: "Nettsideutvikling",
          description:
            "Vi designer og utvikler moderne, profesjonelle og brukervennlige nettsider som reflekterer din bedrifts identitet.",
          provider: {
            "@type": "Organization",
            name: "Fremtid Gruppen",
          },
        },
        {
          "@type": "Service",
          position: 2,
          name: "Brannmur og DDoS",
          description:
            "Vi beskytter nettsiden din mot cyberangrep og skadelig trafikk, slik at du opprettholder en stabil og sikker drift.",
          provider: {
            "@type": "Organization",
            name: "Fremtid Gruppen",
          },
        },
        {
          "@type": "Service",
          position: 3,
          name: "Markedsføring",
          description:
            "Vi hjelper deg med å nå de riktige kundene gjennom strategisk digital markedsføring.",
          provider: {
            "@type": "Organization",
            name: "Fremtid Gruppen",
          },
        },
        {
          "@type": "Service",
          position: 4,
          name: "SEO-Optimalisering",
          description:
            "Vi hjelper din bedrift med å rangere høyere i søkemotorer slik at potensielle kunder finner deg først.",
          provider: {
            "@type": "Organization",
            name: "Fremtid Gruppen",
          },
        },
      ],
    },
  },
  contact: {
    title: "Kontakt Oss | Fremtid Gruppen - Få et Uforpliktende Tilbud",
    description:
      "Ta kontakt med Fremtid Gruppen for en uforpliktende samtale om dine digitale behov. Vi svarer innen 24 timer og hjelper deg med å finne den perfekte løsningen.",
    keywords:
      "kontakt fremtid gruppen, digital konsultasjon, gratis tilbud, nettsideprosjekt, digital markedsføring",
    ogImage:
      "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=80", // Contact/support image
    canonicalUrl: "/kontakt",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      mainEntity: {
        "@type": "Organization",
        name: "Fremtid Gruppen",
        telephone: "+4740309640",
        email: "post@fremtidgruppen.no",
        address: {
          "@type": "PostalAddress",
          addressRegion: "Finnmark",
          addressCountry: "Norge",
        },
        openingHours: "Mo-Fr 09:00-16:00",
      },
    },
  },
};

// Helper function to get SEO config for a specific page
export const getSeoConfig = (page: keyof typeof seoConfig) => {
  return seoConfig[page];
};
