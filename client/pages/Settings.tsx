import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Switch } from "../components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Textarea } from "../components/ui/textarea";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { User, Bell, Shield, CreditCard, Globe, Smartphone, Mail, Lock, Trash2, Camera, PawPrint } from "lucide-react";

const Settings = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Profile settings
  const [firstName, setFirstName] = useState("Reorio");
  const [lastName, setLastName] = useState("Mirandilla");
  const [email, setEmail] = useState("mreorio@gmail.com");
  const [phone, setPhone] = useState("+63 939 795 2000");
  const [address, setAddress] = useState("123 Main Street, San Francisco, CA 94107");
  
  // Notification settings
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [deliveryUpdates, setDeliveryUpdates] = useState(true);
  const [promotionalEmails, setPromotionalEmails] = useState(false);
  
  // Privacy settings
  const [dataSharing, setDataSharing] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  
  // App preferences
  const [language, setLanguage] = useState("en");
  const [timezone, setTimezone] = useState("PST");
  const [darkMode, setDarkMode] = useState(false);
  const [autoSync, setAutoSync] = useState(true);

  const handleMobileMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMobileNavigation = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
        <div className="flex-1 p-6 lg:p-10 pt-[72px] lg:pl-64 mt-20 ms-12">
          {/* Header */}
          <div className="mb-8 flex items-center gap-3">
            <PawPrint className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900">
                Settings
              </h1>
              <p className="text-slate-600">
                Manage your account preferences and privacy settings
              </p>
            </div>
          </div>

          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="privacy">Privacy</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
              <TabsTrigger value="account">Account</TabsTrigger>
            </TabsList>

            {/* Profile Tab */}
            <TabsContent value="profile">
              <div className="max-w-6xl mt-6">
                <Card className="shadow-md border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-900">
                      <User className="w-5 h-5" /> Profile Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Avatar */}
                    <div className="flex items-center gap-4">
                      <Avatar className="w-20 h-20">
                        <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
                        <AvatarFallback className="text-lg bg-blue-200 text-blue-900">JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <Button variant="outline" size="sm" className="flex items-center gap-2 text-blue-700 border-blue-300">
                          <Camera className="w-4 h-4" /> Change Photo
                        </Button>
                        <p className="text-sm text-gray-600 mt-1">JPG, PNG up to 5MB</p>
                      </div>
                    </div>

                    {/* Form Fields */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div>
                      <Label htmlFor="address">Address</Label>
                      <Textarea id="address" value={address} onChange={(e) => setAddress(e.target.value)} className="min-h-[80px]" />
                    </div>
                    <div className="flex gap-3">
                      <Button className="bg-blue-600 hover:bg-blue-700 rounded-full">Save Changes</Button>
                      <Button variant="outline" className="rounded-full">Cancel</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>  

            {/* Notifications Tab */}
            <TabsContent value="notifications">
              <div className="max-w-6xl">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-900">
                      <User className="w-5 h-5" /> Notification Preferences
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-gray-600" />
                        <div>
                          <Label htmlFor="email-notifications" className="text-base">Email Notifications</Label>
                          <p className="text-sm text-gray-600">Receive updates via email</p>
                        </div>
                      </div>
                      <Switch
                        id="email-notifications"
                        checked={emailNotifications}
                        onCheckedChange={setEmailNotifications}
                        className="data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-gray-300"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Smartphone className="w-5 h-5 text-gray-600" />
                        <div>
                          <Label htmlFor="push-notifications" className="text-base">Push Notifications</Label>
                          <p className="text-sm text-gray-600">Receive alerts on your device</p>
                        </div>
                      </div>
                      <Switch
                        id="push-notifications"
                        checked={pushNotifications}
                        onCheckedChange={setPushNotifications}
                        className="data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-gray-300"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Smartphone className="w-5 h-5 text-gray-600" />
                        <div>
                          <Label htmlFor="sms-notifications" className="text-base">SMS Notifications</Label>
                          <p className="text-sm text-gray-600">Receive text messages</p>
                        </div>
                      </div>
                      <Switch
                        id="sms-notifications"
                        checked={smsNotifications}
                        onCheckedChange={setSmsNotifications}
                        className="data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-gray-300"
                      />
                    </div>
                    <hr className="border-gray-200" />
                    <div className="space-y-4">
                      <h4 className="font-medium">Notification Types</h4>   
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="delivery-updates" className="text-base">Delivery Updates</Label>
                          <p className="text-sm text-gray-600">Order status and delivery notifications</p>
                        </div>
                        <Switch
                          id="delivery-updates"
                          checked={deliveryUpdates}
                          onCheckedChange={setDeliveryUpdates}
                          className="data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-gray-300"
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="promotional-emails" className="text-base">Promotional Emails</Label>
                          <p className="text-sm text-gray-600">Special offers and product updates</p>
                        </div>
                        <Switch
                          id="promotional-emails"
                          checked={promotionalEmails}
                          onCheckedChange={setPromotionalEmails}
                          className="data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-gray-300"
                        />
                      </div>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 rounded-full">Save Notification Settings</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Privacy Tab */}
            <TabsContent value="privacy">
              <div className="max-w-6xl">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-900">
                      <User className="w-5 h-5" /> Privacy & Security
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Lock className="w-5 h-5 text-gray-600" />
                        <div>
                          <Label htmlFor="two-factor-auth" className="text-base">Two-Factor Authentication</Label>
                          <p className="text-sm text-gray-600">Add an extra layer of security</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {twoFactorAuth && <Badge variant="outline" className="text-green-600 border-green-600">Enabled</Badge>}
                        <Switch
                          id="two-factor-auth"
                          checked={twoFactorAuth}
                          onCheckedChange={setTwoFactorAuth}
                          className="data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-gray-300"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="data-sharing" className="text-base">Data Sharing</Label>
                        <p className="text-sm text-gray-600">Share anonymous usage data to improve service</p>
                      </div>
                      <Switch
                        id="data-sharing"
                        checked={dataSharing}
                        onCheckedChange={setDataSharing}
                        className="data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-gray-300"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="analytics" className="text-base">Analytics & Insights</Label>
                        <p className="text-sm text-gray-600">Allow collection of usage analytics</p>
                      </div>
                      <Switch
                        id="analytics"
                        checked={analytics}
                        onCheckedChange={setAnalytics}
                        className="data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-gray-300"
                      />
                    </div>
                    <hr className="border-gray-200" />
                    <div className="space-y-4">
                      <h4 className="font-medium">Account Security</h4>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Password</p>
                          <p className="text-sm text-gray-600">Last updated 3 months ago</p>
                        </div>
                        <Button variant="outline" size="sm">Change Password</Button>
                      </div>

                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Login Sessions</p>
                          <p className="text-sm text-gray-600">Manage active sessions</p>
                        </div>
                        <Button variant="outline" size="sm">View Sessions</Button>
                      </div>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 rounded-full">
                      Save Privacy Settings
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Preferences Tab */}
            <TabsContent value="preferences">
              <div className="max-w-6xl">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-900">
                      <User className="w-5 h-5" /> App Preferences
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label>Language</Label>
                      <Select value={language} onValueChange={setLanguage}>
                        <SelectTrigger className="mt-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Spanish</SelectItem>
                          <SelectItem value="fr">French</SelectItem>
                          <SelectItem value="de">German</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Timezone</Label>
                      <Select value={timezone} onValueChange={setTimezone}>
                        <SelectTrigger className="mt-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="PST">Pacific Standard Time (PST)</SelectItem>
                          <SelectItem value="EST">Eastern Standard Time (EST)</SelectItem>
                          <SelectItem value="CST">Central Standard Time (CST)</SelectItem>
                          <SelectItem value="MST">Mountain Standard Time (MST)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="dark-mode" className="text-base">Dark Mode</Label>
                        <p className="text-sm text-gray-600">Use dark theme throughout the app</p>
                      </div>
                      <Switch
                        id="dark-mode"
                        checked={darkMode}
                        onCheckedChange={setDarkMode}
                        className="data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-gray-300"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="auto-sync" className="text-base">Auto-Sync</Label>
                        <p className="text-sm text-gray-600">Automatically sync data across devices</p>
                      </div>
                      <Switch
                        id="auto-sync"
                        checked={autoSync}
                        onCheckedChange={setAutoSync}
                        className="data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-gray-300"
                      />
                    </div>

                    <Button className="bg-blue-600 hover:bg-blue-700 rounded-full">
                      Save Preferences
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Account Tab */}
            <TabsContent value="account">
              <div className="max-w-6xl space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-900">
                      <User className="w-5 h-5" /> Account Settings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <CreditCard className="w-5 h-5 text-gray-400" />
                        <div>
                          <p className="font-medium">•••• •••• •••• 4242</p>
                          <p className="text-sm text-gray-600">Expires 12/2026</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Update</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Billing Address</p>
                        <p className="text-sm text-gray-600">123 Main Street, San Francisco, CA 94107</p>
                      </div>
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Subscription Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Premium Plan</p>
                        <p className="text-sm text-gray-600">Next billing: December 15, 2024</p>
                      </div>
                      <Badge className="bg-blue-100 text-blue-700 border border-blue-200">
                        Active
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-red-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-600">
                      <Trash2 className="w-5 h-5" />
                      Danger Zone
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Export Account Data</p>
                        <p className="text-sm text-gray-600">Download a copy of your data</p>
                      </div>
                      <Button variant="outline" className="rounded-full">Export Data</Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Delete Account</p>
                        <p className="text-sm text-gray-600">Permanently delete your account and all data</p>
                      </div>
                      <Button variant="destructive" className="rounded-full">Delete Account</Button>
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

export default Settings;

