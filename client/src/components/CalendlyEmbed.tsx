import { useEffect } from "react";
import { X } from "lucide-react";

interface CalendlyEmbedProps {
  onClose: () => void;
}

export default function CalendlyEmbed({ onClose }: CalendlyEmbedProps) {
  useEffect(() => {
    // Load Calendly embed script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 bg-white rounded-full p-2 hover:bg-muted transition-colors"
          data-testid="button-close-calendly-embed"
        >
          <X size={24} className="text-foreground" />
        </button>

        <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 border-b">
          <h3 className="font-heading text-2xl font-bold text-foreground">Schedule Your Strategy Call</h3>
          <p className="text-muted-foreground text-sm mt-1">Choose a time that works for you</p>
        </div>

        <div className="h-[600px] overflow-y-auto">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/your-calendar-link"
            style={{ minWidth: "320px", height: "100%" }}
          />
        </div>

        <div className="p-4 bg-muted/30 text-center text-sm text-muted-foreground">
          <p>Our team will follow up with confirmation details within the hour.</p>
        </div>
      </div>
    </div>
  );
}
