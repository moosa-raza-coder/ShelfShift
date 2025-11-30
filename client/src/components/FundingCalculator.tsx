import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import { Calculator, DollarSign, TrendingUp, CheckCircle, Sparkles, ArrowRight } from "lucide-react";

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
      <DialogContent className="max-w-lg glass-card border-primary/20 glow-border" data-testid="dialog-funding-calculator">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 font-heading text-2xl">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Calculator className="w-5 h-5 text-white" />
            </div>
            <span className="text-gradient-gold">Funding Potential Calculator</span>
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {step === "calculate" && "See how much business credit you could unlock with an aged corporation."}
            {step === "capture" && "Enter your details to see your personalized funding potential."}
            {step === "results" && "Your estimated funding potential is ready!"}
          </DialogDescription>
        </DialogHeader>

        <AnimatePresence mode="wait">
          {step === "calculate" && (
            <motion.div
              key="calculate"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6 py-4"
            >
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-3">
                    <Label className="text-sm">Corporation Age</Label>
                    <span className="text-sm font-bold text-accent">{corpAge} years</span>
                  </div>
                  <Slider
                    value={[corpAge]}
                    onValueChange={(v) => setCorpAge(v[0])}
                    min={2}
                    max={5}
                    step={1}
                    className="py-2"
                    data-testid="slider-corp-age"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>2 years</span>
                    <span>5 years</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-3">
                    <Label className="text-sm">Personal Credit Score</Label>
                    <span className="text-sm font-bold text-accent">{creditScore}</span>
                  </div>
                  <Slider
                    value={[creditScore]}
                    onValueChange={(v) => setCreditScore(v[0])}
                    min={600}
                    max={850}
                    step={10}
                    className="py-2"
                    data-testid="slider-credit-score"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>600</span>
                    <span>850</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-3">
                    <Label className="text-sm">Number of Credit Combos</Label>
                    <span className="text-sm font-bold text-accent">{combos}</span>
                  </div>
                  <Slider
                    value={[combos]}
                    onValueChange={(v) => setCombos(v[0])}
                    min={1}
                    max={5}
                    step={1}
                    className="py-2"
                    data-testid="slider-combos"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>1 combo</span>
                    <span>5 combos</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-xl blur" />
                <div className="relative p-5 rounded-xl glass border border-primary/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-6 h-6 text-accent" />
                      <span className="font-medium">Estimated Potential</span>
                    </div>
                    <div className="text-right">
                      <div className="font-heading text-2xl font-bold text-gradient-gold">
                        ${funding.min.toLocaleString()} - ${funding.max.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                size="lg"
                onClick={() => setStep("capture")}
                data-testid="button-see-results"
              >
                See My Full Results
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          )}

          {step === "capture" && (
            <motion.form
              key="capture"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleSubmitEmail}
              className="space-y-4 py-4"
            >
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Smith"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-muted/50 border-border/50 focus:border-primary"
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
                  className="bg-muted/50 border-border/50 focus:border-primary"
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
                  className="bg-muted/50 border-border/50 focus:border-primary"
                  data-testid="input-phone"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                size="lg"
                data-testid="button-get-results"
              >
                Get My Results
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <button
                type="button"
                className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setStep("calculate")}
              >
                Back to calculator
              </button>
            </motion.form>
          )}

          {step === "results" && (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-6 py-4"
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/40 to-accent/40 rounded-2xl blur-xl" />
                <div className="relative p-8 rounded-2xl glass border border-primary/20 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4"
                  >
                    <DollarSign className="w-10 h-10 text-white" />
                  </motion.div>
                  <p className="text-muted-foreground mb-2">Your Estimated Funding Potential</p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="font-heading text-4xl font-bold text-gradient-gold mb-3"
                  >
                    ${funding.min.toLocaleString()} - ${funding.max.toLocaleString()}
                  </motion.div>
                  <p className="text-sm text-muted-foreground">
                    Based on a {corpAge}-year aged corporation, {creditScore} credit score, and {combos} credit combo(s)
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="font-medium flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-accent" />
                  Your next steps:
                </p>
                <div className="space-y-2">
                  {[
                    "We've sent your detailed results to your email",
                    "A funding specialist will reach out within 24 hours",
                    "Schedule your strategy call to discuss your options",
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="flex items-center gap-3 text-sm"
                    >
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <Button
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                size="lg"
                onClick={handleClose}
                data-testid="button-schedule-call-calculator"
              >
                Schedule My Strategy Call
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
