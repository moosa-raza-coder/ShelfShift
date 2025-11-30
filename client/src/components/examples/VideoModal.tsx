import { useState } from "react";
import VideoModal from "../VideoModal";
import { Button } from "@/components/ui/button";

export default function VideoModalExample() {
  const [open, setOpen] = useState(true);
  return (
    <div className="p-4">
      <Button onClick={() => setOpen(true)}>Open Video</Button>
      <VideoModal open={open} onOpenChange={setOpen} onScheduleCall={() => console.log("Schedule call")} />
    </div>
  );
}
