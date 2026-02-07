import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProductsSection from '@/components/sections/ProductsSection';
import UseCasesSection from '@/components/sections/UseCasesSection';
import ApplicationsSection from '@/components/sections/ApplicationsSection';
import SpecificationsSection from '@/components/sections/SpecificationsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <UseCasesSection />
      <ApplicationsSection />
      <SpecificationsSection />
      <ContactSection />
    </>
  );
}
