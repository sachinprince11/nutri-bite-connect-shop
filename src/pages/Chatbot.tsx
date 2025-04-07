
import { useState, useRef, useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Send, 
  MessageCircle, 
  RefreshCcw,
  Utensils,
  Apple,
  AlertCircle,
  Zap,
  Clock
} from "lucide-react";

// Sample chatbot responses
const sampleResponses = [
  {
    question: "What are some healthy breakfast options?",
    answer: "Great question! For a nutritious breakfast, consider options like:\n\n1. Greek yogurt with berries and a sprinkle of nuts or granola\n2. Overnight oats with fruit and chia seeds\n3. Whole grain toast with avocado and a poached egg\n4. A smoothie with spinach, banana, protein powder, and almond milk\n5. Vegetable omelette with a side of whole grain toast\n\nThese options provide a good balance of protein, complex carbohydrates, and healthy fats to fuel your morning."
  },
  {
    question: "How much protein should I eat daily?",
    answer: "The recommended dietary allowance (RDA) for protein is 0.8 grams per kilogram of body weight for the average adult. However, your specific needs may vary based on factors like activity level, age, and health goals.\n\n- For moderately active adults: 1.0-1.2g/kg body weight\n- For very active adults or athletes: 1.2-2.0g/kg body weight\n- For building muscle: 1.6-2.2g/kg body weight\n- For older adults: Often higher, around 1.0-1.2g/kg to prevent muscle loss\n\nFor example, if you weigh 70kg (154lbs) and are moderately active, you might aim for 70-84g of protein daily."
  },
  {
    question: "What are the symptoms of vitamin D deficiency?",
    answer: "Vitamin D deficiency can manifest in several ways, including:\n\n- Fatigue and tiredness\n- Bone pain and back pain\n- Depression or low mood\n- Impaired wound healing\n- Hair loss\n- Muscle pain\n\nRisk factors include limited sun exposure, darker skin tone, obesity, and age over 65. If you suspect a deficiency, consider getting your levels tested by a healthcare provider. Good dietary sources include fatty fish, egg yolks, and fortified foods, though supplements are often recommended if levels are low."
  }
];

