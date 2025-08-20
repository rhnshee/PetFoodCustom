import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Badge } from "../components/ui/badge";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { 
  Search, MessageCircle, Mail, Phone, Clock, ExternalLink, 
  BookOpen, FileText, Users, PawPrint 
} from "lucide-react";

const HelpSupport = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [ticketSubject, setTicketSubject] = useState("");
  const [ticketMessage, setTicketMessage] = useState("");
  const [ticketCategory, setTicketCategory] = useState("");

  const faqs = [
    {
      id: "1",
      question: "How do I customize my pet's food recipe?",
      answer: "Go to the 'Customize Food' section. Select ingredients, adjust nutrition, and preview before saving.",
      category: "Food Customization"
    },
    {
      id: "2", 
      question: "Can I pause or skip a delivery?",
      answer: "Yes! In Subscription Management, pause or skip deliveries up to 48h before schedule.",
      category: "Subscription"
    },
    {
      id: "3",
      question: "What if my pet has food allergies?",
      answer: "List allergies in your pet’s profile. Our system filters recipes automatically.",
      category: "Pet Health"
    },
    {
      id: "4",
      question: "How do I track my order?",
      answer: "Check 'Order History' for tracking numbers & live updates.",
      category: "Orders"
    },
    {
      id: "5",
      question: "What payment methods do you accept?",
      answer: "Visa, MasterCard, Amex, PayPal, and Apple Pay.",
      category: "Billing"
    },
  ];

  const supportArticles = [
    {
      id: "1",
      title: "Getting Started with PetFoodCustom",
      description: "Step-by-step setup for your account & first pet order",
      category: "Getting Started",
      readTime: "5 min",
      icon: BookOpen
    },
    {
      id: "2",
      title: "Understanding Pet Nutrition",
      description: "Protein, carbs, and fat breakdown for pets",
      category: "Nutrition",
      readTime: "8 min",
      icon: BookOpen
    },
    {
      id: "3",
      title: "Managing Multiple Pets",
      description: "Easily set up food plans for multiple pets",
      category: "Pet Management",
      readTime: "4 min",
      icon: Users
    },
  ];

  const supportTickets = [
    {
      id: "TICK-2024-001",
      subject: "Issue with recent delivery",
      status: "Open",
      priority: "High",
      created: "2024-12-08",
      lastUpdated: "2024-12-08"
    },
    {
      id: "TICK-2024-002", 
      subject: "Question about ingredient sourcing",
      status: "Resolved",
      priority: "Low",
      created: "2024-12-05",
      lastUpdated: "2024-12-06"
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    const classes: { [key: string]: string } = {
      "Open": "bg-blue-100 text-blue-700 border-blue-200",
      "In Progress": "bg-yellow-100 text-yellow-700 border-yellow-200", 
      "Resolved": "bg-green-100 text-green-700 border-green-200",
      "Closed": "bg-gray-100 text-gray-600 border-gray-200"
    };
    return <Badge className={classes[status] || "bg-gray-100"}>{status}</Badge>;
  };

  const getPriorityBadge = (priority: string) => {
    const classes: { [key: string]: string } = {
      "High": "bg-red-100 text-red-700 border-red-200",
      "Medium": "bg-yellow-100 text-yellow-700 border-yellow-200",
      "Low": "bg-green-100 text-green-700 border-green-200"
    };
    return <Badge className={classes[priority] || "bg-gray-100"}>{priority}</Badge>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Header 
        onMobileMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
        isMobileMenuOpen={isMenuOpen}
      />

      <div className="flex">
        <Sidebar 
          isMobileMenuOpen={isMenuOpen}
          onNavigate={() => setIsMenuOpen(false)}
        />

        {/* Main Content */}
        <div className="flex-1 p-6 lg:p-10 space-y-10 pt-[72px] mt-6 lg:mt-20 lg:pl-64 lg:ms-12">
          <div className="mb-6 flex items-center gap-3">
            <PawPrint className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900">Help & Support</h1>
              <p className="text-slate-600">Answers, guides & friendly support for you and your pets</p>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="hover:shadow-xl transition-all cursor-pointer rounded-2xl bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Live Chat</h3>
                  <p className="text-sm text-gray-600">Avg wait: 2 mins</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all cursor-pointer rounded-2xl bg-gradient-to-br from-green-50 to-white">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                  <Mail className="w-7 h-7 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Email Support</h3>
                  <p className="text-sm text-gray-600">Reply within 24h</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all cursor-pointer rounded-2xl bg-gradient-to-br from-purple-50 to-white">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Phone className="w-7 h-7 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone Support</h3>
                  <p className="text-sm text-gray-600">Mon-Fri 9AM–6PM</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="faq" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="faq">FAQ</TabsTrigger>
              <TabsTrigger value="guides">Guides</TabsTrigger>
              <TabsTrigger value="contact">Contact Us</TabsTrigger>
              <TabsTrigger value="tickets">My Tickets</TabsTrigger>
            </TabsList>

            {/* FAQ */}
            <TabsContent value="faq">
              <div className="space-y-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search pet questions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 rounded-xl"
                  />
                </div>

                <Accordion type="single" collapsible>
                  {filteredFaqs.map((faq) => (
                    <AccordionItem key={faq.id} value={faq.id}>
                      <AccordionTrigger className="text-left font-semibold">
                        <div className="flex items-center gap-3">
                          <span>{faq.question}</span>
                          <Badge className="bg-blue-50 text-blue-700 border-blue-200 text-xs">
                            {faq.category}
                          </Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>

            {/* Guides */}
            <TabsContent value="guides">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {supportArticles.map((article) => {
                  const IconComponent = article.icon;
                  return (
                    <Card key={article.id} className="hover:shadow-xl rounded-2xl bg-white">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center">
                            <IconComponent className="w-7 h-7 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge className="bg-blue-100 text-blue-700">{article.category}</Badge>
                              <div className="flex items-center gap-1 text-xs text-gray-600">
                                <Clock className="w-3 h-3" /> {article.readTime}
                              </div>
                            </div>
                            <h3 className="font-semibold mb-1">{article.title}</h3>
                            <p className="text-sm text-gray-600 mb-3">{article.description}</p>
                            <Button variant="outline" size="sm" className="flex items-center gap-2">
                              Read More <ExternalLink className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            {/* Contact */}
            <TabsContent value="contact">
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle>Submit a Request</CardTitle>
                  <p className="text-sm text-gray-600">Need help? Tell us more and we’ll get back ASAP.</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Category</Label>
                    <Select value={ticketCategory} onValueChange={setTicketCategory}>
                      <SelectTrigger><SelectValue placeholder="Choose category" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General</SelectItem>
                        <SelectItem value="order">Order Issue</SelectItem>
                        <SelectItem value="delivery">Delivery</SelectItem>
                        <SelectItem value="billing">Billing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Subject</Label>
                    <Input
                      placeholder="Brief description"
                      value={ticketSubject}
                      onChange={(e) => setTicketSubject(e.target.value)}
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <Label>Message</Label>
                    <Textarea
                      placeholder="Details about your issue..."
                      value={ticketMessage}
                      onChange={(e) => setTicketMessage(e.target.value)}
                      className="rounded-xl min-h-[120px]"
                    />
                  </div>
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700 rounded-full">Submit</Button>
                    <Button variant="outline" className="rounded-full">Save Draft</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tickets */}
            <TabsContent value="tickets">
              <div className="space-y-4">
                {supportTickets.map((ticket) => (
                  <Card key={ticket.id} className="rounded-2xl">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <h3 className="font-semibold">{ticket.subject}</h3>
                          {getStatusBadge(ticket.status)}
                          {getPriorityBadge(ticket.priority)}
                        </div>
                        <span className="text-sm text-gray-600">#{ticket.id}</span>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div><span className="font-medium">Created:</span><p>{ticket.created}</p></div>
                        <div><span className="font-medium">Updated:</span><p>{ticket.lastUpdated}</p></div>
                        <div><span className="font-medium">Status:</span><p>{ticket.status}</p></div>
                        <div><span className="font-medium">Priority:</span><p>{ticket.priority}</p></div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" size="sm">View</Button>
                        <Button variant="outline" size="sm">Add Message</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;
