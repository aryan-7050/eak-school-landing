import { EnquiryProvider } from '@/components/EnquiryProvider';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { WhyChoose } from '@/components/WhyChoose';
import { Programs } from '@/components/Programs';
import { Highlights } from '@/components/HighLights';
import { Facilities } from '@/components/Facilities';
import { Process } from '@/components/Process';
import { DatesAndDocs } from '@/components/DatesAndDocs';
import { Fees } from '@/components/Fees';
import { Testimonials } from '@/components/Testimonials';
import { Faq } from '@/components/Faq';
import { FinalCta } from '@/components/FinalCta';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <EnquiryProvider>
      <div id="main" className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <WhyChoose />
          <Programs />
          <Highlights />
          <Facilities />
          <Process />
          <DatesAndDocs />
          <Fees />
          <Testimonials />
          <Faq />
          <FinalCta />
        </main>
        <Footer />
      </div>
    </EnquiryProvider>
  );
}

export default App;
