import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Facebook,
  Menu,
  X,
  Shield,
  FileText,
  Mail,
  CheckCircle,
  DollarSign,
  Users,
  FileCheck,
  ExternalLink,
  Linkedin,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Award,
  Clock,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/lib/email";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    accountAge: "",
    followers: "",
    details: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const emailSent = await sendEmail(formData);

      if (emailSent) {
        toast({
          title: "Application Received!",
          description: "We'll contact you within 24 hours with your valuation.",
        });
        setFormData({
          name: "",
          email: "",
          accountAge: "",
          followers: "",
          details: "",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to send application. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full glass-card backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center gap-3">
              {/* <div className="relative">
                <Facebook className="h-10 w-10 text-gold" />
                <div className="absolute inset-0 blur-xl bg-gold/30"></div>
              </div> */}
              <span className="text-2xl font-bold text-foreground tracking-tight">
                Account
              </span>
              <span className="text-2xl font-bold text-gold tracking-tight">
                Bridge
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-medium text-muted-foreground hover:text-gold transition-all uppercase tracking-wider hover:scale-110"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="text-sm font-medium text-muted-foreground hover:text-gold transition-all uppercase tracking-wider hover:scale-110"
              >
                Process
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gold text-black hover:bg-gold-light font-bold uppercase tracking-wider shadow-[var(--shadow-gold)] hover:scale-105 transition-all relative overflow-hidden group"
              >
                <span className="relative z-10">Contact Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-muted/20 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gold" />
              ) : (
                <Menu className="h-6 w-6 text-gold" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 space-y-2 border-t border-border/50">
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left py-3 px-4 text-sm font-medium text-muted-foreground hover:text-gold hover:bg-muted/10 transition-all uppercase rounded-lg"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="block w-full text-left py-3 px-4 text-sm font-medium text-muted-foreground hover:text-gold hover:bg-muted/10 transition-all uppercase rounded-lg"
              >
                Process
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-gold text-black hover:bg-gold-light font-bold uppercase mt-2"
              >
                Apply Now
              </Button>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden hero-pattern py-20 lg:py-32 border-b border-gold/10">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 -left-20 w-72 h-72 bg-gold/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-block animate-fade-in">
              <Badge className="bg-gold/10 text-gold border-gold/30 px-6 py-2.5 text-sm font-medium uppercase tracking-widest glow-border">
                <Sparkles className="w-4 h-4 inline mr-2" />
                The Facebook Account Marketplace
              </Badge>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bebas tracking-tight text-foreground leading-none text-shadow-gold animate-fade-in">
              TURN YOUR FACEBOOK
              <span className="block bg-gradient-to-r from-gold via-gold-light to-gold bg-clip-text text-transparent mt-2">
                ACCOUNT INTO CASH
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
              Join sellers who've already cashed out. We've paid out{" "}
              <span className="text-gold font-bold text-3xl">$250K+</span> and
              counting.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button
                size="lg"
                className="bg-gold text-black hover:bg-gold-light font-bold text-lg px-12 py-8 uppercase tracking-wider shadow-[var(--shadow-gold)] hover:scale-105 transition-all relative overflow-hidden group"
                onClick={() => scrollToSection("contact")}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Your Free Valuation
                  <ArrowRight className="h-5 w-5" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-3 pt-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/20 to-muted border-2 border-background shadow-lg"
                  />
                ))}
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">
                  <span className="text-gold font-bold text-lg">100+</span>{" "}
                  Satisfied Sellers
                </p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-gold"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      {/* <section className="py-20 lg:py-32 bg-background relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <div className="inline-block">
                <Badge className="bg-gold/10 text-gold border-gold/30 px-4 py-2 uppercase tracking-wider">
                  Watch This First
                </Badge>
              </div>
              <h2 className="text-4xl sm:text-6xl font-bebas text-foreground tracking-tight leading-tight">
                SEE HOW{" "}
                <span className="text-gold text-shadow-gold">SIMPLE</span>
                <br />
                THE PROCESS REALLY IS
              </h2>
            </div>
            <Card className="overflow-hidden shadow-2xl glow-border bg-card/50 backdrop-blur-sm hover:scale-[1.02] transition-transform">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-gradient-to-br from-muted to-secondary/30">
                  <video
                    poster="/hero-background.jpg"
                    className="w-full h-full object-cover"
                    controls
                  >
                    <source src="/hero-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/40 transition-colors">
                    <Button
                      size="lg"
                      className="rounded-full h-24 w-24 bg-gold hover:bg-gold-light text-black hover:scale-110 transition-all shadow-2xl relative group"
                    >
                      <div className="absolute inset-0 rounded-full bg-gold animate-ping opacity-20"></div>
                      <svg
                        className="h-12 w-12 ml-1 relative z-10"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* About Section */}
      <section
        id="about"
        className="py-20 lg:py-32 bg-gradient-to-b from-secondary/20 to-background border-y border-gold/10"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              <div>
                <Badge className="bg-gold/10 text-gold border-gold/30 mb-4 uppercase tracking-wider">
                  About Us
                </Badge>
                <h2 className="text-5xl sm:text-6xl font-bebas text-foreground tracking-tight leading-tight mb-6">
                  WHO WE ARE &
                  <span className="block text-gold text-shadow-gold">
                    WHY WE DO THIS
                  </span>
                </h2>
              </div>

              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <div className="flex gap-4">
                  <Award className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground font-bold mb-2">
                      AccountBridge Digital Solutions
                    </p>
                    {/* <p>
                      A legitimate, registered business specialized in theme
                      page acquisitions since 2024.
                    </p> */}
                  </div>
                </div>

                <div className="flex gap-4">
                  <TrendingUp className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground font-bold mb-2">
                      Our Mission
                    </p>
                    <p>
                      We help individuals and businesses exit Facebook on their
                      terms, providing transparent valuations and fast payments
                      for quality accounts.
                    </p>
                  </div>
                </div>

                <div className="border-t border-gold/20 pt-6 mt-6 space-y-3">
                  <p className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-gold" />
                    <a
                      href="mailto:ecomgoats8@gmail.com"
                      className="text-gold hover:text-gold-light underline transition-colors font-medium"
                    >
                      ecomgoats8@gmail.com
                    </a>
                  </p>
                  {/* <p className="flex items-center gap-2">
                    <ExternalLink className="w-5 h-5 text-gold" />
                    <a
                      href="https://www.accountbridge.digital"
                      className="text-gold hover:text-gold-light underline transition-colors font-medium"
                    >
                      www.accountbridge.digital
                    </a>
                  </p> */}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <Card className="glass-card glow-border hover:shadow-2xl transition-shadow">
              <CardContent className="p-10 space-y-8">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-8 h-8 text-gold" />
                  <h3 className="text-3xl font-bebas text-gold tracking-tight">
                    LEADERSHIP TEAM
                  </h3>
                </div>

                <div className="space-y-8">
                  <div className="space-y-3 p-6 rounded-lg bg-secondary/30 border border-gold/10">
                    <div className="mb-4">
                      <img
                        src="/founder1.jpeg"
                        alt="Abdallah Nuruddeen"
                        className="w-32 h-32 rounded-full object-cover border-2 border-gold/30 mx-auto"
                      />
                    </div>
                    <h4 className="text-2xl font-bold text-foreground text-center">
                      Abdallah Nuruddeen
                    </h4>
                    <p className="text-sm text-gold font-bold uppercase tracking-widest text-center">
                      Co-Founder & Chief of Strategy
                    </p>
                    <p className="text-base text-muted-foreground leading-relaxed text-center">
                      Prior Sales Training at JP Morgan
                      <br />
                      $150K+ in e-commerce sales.
                    </p>
                  </div>

                  <div className="space-y-3 p-6 rounded-lg bg-secondary/30 border border-gold/10">
                    <div className="mb-4">
                      <img
                        src="/founder_vk.png"
                        alt="Vivek Katari"
                        className="w-32 h-32 rounded-full object-cover border-2 border-gold/30 mx-auto"
                      />
                    </div>
                    <h4 className="text-2xl font-bold text-foreground text-center">
                      Vivek Katari
                    </h4>
                    <p className="text-sm text-gold font-bold uppercase tracking-widest text-center">
                      Co-Founder & Chief of Marketing
                    </p>
                    <p className="text-base text-muted-foreground leading-relaxed text-center">
                      Former Chief of Marketing at Owner.com, a restaurant
                      company now valued at $1B. $250K+ in e-commerce sales.
                    </p>
                  </div>
                </div>

                <div className="border-t border-gold/30 pt-6 space-y-2"></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Proven Track Record */}
      <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-gold/5"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-gold/10 text-gold border-gold/30 mb-4 uppercase tracking-wider">
              Real Results
            </Badge>
            <h2 className="text-5xl sm:text-6xl font-bebas text-foreground tracking-tight">
              THE NUMBERS{" "}
              <span className="text-gold text-shadow-gold">DON'T LIE</span>
            </h2>
          </div>

          {/* Statistics Grid */}
          <div className="grid sm:grid-cols-3 gap-8 mb-20">
            <Card className="text-center glass-card glow-border hover:scale-105 transition-all group">
              <CardContent className="p-10 space-y-6">
                <div className="relative">
                  <CheckCircle className="h-20 w-20 text-green-500 mx-auto" />
                  <div className="absolute inset-0 blur-2xl bg-green-500/20 group-hover:bg-green-500/30 transition-colors"></div>
                </div>
                <h3 className="text-6xl font-bebas bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                  100+
                </h3>
                <p className="text-muted-foreground font-bold uppercase tracking-wider text-sm">
                  Accounts Acquired
                </p>
                <p className="text-xs text-muted-foreground">Since 2024</p>
              </CardContent>
            </Card>

            <Card className="text-center glass-card glow-border hover:scale-105 transition-all group">
              <CardContent className="p-10 space-y-6">
                <div className="relative">
                  <DollarSign className="h-20 w-20 text-gold mx-auto" />
                  <div className="absolute inset-0 blur-2xl bg-gold/20 group-hover:bg-gold/30 transition-colors"></div>
                </div>
                <h3 className="text-6xl font-bebas bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                  $250K+
                </h3>
                <p className="text-muted-foreground font-bold uppercase tracking-wider text-sm">
                  Paid to Sellers
                </p>
                <p className="text-xs text-muted-foreground">
                  Fair Market Value
                </p>
              </CardContent>
            </Card>

            <Card className="text-center glass-card glow-border hover:scale-105 transition-all group">
              <CardContent className="p-10 space-y-6">
                <div className="relative">
                  <Users className="h-20 w-20 text-gold mx-auto" />
                  <div className="absolute inset-0 blur-2xl bg-gold/20 group-hover:bg-gold/30 transition-colors"></div>
                </div>
                <h3 className="text-6xl font-bebas bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
                  98%
                </h3>
                <p className="text-muted-foreground font-bold uppercase tracking-wider text-sm">
                  Satisfaction Rate
                </p>
                <p className="text-xs text-muted-foreground">5-Star Reviews</p>
              </CardContent>
            </Card>
          </div>

          {/* Featured Case Study */}
          <Card className="max-w-5xl mx-auto glass-card glow-border hover:shadow-2xl transition-shadow">
            <CardContent className="p-10 lg:p-14 space-y-8">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <FileCheck className="h-12 w-12 text-gold" />
                  <div className="absolute inset-0 blur-xl bg-gold/30"></div>
                </div>
                <h3 className="text-4xl font-bebas text-gold tracking-tight">
                  SUCCESS STORY
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-secondary/30 border border-gold/10">
                    <p className="text-sm text-gold font-bold uppercase tracking-wider mb-1">
                      Client
                    </p>
                    <p className="text-lg text-foreground">
                      Facbook page in the health niche
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/30 border border-gold/10">
                    <p className="text-sm text-gold font-bold uppercase tracking-wider mb-1">
                      Account Details
                    </p>
                    <p className="text-lg text-foreground">
                      400K followers • 2-year history • High engagement
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-gold/10 border border-gold/30">
                    <p className="text-sm text-gold font-bold uppercase tracking-wider mb-1">
                      Purchase Price
                    </p>
                    <p className="text-4xl font-bebas text-gold">$7,500</p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/30 border border-gold/10">
                    <p className="text-sm text-gold font-bold uppercase tracking-wider mb-1 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Timeline
                    </p>
                    <p className="text-lg text-foreground">
                      48 hours from inquiry to payment
                    </p>
                  </div>
                </div>
              </div>

              <blockquote className="border-l-4 border-gold pl-8 py-6 italic text-foreground text-xl leading-relaxed bg-gradient-to-r from-gold/5 to-transparent rounded-r-lg">
                "The process was incredibly smooth. They verified everything
                professionally, offered a fair price, and the funds were in my
                account within 2 days. Highly recommend!"
                <footer className="text-base text-gold font-bold not-italic mt-4 flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  M.T., California
                </footer>
              </blockquote>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-bold uppercase tracking-wider transition-all hover:gap-4"
              >
                View Full Portfolio
                <ExternalLink className="h-5 w-5" />
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="process"
        className="py-20 lg:py-32 bg-gradient-to-b from-secondary/20 to-background border-y border-gold/10"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-gold/10 text-gold border-gold/30 mb-4 uppercase tracking-wider">
              Simple Process
            </Badge>
            <h2 className="text-5xl sm:text-6xl font-bebas text-foreground tracking-tight mb-4">
              FROM APPLICATION TO{" "}
              <span className="text-gold text-shadow-gold">CASH</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Get paid in as little as{" "}
              <span className="text-gold font-bold">48 hours</span>
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connection Lines */}
            <div className="hidden lg:block absolute top-1/3 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-gold/0 via-gold/50 to-gold/0"></div>

            {[
              {
                step: "1",
                icon: FileText,
                title: "Submit Details",
                description: "Quick 5-minute form with your account info",
              },
              {
                step: "2",
                icon: DollarSign,
                title: "Get Valuation",
                description: "Fair market offer within 24 hours",
              },
              {
                step: "3",
                icon: Shield,
                title: "Verification",
                description: "Secure authenticity and ownership check",
              },
              {
                step: "4",
                icon: CheckCircle,
                title: "Get Paid",
                description: "Wire transfer or crypto payment",
              },
            ].map((item, index) => (
              <Card
                key={item.step}
                className="text-center glass-card glow-border hover:scale-105 transition-all group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 space-y-6">
                  <div className="relative">
                    <div className="h-20 w-20 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-4xl font-bebas text-black mx-auto shadow-[var(--shadow-gold)] group-hover:scale-110 transition-transform">
                      {item.step}
                    </div>
                    <div className="absolute inset-0 blur-2xl bg-gold/20 group-hover:bg-gold/40 transition-colors mx-auto w-20 h-20"></div>
                  </div>

                  <item.icon className="w-10 h-10 text-gold mx-auto" />

                  <h3 className="text-2xl font-bebas text-foreground tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-gold/10 text-gold border-gold/30 mb-4 uppercase tracking-wider">
              Your Security Matters
            </Badge>
            <h2 className="text-5xl sm:text-6xl font-bebas text-foreground tracking-tight">
              BUILT ON <span className="text-gold text-shadow-gold">TRUST</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Secure Transfers",
                description:
                  "All transactions protected by escrow service and legal contracts",
              },
              {
                icon: FileText,
                title: "Legal Compliance",
                description:
                  "Full compliance with digital asset transfer and privacy laws",
              },
              {
                icon: Mail,
                title: "24/7 Support",
                description:
                  "Dedicated account manager throughout the entire process",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center space-y-6 p-8 glass-card glow-border rounded-lg hover:scale-105 transition-transform"
              >
                <div className="relative inline-block">
                  <item.icon className="h-20 w-20 text-gold mx-auto" />
                  <div className="absolute inset-0 blur-2xl bg-gold/20"></div>
                </div>
                <h3 className="text-2xl font-bebas text-foreground tracking-tight">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section
        id="contact"
        className="py-20 lg:py-32 bg-gradient-to-b from-secondary/20 via-gold/5 to-secondary/20 border-y border-gold/10 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center space-y-6 mb-12">
            <Badge className="bg-gold/10 text-gold border-gold/30 uppercase tracking-wider">
              Ready to Cash Out?
            </Badge>
            <h2 className="text-5xl sm:text-7xl font-bebas text-foreground tracking-tight leading-tight">
              GET YOUR FREE
              <span className="block text-gold text-shadow-gold">
                VALUATION NOW
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Response time:{" "}
              <span className="text-gold font-bold">Under 24 hours</span>
            </p>
          </div>

          <Card className="max-w-2xl mx-auto shadow-2xl glass-card glow-border">
            <CardContent className="p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold mb-3 text-foreground uppercase tracking-wider flex items-center gap-2"
                    >
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-secondary/50 border-gold/20 focus:border-gold h-12 text-lg"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold mb-3 text-foreground uppercase tracking-wider"
                    >
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-secondary/50 border-gold/20 focus:border-gold h-12 text-lg"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="accountAge"
                      className="block text-sm font-bold mb-3 text-foreground uppercase tracking-wider"
                    >
                      Account Age
                    </label>
                    <Input
                      id="accountAge"
                      type="text"
                      placeholder="e.g., 5 years"
                      value={formData.accountAge}
                      onChange={(e) =>
                        setFormData({ ...formData, accountAge: e.target.value })
                      }
                      className="w-full bg-secondary/50 border-gold/20 focus:border-gold h-12 text-lg"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="followers"
                      className="block text-sm font-bold mb-3 text-foreground uppercase tracking-wider"
                    >
                      Followers/Friends
                    </label>
                    <Input
                      id="followers"
                      type="text"
                      placeholder="e.g., 10,000"
                      value={formData.followers}
                      onChange={(e) =>
                        setFormData({ ...formData, followers: e.target.value })
                      }
                      className="w-full bg-secondary/50 border-gold/20 focus:border-gold h-12 text-lg"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="details"
                    className="block text-sm font-bold mb-3 text-foreground uppercase tracking-wider"
                  >
                    Additional Details
                  </label>
                  <Textarea
                    id="details"
                    rows={5}
                    placeholder="Tell us about your account's engagement, niche, content type, or any other relevant details..."
                    value={formData.details}
                    onChange={(e) =>
                      setFormData({ ...formData, details: e.target.value })
                    }
                    className="w-full bg-secondary/50 border-gold/20 focus:border-gold text-lg"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gold text-black hover:bg-gold-light font-bold text-xl py-8 uppercase tracking-wider shadow-[var(--shadow-gold)] hover:scale-105 transition-all relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Submit for Valuation
                        <ArrowRight className="h-6 w-6" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Button>

                <p className="text-xs text-muted-foreground text-center pt-2">
                  By submitting, you agree to our{" "}
                  <a href="#" className="text-gold hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-gold hover:underline">
                    Privacy Policy
                  </a>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-foreground py-16 border-t border-gold/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Column 1 */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                {/* <div className="relative">
                  <Facebook className="h-12 w-12 text-gold" />
                  <div className="absolute inset-0 blur-xl bg-gold/30"></div>
                </div> */}
                <span className="text-2xl font-bold text-foreground tracking-tight">
                  Account
                </span>
                <span className="text-2xl font-bold text-gold tracking-tight">
                  Bridge
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Professional Facebook account acquisition services since 2024.
                Trusted by 100+ sellers.
              </p>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <h4 className="font-bold text-gold uppercase tracking-widest text-sm">
                Contact
              </h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p className="hover:text-gold transition-colors">
                  ecomgoats8@gmail.com
                </p>
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-4">
              <h4 className="font-bold text-gold uppercase tracking-widest text-sm">
                Legal
              </h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <a href="#" className="block hover:text-gold transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="block hover:text-gold transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="block hover:text-gold transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gold/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 AccountBridge Digital Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
