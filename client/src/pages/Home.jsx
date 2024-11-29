import CategoriesSection from "../Components/CategoriesSection";
import { DragCards } from "../Components/DragCards";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import BuyBook from "./BuyBook";
import ContactUs from "./ContactUs";
import Section from "./Section";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DragCards />
      <BuyBook />
      <CategoriesSection />
      <ContactUs />
      <Section />
    </>
  );
}
