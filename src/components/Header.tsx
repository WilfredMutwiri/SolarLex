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
            <a href="/" className="flex items-center gap-2">
              <img src={logo} className="w-14" />
              <span className="text-xl font-bold">SolarLex</span>
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="hover:text-primary transition-colors">
              Home
            </a>
            <a href="/about" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="/stories" className="hover:text-primary transition-colors">
              Stories
            </a>
            <a
              href="/programs"
              className="hover:text-primary transition-colors"
            >
              Programs
            </a>
            <a href="/Contact" className="hover:text-primary transition-colors">
              Contact Us
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a href="/signup" className="text-lg text-yellow-500">
              <Button
                variant="outline"
                size="sm"
                className="hidden md:inline-flex"
              >
                Sign up
              </Button>
            </a>
            <a href="/Donate" className="text-lg text-yellow-500">
              <Button size="sm">Donate</Button>
            </a>
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
              <a href="/about" className="hover:text-primary transition-colors">
                About
              </a>
              <a
                href="/stories"
                className="hover:text-primary transition-colors"
              >
                Stories
              </a>
              <a
                href="/programs"
                className="hover:text-primary transition-colors"
              >
                Programs
              </a>
              <a
                href="/Contact"
                className="hover:text-primary transition-colors"
              >
                Contact Us
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
