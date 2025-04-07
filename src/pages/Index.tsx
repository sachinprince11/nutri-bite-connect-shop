
import Hero from "@/components/home/Hero";
import FeaturesSection from "@/components/home/FeaturesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import MainLayout from "@/components/layout/MainLayout";

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </MainLayout>
  );
};

export default Index;
