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
import ExitIntentPopup from "@/components/ExitIntentPopup";
import FloatingCTA from "@/components/FloatingCTA";

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

      <FundingCalculator open={calculatorOpen} onOpenChange={setCalculatorOpen} />
      <VideoModalGated
        open={videoOpen}
        onOpenChange={setVideoOpen}
        onLeadCaptured={handleVideoLeadCaptured}
        onOpenCalendly={() => {
          setShowCalendly(true);
          setVideoOpen(false);
        }}
      />
      
      {showCalendly && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
            <div className="p-4 border-b flex justify-between items-center bg-gradient-to-r from-primary/5 to-accent/5">
              <h3 className="font-heading text-lg text-primary font-semibold">Schedule Your Strategy Call</h3>
              <button
                onClick={() => setShowCalendly(false)}
                className="text-muted-foreground hover:text-foreground text-2xl leading-none"
                data-testid="button-close-calendly"
              >
                ×
              </button>
            </div>
            <div className="p-6 text-center space-y-4">
              <p className="text-muted-foreground">
                Connecting to Calendly booking system...
              </p>
              <p className="text-sm text-muted-foreground">
                If you're not redirected, <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 font-semibold">click here to book</a>
              </p>
              <div className="bg-primary/5 rounded-lg p-8 text-center">
                <p className="text-muted-foreground">Calendly integration placeholder</p>
                <p className="text-xs text-muted-foreground mt-2">Your calendar should appear here</p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <ExitIntentPopup
        onOpenCalculator={() => setCalculatorOpen(true)}
        onWatchVideo={() => setVideoOpen(true)}
        disabled={calculatorOpen || videoOpen}
      />
      <FloatingCTA onClick={scrollToBookCall} />
    </div>
  );
}
