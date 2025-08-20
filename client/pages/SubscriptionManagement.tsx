import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Badge } from "../components/ui/badge";
import { Switch } from "../components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Calendar } from "../components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover";
import {
  CalendarIcon,
  CreditCard,
  Package,
  Truck,
  PawPrint,
  Plus,
} from "lucide-react";

const SubscriptionManagement = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [autoRenew, setAutoRenew] = useState(true);
  const [skipNext, setSkipNext] = useState(false);
  const [date, setDate] = useState<Date>();

  const handleMobileMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  const handleMobileNavigation = () => setIsMenuOpen(false);

  const subscriptions = [
    {
      id: "max-premium",
      petName: "Max",
      plan: "Premium Active Adult",
      status: "Active",
      nextDelivery: "Dec 15, 2024",
      frequency: "Monthly",
      price: "$55.99",
      bags: 2,
    },
    {
      id: "bella-senior",
      petName: "Bella",
      plan: "Senior Care",
      status: "Paused",
      nextDelivery: "Jan 10, 2025",
      frequency: "Bi-monthly",
      price: "$45.99",
      bags: 1,
    },
  ];

  const deliveryHistory = [
    { date: "Nov 15, 2024", status: "Delivered", amount: "$55.99" },
    { date: "Oct 15, 2024", status: "Delivered", amount: "$55.99" },
    { date: "Sep 15, 2024", status: "Delivered", amount: "$55.99" },
    { date: "Aug 15, 2024", status: "Delivered", amount: "$55.99" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100/30">
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
          <div className="mb-8 flex items-center gap-3">
            <PawPrint className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900">
                Subscription Management
              </h1>
              <p className="text-slate-600">
                Keep track of your pets’ nutrition plans and deliveries
              </p>
            </div>
          </div>

          {/* Active Subscriptions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {subscriptions.map((subscription) => (
              <Card
                key={subscription.id}
                className="border-0 shadow-md rounded-2xl bg-gradient-to-br from-white to-blue-50/50 hover:shadow-lg transition"
              >
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-lg font-semibold">
                    {subscription.petName}’s Plan
                  </CardTitle>
                  <Badge
                    className={`${
                      subscription.status === "Active"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-300 text-gray-700"
                    } rounded-full px-3 py-1`}
                  >
                    {subscription.status}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Package className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium">{subscription.plan}</p>
                      <p className="text-sm text-gray-600">
                        {subscription.bags} bag(s) per delivery
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Truck className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-medium">Next Delivery</p>
                      <p className="text-sm text-gray-600">
                        {subscription.nextDelivery}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-purple-600" />
                    <div>
                      <p className="font-medium">
                        {subscription.price} {subscription.frequency}
                      </p>
                      <p className="text-sm text-gray-600">
                        Auto-renewal enabled
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 rounded-lg border-blue-200 text-blue-600 hover:bg-blue-50"
                    >
                      {subscription.status === "Active" ? "Pause" : "Resume"}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 rounded-lg border-blue-200 text-blue-600 hover:bg-blue-50"
                    >
                      Modify
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 rounded-lg border-red-200 text-red-600 hover:bg-red-50"
                    >
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Subscription Settings */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="rounded-2xl border-0 shadow-md bg-white/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700">
                  <Truck className="w-5 h-5" /> Delivery Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex items-center justify-between">
                  <Label>Auto-renewal</Label>
                  <Switch checked={autoRenew} onCheckedChange={setAutoRenew} />
                </div>

                <div className="flex items-center justify-between">
                  <Label>Skip next delivery</Label>
                  <Switch checked={skipNext} onCheckedChange={setSkipNext} />
                </div>

                <div>
                  <Label>Delivery Frequency</Label>
                  <Select defaultValue="monthly">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="biweekly">Bi-weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="bimonthly">Bi-monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Preferred Delivery Day</Label>
                  <Select defaultValue="friday">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monday">Monday</SelectItem>
                      <SelectItem value="tuesday">Tuesday</SelectItem>
                      <SelectItem value="wednesday">Wednesday</SelectItem>
                      <SelectItem value="thursday">Thursday</SelectItem>
                      <SelectItem value="friday">Friday</SelectItem>
                      <SelectItem value="saturday">Saturday</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-0 shadow-md bg-white/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-700">
                  <CreditCard className="w-5 h-5" /> Payment & Billing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div>
                  <Label>Payment Method</Label>
                  <div className="flex items-center gap-3 p-3 border rounded-xl bg-gray-50">
                    <CreditCard className="w-5 h-5 text-gray-400" />
                    <div className="flex-1">
                      <p className="font-medium">•••• •••• •••• 4242</p>
                      <p className="text-sm text-gray-600">Expires 12/2026</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Change
                    </Button>
                  </div>
                </div>

                <div>
                  <Label>Billing Address</Label>
                  <div className="p-3 border rounded-xl bg-gray-50 text-sm">
                    <p>123 Main Street</p>
                    <p>San Francisco, CA 94107</p>
                    <p>United States</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Update Address
                  </Button>
                </div>

                <div>
                  <Label>Next Billing Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? date.toDateString() : "December 15, 2024"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Deliveries */}
          <Card className="rounded-2xl border-0 shadow-md bg-white/80 backdrop-blur">
            <CardHeader className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-blue-700">
                <Truck className="w-5 h-5" /> Recent Deliveries
              </CardTitle>
              <Button variant="outline" onClick={() => navigate("/order-history")}>
                View All
              </Button>
            </CardHeader>
            <CardContent className="space-y-3">
              {deliveryHistory.map((delivery, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-xl border bg-gray-50 hover:bg-blue-50/50 transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="font-medium">{delivery.date}</p>
                      <p className="text-sm text-gray-600">{delivery.status}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{delivery.amount}</p>
                    <Button variant="ghost" size="sm" className="text-xs">
                      Track
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Add New Subscription */}
          <Card className="rounded-2xl border-0 shadow-md bg-gradient-to-r from-blue-50 to-blue-100 mt-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-700">
                <Plus className="w-5 h-5" /> Add New Subscription
              </CardTitle>
              <p className="text-sm text-gray-600">
                Set up a subscription for another pet
              </p>
            </CardHeader>
            <CardContent className="flex justify-center py-6">
              <Button
                onClick={() => navigate("/food-customization")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-md flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Create New Subscription
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionManagement;
