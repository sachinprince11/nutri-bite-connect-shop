
import { 
  Utensils, 
  ShoppingBag, 
  MessageCircle,
  BookOpen
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <Utensils className="h-10 w-10 text-nutri-primary" />,
    title: "Meal Planning",
    description: "Get personalized meal plans based on your dietary preferences, health goals, and nutritional needs.",
    link: "/meal-planner"
  },
  {
    icon: <ShoppingBag className="h-10 w-10 text-nutri-primary" />,
    title: "Fresh Food Marketplace",
    description: "Shop for fresh produce with real-time pricing. Get alerts on food inflation and bulk order suggestions.",
    link: "/shop"
  },
  {
    icon: <MessageCircle className="h-10 w-10 text-nutri-primary" />,
    title: "Nutrition Chatbot",
    description: "Get instant answers to your nutrition questions from our AI-powered nutrition assistant.",
    link: "/chatbot"
  },
  {
    icon: <BookOpen className="h-10 w-10 text-nutri-primary" />,
    title: "Education Hub",
    description: "Learn about nutrition fundamentals, the causes and effects of malnutrition, and how to eat for better health.",
    link: "/education"
  }
];

const FeaturesSection = () => {
  return (
    <section className="nutri-section">
      <div className="nutri-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Everything You Need for Better Nutrition</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            NutriBite combines technology and nutrition science to help you eat healthier, shop smarter, and live better.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Link 
              to={feature.link} 
              key={index}
              className="nutri-card p-6 hover:border-nutri-primary border-2 border-transparent transition-colors"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
