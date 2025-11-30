import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, TrendingUp, Calculator } from "lucide-react";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Benefits", href: "#benefits" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "About", href: "#about" },
];

interface NavigationProps {
  onOpenCalculator?: () => void;
}

export default function Navigation({ onOpenCalculator }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="sticky top-0 z-50 glass border-b border-border/30"
      data-testid="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <motion.a
            href="#"
            className="flex items-center gap-3"
            data-testid="link-logo"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-lg blur-lg opacity-50" />
              <div className="relative w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-lg text-gradient-gold">Wholesale Shelf Corps</span>
            </div>
          </motion.a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
                data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-3/4 transition-all duration-300" />
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                variant="ghost"
                size="sm"
                className="hidden md:flex gap-2 text-muted-foreground hover:text-foreground"
                onClick={onOpenCalculator}
                data-testid="button-calculator-nav"
              >
                <Calculator className="w-4 h-4" />
                Calculator
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-md blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
              <Button
                size="sm"
                className="relative bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary border-0 pulse-glow"
                onClick={() => handleNavClick("#book-call")}
                data-testid="button-schedule-call-nav"
              >
                Schedule Strategy Call
              </Button>
            </motion.div>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] glass-card border-l-primary/20">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between py-4 border-b border-border/30">
                    <span className="font-heading font-bold text-gradient-gold">Menu</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                      data-testid="button-close-menu"
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </div>
                  <div className="flex flex-col py-6 gap-2">
                    <AnimatePresence>
                      {navLinks.map((link, index) => (
                        <motion.button
                          key={link.label}
                          onClick={() => handleNavClick(link.href)}
                          className="w-full text-left px-4 py-3 text-sm font-medium rounded-md hover:bg-primary/10 hover:text-primary transition-colors"
                          data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {link.label}
                        </motion.button>
                      ))}
                    </AnimatePresence>
                    <div className="pt-4 mt-4 border-t border-border/30 space-y-3">
                      <Button
                        className="w-full"
                        onClick={() => {
                          setIsOpen(false);
                          onOpenCalculator?.();
                        }}
                        variant="outline"
                        data-testid="button-calculator-mobile"
                      >
                        <Calculator className="w-4 h-4 mr-2" />
                        Funding Calculator
                      </Button>
                      <Button
                        className="w-full bg-gradient-to-r from-primary to-accent"
                        onClick={() => handleNavClick("#book-call")}
                        data-testid="button-schedule-mobile"
                      >
                        Schedule Strategy Call
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
