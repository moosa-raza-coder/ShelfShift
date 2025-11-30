import Navigation from "../Navigation";

export default function NavigationExample() {
  return <Navigation onOpenCalculator={() => console.log("Calculator opened")} />;
}
