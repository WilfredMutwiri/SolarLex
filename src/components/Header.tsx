import { Button } from "@/components/ui/button";
import { Sun, Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src={logo} className="w-14"/>
            <span className="text-xl font-bold">SolarLex</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#stories" className="hover:text-primary transition-colors">Stories</a>
            <a href="#programs" className="hover:text-primary transition-colors">Programs</a>
            <a href="#impact" className="hover:text-primary transition-colors">Impact</a>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:inline-flex">
              Sign up
            </Button>
            <Button size="sm">
              Donate
            </Button>
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#stories" className="hover:text-primary transition-colors">Stories</a>
              <a href="#programs" className="hover:text-primary transition-colors">Programs</a>
              <a href="#impact" className="hover:text-primary transition-colors">Impact</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
