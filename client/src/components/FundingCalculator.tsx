import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface CalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FundingCalculator({ isOpen, onClose }: CalculatorModalProps) {
  const [step, setStep] = useState("initial");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [corpAge, setCorpAge] = useState("");
  const [creditScore, setCreditScore] = useState("");
  const [combos, setCombos] = useState("");
  const [funding, setFunding] = useState({ min: 0, max: 0 });

  const calculateFunding = () => {
    const age = parseInt(corpAge) || 0;
    const score = parseInt(creditScore) || 650;
    const comboCount = parseInt(combos) || 0;

    let baseAmount = 250000;
    if (age > 2) baseAmount += age * 50000;
    if (score > 700) baseAmount += (score - 700) * 100;
    baseAmount += comboCount * 100000;

    const min = Math.max(250000, baseAmount - 500000);
    const max = baseAmount + 500000;

    setFunding({ min, max });
  };

  const handleNext = () => {
    if (corpAge && creditScore && combos) {
      calculateFunding();
      setStep("email");
    }
  };

  const handleSubmitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      try {
        const response = await fetch("/api/leads", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            phone: phone || null,
            corpAge: parseInt(corpAge),
            creditScore: parseInt(creditScore),
            combos: parseInt(combos),
            estimatedMin: funding.min,
            estimatedMax: funding.max,
          }),
        });
        if (response.ok) {
          console.log("Lead captured successfully");
          setStep("results");
        }
      } catch (error) {
        console.error("Error submitting lead:", error);
      }
    }
  };

  const handleReset = () => {
    setStep("initial");
    setName("");
    setEmail("");
    setPhone("");
    setCorpAge("");
    setCreditScore("");
    setCombos("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative w-full max-w-md rounded-3xl bg-background p-8 shadow-2xl border border-primary/20"
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-muted-foreground hover:text-foreground transition-colors"
          data-testid="button-close-calculator"
        >
          <X size={24} />
        </button>

        {step === "initial" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Funding Calculator</h2>
              <p className="text-muted-foreground text-sm mt-1">See your potential funding instantly</p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Corporation Age (Years)
                </label>
                <Input
                  type="number"
                  min="1"
                  value={corpAge}
                  onChange={(e) => setCorpAge(e.target.value)}
                  placeholder="e.g., 3"
                  data-testid="input-corp-age"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Credit Score
                </label>
                <Input
                  type="number"
                  min="300"
                  max="850"
                  value={creditScore}
                  onChange={(e) => setCreditScore(e.target.value)}
                  placeholder="e.g., 750"
                  data-testid="input-credit-score"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Number of Products
                </label>
                <Input
                  type="number"
                  min="1"
                  value={combos}
                  onChange={(e) => setCombos(e.target.value)}
                  placeholder="e.g., 50"
                  data-testid="input-combos"
                />
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <Button
                onClick={onClose}
                variant="outline"
                className="flex-1"
                data-testid="button-cancel"
              >
                Cancel
              </Button>
              <Button
                onClick={handleNext}
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                data-testid="button-next"
              >
                Calculate
              </Button>
            </div>
          </div>
        )}

        {step === "email" && (
          <form onSubmit={handleSubmitEmail} className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Claim Your Offer</h2>
              <p className="text-muted-foreground text-sm mt-1">Enter your information to unlock results</p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Full Name
                </label>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  required
                  data-testid="input-name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  required
                  data-testid="input-email"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Phone (Optional)
                </label>
                <Input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  data-testid="input-phone"
                />
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <Button
                type="button"
                onClick={() => setStep("initial")}
                variant="outline"
                className="flex-1"
                data-testid="button-back"
              >
                Back
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                data-testid="button-submit"
              >
                Unlock Results
              </Button>
            </div>
          </form>
        )}

        {step === "results" && (
          <div className="space-y-6 text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-2">Your Funding Range</h2>
              <p className="text-muted-foreground">Based on your business profile</p>
            </motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8"
            >
              <p className="text-sm text-muted-foreground mb-3 font-medium">Estimated Funding Range</p>
              <motion.p
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
                className="text-5xl font-bold text-gradient-gold"
              >
                ${(funding.min / 1000).toFixed(0)}K - ${(funding.max / 1000).toFixed(0)}K
              </motion.p>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm text-muted-foreground"
            >
              Our team will contact you within 24 hours with next steps
            </motion.p>
            
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-3 pt-2"
            >
              <Button
                onClick={handleReset}
                variant="outline"
                className="flex-1"
                data-testid="button-recalculate"
              >
                Recalculate
              </Button>
              <Button
                onClick={onClose}
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                data-testid="button-done"
              >
                Done
              </Button>
            </motion.div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
