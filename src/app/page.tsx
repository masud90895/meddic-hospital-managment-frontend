import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <Banner />
      <About />
      <Services />
    </div>
  );
}
