import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Onboarding() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-blue-100 px-6 py-4 sticky top-0 z-10 absolute top-0 left-0 w-full z-50 bg-transparent">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-32 h-10 flex items-center justify-center">
              <img
                src="./images/logo.png"
                alt="PetFoodCustom Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              className="text-blue-600 border-blue-200 hover:bg-blue-50 rounded-full"
              onClick={() => navigate("/login")}
            >
              Sign In
            </Button>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full"
              onClick={() => navigate("/signup")}
            >
              Create Account
            </Button>
          </div>
        </div>
      </header>

      {/* Welcome Section */}
      <div className="relative w-full min-h-[80vh] md:h-screen overflow-hidden pt-24 md:pt-20 mb-20">
        {/* Background Hero Image */}
        <img
          src="images/hero-pet.png"
          alt="Happy pet with healthy food"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/40"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto h-full px-6 text-center md:text-left">
          {/* Left Text Section */}
          <div className="md:w-1/2">
           <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-snug text-center md:text-left">
              Welcome to <span className="text-blue-600">PetFoodCustom</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed text-center md:text-left">
              Your personal dashboard to create pet profiles, customize nutrition, 
              manage subscriptions, and track deliveries — all in one place.
            </p>
            {/* Feature Chips */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 justify-center md:justify-start mb-8">
              {[
                "Multiple Pet Profiles",
                "Custom Meal Plans",
                "Easy Subscriptions",
                "Real-time Tracking",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center bg-blue-50/90 px-3 py-2 rounded-full"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-xs sm:text-sm text-blue-700">{item}</span>
                </div>
              ))}
            </div>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-md"
              onClick={() => navigate("/signup")}
            >
              Get Started
            </Button>
          </div>
        </div>

        {/* Floating Badges (hidden on mobile) */}
        <div className="hidden sm:flex absolute bottom-10 right-10 gap-4 z-20">
          {/* Badge 1 */}
          <div className="bg-white/90 p-4 rounded-xl shadow-md flex items-center w-[160px]">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-blue-600">✓</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">10,000+</p>
              <p className="text-xs text-gray-500">Active Users</p>
            </div>
          </div>

          {/* Badge 2 */}
          <div className="bg-white/90 p-4 rounded-xl shadow-md flex items-center w-[160px]">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-green-600">🐾</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">5,000+</p>
              <p className="text-xs text-gray-500">Pet Profiles</p>
            </div>
          </div>

          {/* Badge 3 */}
          <div className="bg-white/90 p-4 rounded-xl shadow-md flex items-center w-[160px]">
            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-yellow-600">📦</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">20k+</p>
              <p className="text-xs text-gray-500">Deliveries</p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Use the App</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Set up your account and start customizing meals for your pets
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {[
            { number: "01", title: "Create Pet Profile", desc: "Add your pet’s details like breed, age, and weight" },
            { number: "02", title: "Customize Meals", desc: "Choose nutrition plans that match your pet’s needs" },
            { number: "03", title: "Track in Dashboard", desc: "Manage subscriptions and orders in real-time" },
          ].map((step, index) => (
            <div 
              key={index} 
              className={`flex-1 bg-white p-6 rounded-2xl shadow-sm border border-blue-50 transition-all ${currentStep === index ? 'ring-2 ring-blue-500 ring-opacity-50 shadow-md' : ''}`}
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${currentStep === index ? 'bg-blue-100' : 'bg-gray-100'}`}>
                <span className={`text-xl font-bold ${currentStep === index ? 'text-blue-600' : 'text-gray-500'}`}>{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Customize Meals */}
          <Card className="text-center p-6 border border-blue-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-0">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-blue-50">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
                  alt="Customize Meals"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Customize Meals
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Build and save personalized nutrition plans tailored to your pet’s profile.
              </p>
            </CardContent>
          </Card>

          {/* Manage Subscriptions */}
          <Card className="text-center p-6 border border-blue-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-0">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-blue-50">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                  alt="Manage Subscriptions"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Manage Subscriptions
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Adjust delivery frequency, pause, or skip orders easily from your dashboard.
              </p>
            </CardContent>
          </Card>

          {/* Track Orders */}
          <Card className="text-center p-6 border border-blue-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-0">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-blue-50">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/869/869636.png"
                  alt="Track Orders"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Track Orders
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                See order statuses live and check delivery progress anytime.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-10 shadow-lg">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-blue-100 mb-8">
              Jump into your dashboard and begin customizing your pet’s nutrition today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate("/dashboard")}
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-full shadow-md"
              >
                Enter Dashboard
              </Button>
              <Button
                onClick={() => navigate("/login")}
                variant="outline"
                className="border-2 border-white text-blue-600 hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-full shadow-md"
              >
                Back to Login
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-blue-100 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="w-28 h-8 mx-auto md:mx-0">
                <img
                  src="./images/logo.png"
                  alt="PetFoodCustom Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-gray-500 text-sm mt-2 text-center md:text-left">
                Your pet’s personalized dashboard for nutrition and care
              </p>
            </div>
            <div className="flex gap-6">
              {["Help", "Contact Support", "Privacy"].map((item, idx) => (
                <a key={idx} href="#" className="text-gray-500 hover:text-blue-600 text-sm">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="text-center text-gray-400 text-xs mt-8">
            © {new Date().getFullYear()} PetFoodCustom. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
