
import { Link } from "react-router-dom";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Mail
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted dark:bg-muted pt-12 pb-6">
      <div className="nutri-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold text-nutri-primary mb-4">NutriBite</h3>
            <p className="text-muted-foreground mb-6">
              Your trusted nutrition partner for healthy living and eating well.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-nutri-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-nutri-primary">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-nutri-primary">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-nutri-primary">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-nutri-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/meal-planner" className="text-muted-foreground hover:text-nutri-primary">
                  Meal Planner
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-muted-foreground hover:text-nutri-primary">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/chatbot" className="text-muted-foreground hover:text-nutri-primary">
                  Nutrition Chatbot
                </Link>
              </li>
              <li>
                <Link to="/education" className="text-muted-foreground hover:text-nutri-primary">
                  Education Hub
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-lg font-medium mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-nutri-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-nutri-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-muted-foreground hover:text-nutri-primary">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-nutri-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-nutri-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-lg font-medium mb-4">Newsletter</h4>
            <p className="text-muted-foreground mb-4">
              Subscribe to receive updates on nutrition tips and special offers.
            </p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="rounded-md px-4 py-2 border border-border focus:outline-none focus:ring-2 focus:ring-nutri-primary"
              />
              <button className="bg-nutri-primary hover:bg-nutri-dark text-white rounded-md px-4 py-2 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6">
          <p className="text-center text-muted-foreground">
            &copy; {new Date().getFullYear()} NutriBite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
