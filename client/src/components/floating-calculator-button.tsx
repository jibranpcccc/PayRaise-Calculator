import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Calculator, Zap } from "lucide-react";
import { useState, useEffect } from "react";

export function FloatingCalculatorButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Don't show on homepage as it already has the calculator
  if (window.location.pathname === '/') {
    return null;
  }

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <Link href="/">
        <Button
          className={`
            bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 
            text-black font-bold shadow-2xl rounded-full w-16 h-16 md:w-auto md:h-auto md:px-6 md:py-4 
            transition-all duration-300 group relative overflow-hidden
            ${isHovered ? 'scale-110' : 'scale-100'}
          `}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Mobile: Show only icon */}
          <div className="md:hidden">
            <Calculator className="h-6 w-6" />
          </div>
          
          {/* Desktop: Show icon + text */}
          <div className="hidden md:flex items-center">
            <Calculator className="h-5 w-5 mr-2" />
            <span>Calculate Raise</span>
            <Zap className="h-4 w-4 ml-2 opacity-75" />
          </div>

          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 animate-pulse opacity-75"></div>
        </Button>
      </Link>

      {/* Mobile tooltip */}
      <div className={`
        md:hidden absolute bottom-20 right-0 bg-black text-white text-xs px-3 py-2 rounded-lg
        transition-all duration-200 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
      `}>
        Quick Calculate
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
      </div>
    </div>
  );
}