type Message = {
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
};

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm NutriBite's nutrition assistant. How can I help you today? You can ask me about healthy eating, specific nutrients, meal ideas, or any other nutrition questions.",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (inputValue.trim()) {
      // Add user message
      const userMessage: Message = {
        text: inputValue,
        sender: "user",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, userMessage]);
      setInputValue("");
      setIsTyping(true);
      
      // Simulate bot thinking and responding
      setTimeout(() => {
        // Check for matches with sample responses
        const matchedResponse = sampleResponses.find(
          resp => resp.question.toLowerCase().includes(inputValue.toLowerCase())
        );
        
        let botReply = matchedResponse 
          ? matchedResponse.answer
          : "I don't have specific information about that yet, but I'd recommend consulting with a registered dietitian for personalized advice. Is there something else I can help you with?";
          
        const botMessage: Message = {
          text: botReply,
          sender: "bot",
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 1500);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        text: "Hello! I'm NutriBite's nutrition assistant. How can I help you today? You can ask me about healthy eating, specific nutrients, meal ideas, or any other nutrition questions.",
        sender: "bot",
        timestamp: new Date()
      }
    ]);
  };

  const quickQuestions = [
    "What are some healthy breakfast options?",
    "How much protein should I eat daily?", 
    "What are the symptoms of vitamin D deficiency?",
    "Which foods are high in iron?",
    "How can I reduce sugar in my diet?"
  ];

  const handleQuickQuestion = (question: string) => {
    setInputValue(question);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <MainLayout>
      <div className="nutri-container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Nutrition Assistant</h1>
            <p className="text-lg text-muted-foreground">
              Get instant answers to your nutrition questions from our AI nutrition assistant
            </p>
          </div>
          
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 order-2 md:order-1">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-medium mb-4 flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-nutri-primary" />
                    Quick Questions
                  </h3>
                  <div className="space-y-2">
                    {quickQuestions.map((question, index) => (
                      <Button 
                        key={index} 
                        variant="outline" 
                        className="w-full justify-start text-left h-auto py-2"
                        onClick={() => handleQuickQuestion(question)}
                      >
                        {question}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mt-6">
                <CardContent className="pt-6">
                  <h3 className="font-medium mb-4 flex items-center">
                    <Utensils className="h-5 w-5 mr-2 text-nutri-primary" />
                    Related Services
                  </h3>
                  <div className="space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start text-left h-auto py-3"
                      asChild
                    >
                      <a href="/meal-planner" className="flex items-start">
                        <div className="mr-3 mt-1">
                          <Clock className="h-5 w-5 text-nutri-primary" />
                        </div>
                        <div>
                          <span className="font-medium block">Meal Planning</span>
                          <span className="text-sm text-muted-foreground">Get a personalized meal plan</span>
                        </div>
                      </a>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full justify-start text-left h-auto py-3"
                      asChild
                    >
                      <a href="/shop" className="flex items-start">
                        <div className="mr-3 mt-1">
                          <Apple className="h-5 w-5 text-nutri-primary" />
                        </div>
                        <div>
                          <span className="font-medium block">Fresh Food Shop</span>
                          <span className="text-sm text-muted-foreground">Browse healthy ingredients</span>
                        </div>
                      </a>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full justify-start text-left h-auto py-3"
                      asChild
                    >
                      <a href="/education" className="flex items-start">
                        <div className="mr-3 mt-1">
                          <AlertCircle className="h-5 w-5 text-nutri-primary" />
                        </div>
                        <div>
                          <span className="font-medium block">Nutrition Education</span>
                          <span className="text-sm text-muted-foreground">Learn about malnutrition</span>
                        </div>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="md:col-span-8 order-1 md:order-2">
              <div className="bg-white dark:bg-card rounded-xl shadow-md overflow-hidden border border-border">
                <div className="bg-muted py-3 px-4 border-b border-border flex justify-between items-center">
                  <div className="flex items-center">
                    <MessageCircle className="h-5 w-5 mr-2 text-nutri-primary" />
                    <h3 className="font-medium">Nutrition Assistant</h3>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={handleReset}
                    className="text-muted-foreground"
                  >
                    <RefreshCcw className="h-4 w-4 mr-1" />
                    Reset
                  </Button>
                </div>
                
                <ScrollArea className="h-[500px] p-4">
                  <div className="space-y-4">
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className={`flex ${
                          message.sender === "user" ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg p-3 ${
                            message.sender === "user"
                              ? "bg-nutri-primary text-white"
                              : "bg-muted"
                          }`}
                        >
                          <p className="whitespace-pre-line">{message.text}</p>
                          <div
                            className={`text-xs mt-1 ${
                              message.sender === "user"
                                ? "text-white/70"
                                : "text-muted-foreground"
                            }`}
                          >
                            {formatTime(message.timestamp)}
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-muted rounded-lg p-3">
                          <div className="flex space-x-2 items-center">
                            <div className="w-2 h-2 rounded-full bg-nutri-primary animate-bounce" style={{ animationDelay: "0ms" }}></div>
                            <div className="w-2 h-2 rounded-full bg-nutri-primary animate-bounce" style={{ animationDelay: "150ms" }}></div>
                            <div className="w-2 h-2 rounded-full bg-nutri-primary animate-bounce" style={{ animationDelay: "300ms" }}></div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>
                
                <div className="border-t border-border p-3">
                  <form onSubmit={handleSendMessage} className="flex space-x-2">
                    <Textarea
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Type your nutrition question..."
                      className="resize-none"
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          handleSendMessage();
                        }
                      }}
                    />
                    <Button 
                      type="submit" 
                      className="bg-nutri-primary hover:bg-nutri-dark text-white"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Chatbot;
