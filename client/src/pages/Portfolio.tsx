import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Image as ImageIcon, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import { trackPortfolioView } from "@/lib/analytics";
import { MobileMenu } from "@/components/MobileMenu";

type ProjectType = "all" | "weddings" | "events" | "real-estate" | "brand" | "love-stories" | "model";
type ServiceType = "all" | "videography" | "photography";

export default function Portfolio() {
  const [activeProjectType, setActiveProjectType] = useState<ProjectType>("all");
  const [activeServiceType, setActiveServiceType] = useState<ServiceType>("all");
  const [showProjectDropdown, setShowProjectDropdown] = useState(false);
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);

  // Track portfolio category views
  useEffect(() => {
    if (activeProjectType !== "all" || activeServiceType !== "all") {
      trackPortfolioView(`${activeProjectType}-${activeServiceType}`);
    }
  }, [activeProjectType, activeServiceType]);

  // Placeholder portfolio items
  const portfolioItems = [
    { id: 1, title: "Elegant Wedding Film", projectType: "weddings", serviceType: "videography" },
    { id: 2, title: "Corporate Event Coverage", projectType: "events", serviceType: "videography" },
    { id: 3, title: "Luxury Real Estate", projectType: "real-estate", serviceType: "photography" },
    { id: 4, title: "Brand Story: Tech Startup", projectType: "brand", serviceType: "videography" },
    { id: 5, title: "Love Story Session", projectType: "love-stories", serviceType: "videography" },
    { id: 6, title: "Model Portfolio Shoot", projectType: "model", serviceType: "photography" },
    { id: 7, title: "Wedding Photography", projectType: "weddings", serviceType: "photography" },
    { id: 8, title: "Business Conference", projectType: "events", serviceType: "photography" },
    { id: 9, title: "Modern Architecture", projectType: "real-estate", serviceType: "photography" },
    { id: 10, title: "Product Launch Video", projectType: "brand", serviceType: "videography" },
    { id: 11, title: "Engagement Session", projectType: "love-stories", serviceType: "photography" },
    { id: 12, title: "Fashion Portfolio", projectType: "model", serviceType: "photography" },
  ];

  const filteredItems = portfolioItems.filter(item => {
    const matchesProject = activeProjectType === "all" || item.projectType === activeProjectType;
    const matchesService = activeServiceType === "all" || item.serviceType === activeServiceType;
    return matchesProject && matchesService;
  });

  const projectTypes = [
    { value: "all" as ProjectType, label: "All Projects" },
    { value: "weddings" as ProjectType, label: "Weddings" },
    { value: "events" as ProjectType, label: "Events" },
    { value: "real-estate" as ProjectType, label: "Real Estate" },
    { value: "brand" as ProjectType, label: "Brand Stories" },
    { value: "love-stories" as ProjectType, label: "Love Stories" },
    { value: "model" as ProjectType, label: "Model Portfolio" },
  ];

  const serviceTypes = [
    { value: "all" as ServiceType, label: "All Services" },
    { value: "videography" as ServiceType, label: "Videography" },
    { value: "photography" as ServiceType, label: "Photography" },
  ];

  const currentProjectLabel = projectTypes.find(p => p.value === activeProjectType)?.label || "All Projects";
  const currentServiceLabel = serviceTypes.find(s => s.value === activeServiceType)?.label || "All Services";

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-foreground tracking-tight">
              FrameTell
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Services
            </Link>
              <Link href="/portfolio" className="text-sm text-foreground font-medium">
              Portfolio
            </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
              <Link href="/contact">
                <Button variant="default" size="sm">
                    Get in Touch
                  </Button>
              </Link>
            </div>
            <MobileMenu />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Our Portfolio
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of visual stories across weddings, events, and brand narratives
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-12 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Desktop Filters - Horizontal Scroll */}
          <div className="hidden md:block">
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-muted-foreground mb-3">Project Type</h3>
              <div className="flex flex-wrap gap-2">
                {projectTypes.map((type) => (
                  <button
                    key={type.value}
                    onClick={() => setActiveProjectType(type.value)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeProjectType === type.value
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-3">Service Type</h3>
              <div className="flex flex-wrap gap-2">
                {serviceTypes.map((type) => (
                  <button
                    key={type.value}
                    onClick={() => setActiveServiceType(type.value)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeServiceType === type.value
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Filters - Dropdown */}
          <div className="md:hidden space-y-3">
            {/* Project Type Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowProjectDropdown(!showProjectDropdown);
                  setShowServiceDropdown(false);
                }}
                className="w-full flex items-center justify-between px-4 py-3 bg-secondary rounded-lg text-sm font-medium text-foreground"
              >
                <span>{currentProjectLabel}</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${showProjectDropdown ? "rotate-180" : ""}`} />
              </button>
              {showProjectDropdown && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-lg shadow-lg z-10 max-h-64 overflow-y-auto">
                  {projectTypes.map((type) => (
                    <button
                      key={type.value}
                      onClick={() => {
                        setActiveProjectType(type.value);
                        setShowProjectDropdown(false);
                      }}
                      className={`w-full px-4 py-3 text-left text-sm transition-colors ${
                        activeProjectType === type.value
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-accent"
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Service Type Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowServiceDropdown(!showServiceDropdown);
                  setShowProjectDropdown(false);
                }}
                className="w-full flex items-center justify-between px-4 py-3 bg-secondary rounded-lg text-sm font-medium text-foreground"
              >
                <span>{currentServiceLabel}</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${showServiceDropdown ? "rotate-180" : ""}`} />
              </button>
              {showServiceDropdown && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-lg shadow-lg z-10">
                  {serviceTypes.map((type) => (
                    <button
                      key={type.value}
                      onClick={() => {
                        setActiveServiceType(type.value);
                        setShowServiceDropdown(false);
                      }}
                      className={`w-full px-4 py-3 text-left text-sm transition-colors ${
                        activeServiceType === type.value
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-accent"
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Card key={item.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="relative aspect-video bg-secondary/30">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {item.serviceType === "videography" ? (
                      <Play className="h-16 w-16 text-primary opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                    ) : (
                      <ImageIcon className="h-16 w-16 text-primary opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <h3 className="text-white font-semibold">{item.title}</h3>
                    <p className="text-white/80 text-sm capitalize">{item.serviceType}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No portfolio items match your filters</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setActiveProjectType("all");
                  setActiveServiceType("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/30 py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">FrameTell</h3>
              <p className="text-sm text-muted-foreground">
                Professional Video Production & Photography
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">Services</h4>
              <div className="space-y-2">
                <Link href="/services" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Videography
                </Link>
                <Link href="/services" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Photography
                </Link>
                <Link href="/services" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Post-Production
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">Company</h4>
              <div className="space-y-2">
                <Link href="/portfolio" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Portfolio
                </Link>
                <Link href="/about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
                <Link href="/contact" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">Connect</h4>
              <p className="text-sm text-muted-foreground">
                Follow us on social media for latest work and updates.
              </p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 FrameTell. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
