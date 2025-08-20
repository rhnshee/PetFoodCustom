import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Calendar, Clock, Heart, Star, Plus, Search, Filter, TrendingUp, Utensils, BarChart3, ChefHat } from "lucide-react";

const MyPetMeals = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

  const handleMobileMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMobileNavigation = () => {
    setIsMenuOpen(false);
  };

  const mealHistory = [
    {
      id: "meal-001",
      name: "Max's Morning Feast",
      date: "2024-12-08",
      time: "7:30 AM",
      pet: "Max",
      ingredients: ["Chicken", "Sweet Potato", "Carrots", "Peas"],
      rating: 5,
      loved: true,
      calories: 450,
      notes: "Max loved this combination! Finished everything.",
      image: "https://cdn.builder.io/api/v1/image/assets%2F76bd3aeafd05477da53fceca5191bd57%2F5ffe82e5527e45c594acbfe5e5dd90ad"
    },
    {
      id: "meal-002", 
      name: "Bella's Senior Special",
      date: "2024-12-08",
      time: "6:00 PM",
      pet: "Bella",
      ingredients: ["Salmon", "Brown Rice", "Spinach", "Blueberries"],
      rating: 4,
      loved: false,
      calories: 380,
      notes: "Good appetite, left some spinach.",
      image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=200&h=200&fit=crop&crop=center"
    },
    {
      id: "meal-003",
      name: "Max's Power Bowl",
      date: "2024-12-07",
      time: "7:30 AM",
      pet: "Max",
      ingredients: ["Beef", "Quinoa", "Broccoli", "Carrots"],
      rating: 3,
      loved: false,
      calories: 520,
      notes: "Wasn't very interested, ate slowly.",
      image: "https://cdn.builder.io/api/v1/image/assets%2F76bd3aeafd05477da53fceca5191bd57%2F5ffe82e5527e45c594acbfe5e5dd90ad"
    },
    {
      id: "meal-004",
      name: "Bella's Fish Delight",
      date: "2024-12-07",
      time: "6:00 PM", 
      pet: "Bella",
      ingredients: ["Salmon", "Sweet Potato", "Green Beans"],
      rating: 5,
      loved: true,
      calories: 400,
      notes: "Absolutely loved it! Asked for more.",
      image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=200&h=200&fit=crop&crop=center"
    }
  ];

  const favoriteRecipes = [
    {
      id: "recipe-001",
      name: "Max's Morning Feast",
      pet: "Max",
      rating: 5,
      servings: 12,
      ingredients: ["Chicken", "Sweet Potato", "Carrots", "Peas"],
      calories: 450,
      prepTime: "15 min"
    },
    {
      id: "recipe-002",
      name: "Bella's Fish Delight", 
      pet: "Bella",
      rating: 5,
      servings: 8,
      ingredients: ["Salmon", "Sweet Potato", "Green Beans"],
      calories: 400,
      prepTime: "12 min"
    }
  ];

  const upcomingMeals = [
    {
      id: "upcoming-001",
      name: "Max's Evening Mix",
      time: "6:00 PM",
      date: "Today",
      pet: "Max",
      prepared: false
    },
    {
      id: "upcoming-002", 
      name: "Bella's Morning Bowl",
      time: "7:00 AM",
      date: "Tomorrow",
      pet: "Bella",
      prepared: true
    }
  ];

  const filteredMeals = mealHistory.filter(meal => {
    const matchesSearch = meal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         meal.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesFilter = filterCategory === "all" || meal.pet.toLowerCase() === filterCategory.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 to-amber-50/30">
      {/* Header */}
      <Header 
        onMobileMenuToggle={handleMobileMenuToggle}
        isMobileMenuOpen={isMenuOpen}
      />

      <div className="flex">
        {/* Sidebar */}
        <Sidebar 
          isMobileMenuOpen={isMenuOpen}
          onNavigate={handleMobileNavigation}
        />

        {/* Main Content */}
        <div className="flex-1 p-6 lg:p-10 space-y-10 pt-[72px] mt-6 lg:mt-20 lg:pl-64 lg:ms-12">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-2 flex items-center gap-2">
              <Utensils className="text-blue-600" />
              My Pet Meals
            </h1>
            <p className="text-slate-600">Track feeding history and manage favorite recipes</p>
          </div>

          {/* Upcoming Meals */}
          <Card className="mb-8 border-0 shadow-lg rounded-2xl overflow-hidden bg-gradient-to-br from-white to-blue-50/50">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Upcoming Meals
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {upcomingMeals.map(meal => (
                  <div key={meal.id} className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-md">
                        <span className="text-sm font-medium">
                          {meal.pet.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium">{meal.name}</p>
                        <p className="text-sm text-gray-600">{meal.date} at {meal.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {meal.prepared && (
                        <Badge className="bg-green-100 text-green-800 border-0">
                          Prepared
                        </Badge>
                      )}
                      <Button size="sm" className={meal.prepared ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"}>
                        {meal.prepared ? "Serve" : "Prepare"}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 p-4 bg-white rounded-2xl shadow-md">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search meals by name or ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-xl border-gray-200 focus:border-blue-400"
              />
            </div>
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-full sm:w-48 rounded-xl border-gray-200 focus:ring-blue-400">
                <SelectValue placeholder="Filter by pet" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Pets</SelectItem>
                <SelectItem value="max">Max</SelectItem>
                <SelectItem value="bella">Bella</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="flex items-center gap-2 rounded-xl border-gray-200">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </div>

          <Tabs defaultValue="history" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-100 p-1 rounded-2xl">
              <TabsTrigger value="history" className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-blue-600">
                <Utensils className="w-4 h-4 mr-2" />
                Meal History
              </TabsTrigger>
              <TabsTrigger value="favorites" className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-blue-600">
                <Heart className="w-4 h-4 mr-2" />
                Favorites
              </TabsTrigger>
              <TabsTrigger value="analytics" className="rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-blue-600">
                <BarChart3 className="w-4 h-4 mr-2" />
                Analytics
              </TabsTrigger>
            </TabsList>

            {/* Meal History Tab */}
            <TabsContent value="history" className="mt-6">
              <div className="space-y-6">
                {filteredMeals.map(meal => (
                  <Card key={meal.id} className="border-0 shadow-lg rounded-2xl overflow-hidden bg-gradient-to-br from-white to-blue-50/30">
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                        <div className="lg:col-span-2">
                          <div className="flex items-start gap-4">
                            <div className="relative">
                              <img
                                src={meal.image}
                                alt={meal.name}
                                className="w-20 h-20 rounded-xl object-cover shadow-md"
                              />
                              {meal.loved && (
                                <div className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full shadow-md">
                                  <Heart className="w-3 h-3 fill-current" />
                                </div>
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold text-lg">{meal.name}</h3>
                                <Badge className={meal.pet === "Max" ? "bg-blue-100 text-blue-800" : "bg-purple-100 text-purple-800"}>
                                  {meal.pet}
                                </Badge>
                              </div>
                              <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  {meal.date}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  {meal.time}
                                </span>
                              </div>
                              <div className="flex items-center gap-1 mb-3">
                                {renderStars(meal.rating)}
                                <span className="text-sm text-gray-500 ml-1">({meal.rating}.0)</span>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {meal.ingredients.map((ingredient, index) => (
                                  <Badge key={index} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                                    {ingredient}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 bg-blue-50/30 rounded-xl">
                          <h4 className="font-medium mb-3 text-blue-800 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4" />
                            Nutrition
                          </h4>
                          <div className="text-sm space-y-2">
                            <div className="flex justify-between items-center bg-white p-2 rounded-lg">
                              <span className="text-gray-600">Calories</span>
                              <span className="font-semibold text-blue-600">{meal.calories}</span>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 bg-amber-50/30 rounded-xl">
                          <h4 className="font-medium mb-3 text-amber-800">Notes & Actions</h4>
                          <p className="text-sm text-gray-600 mb-4 bg-white p-3 rounded-lg">{meal.notes}</p>
                          <div className="flex gap-2">
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Reorder</Button>
                            <Button size="sm" variant="outline" className="border-gray-300">Save Recipe</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Favorite Recipes Tab */}
            <TabsContent value="favorites" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {favoriteRecipes.map(recipe => (
                  <Card key={recipe.id} className="border-0 shadow-lg rounded-2xl overflow-hidden bg-gradient-to-br from-white to-green-50/30">
                    <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white">
                      <CardTitle className="flex items-center justify-between">
                        {recipe.name}
                        <div className="flex items-center gap-1">
                          {renderStars(recipe.rating)}
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white p-3 rounded-xl">
                            <p className="text-sm text-gray-600">Pet</p>
                            <p className="font-semibold">{recipe.pet}</p>
                          </div>
                          <div className="bg-white p-3 rounded-xl">
                            <p className="text-sm text-gray-600">Servings</p>
                            <p className="font-semibold">{recipe.servings} times</p>
                          </div>
                          <div className="bg-white p-3 rounded-xl">
                            <p className="text-sm text-gray-600">Prep Time</p>
                            <p className="font-semibold">{recipe.prepTime}</p>
                          </div>
                          <div className="bg-white p-3 rounded-xl">
                            <p className="text-sm text-gray-600">Calories</p>
                            <p className="font-semibold">{recipe.calories}</p>
                          </div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-xl">
                          <p className="font-medium text-sm mb-2 text-gray-700">Ingredients:</p>
                          <div className="flex flex-wrap gap-2">
                            {recipe.ingredients.map((ingredient, index) => (
                              <Badge key={index} variant="secondary" className="text-xs bg-green-100 text-green-800">
                                {ingredient}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-2 pt-2">
                          <Button className="flex-1 bg-green-600 hover:bg-green-700">Make Again</Button>
                          <Button variant="outline" className="border-gray-300" onClick={() => navigate("/food-customization")}>
                            Modify
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <Card className="border-dashed border-2 border-gray-300 hover:border-blue-400 transition-colors cursor-pointer bg-gradient-to-br from-white to-blue-50/30 rounded-2xl overflow-hidden">
                  <CardContent className="flex flex-col items-center justify-center h-full min-h-[300px] text-center p-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 shadow-inner">
                      <Plus className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Create New Recipe</h3>
                    <p className="text-gray-600 mb-6">
                      Design a custom meal for your pet
                    </p>
                    <Button onClick={() => navigate("/food-customization")} className="bg-blue-600 hover:bg-blue-700 shadow-md">
                      <ChefHat className="w-4 h-4 mr-2" />
                      Start Creating
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-gradient-to-br from-white to-purple-50/30">
                  <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">
                    <CardTitle>Feeding Statistics</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {[
                        { label: "Total Meals This Week", value: "14", color: "text-purple-600" },
                        { label: "Average Rating", value: "4.2", color: "text-yellow-600", icon: <Star className="w-4 h-4 fill-current" /> },
                        { label: "Favorite Ingredients", value: "Chicken, Salmon", color: "text-purple-600" },
                        { label: "Most Active Pet", value: "Max", color: "text-purple-600" }
                      ].map((stat, index) => (
                        <div key={index} className="flex justify-between items-center bg-white p-3 rounded-xl">
                          <span className="text-gray-600">{stat.label}</span>
                          <span className={`font-bold ${stat.color} flex items-center gap-1`}>
                            {stat.value}
                            {stat.icon}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-gradient-to-br from-white to-orange-50/30">
                  <CardHeader className="bg-gradient-to-r from-orange-600 to-orange-700 text-white">
                    <CardTitle>Nutritional Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {[
                        { label: "Daily Avg Calories", value: "850 kcal", color: "text-orange-600" },
                        { label: "Protein Intake", value: "65%", color: "text-orange-600" },
                        { label: "Carb Intake", value: "25%", color: "text-orange-600" },
                        { label: "Fat Intake", value: "10%", color: "text-orange-600" }
                      ].map((stat, index) => (
                        <div key={index} className="flex justify-between items-center bg-white p-3 rounded-xl">
                          <span className="text-gray-600">{stat.label}</span>
                          <span className={`font-bold ${stat.color}`}>{stat.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default MyPetMeals;