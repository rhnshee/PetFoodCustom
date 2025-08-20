import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import AccountDropdown from "./AccountDropdown";
import {
  Plus,
  X,
  Bell,
  PawPrint,
  LayoutDashboard,
  Utensils,
  ChefHat,
  CreditCard,
  Package,
  Dog,
  Settings,
  HelpCircle,
} from "lucide-react";

interface HeaderProps {
  onMobileMenuToggle?: () => void;
  isMobileMenuOpen?: boolean;
}

const Header = ({ onMobileMenuToggle, isMobileMenuOpen }: HeaderProps) => {
  const navigate = useNavigate();

  const menuItems = [
    { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { label: "My Pet Meals", path: "/my-pet-meals", icon: Utensils },
    { label: "Customize Food", path: "/food-customization", icon: ChefHat },
    { label: "Subscription", path: "/subscription", icon: CreditCard },
    { label: "Order History", path: "/order-history", icon: Package },
    { label: "Pet Profiles", path: "/pet-profile", icon: Dog },
    { label: "Settings", path: "/settings", icon: Settings },
    { label: "Help & Support", path: "/help-support", icon: HelpCircle },
  ];

  return (
    <div className="bg-white shadow-md border-b border-gray-100 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-4 py-4 lg:px-6">
        {/* Left side */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Toggle */}
          <button
            onClick={onMobileMenuToggle}
            className="lg:hidden p-2 hover:bg-blue-50 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Logo */}
          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-2 text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
          >
            <div className="w-32 h-10 flex items-center justify-center">
              <img
                src="./images/logo.png"
                alt="PetFoodCustom Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </button>
        </div>

        {/* Desktop Search */}
        <div className="hidden lg:flex flex-1 max-w-md mx-8">
          <input
            type="text"
            placeholder="Search pets, meals, or recipes..."
            className="w-full px-4 py-2 border border-gray-200 rounded-full text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* New Recipe - Desktop */}
          <Button
            variant="default"
            size="sm"
            onClick={() => navigate("/food-customization")}
            className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full shadow hover:from-blue-600 hover:to-blue-700"
          >
            <Plus className="w-4 h-4" />
            New Recipe
          </Button>

          {/* Notifications */}
          <button className="relative p-2 hover:bg-blue-50 rounded-full transition-colors">
            <Bell className="w-6 h-6 text-gray-700" />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border border-white"></span>
          </button>

          {/* Account Dropdown */}
          <AccountDropdown />
        </div>
      </div>

      {/* Mobile Side Drawer */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
            onClick={onMobileMenuToggle}
          />
          {/* Drawer */}
          <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg border-r border-gray-200 z-50 flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <div className="flex items-center gap-2 text-blue-600 font-semibold">
                <PawPrint className="w-5 h-5" />
                Pet Menu
              </div>
              <button
                onClick={onMobileMenuToggle}
                aria-label="Close menu"
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Mobile Search */}
            <div className="p-4 border-b border-gray-100">
              <input
                type="text"
                placeholder="Search pets or meals..."
                className="w-full px-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Links with icons */}
            <nav className="py-2 flex-1 overflow-y-auto">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.path}
                    onClick={() => {
                      navigate(item.path);
                      onMobileMenuToggle?.();
                    }}
                    className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 w-full text-left transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Mobile New Recipe */}
            <div className="p-4">
              <Button
                onClick={() => {
                  navigate("/food-customization");
                  onMobileMenuToggle?.();
                }}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full shadow hover:from-blue-600 hover:to-blue-700"
              >
                <Plus className="w-4 h-4" />
                New Recipe
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
