import Header from "./header";
import Hero from "./hero";
import Overview from "./overview";
import PrdSection from "./prd-section";
import UserFlow from "./user-flow";
import NextSteps from "./next-steps";
import Footer from "./footer";

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Overview />
        <PrdSection />
        <UserFlow />
        <NextSteps />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
