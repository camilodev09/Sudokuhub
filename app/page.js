import Header from '../components/Header/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import BrandsSection from '../components/BrandsSection/BrandsSection';
import FeaturesSection from '../components/FeaturesSection/FeaturesSection';
import FeaturedProductsSection from '../components/FeaturedProductsSection/FeaturedProductsSection';
import CommunityTestimonialsSection from '../components/CommunityTestimonialsSection/CommunityTestimonialsSection';
import ConsolesSection from '../components/ConsolesSection/ConsolesSection';
import InfrastructureSection from '../components/InfrastructureSection/InfrastructureSection';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <BrandsSection />
        <InfrastructureSection />
        <FeaturesSection />
        <FeaturedProductsSection />
        <ConsolesSection />
        <CommunityTestimonialsSection />
      </main>
    </>
  );
}
