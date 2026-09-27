import Header from "@/components/v2/header";
import Hero from "@/components/v2/hero";
import Services from "@/components/v2/services";
import Pricing from "@/components/v2/pricing";
import Gallery from "@/components/v2/gallery";
import Coverage from "@/components/v2/coverage";
import About from "@/components/v2/about";
import Cta from "@/components/v2/cta";
import Footer from "@/components/v2/footer";
import FloatingWa from "@/components/v2/floating-wa";
import ScrollReveal from "@/components/v2/scroll-reveal";

export default function V2Page() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="reveal"><Services /></div>
        <div className="reveal"><Pricing /></div>
        <div className="reveal"><Gallery /></div>
        <div className="reveal"><Coverage /></div>
        <div className="reveal"><About /></div>
        <div className="reveal"><Cta /></div>
      </main>
      <Footer />
      <FloatingWa />
    </>
  );
}
