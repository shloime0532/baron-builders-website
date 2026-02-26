import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Services from "@/components/services";
import FeaturedProject from "@/components/featured-project";
import About from "@/components/about";
import WhyBaron from "@/components/why-baron";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <FeaturedProject />
      <About />
      <WhyBaron />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
