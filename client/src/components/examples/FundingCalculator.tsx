import { useState } from "react";
import FundingCalculator from "../FundingCalculator";
import { Button } from "@/components/ui/button";

export default function FundingCalculatorExample() {
  const [open, setOpen] = useState(true);
  return (
    <div className="p-4">
      <Button onClick={() => setOpen(true)}>Open Calculator</Button>
      <FundingCalculator open={open} onOpenChange={setOpen} />
    </div>
  );
}
