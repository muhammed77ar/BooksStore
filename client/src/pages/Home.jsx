import { DragCards } from "../Components/DragCards";
import Hero from "../Components/Hero";
import Categories from "./Categories";
import ContactUs from "./ContactUs";
import Section from "./Section";

export default function Home() {
  return (
    <>
      <Hero />
      <DragCards />
      <Categories />
      <ContactUs />
      <Section />
    </>
  );
}
