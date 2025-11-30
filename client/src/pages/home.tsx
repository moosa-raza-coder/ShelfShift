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
import VideoModal from "@/components/VideoModal";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

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

      <FundingCalculator open={calculatorOpen} onOpenChange={setCalculatorOpen} />
      <VideoModal
        open={videoOpen}
        onOpenChange={setVideoOpen}
        onScheduleCall={scrollToBookCall}
      />
      <ExitIntentPopup
        onOpenCalculator={() => setCalculatorOpen(true)}
        onWatchVideo={() => setVideoOpen(true)}
        disabled={calculatorOpen || videoOpen}
      />
      <FloatingCTA onClick={scrollToBookCall} />
    </div>
  );
}
