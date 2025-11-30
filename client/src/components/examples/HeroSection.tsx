import HeroSection from "../HeroSection";

export default function HeroSectionExample() {
  return (
    <HeroSection
      onScheduleCall={() => console.log("Schedule call clicked")}
      onWatchVideo={() => console.log("Watch video clicked")}
    />
  );
}
