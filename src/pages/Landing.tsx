import { Preloader } from '@/components/Preloader';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { TryIt } from '@/components/TryIt';
import { Testimonials } from '@/components/Testimonials';
import { Steps } from '@/components/Steps';
import { Video } from '@/components/Video';
import { FAQ } from '@/components/FAQ';
import { Trust } from '@/components/Trust';
import { Mission } from '@/components/Mission';
import { Pricing } from '@/components/Pricing';
import { BlogResources } from '@/components/BlogResources';
import { FinalCTA } from '@/components/FinalCTA';
import { Newsletter } from '@/components/Newsletter';
import { Footer } from '@/components/Footer';
import { ExitPopup } from '@/components/ExitPopup';
import { ChatWidget } from '@/components/ChatWidget';

interface LandingProps {
  locale: 'gr' | 'en';
}

const Landing = ({ locale }: LandingProps) => {
  return (
    <>
      <Preloader />
      <Header locale={locale} />
      <main>
        <Hero locale={locale} />
        <Services locale={locale} />
        <TryIt locale={locale} />
        <Testimonials locale={locale} />
        <Steps locale={locale} />
        <Video locale={locale} />
        <FAQ locale={locale} />
        <Pricing locale={locale} />
        <BlogResources locale={locale} />
        <Trust locale={locale} />
        <Mission locale={locale} />
        <FinalCTA locale={locale} />
        <Newsletter locale={locale} />
      </main>
      <Footer locale={locale} />
      <ExitPopup locale={locale} />
      <ChatWidget locale={locale} />
    </>
  );
};

export default Landing;
