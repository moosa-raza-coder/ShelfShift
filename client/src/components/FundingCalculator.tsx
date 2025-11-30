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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
          data-testid="button-close-calculator"
        >
          <X size={24} />
        </button>

        {step === "initial" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Funding Calculator</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Corporation Age (Years)
                </label>
                <Input
                  type="number"
                  value={corpAge}
                  onChange={(e) => setCorpAge(e.target.value)}
                  placeholder="e.g., 3"
                  data-testid="input-corp-age"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Credit Score
                </label>
                <Input
                  type="number"
                  value={creditScore}
                  onChange={(e) => setCreditScore(e.target.value)}
                  placeholder="e.g., 750"
                  data-testid="input-credit-score"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of SKUs
                </label>
                <Input
                  type="number"
                  value={combos}
                  onChange={(e) => setCombos(e.target.value)}
                  placeholder="e.g., 50"
                  data-testid="input-combos"
                />
              </div>
            </div>
            <div className="flex gap-3">
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
                className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
                data-testid="button-next"
              >
                Calculate
              </Button>
            </div>
          </div>
        )}

        {step === "email" && (
          <form onSubmit={handleSubmitEmail} className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Your Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
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
                <label className="block text-sm font-medium text-gray-700 mb-2">
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
                <label className="block text-sm font-medium text-gray-700 mb-2">
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
            <div className="flex gap-3">
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
                className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
                data-testid="button-submit"
              >
                Get Results
              </Button>
            </div>
          </form>
        )}

        {step === "results" && (
          <div className="space-y-6 text-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Estimated Funding</h2>
              <p className="text-gray-600 mb-4">Based on your information</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
              <p className="text-sm text-gray-600 mb-2">Estimated Range</p>
              <p className="text-4xl font-bold text-purple-600">
                ${(funding.min / 1000).toFixed(0)}K - ${(funding.max / 1000).toFixed(0)}K
              </p>
            </div>
            <p className="text-sm text-gray-600">
              Next steps: Our team will review your information and contact you within 24 hours.
            </p>
            <div className="flex gap-3">
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
                className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800"
                data-testid="button-done"
              >
                Done
              </Button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
