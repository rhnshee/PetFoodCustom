import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { PawPrint } from "lucide-react";

const PetProfile = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const handleMobileMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  const handleMobileNavigation = () => setIsMenuOpen(false);

  const pets = [
    {
      name: "Audrey",
      type: "Aspin Dog",
      age: "5 years",
      weight: "65 lbs",
      breed: "Aspin",
      allergies: "None reported",
      conditions: "Healthy",
      preferences: "Loves chicken and sweet potato. Dislikes fish.",
      activity: "High",
      image:
        "./images/pet-profile1.jpg",
      status: "Active",
    },
    {
      name: "George",
      type: "Puspin Cat",
      age: "1 years",
      weight: "9 lbs",
      breed: "Puspin",
      allergies: "Sensitive to dairy",
      conditions: "Mild asthma",
      preferences: "Loves tuna and chicken broth. Dislikes beef.",
      activity: "Medium",
      image:
        "./images/pet-profile3.jpg",
      status: "Active",
    },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Playful Background with Patterns */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50 overflow-hidden">
        {/* Paw prints pattern */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://cdn-icons-png.flaticon.com/512/616/616408.png')] bg-repeat bg-[length:100px]" />
        {/* Bone pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://cdn-icons-png.flaticon.com/512/616/616408.png')] rotate-45 bg-repeat bg-[length:120px]" />
      </div>

      {/* Header */}
      <Header
        onMobileMenuToggle={handleMobileMenuToggle}
        isMobileMenuOpen={isMenuOpen}
      />

      <div className="flex">
        <Sidebar
          isMobileMenuOpen={isMenuOpen}
          onNavigate={handleMobileNavigation}
        />

        {/* Main Content */}
        <div className="flex-1 p-6 lg:p-10 relative pt-[72px] lg:pl-64 mt-20 ms-12">
          {/* Welcome */}
          <div className="mb-8 flex items-center gap-3">
            <PawPrint className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900">
                Pet Profiles
              </h1>
              <p className="text-slate-600">
                Manage your furry friends’ info and preferences 🐾
              </p>
            </div>
          </div>

          {/* Pet Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {pets.map((pet, i) => (
              <Card
                key={i}
                className="rounded-2xl shadow-lg border-0 bg-white/90 backdrop-blur-sm"
              >
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-lg font-bold">
                    {pet.name}’s Profile
                  </CardTitle>
                  <Button
                    variant={editMode ? "default" : "outline"}
                    size="sm"
                    className="rounded-full"
                    onClick={() => setEditMode(!editMode)}
                  >
                    {editMode ? "Save" : "Edit"}
                  </Button>
                </CardHeader>
                <CardContent>
                  {/* Avatar + Basic Info */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full flex items-center justify-center shadow-md">
                      <img
                        src={pet.image}
                        alt={pet.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{pet.name}</h3>
                      <p className="text-gray-600">{pet.type}</p>
                      <Badge className="bg-green-100 text-green-700">
                        {pet.status}
                      </Badge>
                    </div>
                  </div>

                  {/* Tabs */}
                  <Tabs defaultValue="basic" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 bg-blue-100/60 rounded-full p-1">
                      <TabsTrigger
                        value="basic"
                        className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow"
                      >
                        Basic Info
                      </TabsTrigger>
                      <TabsTrigger
                        value="health"
                        className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow"
                      >
                        Health
                      </TabsTrigger>
                      <TabsTrigger
                        value="preferences"
                        className="rounded-full data-[state=active]:bg-white data-[state=active]:shadow"
                      >
                        Preferences
                      </TabsTrigger>
                    </TabsList>

                    {/* Basic Info */}
                    <TabsContent value="basic" className="space-y-4 pt-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor={`age-${i}`}>Age</Label>
                          <Input
                            id={`age-${i}`}
                            value={pet.age}
                            disabled={!editMode}
                            className={editMode ? "bg-yellow-50" : ""}
                          />
                        </div>
                        <div>
                          <Label htmlFor={`weight-${i}`}>Weight</Label>
                          <Input
                            id={`weight-${i}`}
                            value={pet.weight}
                            disabled={!editMode}
                            className={editMode ? "bg-yellow-50" : ""}
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor={`breed-${i}`}>Breed</Label>
                        <Input
                          id={`breed-${i}`}
                          value={pet.breed}
                          disabled={!editMode}
                          className={editMode ? "bg-yellow-50" : ""}
                        />
                      </div>
                    </TabsContent>

                    {/* Health */}
                    <TabsContent value="health" className="space-y-4 pt-4">
                      <div>
                        <Label htmlFor={`allergies-${i}`}>Known Allergies</Label>
                        <Textarea
                          id={`allergies-${i}`}
                          value={pet.allergies}
                          disabled={!editMode}
                          className={`min-h-[80px] ${editMode ? "bg-yellow-50" : ""}`}
                        />
                      </div>
                      <div>
                        <Label htmlFor={`conditions-${i}`}>
                          Medical Conditions
                        </Label>
                        <Textarea
                          id={`conditions-${i}`}
                          value={pet.conditions}
                          disabled={!editMode}
                          className={`min-h-[80px] ${editMode ? "bg-yellow-50" : ""}`}
                        />
                      </div>
                    </TabsContent>

                    {/* Preferences */}
                    <TabsContent value="preferences" className="space-y-4 pt-4">
                      <div>
                        <Label htmlFor={`food-${i}`}>Food Preferences</Label>
                        <Textarea
                          id={`food-${i}`}
                          value={pet.preferences}
                          disabled={!editMode}
                          className={`min-h-[80px] ${editMode ? "bg-yellow-50" : ""}`}
                        />
                      </div>
                      <div>
                        <Label htmlFor={`activity-${i}`}>Activity Level</Label>
                        <Input
                          id={`activity-${i}`}
                          value={pet.activity}
                          disabled={!editMode}
                          className={editMode ? "bg-yellow-50" : ""}
                        />
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            ))}

            {/* Add New Pet Card */}
            <Card className="border-dashed border-2 border-blue-300 hover:border-blue-500 transition-all rounded-2xl cursor-pointer">
              <CardContent className="flex flex-col items-center justify-center h-full min-h-[420px] text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4 shadow">
                  <PawPrint className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Add New Pet
                </h3>
                <p className="text-gray-600 mb-4">
                  Create a profile for another furry friend
                </p>
                <Button className="rounded-full">+ Add Pet Profile</Button>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card className="rounded-2xl shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-900">
                <PawPrint className="w-5 h-5 text-blue-600" /> Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Customize Food */}
                <Button
                  variant="outline"
                  className="flex flex-col items-center gap-3 h-auto py-8 px-6 rounded-2xl shadow-md hover:shadow-lg hover:bg-blue-50 transition"
                  onClick={() => navigate("/food-customization")}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
                    alt="Food Bowl"
                    className="w-12 h-12"
                  />
                  <div className="text-center">
                    <div className="font-semibold">Customize Food</div>
                    <div className="text-sm text-gray-600">
                      Tailor meals for your pets
                    </div>
                  </div>
                </Button>

                {/* View Orders */}
                <Button
                  variant="outline"
                  className="flex flex-col items-center gap-3 h-auto py-8 px-6 rounded-2xl shadow-md hover:shadow-lg hover:bg-blue-50 transition"
                  onClick={() => navigate("/order-history")}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/478/478543.png"
                    alt="Delivery Box"
                    className="w-12 h-12"
                  />
                  <div className="text-center">
                    <div className="font-semibold">View Orders</div>
                    <div className="text-sm text-gray-600">
                      Check order history
                    </div>
                  </div>
                </Button>

                {/* Manage Subscription */}
                <Button
                  variant="outline"
                  className="flex flex-col items-center gap-3 h-auto py-8 px-6 rounded-2xl shadow-md hover:shadow-lg hover:bg-blue-50 transition"
                  onClick={() => navigate("/subscription")}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
                    alt="Calendar"
                    className="w-12 h-12"
                  />
                  <div className="text-center">
                    <div className="font-semibold">Manage Subscription</div>
                    <div className="text-sm text-gray-600">
                      Update delivery schedule
                    </div>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        </div>
      </div>

  );
};

export default PetProfile;
