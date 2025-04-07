
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  ShoppingCart, 
  Filter, 
  TrendingUp,
  ArrowUp,
  ArrowDown,
  Clock,
  Package,
  X
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Organic Avocados",
    category: "fruits",
    price: 1.99,
    unit: "each",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=1775&auto=format&fit=crop",
    inflationRate: 5.2,
    organic: true,
    bulkDiscount: true
  },
  {
    id: 2,
    name: "Fresh Spinach",
    category: "vegetables",
    price: 2.49,
    unit: "bundle",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=1770&auto=format&fit=crop",
    inflationRate: -2.1,
    organic: true,
    bulkDiscount: false
  },
  {
    id: 3,
    name: "Bell Peppers",
    category: "vegetables",
    price: 1.29,
    unit: "each",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?q=80&w=1887&auto=format&fit=crop",
    inflationRate: 3.7,
    organic: false,
    bulkDiscount: true
  },
  {
    id: 4,
    name: "Blueberries",
    category: "fruits",
    price: 3.99,
    unit: "pint",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?q=80&w=1769&auto=format&fit=crop",
    inflationRate: 8.5,
    organic: true,
    bulkDiscount: true
  },
  {
    id: 5,
    name: "Sweet Potatoes",
    category: "vegetables",
    price: 0.99,
    unit: "lb",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1596097635121-14b38c5a9b3f?q=80&w=1887&auto=format&fit=crop",
    inflationRate: -1.5,
    organic: false,
    bulkDiscount: true
  },
  {
    id: 6,
    name: "Quinoa",
    category: "grains",
    price: 5.99,
    unit: "12oz",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e8ac?q=80&w=1770&auto=format&fit=crop",
    inflationRate: 0.8,
    organic: true,
    bulkDiscount: false
  },
  {
    id: 7,
    name: "Almonds",
    category: "nuts",
    price: 7.99,
    unit: "8oz",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=1770&auto=format&fit=crop",
    inflationRate: 6.3,
    organic: false,
    bulkDiscount: true
  },
  {
    id: 8,
    name: "Greek Yogurt",
    category: "dairy",
    price: 4.49,
    unit: "32oz",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1887&auto=format&fit=crop",
    inflationRate: 2.1,
    organic: true,
    bulkDiscount: false
  }
];

