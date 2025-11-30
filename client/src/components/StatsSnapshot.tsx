const stats = [
  { value: "$150,000", label: "average funding potential" },
  { value: "72-hour", label: "corporate setup" },
  { value: "2–5 year", label: "aged entities" },
  { value: "1000+", label: "corporations delivered" },
  { value: "30–45 days", label: "average approval timeframe" },
];

export default function StatsSnapshot() {
  return (
    <section className="py-16 md:py-20 bg-primary text-primary-foreground" data-testid="stats-snapshot-section">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2" data-testid={`stat-${index}`}>
              <div className="font-heading text-3xl md:text-4xl font-bold">{stat.value}</div>
              <div className="text-sm text-primary-foreground/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
