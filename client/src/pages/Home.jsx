import { DragCards } from "../Components/DragCards";
import Hero from "../Components/Hero";
import About from "./About";
import ContactUs from "./ContactUs";
import Section from "./Section";

export default function Home() {
  return (
    <>
      <Hero />
      <DragCards />
      <About />
      <ContactUs />
      <Section />
    </>
  );
}
