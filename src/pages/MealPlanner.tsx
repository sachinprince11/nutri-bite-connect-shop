
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { 
  Utensils, 
  Clock, 
  Calendar, 
  ShoppingCart, 
  LineChart,
  ChevronRight
} from "lucide-react";

const MealPlanner = () => {
  const [dietType, setDietType] = useState("balanced");
  const [calories, setCalories] = useState([2000]);
  const [mealTime, setMealTime] = useState("week");

  // Sample meal plan data
  const weeklyMeals = [
    {
      day: "Monday",
      meals: [
        {
          type: "Breakfast",
          name: "Greek Yogurt Parfait",
          calories: 320,
          protein: 22,
          carbs: 40,
          fat: 10,
          image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1887&auto=format&fit=crop"
        },
        {
          type: "Lunch",
          name: "Quinoa Salad with Chickpeas",
          calories: 430,
          protein: 18,
          carbs: 62,
          fat: 14,
          image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1770&auto=format&fit=crop"
        },
        {
          type: "Dinner",
          name: "Grilled Salmon with Roasted Vegetables",
          calories: 520,
          protein: 42,
          carbs: 28,
          fat: 24,
          image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1887&auto=format&fit=crop"
        }
      ]
    },
    {
      day: "Tuesday",
      meals: [
        {
          type: "Breakfast",
          name: "Avocado Toast with Poached Eggs",
          calories: 380,
          protein: 18,
          carbs: 32,
          fat: 22,
          image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1780&auto=format&fit=crop"
        },
        {
          type: "Lunch",
          name: "Turkey and Vegetable Wrap",
          calories: 410,
          protein: 28,
          carbs: 48,
          fat: 12,
          image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?q=80&w=1769&auto=format&fit=crop"
        },
        {
          type: "Dinner",
          name: "Vegetable Stir Fry with Tofu",
          calories: 480,
          protein: 24,
          carbs: 56,
          fat: 18,
          image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1772&auto=format&fit=crop"
        }
      ]
    }
  ];

  return (
    <MainLayout>
      <div className="bg-nutri-light dark:bg-muted py-16">
        <div className="nutri-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold mb-4">Personalized Meal Planner</h1>
            <p className="text-lg text-muted-foreground">
              Create a custom meal plan based on your dietary preferences, calorie needs, and health goals.
            </p>
          </div>

          <Card className="mb-12">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <label className="block text-sm font-medium mb-2">Diet Type</label>
                  <Select value={dietType} onValueChange={setDietType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select diet type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="balanced">Balanced</SelectItem>
                      <SelectItem value="vegetarian">Vegetarian</SelectItem>
                      <SelectItem value="vegan">Vegan</SelectItem>
                      <SelectItem value="keto">Keto</SelectItem>
                      <SelectItem value="paleo">Paleo</SelectItem>
                      <SelectItem value="mediterranean">Mediterranean</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Daily Calories: {calories[0]}
                  </label>
                  <Slider
                    value={calories}
                    onValueChange={setCalories}
                    min={1200}
                    max={3000}
                    step={50}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Meal Plan Duration</label>
                  <Select value={mealTime} onValueChange={setMealTime}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="day">One Day</SelectItem>
                      <SelectItem value="week">One Week</SelectItem>
                      <SelectItem value="month">One Month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-8 grid md:grid-cols-3 gap-8">
                <div>
                  <label className="block text-sm font-medium mb-2">Exclude Ingredients</label>
                  <Input placeholder="e.g., peanuts, shellfish" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Health Conditions</label>
                  <Select defaultValue="none">
                    <SelectTrigger>
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                      <SelectItem value="diabetes">Diabetes</SelectItem>
                      <SelectItem value="hypertension">Hypertension</SelectItem>
                      <SelectItem value="gluten">Celiac/Gluten Sensitivity</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-end">
                  <Button 
                    className="w-full bg-nutri-primary hover:bg-nutri-dark text-white"
                  >
                    Generate Meal Plan
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mb-8">
            <Tabs defaultValue="meal-plan">
              <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-3 mb-8">
                <TabsTrigger value="meal-plan" className="text-sm md:text-base">
                  <Utensils className="h-4 w-4 mr-2" /> Meal Plan
                </TabsTrigger>
                <TabsTrigger value="nutrition" className="text-sm md:text-base">
                  <LineChart className="h-4 w-4 mr-2" /> Nutrition
                </TabsTrigger>
                <TabsTrigger value="shopping" className="text-sm md:text-base">
                  <ShoppingCart className="h-4 w-4 mr-2" /> Shopping List
                </TabsTrigger>
              </TabsList>

              <TabsContent value="meal-plan">
                <div className="space-y-8">
                  {weeklyMeals.map((day, index) => (
                    <div key={index} className="nutri-card p-6">
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-nutri-primary" /> {day.day}
                      </h3>
                      <div className="grid md:grid-cols-3 gap-6">
                        {day.meals.map((meal, mealIndex) => (
                          <div key={mealIndex} className="border border-border rounded-lg overflow-hidden">
                            <div className="h-48 overflow-hidden">
                              <img 
                                src={meal.image} 
                                alt={meal.name} 
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="p-4">
                              <div className="text-sm text-nutri-primary font-medium mb-1 flex items-center">
                                <Clock className="h-3 w-3 mr-1" /> {meal.type}
                              </div>
                              <h4 className="font-medium mb-2">{meal.name}</h4>
                              <div className="flex justify-between text-sm text-muted-foreground">
                                <span>{meal.calories} cal</span>
                                <span>P: {meal.protein}g</span>
                                <span>C: {meal.carbs}g</span>
                                <span>F: {meal.fat}g</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="nutrition">
                <div className="nutri-card p-6">
                  <h3 className="text-xl font-semibold mb-4">Nutrition Overview</h3>
                  <p className="text-muted-foreground mb-6">
                    This meal plan is designed to provide balanced nutrition while adhering to your dietary preferences.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="font-medium">Daily Averages</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Calories</span>
                          <span className="font-medium">1730 cal</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Protein</span>
                          <span className="font-medium">88g (20%)</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Carbohydrates</span>
                          <span className="font-medium">178g (45%)</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Fat</span>
                          <span className="font-medium">67g (35%)</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Fiber</span>
                          <span className="font-medium">28g</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-medium">Micronutrients</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex justify-between">
                          <span>Vitamin A</span>
                          <span>120%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Vitamin C</span>
                          <span>145%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Calcium</span>
                          <span>85%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Iron</span>
                          <span>90%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Potassium</span>
                          <span>78%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Magnesium</span>
                          <span>92%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="shopping">
                <div className="nutri-card p-6">
                  <h3 className="text-xl font-semibold mb-4">Shopping List</h3>
                  <p className="text-muted-foreground mb-6">
                    Here's everything you need to prepare your meals for the week.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <h4 className="font-medium mb-3">Proteins</h4>
                      <ul className="space-y-2">
                        <li className="flex justify-between items-center">
                          <span>Chicken breast</span>
                          <span className="text-sm text-muted-foreground">1 lb</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>Salmon fillets</span>
                          <span className="text-sm text-muted-foreground">1 lb</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>Greek yogurt</span>
                          <span className="text-sm text-muted-foreground">32 oz</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>Eggs</span>
                          <span className="text-sm text-muted-foreground">1 dozen</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>Tofu</span>
                          <span className="text-sm text-muted-foreground">14 oz</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-3">Produce</h4>
                      <ul className="space-y-2">
                        <li className="flex justify-between items-center">
                          <span>Spinach</span>
                          <span className="text-sm text-muted-foreground">5 oz</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>Broccoli</span>
                          <span className="text-sm text-muted-foreground">1 head</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>Bell peppers</span>
                          <span className="text-sm text-muted-foreground">3</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>Avocados</span>
                          <span className="text-sm text-muted-foreground">3</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>Sweet potatoes</span>
                          <span className="text-sm text-muted-foreground">2</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-3">Grains & Other</h4>
                      <ul className="space-y-2">
                        <li className="flex justify-between items-center">
                          <span>Quinoa</span>
                          <span className="text-sm text-muted-foreground">1 cup</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>Brown rice</span>
                          <span className="text-sm text-muted-foreground">2 cups</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>Whole grain bread</span>
                          <span className="text-sm text-muted-foreground">1 loaf</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>Olive oil</span>
                          <span className="text-sm text-muted-foreground">16 oz</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span>Chickpeas</span>
                          <span className="text-sm text-muted-foreground">15 oz can</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button className="bg-nutri-primary hover:bg-nutri-dark text-white">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add All to Cart
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="text-center">
            <p className="mb-4 text-muted-foreground">
              Want more personalized recommendations? Try our nutrition chatbot.
            </p>
            <Button asChild variant="outline">
              <a href="/chatbot">
                Chat with Nutritionist AI
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default MealPlanner;
