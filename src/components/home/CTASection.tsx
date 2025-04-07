
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="bg-nutri-light dark:bg-muted py-16">
      <div className="nutri-container">
        <div className="bg-nutri-primary rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 md:p-12 flex items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Start your nutrition journey today
                </h2>
                <p className="text-white/90 text-lg mb-8">
                  Sign up now to get personalized meal plans, nutrition advice, and access to fresh, affordable produce.
                </p>
                <Button 
                  asChild
                  size="lg" 
                  className="bg-white text-nutri-primary hover:bg-white/90"
                >
                  <Link to="/login">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block relative min-h-[300px]">
              <div 
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1932&auto=format&fit=crop')] bg-cover bg-right-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
