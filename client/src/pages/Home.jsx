import { DragCards } from "../Components/DragCards";
import Hero from "../Components/Hero";
import BuyBook from "./BuyBook";
import Categories from "./Categories";
import ContactUs from "./ContactUs";
import Section from "./Section";

export default function Home() {
  return (
    <>
      <Hero />
      <DragCards />
      <BuyBook />
      <Categories />
      <ContactUs />
      <Section />
    </>
  );
}
