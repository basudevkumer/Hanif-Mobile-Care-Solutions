
import FeaturesSection from "@/components/home/FeaturesSection";
import HeroSection from "@/components/home/HeroSection";
import Button from "@/components/ui/Button";

export default function HomePage() {
  return (
    <>
      <section className="container flex flex-wrap gap-4 py-8">
        <Button>Book a Repair</Button>

        <Button variant="secondary">
          View Services
        </Button>

        <Button variant="outline">
          Contact Us
        </Button>
      </section>

      <HeroSection />
      <FeaturesSection />
    </>
  );
}
