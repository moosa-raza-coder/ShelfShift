import HowItWorks from "../HowItWorks";

export default function HowItWorksExample() {
  return <HowItWorks onViewInventory={() => console.log("View inventory clicked")} />;
}
