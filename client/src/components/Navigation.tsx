import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, TrendingUp } from "lucide-react";

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
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border" data-testid="navigation">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <a href="#" className="flex items-center gap-2" data-testid="link-logo">
            <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-lg">Wholesale Shelf Corps</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover-elevate rounded-md transition-colors"
                data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex"
              onClick={onOpenCalculator}
              data-testid="button-calculator-nav"
            >
              Funding Calculator
            </Button>
            <Button
              size="sm"
              onClick={() => handleNavClick("#book-call")}
              data-testid="button-schedule-call-nav"
            >
              Schedule Strategy Call
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] p-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b border-border">
                    <span className="font-heading font-bold">Menu</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                      data-testid="button-close-menu"
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </div>
                  <div className="flex flex-col p-4 gap-1">
                    {navLinks.map((link) => (
                      <button
                        key={link.label}
                        onClick={() => handleNavClick(link.href)}
                        className="w-full text-left px-4 py-3 text-sm font-medium hover-elevate rounded-md"
                        data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {link.label}
                      </button>
                    ))}
                    <div className="pt-4 border-t border-border mt-4">
                      <Button
                        className="w-full"
                        onClick={() => {
                          setIsOpen(false);
                          onOpenCalculator?.();
                        }}
                        variant="outline"
                        data-testid="button-calculator-mobile"
                      >
                        Funding Calculator
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
