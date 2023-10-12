import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import BlogPage from "@/components/BlogPage/BlogPage";
import Faqs from "@/components/Faqs/Faqs";
import HealthCare from "@/components/HealthCare/HealthCare";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <Banner />
      <About />
      <Services />
      <HealthCare />
      <Faqs />
      <BlogPage />
    </div>
  );
}
