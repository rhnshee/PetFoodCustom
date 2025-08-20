import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, TrendingUp, Calendar, DollarSign, PawPrint, Clock, Package } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState("audrey");
  const navigate = useNavigate();

  const handleMobileMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMobileNavigation = () => {
    setIsMenuOpen(false);
  };

  // Pets data (can later come from API or DB)
  const pets: Record<string, any> = {
    audrey: {
      name: "Audrey",
      image: "./images/pet-profile1.jpg",
      formula: "Active Adult Formula - Chicken & Sweet Potato",
      dailyProgress: 67,
      dailyText: "2/3 meals",
      weeklyProgress: 86,
      weeklyText: "18/21 meals",
    },
    max: {
      name: "George",
      image: "./images/pet-profile3.jpg",
      formula: "Indoor Cat Formula - Tuna & Brown Rice",
      dailyProgress: 50,
      dailyText: "3/3 meals",
      weeklyProgress: 70,
      weeklyText: "14/20 meals",
    },
    bella: {
      name: "Luna",
      image: "./images/pet-profile2.jpg",
      formula: "Adult Formula - Salmon & Rice",
      dailyProgress: 100,
      dailyText: "1/2 meals",
      weeklyProgress: 90,
      weeklyText: "19/21 meals",
    },
  };

  const pet = pets[selectedPet];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
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
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Welcome back, Human!</h1>
            <p className="text-gray-600">Manage your pet's nutrition and feeding schedule</p>
          </div>

          {/* Pet Switcher */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Pet Dashboard</h2>
            <select
              className="h-10 px-4 rounded-xl border border-gray-300 text-gray-700 shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              onChange={(e) => setSelectedPet(e.target.value)}
              value={selectedPet}
            >
              <option value="audrey">Audrey 🐶</option>
              <option value="max">George 🐕</option>
              <option value="bella">Luna 🐶</option>
            </select>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Pet Meal Plan */}
            <Card className="lg:col-span-2 border-0 shadow-lg rounded-2xl overflow-hidden bg-gradient-to-br from-white to-blue-50/50">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full flex items-center justify-center overflow-hidden shadow-md">
                      <img
                        src={pet.image}
                        alt={pet.name}
                        className="w-32 h-32 rounded-2xl object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-1.5 rounded-full shadow-md">
                      <PawPrint size={16} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">{pet.name}'s Meal Plan</h2>
                    <p className="text-gray-600 mb-4">{pet.formula}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="font-medium">Daily Progress</span>
                          <span className="font-semibold text-blue-600">{pet.dailyText}</span>
                        </div>
                        <Progress value={pet.dailyProgress} className="h-2 rounded-full bg-gray-200" indicatorClassName="bg-gradient-to-r from-blue-500 to-blue-600" />
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="font-medium">Weekly Goal</span>
                          <span className="font-semibold text-green-600">{pet.weeklyText}</span>
                        </div>
                        <Progress value={pet.weeklyProgress} className="h-2 rounded-full bg-gray-200" indicatorClassName="bg-gradient-to-r from-green-500 to-green-600" />
                      </div>
                    </div>

                    <div className="flex gap-3 mt-6">
                      <Button 
                        size="sm" 
                        onClick={() => navigate("/food-customization")}
                        className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-md"
                      >
                        Customize
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => navigate("/my-pet-meals")}
                        className="border-gray-300 hover:bg-gray-50 shadow-sm"
                      >
                        View History
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats + Add Pet */}
            <Card className="lg:col-span-2 border-0 shadow-lg rounded-2xl overflow-hidden bg-gradient-to-br from-white to-blue-50/50">
              <CardContent className="p-5 flex flex-col h-full">
                
                {/* Top Stats Row */}
                <div className="flex flex-row justify-between items-stretch mb-6">
                  {/* Active Pets */}
                  <div className="flex flex-col justify-center items-start flex-1 mr-6">
                    <div className="flex items-center mb-2">
                      <div className="p-2 bg-blue-100 rounded-lg mr-3">
                        <PawPrint size={20} className="text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900">Active Pets</h3>
                    </div>
                    <p className="text-3xl font-bold text-blue-600 mb-1">3</p>
                    <p className="text-sm text-gray-600">Audrey, Max & Bella</p>
                  </div>

                  {/* Next Delivery */}
                  <div className="flex flex-col justify-center items-start flex-1 mr-6">
                    <div className="flex items-center mb-2">
                      <div className="p-2 bg-green-100 rounded-lg mr-3">
                        <Calendar size={20} className="text-green-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900">Next Delivery</h3>
                    </div>
                    <p className="text-3xl font-bold text-green-600 mb-1">3</p>
                    <p className="text-sm text-gray-600">days away</p>
                  </div>

                  {/* Monthly Savings */}
                  <div className="flex flex-col justify-center items-start flex-1">
                    <div className="flex items-center mb-2">
                      <div className="p-2 bg-purple-100 rounded-lg mr-3">
                        <DollarSign size={20} className="text-purple-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900">Monthly Savings</h3>
                    </div>
                    <p className="text-3xl font-bold text-purple-600 mb-1">$24</p>
                    <p className="text-sm text-gray-600">vs. store brands</p>
                  </div>
                </div>

                {/* Add Pet */}
                <div
                  className="border-2 border-dashed border-blue-300 rounded-xl flex flex-col items-center justify-center py-6 cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition"
                  onClick={() => navigate("/add-pet")}
                >
                  <Plus size={28} className="text-blue-600 mb-2" />
                  <h3 className="font-semibold text-blue-700">Add Pet</h3>
                  <p className="text-sm text-gray-600">Create a new profile</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Content Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {/* Nutrition Overview */}
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-gradient-to-br from-white to-amber-50/50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <TrendingUp size={20} className="text-amber-600 mr-2" />
                  <h3 className="font-semibold text-gray-900">
                    Nutrition Overview
                  </h3>
                </div>
                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Protein</span>
                      <span className="font-semibold text-blue-600">28%</span>
                    </div>
                    <Progress value={28} className="h-2.5 rounded-full bg-gray-200" indicatorClassName="bg-gradient-to-r from-blue-500 to-blue-600" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Carbohydrates</span>
                      <span className="font-semibold text-green-600">42%</span>
                    </div>
                    <Progress value={42} className="h-2.5 rounded-full bg-gray-200" indicatorClassName="bg-gradient-to-r from-green-500 to-green-600" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">Fat</span>
                      <span className="font-semibold text-amber-600">15%</span>
                    </div>
                    <Progress value={15} className="h-2.5 rounded-full bg-gray-200" indicatorClassName="bg-gradient-to-r from-amber-500 to-amber-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Meals */}
            <Card className="border-0 shadow-lg rounded-2xl overflow-hidden bg-gradient-to-br from-white to-indigo-50/50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Clock size={20} className="text-indigo-600 mr-2" />
                  <h3 className="font-semibold text-gray-900">Recent Meals</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-md">
                      <span className="text-sm font-medium">M</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Max's Breakfast</p>
                      <p className="text-sm text-gray-600">Today, 7:30 AM</p>
                    </div>
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-md">
                      <span className="text-sm font-medium">B</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Bella's Dinner</p>
                      <p className="text-sm text-gray-600">Yesterday, 6:00 PM</p>
                    </div>
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-md">
                      <span className="text-sm font-medium">M</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Max's Lunch</p>
                      <p className="text-sm text-gray-600">Yesterday, 1:00 PM</p>
                    </div>
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full mt-5 border-gray-300 hover:bg-gray-50 shadow-sm"
                  onClick={() => navigate("/my-pet-meals")}
                >
                  View All Meals
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Subscription Management */}
          <Card className="mt-6 border-0 shadow-lg rounded-2xl overflow-hidden bg-gradient-to-br from-white to-teal-50/50">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="p-2 bg-teal-100 rounded-lg mr-4">
                    <Package size={24} className="text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Subscription Management
                    </h3>
                    <p className="text-gray-600">
                      Next delivery: December 15, 2024 • 2 bags of Max's formula
                    </p>
                  </div>
                </div>
                <Button 
                  variant="outline"
                  className="border-gray-300 hover:bg-gray-50 shadow-sm"
                  onClick={() => navigate("/subscription")}
                >
                  Manage
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Order History Quick View */}
          <Card className="mt-6 border-0 shadow-lg rounded-2xl overflow-hidden bg-gradient-to-br from-white to-rose-50/50">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="p-2 bg-rose-100 rounded-lg mr-4">
                    <DollarSign size={24} className="text-rose-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Order History
                    </h3>
                    <p className="text-gray-600">
                      Last order: November 15, 2024 • $55.99
                    </p>
                  </div>
                </div>
                <Button 
                  variant="outline"
                  className="border-gray-300 hover:bg-gray-50 shadow-sm"
                  onClick={() => navigate("/order-history")}
                >
                  View All
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
