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
import { Package, Truck, CheckCircle, Clock, Search, Download, PawPrint } from "lucide-react";

const OrderHistory = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const orders = [
    {
      id: "ORD-2024-001",
      date: "2024-12-01",
      status: "Delivered",
      items: [{ name: "Max's Premium Active Adult", quantity: 2, price: 55.99 }],
      total: 111.98,
      trackingNumber: "1Z999AA1234567890",
      deliveryAddress: "123 Main St, San Francisco, CA 94107",
      estimatedDelivery: "2024-12-03",
      actualDelivery: "2024-12-03",
    },
    {
      id: "ORD-2024-002",
      date: "2024-11-15",
      status: "Delivered",
      items: [
        { name: "Max's Premium Active Adult", quantity: 2, price: 55.99 },
        { name: "Bella's Senior Care", quantity: 1, price: 45.99 },
      ],
      total: 157.97,
      trackingNumber: "1Z999AA1234567891",
      deliveryAddress: "123 Main St, San Francisco, CA 94107",
      estimatedDelivery: "2024-11-17",
      actualDelivery: "2024-11-17",
    },
    {
      id: "ORD-2024-003",
      date: "2024-11-01",
      status: "Delivered",
      items: [{ name: "Max's Premium Active Adult", quantity: 2, price: 55.99 }],
      total: 111.98,
      trackingNumber: "1Z999AA1234567892",
      deliveryAddress: "123 Main St, San Francisco, CA 94107",
      estimatedDelivery: "2024-11-03",
      actualDelivery: "2024-11-02",
    },
    {
      id: "ORD-2024-004",
      date: "2024-10-15",
      status: "Delivered",
      items: [{ name: "Max's Premium Active Adult", quantity: 2, price: 55.99 }],
      total: 111.98,
      trackingNumber: "1Z999AA1234567893",
      deliveryAddress: "123 Main St, San Francisco, CA 94107",
      estimatedDelivery: "2024-10-17",
      actualDelivery: "2024-10-16",
    },
  ];

  const upcomingOrders = [
    {
      id: "ORD-2024-005",
      date: "2024-12-15",
      status: "Processing",
      items: [{ name: "Max's Premium Active Adult", quantity: 2, price: 55.99 }],
      total: 111.98,
      estimatedDelivery: "2024-12-17",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Delivered":
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case "In Transit":
        return <Truck className="w-5 h-5 text-blue-600" />;
      case "Processing":
        return <Package className="w-5 h-5 text-orange-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const colors: Record<string, string> = {
      Delivered: "bg-green-100 text-green-700",
      "In Transit": "bg-blue-100 text-blue-700",
      Processing: "bg-orange-100 text-orange-700",
      Cancelled: "bg-red-100 text-red-700",
    };
    return (
      <span
        className={`px-3 py-1 rounded-full text-xs font-semibold ${colors[status] || "bg-gray-100 text-gray-700"}`}
      >
        {status}
      </span>
    );
  };

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.items.some((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesFilter = filterStatus === "all" || order.status.toLowerCase().includes(filterStatus.toLowerCase());
    return matchesSearch && matchesFilter;
  });

  const handleMobileMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  const handleMobileNavigation = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* playful gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50" />

      <Header onMobileMenuToggle={handleMobileMenuToggle} isMobileMenuOpen={isMenuOpen} />

      <div className="flex">
        <Sidebar isMobileMenuOpen={isMenuOpen} onNavigate={handleMobileNavigation} />

        <div className="flex-1 p-6 lg:p-10 space-y-10 pt-[72px] mt-6 lg:mt-20 lg:pl-64 lg:ms-12">
          {/* Page Title */}
          <div className="mb-8 flex items-center gap-3">
            <PawPrint className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900">Order History</h1>
              <p className="text-slate-600">Track and manage your furry friend’s meals 🐾</p>
            </div>
          </div>

          {/* Search + Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                placeholder="Search by ID or product name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-full"
              />
            </div>
            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-full sm:w-48 rounded-full">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Orders</SelectItem>
                <SelectItem value="delivered">Delivered</SelectItem>
                <SelectItem value="transit">In Transit</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="flex items-center gap-2 rounded-full">
              <Download className="w-4 h-4" />
              Export
            </Button>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-2 rounded-full bg-blue-100 p-1">
              <TabsTrigger value="all" className="rounded-full data-[state=active]:bg-white">
                All Orders
              </TabsTrigger>
              <TabsTrigger value="upcoming" className="rounded-full data-[state=active]:bg-white">
                Upcoming
              </TabsTrigger>
            </TabsList>

            {/* All Orders */}
            <TabsContent value="all">
              <div className="space-y-6 mt-6">
                {filteredOrders.map((order) => (
                  <Card
                    key={order.id}
                    className="rounded-2xl shadow-md border border-blue-100 bg-white/70 backdrop-blur"
                  >
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(order.status)}
                        <div>
                          <CardTitle className="text-lg font-bold">{order.id}</CardTitle>
                          <p className="text-sm text-slate-600">
                            Ordered on {new Date(order.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        {getStatusBadge(order.status)}
                        <p className="text-xl font-bold mt-1 text-blue-700">${order.total}</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Items */}
                        <div>
                          <h4 className="font-semibold mb-2">Items</h4>
                          <div className="space-y-2">
                            {order.items.map((item, index) => (
                              <div key={index} className="flex justify-between text-sm">
                                <span>{item.name} × {item.quantity}</span>
                                <span>${item.price.toFixed(2)}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Delivery */}
                        <div>
                          <h4 className="font-semibold mb-2">Delivery Info</h4>
                          <p className="text-sm text-slate-600">{order.deliveryAddress}</p>
                          {order.actualDelivery && (
                            <p className="text-green-600 mt-1">
                              Delivered on {new Date(order.actualDelivery).toLocaleDateString()}
                            </p>
                          )}
                        </div>

                        {/* Tracking */}
                        <div>
                          <h4 className="font-semibold mb-2">Tracking</h4>
                          <p className="text-xs font-mono bg-slate-100 p-2 rounded">
                            {order.trackingNumber}
                          </p>
                          <div className="flex gap-2 mt-2">
                            <Button variant="outline" size="sm" className="rounded-full">Track</Button>
                            <Button variant="outline" size="sm" className="rounded-full">Reorder</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Upcoming */}
            <TabsContent value="upcoming">
              <div className="space-y-6 mt-6">
                {upcomingOrders.map((order) => (
                  <Card key={order.id} className="rounded-2xl border border-blue-100 shadow bg-white/70">
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(order.status)}
                        <div>
                          <CardTitle className="text-lg font-bold">{order.id}</CardTitle>
                          <p className="text-sm text-slate-600">
                            Scheduled for {new Date(order.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        {getStatusBadge(order.status)}
                        <p className="text-xl font-bold mt-1 text-blue-700">${order.total}</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Items</h4>
                          {order.items.map((item, idx) => (
                            <p key={idx} className="text-sm">
                              {item.name} × {item.quantity} — ${item.price.toFixed(2)}
                            </p>
                          ))}
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Estimated Delivery</h4>
                          <p className="text-blue-700 font-semibold">
                            {new Date(order.estimatedDelivery).toLocaleDateString()}
                          </p>
                          <div className="flex gap-2 mt-2">
                            <Button variant="outline" size="sm" className="rounded-full">Modify</Button>
                            <Button variant="outline" size="sm" className="rounded-full">Cancel</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Summary */}
          <Card className="mt-8 rounded-2xl shadow-lg border-0 bg-gradient-to-r from-blue-50 to-sky-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-900">
                <PawPrint className="w-5 h-5 text-blue-600" /> Order Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <p className="text-3xl font-extrabold text-blue-600">{orders.length}</p>
                  <p className="text-sm text-slate-600">Total Orders</p>
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-green-600">
                    ${orders.reduce((sum, o) => sum + o.total, 0).toFixed(2)}
                  </p>
                  <p className="text-sm text-slate-600">Total Spent</p>
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-orange-500">
                    ${(orders.reduce((sum, o) => sum + o.total, 0) / orders.length).toFixed(2)}
                  </p>
                  <p className="text-sm text-slate-600">Avg. Order</p>
                </div>
                <div>
                  <p className="text-3xl font-extrabold text-purple-600">{upcomingOrders.length}</p>
                  <p className="text-sm text-slate-600">Upcoming</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
