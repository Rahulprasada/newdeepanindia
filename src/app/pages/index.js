import Head from "next/head";
import Header from "../components/Header/page";
import Footer from "../components/Footer/page";
import { About } from "../components/About/page";
import Partner from "../components/Partner/page";
import MediaContent from "../components/Media/page";
import Contact from "../components/Contact/page";
import OurStory from "../components/Ourstory/page";
import Choose from "../components/Choose/page";
import Wealthy from "../components/Wealthy/page";
import PricingPlans from "../components/pricingplans/page";
import Services from "../components/Servicess/page";
import Details from "../components/details/page";
import SlideShowBar from "../components/slider/page";

export default function Mains() {
  return (
    <>
      <SlideShowBar />
      <Choose />
      <Wealthy data={3} />
      <OurStory data={2} />
      <About />
      <PricingPlans />
      <Services />
      <Details />
      <Partner />
      <MediaContent data={2} />
      <Contact />
    </>
  );
}
