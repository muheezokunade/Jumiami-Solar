import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FloatingActionButton() {
  const handleClick = () => {
    // Open contact form or chat
    window.location.href = "/contact";
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button
        onClick={handleClick}
        size="icon"
        className="w-16 h-16 bg-gradient-to-br from-[hsl(19,100%,58%)] to-[hsl(47,100%,63%)] hover:from-[hsl(47,100%,63%)] hover:to-[hsl(19,100%,58%)] rounded-full shadow-2xl animate-float hover:scale-110 transition-all duration-300"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </Button>
    </div>
  );
}
