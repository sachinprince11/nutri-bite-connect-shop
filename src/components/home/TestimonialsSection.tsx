
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fitness Enthusiast",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    content: "NutriBite has transformed my relationship with food. The meal planner gives me delicious, healthy options, and I love that I can shop for ingredients right on the platform.",
    stars: 5
  },
  {
    name: "Michael Chen",
    role: "Busy Professional",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    content: "The chatbot is my go-to nutrition advisor. It's like having a dietitian in my pocket! And the inflation alerts have saved me so much money on my grocery bills.",
    stars: 5
  },
  {
    name: "Priya Sharma",
    role: "Mom of Two",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    content: "As a mom concerned about my kids' nutrition, the education hub has been invaluable. The meal planner makes it easy to create balanced meals my whole family enjoys.",
    stars: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section className="nutri-section">
      <div className="nutri-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. See how NutriBite is helping people live healthier lives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="nutri-card p-6">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="h-12 w-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
                {Array.from({ length: 5 - testimonial.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-gray-300" />
                ))}
              </div>
              <p className="text-muted-foreground">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
