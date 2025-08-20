import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";
import { Slider } from "../components/ui/slider";
import { Badge } from "../components/ui/badge";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import {
  ChefHat,
  Scale,
  Heart,
  Zap,
  Carrot,
  Beef,
  Wheat,
  Leaf,
  Eye,
  ShoppingCart,
  Plus,
  Minus,
  Sparkles,
  Target,
  Crown,
  Star,
  Droplets,
  PawPrint,
} from "lucide-react";

const FoodCustomization = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // pet data
  const [selectedPlan, setSelectedPlan] = useState<typeof mealPlans[0] | null>(null);

  // wizard state
  const [activeTab, setActiveTab] = useState<"ingredients" | "nutrition" | "plans" | "preview">("ingredients");

  // nutrition state
  const [proteinLevel, setProteinLevel] = useState<number[]>([25]);
  const [carbLevel, setCarbLevel] = useState<number[]>([40]);
  const [fatLevel, setFatLevel] = useState<number[]>([15]);

  // ingredients state
  const [selectedIngredients, setSelectedIngredients] = useState({
    chicken: true,
    beef: false,
    salmon: true,
    turkey: false,
    "sweet-potato": true,
    "brown-rice": true,
    quinoa: false,
    carrots: true,
    peas: true,
    spinach: false,
  });

  const handleMobileMenuToggle = () => setIsMenuOpen((s) => !s);
  const handleMobileNavigation = () => setIsMenuOpen(false);

  const handleIngredientToggle = (id: string) => {
    setSelectedIngredients((prev) => ({
      ...prev,
      [id]: !prev[id as keyof typeof prev],
    }));
  };

  const isAllSelected = useMemo(
    () => Object.values(selectedIngredients).every(Boolean),
    [selectedIngredients]
  );

  const handleSelectAll = () => {
    const next = !isAllSelected;
    const updated: typeof selectedIngredients = Object.keys(selectedIngredients).reduce((acc, key) => {
      // @ts-ignore
      acc[key] = next;
      return acc;
    }, {} as any);
    setSelectedIngredients(updated);
  };

  const ingredients = [
    { id: "chicken", name: "Chicken", category: "protein", icon: Beef, bubble: "from-blue-400 to-blue-600" },
    { id: "beef", name: "Beef", category: "protein", icon: Beef, bubble: "from-indigo-400 to-indigo-600" },
    { id: "salmon", name: "Salmon", category: "protein", icon: Beef, bubble: "from-sky-400 to-sky-600" },
    { id: "turkey", name: "Turkey", category: "protein", icon: Beef, bubble: "from-cyan-400 to-cyan-600" },
    { id: "sweet-potato", name: "Sweet Potato", category: "carbs", icon: Carrot, bubble: "from-teal-400 to-teal-600" },
    { id: "brown-rice", name: "Brown Rice", category: "carbs", icon: Wheat, bubble: "from-blue-300 to-blue-500" },
    { id: "quinoa", name: "Quinoa", category: "carbs", icon: Wheat, bubble: "from-sky-300 to-sky-500" },
    { id: "carrots", name: "Carrots", category: "vegetables", icon: Carrot, bubble: "from-indigo-300 to-indigo-500" },
    { id: "peas", name: "Peas", category: "vegetables", icon: Leaf, bubble: "from-blue-200 to-blue-400" },
    { id: "spinach", name: "Spinach", category: "vegetables", icon: Leaf, bubble: "from-teal-300 to-teal-500" },
  ];

  const mealPlans = [
    {
      id: "weight-management",
      name: "Weight Management",
      description: "Lower calorie formula for weight control",
      calories: "320 kcal/cup",
      protein: "High",
      fat: "Low",
      price: "$45/month",
      popular: false,
      bestFor: "Weight control",
      icon: Target,
    },
    {
      id: "active-adult",
      name: "Active Adult",
      description: "High-energy formula for active pets",
      calories: "450 kcal/cup",
      protein: "Very High",
      fat: "Medium",
      price: "$55/month",
      popular: true,
      bestFor: "Active lifestyle",
      icon: Zap,
    },
    {
      id: "senior-care",
      name: "Senior Care",
      description: "Joint support and gentle digestion",
      calories: "350 kcal/cup",
      protein: "Medium",
      fat: "Low",
      price: "$50/month",
      popular: false,
      bestFor: "Senior pets",
      icon: Heart,
    },
  ];

  const selectedCount = Object.values(selectedIngredients).filter(Boolean).length;

  const donutData = [
    { name: "Chicken", pct: 35, color: "#3b82f6" },
    { name: "Salmon", pct: 15, color: "#38bdf8" },
    { name: "Sweet Potato", pct: 25, color: "#0ea5e9" },
    { name: "Brown Rice", pct: 15, color: "#60a5fa" },
    { name: "Carrots", pct: 5, color: "#2563eb" },
    { name: "Peas", pct: 5, color: "#06b6d4" },
  ];
  const donutCirc = 2 * Math.PI * 40; // r=40

  const steps = [
    { id: "ingredients", label: "Ingredients", icon: Carrot },
    { id: "nutrition", label: "Nutrition", icon: Scale },
    { id: "plans", label: "Plans", icon: Crown },
    { id: "preview", label: "Preview", icon: Eye },
  ] as const;

  const stepIndex = steps.findIndex((s) => s.id === activeTab);
  const goPrev = () => {
    if (stepIndex > 0) setActiveTab(steps[stepIndex - 1].id);
  };
  const goNext = () => {
    if (stepIndex < steps.length - 1) setActiveTab(steps[stepIndex + 1].id);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-blue-200/50 blur-3xl" />
        <div className="absolute top-32 right-10 h-80 w-80 rounded-full bg-sky-200/50 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-cyan-200/50 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.75),rgba(255,255,255,0.95))]" />
      </div>

      {/* Header */}
      <Header onMobileMenuToggle={handleMobileMenuToggle} isMobileMenuOpen={isMenuOpen} />

      <div className="flex">
        <Sidebar isMobileMenuOpen={isMenuOpen} onNavigate={handleMobileNavigation} />

        <div className="flex-1 p-6 lg:p-10 space-y-10 pt-[72px] mt-6 lg:mt-20 lg:pl-64 lg:ms-12">
          {/* Title */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-start gap-3">
                <div className="relative">
                  <div className="absolute inset-0 rounded-xl bg-blue-200/50 blur-md" />
                  <div className="relative p-2 rounded-xl bg-white/70 backdrop-blur-xl border border-white/50 shadow-sm">
                    <ChefHat className="text-blue-600 w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
                    Build Audrey's Perfect Meal
                  </h1>
                  <p className="text-slate-600 mt-1">
                    Science-backed nutrition with a sprinkle of cute 🐾
                  </p>
                </div>
              </div>
            </div>

            {/* Stepper */}
            <div className="mt-8">
              <div className="relative">
                <div className="h-1 w-full bg-slate-200 rounded-full" />
                <motion.div
                  className="h-1 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full absolute top-0 left-0"
                  animate={{ width: `${(stepIndex / (steps.length - 1)) * 100}%` }}
                  transition={{ type: "spring", stiffness: 60, damping: 20 }}
                />
              </div>
              <div className="mt-4 grid grid-cols-4 gap-3">
                {steps.map((s, i) => {
                  const Icon = s.icon;
                  const state = i < stepIndex ? "done" : i === stepIndex ? "active" : "idle";
                  return (
                    <button
                      key={s.id}
                      onClick={() => setActiveTab(s.id)}
                      className="group flex flex-col items-center gap-2"
                    >
                      <motion.div
                        whileHover={{ scale: 1.04 }}
                        className={[
                          "h-12 w-12 rounded-full border flex items-center justify-center shadow-sm backdrop-blur-xl",
                          state === "active" &&
                            "bg-white/80 border-blue-300 text-blue-600 ring-2 ring-blue-200/60",
                          state === "done" && "bg-white/70 border-sky-300 text-sky-600",
                          state === "idle" && "bg-white/60 border-slate-200 text-slate-400",
                        ].join(" ")}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.div>
                      <span
                        className={[
                          "text-xs font-medium",
                          state === "active" && "text-blue-700",
                          state === "done" && "text-sky-700",
                          state === "idle" && "text-slate-500",
                        ].join(" ")}
                      >
                        {s.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Card */}
          <Card className="border-0 rounded-2xl shadow-xl bg-white/70 backdrop-blur-xl ring-1 ring-white/50">
            <CardContent className="p-6 lg:p-8">
              {/* INGREDIENTS */}
              {activeTab === "ingredients" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-blue-100">
                        <Carrot className="w-4 h-4 text-blue-600" />
                      </div>
                      <h2 className="text-xl font-semibold text-slate-900">Pick Ingredients</h2>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-slate-600">{selectedCount} selected</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleSelectAll}
                        className="rounded-lg border-slate-300 hover:bg-slate-50"
                      >
                        {isAllSelected ? "Clear All" : "Select All"}
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {[ 
                      { category: "protein", title: "Proteins", icon: Beef },
                      { category: "carbs", title: "Carbohydrates", icon: Wheat },
                      { category: "vegetables", title: "Vegetables", icon: Leaf },
                    ].map((section) => {
                      const Icon = section.icon;
                      return (
                        <div
                          key={section.category}
                          className="rounded-2xl p-5 ring-1 ring-sky-100 bg-gradient-to-br from-white/80 to-sky-50/50 backdrop-blur-xl shadow-sm"
                        >
                          <div className="flex items-center gap-2 mb-4">
                            <div className="p-2 rounded-lg bg-slate-100">
                              <Icon className="w-4 h-4 text-blue-700" />
                            </div>
                            <h3 className="font-semibold text-slate-900">{section.title}</h3>
                          </div>

                          <div className="space-y-3">
                            {ingredients
                              .filter((i) => i.category === section.category)
                              .map((ingredient) => {
                                const IconInner = ingredient.icon;
                                const isSelected =
                                  selectedIngredients[ingredient.id as keyof typeof selectedIngredients];

                                return (
                                  <motion.button
                                    key={ingredient.id}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => handleIngredientToggle(ingredient.id)}
                                    className={[
                                      "w-full flex items-center p-3 rounded-xl text-left border transition-all",
                                      isSelected
                                        ? "bg-blue-50 border-blue-200 ring-1 ring-blue-200 shadow-sm"
                                        : "bg-slate-50 border-slate-200 hover:bg-slate-100/70",
                                    ].join(" ")}
                                  >
                                    <div
                                      className={[
                                        "mr-3 w-9 h-9 rounded-lg text-white flex items-center justify-center shadow-sm",
                                        "bg-gradient-to-br",
                                        ingredient.bubble,
                                      ].join(" ")}
                                    >
                                      <IconInner className="w-4 h-4" />
                                    </div>

                                    <Label className="flex-1 cursor-pointer font-medium text-slate-900">
                                      {ingredient.name}
                                    </Label>

                                    <Checkbox
                                      checked={isSelected}
                                      onCheckedChange={() => handleIngredientToggle(ingredient.id)}
                                      className="h-5 w-5 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                                    />
                                  </motion.button>
                                );
                              })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* NUTRITION */}
              {activeTab === "nutrition" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="max-w-2xl mx-auto space-y-8"
                >
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-blue-100">
                      <Scale className="w-4 h-4 text-blue-700" />
                    </div>
                    <h2 className="text-xl font-semibold text-slate-900">Nutritional Balance</h2>
                  </div>

                  {[ 
                    { label: "Protein", value: proteinLevel, setter: setProteinLevel, min: 15, max: 50, icon: Beef, grad: "from-blue-400 to-blue-600" },
                    { label: "Carbohydrates", value: carbLevel, setter: setCarbLevel, min: 20, max: 60, icon: Wheat, grad: "from-sky-400 to-sky-600" },
                    { label: "Fat", value: fatLevel, setter: setFatLevel, min: 8, max: 25, icon: Droplets, grad: "from-indigo-400 to-indigo-600" },
                  ].map((n) => {
                    const Icon = n.icon;
                    return (
                      <div key={n.label} className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-slate-100">
                              <Icon className="w-4 h-4 text-blue-600" />
                            </div>
                            <div>
                              <div className="font-medium text-slate-900">{n.label}</div>
                              <div className="text-xs text-slate-500">{n.value[0]}%</div>
                            </div>
                          </div>
                          <div className="text-xs text-slate-500">{n.min}% → {n.max}%</div>
                        </div>

                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-lg"
                            onClick={() => n.setter([Math.max(n.min, n.value[0] - 1)])}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>

                          <div className="flex-1">
                            <Slider value={n.value} onValueChange={n.setter} max={n.max} min={n.min} step={1} className="cursor-pointer" />
                          </div>

                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-lg"
                            onClick={() => n.setter([Math.min(n.max, n.value[0] + 1)])}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              )}

              {/* PLANS */}
              {activeTab === "plans" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="grid gap-6 lg:grid-cols-3"
                >
                  {mealPlans.map((plan) => {
                    const Icon = plan.icon;
                    return (
                      <div
                        key={plan.id}
                        className={[
                          "rounded-2xl border p-6 space-y-4 transition-all cursor-pointer hover:shadow-md",
                          "bg-gradient-to-br from-white/70 to-sky-50/40 backdrop-blur-lg",
                          plan.popular && "border-blue-400 ring-2 ring-blue-200",
                        ].join(" ")}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="p-2 rounded-lg bg-blue-100">
                              <Icon className="w-4 h-4 text-blue-700" />
                            </div>
                            <h3 className="font-semibold text-slate-900">{plan.name}</h3>
                          </div>
                          {plan.popular && (
                            <Badge className="bg-blue-600 text-white">Popular</Badge>
                          )}
                        </div>
                        <p className="text-sm text-slate-600">{plan.description}</p>
                        <ul className="space-y-1 text-sm text-slate-500">
                          <li>Calories: {plan.calories}</li>
                          <li>Protein: {plan.protein}</li>
                          <li>Fat: {plan.fat}</li>
                        </ul>
                        <div className="font-bold text-blue-700">{plan.price}</div>
                        <Button
                          className={[
                            "w-full rounded-xl",
                            plan.popular
                              ? "bg-blue-600 hover:bg-blue-700"
                              : "bg-slate-900 hover:bg-slate-800",
                          ].join(" ")}
                          onClick={() => setSelectedPlan(plan)}  // ✅ set the chosen plan
                        >
                          Select Plan
                        </Button>
                      </div>
                    );
                  })}
                </motion.div>
              )}

              {/* PREVIEW */}
              {activeTab === "preview" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="grid lg:grid-cols-2 gap-8"
                >
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-slate-900">Meal Composition</h2>
                    <svg viewBox="0 0 100 100" className="w-48 h-48 mx-auto">
                      <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f1f5f9" strokeWidth="20" />
                      {donutData.reduce((acc, d, i) => {
                        const prev = donutData.slice(0, i).reduce((a, x) => a + x.pct, 0);
                        const offset = donutCirc * (1 - prev / 100);
                        return [
                          ...acc,
                          <circle
                            key={d.name}
                            cx="50"
                            cy="50"
                            r="40"
                            fill="transparent"
                            stroke={d.color}
                            strokeWidth="20"
                            strokeDasharray={`${(d.pct / 100) * donutCirc} ${donutCirc}`}
                            strokeDashoffset={offset}
                          />,
                        ];
                      }, [] as JSX.Element[])}
                    </svg>
                    <div className="grid grid-cols-2 gap-2">
                      {donutData.map((d) => (
                        <div key={d.name} className="flex items-center gap-2 text-sm">
                          <div className="w-3 h-3 rounded-full" style={{ background: d.color }} />
                          <span>{d.name} - {d.pct}%</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-slate-900">Summary</h2>
                    <div className="rounded-xl p-6 bg-gradient-to-br from-blue-50 to-white shadow-sm space-y-4">
                      <p className="text-slate-700">Balanced nutrition tailored for Max</p>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li>✔ Ingredients: {selectedCount} selected</li>
                        <li>✔ Protein: {proteinLevel[0]}%</li>
                        <li>✔ Carbs: {carbLevel[0]}%</li>
                        <li>✔ Fat: {fatLevel[0]}%</li>
                      </ul>

                      {/* Price */}
                      <div className="pt-2 border-t border-slate-200">
                        <p className="text-sm text-slate-500">Estimated Price</p>
                        <p className="text-2xl font-bold text-blue-700">$55 / month</p>
                      </div>

                      <Button
                        onClick={() => navigate("/subscription")}
                        className="w-full bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700"
                      >
                        Confirm & Subscribe
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t border-slate-200">
            <Button
              variant="outline"
              className="rounded-lg border-blue-300 text-blue-700 hover:bg-blue-50"
              onClick={goPrev}
              disabled={activeTab === "ingredients"}
            >
              Previous
            </Button>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <PawPrint className="w-4 h-4 text-blue-500" />
              Step {stepIndex + 1} of {steps.length}
            </div>
            <Button
              className="rounded-lg bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 shadow"
              onClick={goNext}
              disabled={activeTab === "preview"}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCustomization;
