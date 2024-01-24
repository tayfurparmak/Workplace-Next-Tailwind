import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import ListSection from "@/components/List";
import Pricing from "@/components/Pricing";
import { Inter } from "@next/font/google";
import MapList from "@/components/MapList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSectionOne />
      <Features /> 
       <AboutSectionTwo />
      <MapList />
      <Pricing />
      <ListSection />
      <Contact />
    </>
  );
}
