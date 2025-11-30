import ExitIntentPopup from "../ExitIntentPopup";

export default function ExitIntentPopupExample() {
  return (
    <div className="p-4">
      <p className="text-muted-foreground text-sm">Move your mouse to the top of the page to trigger the exit intent popup.</p>
      <ExitIntentPopup
        onOpenCalculator={() => console.log("Calculator opened")}
        onWatchVideo={() => console.log("Video opened")}
      />
    </div>
  );
}
