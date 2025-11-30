import { Phone, Mail, MapPin } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-muted border-b border-border" data-testid="top-bar">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-2">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-2 text-sm text-muted-foreground">
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <a
              href="tel:5551234567"
              className="flex items-center gap-1.5 hover-elevate px-2 py-1 rounded-md"
              data-testid="link-phone"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(555) 123-4567</span>
            </a>
            <a
              href="mailto:Support@WholesaleShelfCorps.com"
              className="flex items-center gap-1.5 hover-elevate px-2 py-1 rounded-md"
              data-testid="link-email"
            >
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Support@WholesaleShelfCorps.com</span>
              <span className="sm:hidden">Email Us</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            <span>123 Business Ave, Suite 100, New York, NY 10001</span>
          </div>
        </div>
      </div>
    </div>
  );
}
