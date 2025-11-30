import Benefits from "../Benefits";

export default function BenefitsExample() {
  return <Benefits onCheckInventory={() => console.log("Check inventory clicked")} />;
}
