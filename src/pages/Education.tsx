
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  AlertTriangle, 
  Info, 
  BarChart, 
  Globe,
  PieChart,
  Baby,
  Brain,
  Heart,
  Microscope,
  Apple,
  Salad,
  RotateCw
} from "lucide-react";

const Education = () => {
  return (
    <MainLayout>
      <div className="bg-nutri-light dark:bg-muted py-16">
        <div className="nutri-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold mb-4">Understanding Malnutrition</h1>
            <p className="text-lg text-muted-foreground">
              Learn about the causes, effects, and prevention of malnutrition globally and in communities.
            </p>
          </div>
          
          <Tabs defaultValue="overview" className="mb-12">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8 w-full">
              <TabsTrigger value="overview" className="text-sm md:text-base">
                <Info className="h-4 w-4 mr-2" /> Overview
              </TabsTrigger>
              <TabsTrigger value="causes" className="text-sm md:text-base">
                <AlertTriangle className="h-4 w-4 mr-2" /> Causes
              </TabsTrigger>
              <TabsTrigger value="effects" className="text-sm md:text-base">
                <BarChart className="h-4 w-4 mr-2" /> Effects
              </TabsTrigger>
              <TabsTrigger value="prevention" className="text-sm md:text-base">
                <Globe className="h-4 w-4 mr-2" /> Prevention
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <Card>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">What is Malnutrition?</h2>
                      <p className="text-muted-foreground mb-4">
                        Malnutrition refers to deficiencies, excesses, or imbalances in a person's intake of energy and/or nutrients. It covers two broad groups of conditions:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
                        <li><strong>Undernutrition:</strong> Includes stunting (low height for age), wasting (low weight for height), underweight (low weight for age), and micronutrient deficiencies.</li>
                        <li><strong>Overweight, obesity, and diet-related diseases:</strong> Includes heart disease, stroke, diabetes, and some cancers.</li>
                      </ul>
                      
                      <h3 className="text-xl font-bold mb-3">Global Impact</h3>
                      <p className="text-muted-foreground mb-4">
                        Malnutrition affects people across all regions and economic classes. According to the World Health Organization:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>149 million children under 5 are stunted</li>
                        <li>45 million children under 5 are wasted</li>
                        <li>38.9 million children under 5 are overweight</li>
                        <li>2 billion people suffer from micronutrient deficiencies</li>
                      </ul>
                    </div>
                    <div>
                      <div className="bg-white dark:bg-muted rounded-xl overflow-hidden mb-6">
                        <img 
                          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1770&auto=format&fit=crop" 
                          alt="Children facing malnutrition" 
                          className="w-full h-64 object-cover object-center"
                        />
                      </div>
                      
                      <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                        <h3 className="text-xl font-bold mb-3 flex items-center">
                          <PieChart className="h-5 w-5 mr-2 text-nutri-primary" />
                          Key Statistics
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white dark:bg-muted rounded-lg p-4 text-center">
                            <p className="text-2xl font-bold text-nutri-primary">1 in 9</p>
                            <p className="text-sm text-muted-foreground">People are undernourished</p>
                          </div>
                          <div className="bg-white dark:bg-muted rounded-lg p-4 text-center">
                            <p className="text-2xl font-bold text-nutri-primary">3.1M</p>
                            <p className="text-sm text-muted-foreground">Child deaths annually</p>
                          </div>
                          <div className="bg-white dark:bg-muted rounded-lg p-4 text-center">
                            <p className="text-2xl font-bold text-nutri-primary">45%</p>
                            <p className="text-sm text-muted-foreground">Of child deaths related to malnutrition</p>
                          </div>
                          <div className="bg-white dark:bg-muted rounded-lg p-4 text-center">
                            <p className="text-2xl font-bold text-nutri-primary">$3.5T</p>
                            <p className="text-sm text-muted-foreground">Annual global economic cost</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="causes">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-6">Causes of Malnutrition</h2>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white dark:bg-card rounded-xl p-6 shadow-sm border border-border">
                      <h3 className="text-xl font-bold mb-4 flex items-center">
                        <Globe className="h-5 w-5 mr-2 text-nutri-primary" />
                        Socioeconomic Factors
                      </h3>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="bg-nutri-primary/10 text-nutri-primary p-1 rounded-full mr-2 mt-1">•</span>
                          <span><strong>Poverty:</strong> Limits access to nutritious food and clean water</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-nutri-primary/10 text-nutri-primary p-1 rounded-full mr-2 mt-1">•</span>
                          <span><strong>Food insecurity:</strong> Inadequate availability of nutritious food</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-nutri-primary/10 text-nutri-primary p-1 rounded-full mr-2 mt-1">•</span>
                          <span><strong>Conflict and instability:</strong> Disrupt food systems and access</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-nutri-primary/10 text-nutri-primary p-1 rounded-full mr-2 mt-1">•</span>
                          <span><strong>Limited education:</strong> About proper nutrition and dietary needs</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white dark:bg-card rounded-xl p-6 shadow-sm border border-border">
                      <h3 className="text-xl font-bold mb-4 flex items-center">
                        <Microscope className="h-5 w-5 mr-2 text-nutri-primary" />
                        Health-Related Causes
                      </h3>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="bg-nutri-primary/10 text-nutri-primary p-1 rounded-full mr-2 mt-1">•</span>
                          <span><strong>Diseases:</strong> Infections that prevent nutrient absorption</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-nutri-primary/10 text-nutri-primary p-1 rounded-full mr-2 mt-1">•</span>
                          <span><strong>Chronic conditions:</strong> That increase nutritional requirements</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-nutri-primary/10 text-nutri-primary p-1 rounded-full mr-2 mt-1">•</span>
                          <span><strong>Digestive disorders:</strong> Affecting absorption of nutrients</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-nutri-primary/10 text-nutri-primary p-1 rounded-full mr-2 mt-1">•</span>
                          <span><strong>Medication effects:</strong> That alter appetite or nutrient absorption</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white dark:bg-card rounded-xl p-6 shadow-sm border border-border">
                      <h3 className="text-xl font-bold mb-4 flex items-center">
                        <Baby className="h-5 w-5 mr-2 text-nutri-primary" />
                        Maternal & Child Factors
                      </h3>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="bg-nutri-primary/10 text-nutri-primary p-1 rounded-full mr-2 mt-1">•</span>
                          <span><strong>Poor maternal nutrition:</strong> Before and during pregnancy</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-nutri-primary/10 text-nutri-primary p-1 rounded-full mr-2 mt-1">•</span>
                          <span><strong>Inadequate breastfeeding:</strong> Or early cessation of breastfeeding</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-nutri-primary/10 text-nutri-primary p-1 rounded-full mr-2 mt-1">•</span>
                          <span><strong>Poor complementary feeding:</strong> Practices for infants</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-nutri-primary/10 text-nutri-primary p-1 rounded-full mr-2 mt-1">•</span>
                          <span><strong>Limited childcare knowledge:</strong> Among caregivers</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-muted rounded-xl p-6 mb-8">
                    <h3 className="text-xl font-bold mb-4">Environmental & Systemic Causes</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold mb-3">Climate Change Impacts</h4>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>Decreased crop yields from extreme weather</li>
                          <li>Reduced nutritional value in crops grown with higher CO2</li>
                          <li>Water scarcity affecting both crops and livestock</li>
                          <li>Displacement of populations from climate disasters</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-3">Food System Issues</h4>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>Industrialized food production prioritizing quantity over nutrition</li>
                          <li>Food waste throughout supply chains</li>
                          <li>Unequal distribution of nutritious food</li>
                          <li>Marketing of nutrient-poor, calorie-dense foods</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-card rounded-xl shadow-sm border border-border overflow-hidden">
                    <div className="grid md:grid-cols-2">
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-4">Malnutrition is Complex</h3>
                        <p className="text-muted-foreground mb-4">
                          Malnutrition often results from a combination of these factors rather than a single cause. Understanding these interrelated causes is essential for developing effective interventions and policies.
                        </p>
                        <p className="text-muted-foreground">
                          The complexity of malnutrition means that solutions must address multiple aspects simultaneously, from immediate food access to long-term systemic changes in agriculture, healthcare, and education.
                        </p>
                      </div>
                      <div className="bg-[url('https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=1887&auto=format&fit=crop')] bg-cover bg-center"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="effects">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-6">Effects of Malnutrition</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4 flex items-center">
                        <Brain className="h-5 w-5 mr-2 text-nutri-primary" />
                        Cognitive & Developmental Effects
                      </h3>
                      <ul className="space-y-3 text-muted-foreground mb-6">
                        <li className="flex items-start">
                          <span className="bg-nutri-primary/10 text-nutri-primary p-1 rounded-full mr-2 mt-1">•</span>
                          <span><strong>Impaired brain development:</strong> Especially critical during the first 1000 days of life</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-nutri-primary/10 text-nutri-primary p-1 rounded-full mr-2 mt-1">•</span>
                          <span><strong>Reduced cognitive ability:</strong> Lower IQ, memory problems, and learning difficulties</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-nutri-primary/10 text-nutri-primary p-1 rounded-full mr-2 mt-1">•</span>
                          <span><strong>Behavioral issues:</strong> Including attention problems and increased irritability</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-nutri-primary/10 text-nutri-primary p-1 rounded-full mr-2 mt-1">•</span>
                          <span><strong>Poor academic performance:</strong> Leading to decreased lifetime earning potential</span>
                        </li>
                      </ul>
                      
                      <div className="bg-white dark:bg-muted rounded-xl p-4 border border-border">
                        <h4 className="font-bold mb-2">Critical Window</h4>
                        <p className="text-sm text-muted-foreground">
                          The first 1000 days (from conception to age 2) represent a critical window for brain development. Malnutrition during this period can cause permanent cognitive and developmental damage that cannot be fully reversed later in life.
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-4 flex items-center">
                        <Heart className="h-5 w-5 mr-2 text-nutri-primary" />
                        Physical Health Effects
                      </h3>
                      <ul className="space-y-3 text-muted-foreground mb-6">
                        <li className="flex items-start">
                          <span className="bg-nutri-primary/10 text-nutri-primary p-1 rounded-full mr-2 mt-1">•</span>
                          <span><strong>Weakened immune system:</strong> Increased vulnerability to infections and diseases</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-nutri-primary/10 text-nutri-primary p-1 rounded-full mr-2 mt-1">•</span>
                          <span><strong>Stunted growth:</strong> Reduced height for age and delayed physical development</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-nutri-primary/10 text-nutri-primary p-1 rounded-full mr-2 mt-1">•</span>
                          <span><strong>Muscle wasting:</strong> Reduced strength and physical capability</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-nutri-primary/10 text-nutri-primary p-1 rounded-full mr-2 mt-1">•</span>
                          <span><strong>Micronutrient-specific effects:</strong> Such as anemia (iron), blindness (vitamin A), rickets (vitamin D)</span>
                        </li>
                      </ul>
                      
                      <div className="bg-white dark:bg-muted rounded-xl p-4 border border-border">
                        <h4 className="font-bold mb-2">Increased Mortality Risk</h4>
                        <p className="text-sm text-muted-foreground">
                          Severely malnourished children are 9 times more likely to die than well-nourished children. Even moderate malnutrition significantly increases mortality risk from common childhood illnesses like diarrhea, pneumonia, and malaria.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-muted rounded-xl p-6 mb-8">
                    <h3 className="text-xl font-bold mb-4">Long-Term & Intergenerational Effects</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold mb-3">Adult Health Impacts</h4>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>Increased risk of chronic diseases (diabetes, heart disease)</li>
                          <li>Lower physical work capacity and productivity</li>
                          <li>Reduced reproductive health</li>
                          <li>Compromised mental health and increased stress vulnerability</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-3">Intergenerational Cycle</h4>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>Malnourished mothers more likely to have low birth weight babies</li>
                          <li>Epigenetic changes that affect multiple generations</li>
                          <li>Perpetuation of poverty through reduced earning capacity</li>
                          <li>Continuation of malnutrition across generations</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-card rounded-xl shadow-sm border border-border p-6">
                    <h3 className="text-xl font-bold mb-4">Societal & Economic Impact</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-muted p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Healthcare Burden</h4>
                        <p className="text-sm text-muted-foreground">
                          Increased healthcare costs from treating preventable conditions and complications of malnutrition.
                        </p>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Economic Loss</h4>
                        <p className="text-sm text-muted-foreground">
                          Estimated 2-3% reduction in GDP annually in countries with high malnutrition rates due to reduced productivity.
                        </p>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <h4 className="font-bold mb-2">Social Development</h4>
                        <p className="text-sm text-muted-foreground">
                          Slowed social development, increased inequality, and reduced human capital formation.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="prevention">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-6">Prevention & Solutions</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4 flex items-center">
                        <Apple className="h-5 w-5 mr-2 text-nutri-primary" />
                        Individual & Family Approaches
                      </h3>
                      <ul className="space-y-3 text-muted-foreground mb-6">
                        <li className="flex items-start">
                          <span className="bg-nutri-primary/10 text-nutri-primary p-1 rounded-full mr-2 mt-1">•</span>
                          <span><strong>Breastfeeding support:</strong> Exclusive breastfeeding for the first 6 months</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-nutri-primary/10 text-nutri-primary p-1 rounded-full mr-2 mt-1">•</span>
                          <span><strong>Appropriate complementary feeding:</strong> Introducing nutritious foods at 6 months</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-nutri-primary/10 text-nutri-primary p-1 rounded-full mr-2 mt-1">•</span>
                          <span><strong>Nutrition education:</strong> For families about balanced diets and food preparation</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-nutri-primary/10 text-nutri-primary p-1 rounded-full mr-2 mt-1">•</span>
                          <span><strong>Regular growth monitoring:</strong> To detect malnutrition early</span>
                        </li>
                      </ul>
                      
                      <div className="bg-white dark:bg-muted rounded-xl p-4 border border-border">
                        <h4 className="font-bold mb-2">Mother & Child Nutrition</h4>
                        <p className="text-sm text-muted-foreground">
                          Focusing on the 1000-day window from pregnancy through a child's second birthday offers the greatest return on investment in preventing malnutrition and its lifelong consequences.
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-4 flex items-center">
                        <Salad className="h-5 w-5 mr-2 text-nutri-primary" />
                        Community & System Interventions
                      </h3>
                      <ul className="space-y-3 text-muted-foreground mb-6">
                        <li className="flex items-start">
                          <span className="bg-nutri-primary/10 text-nutri-primary p-1 rounded-full mr-2 mt-1">•</span>
                          <span><strong>School feeding programs:</strong> Providing nutritious meals at schools</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-nutri-primary/10 text-nutri-primary p-1 rounded-full mr-2 mt-1">•</span>
                          <span><strong>Micronutrient supplementation:</strong> For pregnant women, infants, and children</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-nutri-primary/10 text-nutri-primary p-1 rounded-full mr-2 mt-1">•</span>
                          <span><strong>Food fortification:</strong> Adding essential nutrients to staple foods</span>
                        </li>
                        <li className="flex items-start">
                          <span className="bg-nutri-primary/10 text-nutri-primary p-1 rounded-full mr-2 mt-1">•</span>
                          <span><strong>Clean water & sanitation:</strong> To prevent infections that worsen malnutrition</span>
                        </li>
                      </ul>
                      
                      <div className="bg-white dark:bg-muted rounded-xl p-4 border border-border">
                        <h4 className="font-bold mb-2">Integrated Approaches</h4>
                        <p className="text-sm text-muted-foreground">
                          The most effective interventions combine nutrition-specific actions (like supplementation) with nutrition-sensitive programs (such as agriculture, social protection, and education initiatives).
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-muted rounded-xl p-6 mb-8">
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <RotateCw className="h-5 w-5 mr-2 text-nutri-primary" />
                      Sustainable Solutions
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-bold mb-3">Policy & Governance</h4>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>Nutrition-focused national policies and strategies</li>
                          <li>Food security programs and safety nets</li>
                          <li>Regulation of food marketing, especially to children</li>
                          <li>Investment in nutrition-specific health services</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-3">Food Systems Transformation</h4>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>Sustainable agriculture focusing on diverse, nutritious crops</li>
                          <li>Support for small-scale farmers and local food systems</li>
                          <li>Reduction of food loss and waste</li>
                          <li>Making nutritious foods more affordable and accessible</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-3">Economic & Social Development</h4>
                        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                          <li>Poverty reduction strategies</li>
                          <li>Women's empowerment and education</li>
                          <li>Access to healthcare services</li>
                          <li>Climate change adaptation for food security</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-card rounded-xl shadow-sm border border-border overflow-hidden">
                    <div className="grid md:grid-cols-2">
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-4">How You Can Help</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>Support organizations working on nutrition and food security</li>
                          <li>Advocate for policies that prioritize nutrition and food access</li>
                          <li>Educate yourself and others about nutrition issues</li>
                          <li>Reduce food waste in your own household</li>
                          <li>Choose sustainable food options when possible</li>
                          <li>Volunteer with community food programs</li>
                        </ul>
                      </div>
                      <div className="bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default Education;
