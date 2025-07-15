import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialSection from '../components/TestimonialSection';
import TeamSection from '../components/TeamSection';
import CompaniesSection from '../components/CompanySection';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TestimonialSection />
      <TeamSection />
      <CompaniesSection />
      <Footer />
    </>
  );
}