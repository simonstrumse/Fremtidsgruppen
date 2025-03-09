import { Suspense, lazy } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";

// Lazy load page components
const AboutPage = lazy(() => import("./components/pages/AboutPage"));
const ServicesPage = lazy(() => import("./components/pages/ServicesPage"));
const ContactPage = lazy(() => import("./components/pages/ContactPage"));

function App() {
  // Tempo routes for development environment
  const tempoRoutes =
    import.meta.env.VITE_TEMPO === "true" ? useRoutes(routes) : null;

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          <div className="text-xl font-semibold">Laster...</div>
        </div>
      }
    >
      {tempoRoutes}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/om-oss" element={<AboutPage />} />
        <Route path="/tjenester" element={<ServicesPage />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
}

export default App;
