import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Utensils,
  ChefHat,
  CreditCard,
  Package,
  Dog,
  Settings,
  HelpCircle,
} from "lucide-react";

interface SidebarProps {
  isMobileMenuOpen?: boolean;
  onNavigate?: () => void;
}

const Sidebar = ({ isMobileMenuOpen, onNavigate }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    navigate(path);
    onNavigate?.();
  };

  const isActive = (path: string) => location.pathname === path;

  const navigationGroups = [
    {
      label: "General",
      items: [
        { path: "/dashboard", name: "Dashboard", icon: LayoutDashboard },
        { path: "/my-pet-meals", name: "My Pet Meals", icon: Utensils },
        { path: "/food-customization", name: "Customize Food", icon: ChefHat },
      ],
    },
    {
      label: "Orders",
      items: [
        { path: "/subscription", name: "Subscription", icon: CreditCard },
        { path: "/order-history", name: "Order History", icon: Package },
      ],
    },
    {
      label: "Account & Support",
      items: [
        { path: "/pet-profile", name: "Pet Profiles", icon: Dog },
        { path: "/settings", name: "Settings", icon: Settings },
        { path: "/help-support", name: "Help & Support", icon: HelpCircle },
      ],
    },
  ];

  const renderNav = () => (
    <nav className="flex flex-col justify-between h-full p-4 space-y-6 overflow-hidden">
      <div className="space-y-6">
        {navigationGroups.map((group) => (
          <div key={group.label} className="space-y-1">
            <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wide">
              {group.label}
            </p>
            {group.items.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg w-full text-left transition-all ${
                    isActive(item.path)
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md"
                      : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </nav>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex flex-col w-64 h-screen bg-white border-r border-gray-200 overflow-hidden fixed top-20 left-0 z-40">
        {renderNav()}
      </div>

      {/* Mobile Sidebar (dropdown) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-y-0 left-0 w-64 bg-white shadow-lg border-r border-gray-200 z-50">
          {renderNav()}
        </div>
      )}
    </>
  );
};

export default Sidebar;
