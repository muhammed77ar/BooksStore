import CategoriesSection from "../Components/CategoriesSection";
import { DragCards } from "../Components/DragCards";
import Hero from "../Components/Hero";
import BuyBook from "./BuyBook";
import ContactUs from "./ContactUs";
import Section from "./Section";

export default function Home() {
  return (
    <>
      <Hero />
      <DragCards />
      <BuyBook />
      <CategoriesSection />
      <ContactUs />
      <Section />
    </>
  );
}
