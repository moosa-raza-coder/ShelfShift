const trustLogos = [
  "American Express",
  "Chase",
  "Capital One",
  "Experian",
  "Nav",
  "Dun & Bradstreet",
];

export default function TrustLogos() {
  return (
    <section className="py-12 bg-muted/50 border-y border-border" data-testid="trust-logos-section">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trusted by entrepreneurs approved through institutions like:
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {trustLogos.map((logo) => (
            <div
              key={logo}
              className="text-muted-foreground/60 hover:text-muted-foreground transition-colors font-heading font-semibold text-sm md:text-base"
              data-testid={`logo-${logo.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
