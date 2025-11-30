import { useState } from "react";
import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustLogos from "@/components/TrustLogos";
import HowItWorks from "@/components/HowItWorks";
import WhyThisWorks from "@/components/WhyThisWorks";
import ComparisonSection from "@/components/ComparisonSection";
import ValueStack from "@/components/ValueStack";
import WhoWeHelp from "@/components/WhoWeHelp";
import Benefits from "@/components/Benefits";
import WhyTrustUs from "@/components/WhyTrustUs";
import StatsSnapshot from "@/components/StatsSnapshot";
import Testimonials from "@/components/Testimonials";
import GuaranteeBlock from "@/components/GuaranteeBlock";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FundingCalculator from "@/components/FundingCalculator";
import VideoModalGated from "@/components/VideoModalGated";
import FloatingCTA from "@/components/FloatingCTA";
import CalendlyEmbed from "@/components/CalendlyEmbed";

export default function Home() {
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  const scrollToBookCall = async () => {
    const element = document.getElementById("book-call");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBooking = async (data: { name: string; email: string; phone?: string }) => {
    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("Booking created successfully");
      }
    } catch (error) {
      console.error("Error creating booking:", error);
    }
  };

  const handleVideoLeadCaptured = (data: { name: string; email: string; phone?: string }) => {
    handleBooking(data);
  };

  const scrollToHowItWorks = () => {
    const element = document.getElementById("how-it-works");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background" data-testid="page-home">
      <TopBar />
      <Navigation onOpenCalculator={() => setCalculatorOpen(true)} />
      
      <main className="flex-1">
        <HeroSection
          onScheduleCall={scrollToBookCall}
          onWatchVideo={() => setVideoOpen(true)}
          onBooking={handleBooking}
        />
        <TrustLogos />
        <HowItWorks onViewInventory={scrollToBookCall} />
        <WhyThisWorks />
        <ComparisonSection onLearnMore={scrollToHowItWorks} />
        <ValueStack />
        <WhoWeHelp />
        <Benefits onCheckInventory={scrollToBookCall} />
        <WhyTrustUs />
        <StatsSnapshot />
        <Testimonials />
        <GuaranteeBlock />
        <FAQ />
        <FinalCTA onSecureCorporation={scrollToBookCall} />
      </main>
      
      <Footer />

      <FundingCalculator isOpen={calculatorOpen} onClose={() => setCalculatorOpen(false)} />
      <VideoModalGated
        open={videoOpen}
        onOpenChange={setVideoOpen}
        onLeadCaptured={handleVideoLeadCaptured}
        onOpenCalendly={() => {
          setShowCalendly(true);
          setVideoOpen(false);
        }}
      />
      
      {showCalendly && <CalendlyEmbed onClose={() => setShowCalendly(false)} />}
      
      <FloatingCTA onClick={scrollToBookCall} />
    </div>
  );
}
