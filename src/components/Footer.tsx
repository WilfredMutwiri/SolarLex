import { Sun } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
            <img src={logo} className="w-14"/>
            <span className="font-bold text-lg">SolarLex</span>
            </div>
            <p className="text-sm opacity-80">
              Making sustainable change happen, one solar light at a time.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 uppercase">About</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-secondary transition-colors">Our Mission</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Reports</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 uppercase">Get Involved</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-secondary transition-colors">Donate</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Volunteer</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Partner</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 uppercase">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-secondary transition-colors">Email Us</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20 text-center text-sm opacity-80">
          <p>&copy; 2025 SolarLex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
