import Head from 'next/head';
import Header from '../components/Header/page';
import Footer from '../components/Footer/page';
import { About } from '../components/About/page';
import Partner from '../components/Partner/page';
import MediaContent from '../components/Media/page';
import Contact from '../components/Contact/page';
import OurStory from '../components/Ourstory/page';
import Choose from '../components/Choose/page';
import Wealthy from '../components/Wealthy/page';
import PricingPlans from '../components/pricingplans/page';
import Services from '../components/Servicess/page';
import Cardpart from '../components/cardpart/page';
import SlideShowBar from '../components/slider/page';

export default function Mains() {
  return (
    <div>
      <Head>
        <title>Deepan India</title>
        <meta name="description" content="Deepan India Financial Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <section style={{ minHeight: '100vh' }}>
        <SlideShowBar />
        <Choose />
        <Wealthy data={3}/>
        <OurStory data={2}/>
         <About />
         <PricingPlans/>
         <Services />
         <Cardpart />
         <Partner />
         <MediaContent data={2}/>
         <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};