import Header from '../components/Header/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import BrandsSection from '../components/BrandsSection/BrandsSection';
import FeaturesSection from '../components/FeaturesSection/FeaturesSection';
import ConsolesSection from '../components/ConsolesSection/ConsolesSection';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <BrandsSection />
        <FeaturesSection />
        <ConsolesSection />
      </main>
    </>
  );
}
