
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-nutri-primary/10 via-transparent to-transparent z-0">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1932&auto=format&fit=crop')] bg-cover bg-center opacity-30"
        />
      </div>
      
      <div className="nutri-container relative z-10">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Nutrition Made <span className="text-nutri-primary">Simple</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Your one-stop platform for healthy living with personalized meal plans, nutrition education, and fresh, affordable food delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-nutri-primary hover:bg-nutri-dark text-white"
            >
              <Link to="/meal-planner">
                Get Your Meal Plan
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/shop">Browse Fresh Produce</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
