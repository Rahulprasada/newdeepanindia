// Import all the components that make up your homepage's content
import { About } from '../components/About/page';
import Partner from '../components/Partner/page';
import MediaContent from '../components/Media/page';
import Contact from '../components/Contact/page';
import OurStory from '../components/Ourstory/page';
import Choose from '../components/Choose/page';
import Wealthy from '../components/Wealthy/page';
import PricingPlans from '../components/pricingplans/page';
import Services from '../components/Servicess/page';
import Details from '../components/details/page';
import SlideShowBar from '../components/slider/page';
import FinancialCalculatorsMUI from '../components/InvestmentCalculators/page';

// This is your homepage. It only contains the content specific to this page.
export default function HomePage() {
  return (
    // You can use a <main> tag here or a React Fragment <>
    // since the primary <main> can be in the layout.
    <>
      <SlideShowBar />
      <Choose />
      <Wealthy data={3}/>
      <OurStory data={2}/>
      <About />
      <PricingPlans/>
      <Services />
      <Details />
      <Partner />
      <MediaContent data={5}/>
      <FinancialCalculatorsMUI />
      <Contact />
    </>
  );
};