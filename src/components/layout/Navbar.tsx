
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Menu, X, ShoppingCart, User, Sun, Moon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Meal Planner", path: "/meal-planner" },
    { name: "Shop", path: "/shop" },
    { name: "Chatbot", path: "/chatbot" },
    { name: "Education", path: "/education" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 dark:bg-card/95 shadow-md backdrop-blur-sm" : "bg-transparent"
    }`}>
      <div className="nutri-container flex justify-between items-center h-16 md:h-20">
        <Link to="/" className="flex items-center space-x-2">
          <div className="text-nutri-primary font-bold text-2xl">
            NutriBite
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-foreground hover:text-nutri-primary font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className="text-foreground hover:text-nutri-primary"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </Button>
          
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="text-foreground hover:text-nutri-primary">
              <ShoppingCart size={20} />
            </Button>
          </Link>
          
          <Link to="/login">
            <Button variant="ghost" size="icon" className="text-foreground hover:text-nutri-primary md:hidden">
              <User size={20} />
            </Button>
            <Button variant="outline" className="hidden md:flex">
              <User size={18} className="mr-2" /> Login
            </Button>
          </Link>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-6 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-foreground hover:text-nutri-primary font-medium transition-colors text-lg"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