const Shop = () => {
  const [cartItems, setCartItems] = useState<Array<{product: any, quantity: number}>>([]);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  const addToCart = (product: any) => {
    const existingItem = cartItems.find(item => item.product.id === product.id);
    
    if (existingItem) {
      setCartItems(
        cartItems.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId: number) => {
    setCartItems(cartItems.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems(
      cartItems.map(item => 
        item.product.id === productId 
          ? { ...item, quantity: newQuantity } 
          : item
      )
    );
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity, 
    0
  );

  const filteredProducts = products
    .filter(product => {
      if (filter === "all") return true;
      if (filter === "organic" && product.organic) return true;
      if (filter === "bulk-discount" && product.bulkDiscount) return true;
      return product.category === filter;
    })
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "inflation") return b.inflationRate - a.inflationRate;
      return 0; // default: featured
    });

  return (
    <MainLayout>
      <div className="bg-nutri-light dark:bg-muted py-16">
        <div className="nutri-container">
          <div className="flex flex-col md:flex-row justify-between mb-8 items-start md:items-center">
            <div>
              <h1 className="text-4xl font-bold mb-2">Fresh Food Market</h1>
              <p className="text-muted-foreground">
                Shop for fresh produce with real-time pricing and nutrition information
              </p>
            </div>
            
            <div className="mt-4 md:mt-0 flex items-center">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="mr-2">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    <span>Cart ({cartItems.length})</span>
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-full sm:w-[400px]">
                  <SheetHeader>
                    <SheetTitle>Your Cart</SheetTitle>
                    <SheetDescription>
                      {cartItems.length === 0 
                        ? "Your cart is empty" 
                        : `You have ${cartItems.length} items in your cart`}
                    </SheetDescription>
                  </SheetHeader>
                  
                  {cartItems.length > 0 && (
                    <div className="mt-6 space-y-4">
                      {cartItems.map(item => (
                        <div key={item.product.id} className="flex justify-between items-center border-b border-border pb-4">
                          <div className="flex items-center">
                            <img 
                              src={item.product.image} 
                              alt={item.product.name} 
                              className="w-16 h-16 object-cover rounded-md mr-4" 
                            />
                            <div>
                              <h4 className="font-medium">{item.product.name}</h4>
                              <p className="text-sm text-muted-foreground">
                                ${item.product.price.toFixed(2)} per {item.product.unit}
                              </p>
                              <div className="flex items-center mt-1">
                                <Button 
                                  variant="outline" 
                                  size="icon" 
                                  className="h-6 w-6"
                                  onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                >
                                  <span>-</span>
                                </Button>
                                <span className="mx-2">{item.quantity}</span>
                                <Button 
                                  variant="outline" 
                                  size="icon" 
                                  className="h-6 w-6"
                                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                >
                                  <span>+</span>
                                </Button>
                              </div>
                            </div>
                          </div>
                          <div>
                            <p className="font-medium">
                              ${(item.product.price * item.quantity).toFixed(2)}
                            </p>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="mt-1 h-6 text-muted-foreground hover:text-destructive"
                              onClick={() => removeFromCart(item.product.id)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                      
                      <div className="py-4 border-t border-border">
                        <div className="flex justify-between font-medium">
                          <span>Subtotal</span>
                          <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm text-muted-foreground mt-1">
                          <span>Shipping</span>
                          <span>Calculated at checkout</span>
                        </div>
                      </div>
                      
                      <Button className="w-full bg-nutri-primary hover:bg-nutri-dark text-white">
                        Checkout
                      </Button>
                    </div>
                  )}
                </SheetContent>
              </Sheet>
              
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="md:hidden">
                    <Filter className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-full sm:w-[300px]">
                  <SheetHeader>
                    <SheetTitle>Filter Products</SheetTitle>
                  </SheetHeader>
                  
                  <div className="mt-6 space-y-6">
                    <div>
                      <h4 className="font-medium mb-2">Categories</h4>
                      <div className="space-y-2">
                        <Button 
                          variant={filter === "all" ? "default" : "outline"} 
                          size="sm"
                          className="mr-2 mb-2"
                          onClick={() => setFilter("all")}
                        >
                          All
                        </Button>
                        <Button 
                          variant={filter === "fruits" ? "default" : "outline"} 
                          size="sm"
                          className="mr-2 mb-2"
                          onClick={() => setFilter("fruits")}
                        >
                          Fruits
                        </Button>
                        <Button 
                          variant={filter === "vegetables" ? "default" : "outline"} 
                          size="sm"
                          className="mr-2 mb-2"
                          onClick={() => setFilter("vegetables")}
                        >
                          Vegetables
                        </Button>
                        <Button 
                          variant={filter === "grains" ? "default" : "outline"} 
                          size="sm"
                          className="mr-2 mb-2"
                          onClick={() => setFilter("grains")}
                        >
                          Grains
                        </Button>
                        <Button 
                          variant={filter === "nuts" ? "default" : "outline"} 
                          size="sm"
                          className="mr-2 mb-2"
                          onClick={() => setFilter("nuts")}
                        >
                          Nuts
                        </Button>
                        <Button 
                          variant={filter === "dairy" ? "default" : "outline"} 
                          size="sm"
                          className="mr-2 mb-2"
                          onClick={() => setFilter("dairy")}
                        >
                          Dairy
                        </Button>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Special Filters</h4>
                      <div className="space-y-2">
                        <Button 
                          variant={filter === "organic" ? "default" : "outline"} 
                          size="sm"
                          className="mr-2 mb-2"
                          onClick={() => setFilter("organic")}
                        >
                          Organic
                        </Button>
                        <Button 
                          variant={filter === "bulk-discount" ? "default" : "outline"} 
                          size="sm"
                          className="mr-2 mb-2"
                          onClick={() => setFilter("bulk-discount")}
                        >
                          Bulk Discount
                        </Button>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Sort By</h4>
                      <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="featured">Featured</SelectItem>
                          <SelectItem value="price-low">Price: Low to High</SelectItem>
                          <SelectItem value="price-high">Price: High to Low</SelectItem>
                          <SelectItem value="inflation">Inflation Rate</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="hidden md:block md:col-span-3 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button 
                      variant={filter === "all" ? "default" : "outline"} 
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => setFilter("all")}
                    >
                      All Products
                    </Button>
                    <Button 
                      variant={filter === "fruits" ? "default" : "outline"} 
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => setFilter("fruits")}
                    >
                      Fruits
                    </Button>
                    <Button 
                      variant={filter === "vegetables" ? "default" : "outline"} 
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => setFilter("vegetables")}
                    >
                      Vegetables
                    </Button>
                    <Button 
                      variant={filter === "grains" ? "default" : "outline"} 
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => setFilter("grains")}
                    >
                      Grains
                    </Button>
                    <Button 
                      variant={filter === "nuts" ? "default" : "outline"} 
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => setFilter("nuts")}
                    >
                      Nuts
                    </Button>
                    <Button 
                      variant={filter === "dairy" ? "default" : "outline"} 
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => setFilter("dairy")}
                    >
                      Dairy
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Special Filters</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button 
                      variant={filter === "organic" ? "default" : "outline"} 
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => setFilter("organic")}
                    >
                      Organic Only
                    </Button>
                    <Button 
                      variant={filter === "bulk-discount" ? "default" : "outline"} 
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => setFilter("bulk-discount")}
                    >
                      Bulk Discount Available
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Sort By</CardTitle>
                </CardHeader>
                <CardContent>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="inflation">Inflation Rate</SelectItem>
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>
              
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-nutri-primary" />
                    Food Inflation Watch
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Products with the biggest price changes in the last 30 days.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Blueberries</span>
                      <Badge variant="outline" className="flex items-center text-red-500">
                        <ArrowUp className="h-3 w-3 mr-1" />
                        8.5%
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Almonds</span>
                      <Badge variant="outline" className="flex items-center text-red-500">
                        <ArrowUp className="h-3 w-3 mr-1" />
                        6.3%
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Sweet Potatoes</span>
                      <Badge variant="outline" className="flex items-center text-green-500">
                        <ArrowDown className="h-3 w-3 mr-1" />
                        1.5%
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="mt-4 bg-muted p-3 rounded-md">
                    <h5 className="font-medium text-sm mb-1">Bulk Buy Recommendation</h5>
                    <p className="text-xs text-muted-foreground">
                      Consider buying blueberries in bulk now, price expected to rise another 3% next month.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="col-span-1 md:col-span-9">
              <div className="flex justify-between items-center mb-6">
                <div className="relative w-full max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search products..." 
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="hidden md:block">
                  <span className="text-muted-foreground">
                    {filteredProducts.length} products
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <Card key={product.id} className="overflow-hidden">
                    <div className="relative h-48">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      {product.organic && (
                        <Badge className="absolute top-2 left-2 bg-nutri-primary text-white">
                          Organic
                        </Badge>
                      )}
                      {product.inflationRate > 5 && (
                        <Badge className="absolute top-2 right-2 bg-red-500 text-white flex items-center">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          {product.inflationRate}%
                        </Badge>
                      )}
                      {product.inflationRate < 0 && (
                        <Badge className="absolute top-2 right-2 bg-green-500 text-white flex items-center">
                          <ArrowDown className="h-3 w-3 mr-1" />
                          {Math.abs(product.inflationRate)}%
                        </Badge>
                      )}
                    </div>
                    <CardContent className="pt-4">
                      <h3 className="font-medium">{product.name}</h3>
                      <div className="flex justify-between items-center mt-1">
                        <p className="font-bold text-lg">
                          ${product.price.toFixed(2)}
                          <span className="text-xs text-muted-foreground font-normal ml-1">
                            /{product.unit}
                          </span>
                        </p>
                        <div className="flex items-center">
                          <span className="text-amber-500 mr-1">★</span>
                          <span className="text-sm">{product.rating}</span>
                        </div>
                      </div>
                      {product.bulkDiscount && (
                        <div className="mt-2 text-sm text-green-600 flex items-center">
                          <Package className="h-3 w-3 mr-1" />
                          Bulk discount available
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button 
                        className="w-full bg-nutri-primary hover:bg-nutri-dark text-white"
                        onClick={() => addToCart(product)}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground">
                    No products found matching your criteria.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => {
                      setFilter("all");
                      setSearchTerm("");
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Shop;
