import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarContent, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import LogoutButton from "./LogoutButton";
import { User, Settings, CreditCard, HelpCircle, Bell } from "lucide-react";

interface AccountDropdownProps {
  userInitials?: string;
  userName?: string;
  userEmail?: string;
  avatarUrl?: string;
}

const AccountDropdown = ({ 
  userInitials = "RM",
  userName = "Reorio Mirandilla", 
  userEmail = "mreorio@gmail.com",
  avatarUrl
}: AccountDropdownProps) => {
  const navigate = useNavigate();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10">
            <AvatarImage src={avatarUrl} alt={userName} />
            <AvatarFallback>{userInitials}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{userName}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {userEmail}
            </p>
          </div>
        </DropdownMenuLabel>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem onClick={() => navigate("/pet-profile")} className="cursor-pointer">
          <User className="mr-2 h-4 w-4" />
          <span>Pet Profiles</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem onClick={() => navigate("/settings")} className="cursor-pointer">
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem onClick={() => navigate("/subscription")} className="cursor-pointer">
          <CreditCard className="mr-2 h-4 w-4" />
          <span>Billing & Subscription</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem className="cursor-pointer">
          <Bell className="mr-2 h-4 w-4" />
          <span>Notifications</span>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem onClick={() => navigate("/help-support")} className="cursor-pointer">
          <HelpCircle className="mr-2 h-4 w-4" />
          <span>Help & Support</span>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <div className="p-1">
          <LogoutButton 
            variant="ghost" 
            size="sm" 
            className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50" 
            showIcon={true}
          />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AccountDropdown;
