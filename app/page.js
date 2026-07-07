import Header from '../components/Header/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import BrandsSection from '../components/BrandsSection/BrandsSection';
import FeaturesSection from '../components/FeaturesSection/FeaturesSection';
import ConsolesSection from '../components/ConsolesSection/ConsolesSection';
import CardsSection from '../components/CardsSection/CardsSection';
import StrategyGamesSection from '../components/StrategyGamesSection/StrategyGamesSection';
import FavoriteGamesSection from '../components/FavoriteGamesSection/FavoriteGamesSection';
import ContactSection from '../components/ContactSection/ContactSection';
import Footer from '../components/Footer/Footer';
import WhatsAppButton from '../components/WhatsAppButton/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <BrandsSection />
        <FeaturesSection />
        <ConsolesSection />
        <CardsSection />
        <StrategyGamesSection />
        <FavoriteGamesSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
