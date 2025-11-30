import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { Calculator, DollarSign, TrendingUp, CheckCircle } from "lucide-react";

interface FundingCalculatorProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function FundingCalculator({ open, onOpenChange }: FundingCalculatorProps) {
  const [step, setStep] = useState<"calculate" | "capture" | "results">("calculate");
  const [corpAge, setCorpAge] = useState(3);
  const [creditScore, setCreditScore] = useState(700);
  const [combos, setCombos] = useState(2);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const calculateFunding = () => {
    const baseAmount = 25000;
    const ageMultiplier = corpAge * 15000;
    const scoreMultiplier = (creditScore - 600) * 200;
    const comboMultiplier = combos * 35000;
    const min = baseAmount + ageMultiplier + scoreMultiplier + comboMultiplier * 0.7;
    const max = baseAmount + ageMultiplier + scoreMultiplier + comboMultiplier * 1.3;
    return { min: Math.round(min), max: Math.round(max) };
  };

  const funding = calculateFunding();

  const handleSubmitEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      console.log("Lead captured:", { email, name, phone, corpAge, creditScore, combos, funding });
      setStep("results");
    }
  };

  const handleReset = () => {
    setStep("calculate");
    setEmail("");
    setName("");
    setPhone("");
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(handleReset, 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-lg" data-testid="dialog-funding-calculator">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-heading text-2xl">
            <Calculator className="w-6 h-6 text-primary" />
            Funding Potential Calculator
          </DialogTitle>
          <DialogDescription>
            {step === "calculate" && "See how much business credit you could unlock with an aged corporation."}
            {step === "capture" && "Enter your details to see your personalized funding potential."}
            {step === "results" && "Your estimated funding potential is ready!"}
          </DialogDescription>
        </DialogHeader>

        {step === "calculate" && (
          <div className="space-y-6 py-4">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <Label>Corporation Age</Label>
                  <span className="text-sm font-semibold text-primary">{corpAge} years</span>
                </div>
                <Slider
                  value={[corpAge]}
                  onValueChange={(v) => setCorpAge(v[0])}
                  min={2}
                  max={5}
                  step={1}
                  data-testid="slider-corp-age"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>2 years</span>
                  <span>5 years</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <Label>Personal Credit Score</Label>
                  <span className="text-sm font-semibold text-primary">{creditScore}</span>
                </div>
                <Slider
                  value={[creditScore]}
                  onValueChange={(v) => setCreditScore(v[0])}
                  min={600}
                  max={850}
                  step={10}
                  data-testid="slider-credit-score"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>600</span>
                  <span>850</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <Label>Number of Credit Combos</Label>
                  <span className="text-sm font-semibold text-primary">{combos}</span>
                </div>
                <Slider
                  value={[combos]}
                  onValueChange={(v) => setCombos(v[0])}
                  min={1}
                  max={5}
                  step={1}
                  data-testid="slider-combos"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>1 combo</span>
                  <span>5 combos</span>
                </div>
              </div>
            </div>

            <Card className="p-4 bg-primary/5 border-primary/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span className="font-medium">Estimated Potential</span>
                </div>
                <div className="text-right">
                  <div className="font-heading text-2xl font-bold text-primary">
                    ${funding.min.toLocaleString()} - ${funding.max.toLocaleString()}
                  </div>
                </div>
              </div>
            </Card>

            <Button className="w-full" size="lg" onClick={() => setStep("capture")} data-testid="button-see-results">
              See My Full Results
            </Button>
          </div>
        )}

        {step === "capture" && (
          <form onSubmit={handleSubmitEmail} className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Smith"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                data-testid="input-name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                data-testid="input-email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number (Optional)</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(555) 123-4567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                data-testid="input-phone"
              />
            </div>
            <Button type="submit" className="w-full" size="lg" data-testid="button-get-results">
              Get My Results
            </Button>
            <button
              type="button"
              className="w-full text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setStep("calculate")}
            >
              Back to calculator
            </button>
          </form>
        )}

        {step === "results" && (
          <div className="space-y-6 py-4">
            <Card className="p-6 bg-primary/5 border-primary/20 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <p className="text-muted-foreground mb-2">Your Estimated Funding Potential</p>
              <div className="font-heading text-4xl font-bold text-primary mb-2">
                ${funding.min.toLocaleString()} - ${funding.max.toLocaleString()}
              </div>
              <p className="text-sm text-muted-foreground">
                Based on a {corpAge}-year aged corporation, {creditScore} credit score, and {combos} credit combo(s)
              </p>
            </Card>

            <div className="space-y-3">
              <p className="font-medium">Your next steps:</p>
              <div className="space-y-2">
                {[
                  "We've sent your detailed results to your email",
                  "A funding specialist will reach out within 24 hours",
                  "Schedule your strategy call to discuss your options",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button className="w-full" size="lg" onClick={handleClose} data-testid="button-schedule-call-calculator">
              Schedule My Strategy Call
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
