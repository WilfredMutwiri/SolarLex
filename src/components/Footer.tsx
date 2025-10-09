import { Sun } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  const currentYear=new Date().getFullYear();

  return (
    <footer className="bg-gray-300 text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2">
              <img src={logo} className="w-56" />
              {/* <div className="flex flex-col  pt-4">
                <span className="text-xl font-bold">Sunlight Solar Africa</span>
                <span className="italic text-sm text-gray-900 text-center">light the continent</span>
              </div> */}
            </a>
          </div>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 mb-4 uppercase">About</h3>
            <ul className="space-y-2 text-sm text-gray-900">
              <li><a href="/About" className="hover:text-secondary transition-colors">Our Mission</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Our Team</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 uppercase text-gray-900">Get Involved</h3>
            <ul className="space-y-2 text-sm text-gray-900">
              <li><a href="/Donate" className="hover:text-secondary transition-colors">Donate</a></li>
              <li><a href="/signup" className="hover:text-secondary transition-colors">Join Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 uppercase text-gray-900">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-900">
              <li><a href="#" className="hover:text-secondary transition-colors">0100 - Nairobi - Kenya</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">info@solarlex.com</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">+254701234567 / +2547988765432</a></li>
            </ul>
          </div>
        </div>

        <div className="text-gray-900 mt-12 pt-8 border-t border-gray-950 text-center text-sm opacity-80">
          <p>&copy; {currentYear} SquidLight Solar Africa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
