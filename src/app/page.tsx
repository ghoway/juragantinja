import Header from "@/components/header";
import Hero from "@/components/hero";
import WhyUs from "@/components/why-us";
import Services from "@/components/services";
import Pricing from "@/components/pricing";
import Gallery from "@/components/gallery";
import Coverage from "@/components/coverage";
import About from "@/components/about";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";
import FloatingWa from "@/components/floating-wa";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <Services />
        <Pricing />
        <Gallery />
        <Coverage />
        <About />
        <CtaSection />
      </main>
      <Footer />
      <FloatingWa />
    </>
  );
}
