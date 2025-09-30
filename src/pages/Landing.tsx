import { Preloader } from '@/components/Preloader';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { PainPoints } from '@/components/PainPoints';
import { Services } from '@/components/Services';
import { TryIt } from '@/components/TryIt';
import { Results } from '@/components/Results';
import { Testimonials } from '@/components/Testimonials';
import { Steps } from '@/components/Steps';
import { Video } from '@/components/Video';
import { FAQ } from '@/components/FAQ';
import { Trust } from '@/components/Trust';
import { Mission } from '@/components/Mission';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

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
        <PainPoints locale={locale} />
        <Services locale={locale} />
        <TryIt locale={locale} />
        <Results locale={locale} />
        <Testimonials locale={locale} />
        <Steps locale={locale} />
        <Video locale={locale} />
        <FAQ locale={locale} />
        <Trust locale={locale} />
        <Mission locale={locale} />
        <FinalCTA locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
};

export default Landing;
