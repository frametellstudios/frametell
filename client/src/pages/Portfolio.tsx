import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Image as ImageIcon } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import { trackPortfolioView } from "@/lib/analytics";
import { MobileMenu } from "@/components/MobileMenu";

type Category = "all" | "weddings" | "events" | "real-estate" | "brand" | "love-stories" | "model";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  // Track portfolio category views
  useEffect(() => {
    if (activeCategory !== "all") {
      trackPortfolioView(activeCategory);
    }
  }, [activeCategory]);

  // Placeholder portfolio items
  const portfolioItems = [
    { id: 1, title: "Elegant Wedding Film", category: "weddings", type: "video" },
    { id: 2, title: "Corporate Event Coverage", category: "events", type: "video" },
    { id: 3, title: "Luxury Real Estate", category: "real-estate", type: "photo" },
    { id: 4, title: "Brand Story: Tech Startup", category: "brand", type: "video" },
    { id: 5, title: "Love Story Session", category: "love-stories", type: "video" },
    { id: 6, title: "Model Portfolio Shoot", category: "model", type: "photo" },
    { id: 7, title: "Wedding Photography", category: "weddings", type: "photo" },
    { id: 8, title: "Business Conference", category: "events", type: "photo" },
    { id: 9, title: "Modern Architecture", category: "real-estate", type: "photo" },
    { id: 10, title: "Product Launch Video", category: "brand", type: "video" },
    { id: 11, title: "Engagement Session", category: "love-stories", type: "photo" },
    { id: 12, title: "Fashion Portfolio", category: "model", type: "photo" },
  ];

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const categories = [
    { value: "all" as Category, label: "All Work" },
    { value: "weddings" as Category, label: "Weddings" },
    { value: "events" as Category, label: "Events" },
    { value: "real-estate" as Category, label: "Real Estate" },
    { value: "brand" as Category, label: "Brand Stories" },
    { value: "love-stories" as Category, label: "Love Stories" },
    { value: "model" as Category, label: "Model Portfolio" },
  ];

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
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Our Portfolio
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Explore our collection of visual stories. Each project represents our
            commitment to excellence and creative storytelling.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-12 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Desktop: Flex Wrap */}
          <div className="hidden md:flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={activeCategory === category.value ? "default" : "outline"}
                onClick={() => setActiveCategory(category.value)}
                className="min-w-[120px]"
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto scrollbar-hide -mx-6 px-6">
            <div className="flex gap-3 pb-4">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={activeCategory === category.value ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.value)}
                  className="min-w-[120px] flex-shrink-0"
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative aspect-video bg-muted">
                  {/* Placeholder for portfolio item */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                    {item.type === "video" ? (
                      <Play className="h-16 w-16 text-primary/40 group-hover:text-primary/60 transition-colors" />
                    ) : (
                      <ImageIcon className="h-16 w-16 text-primary/40 group-hover:text-primary/60 transition-colors" />
                    )}
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center text-white">
                      <p className="text-sm font-medium mb-2">
                        {item.type === "video" ? "Watch Video" : "View Photos"}
                      </p>
                      {item.type === "video" ? (
                        <Play className="h-10 w-10 mx-auto" />
                      ) : (
                        <ImageIcon className="h-10 w-10 mx-auto" />
                      )}
                    </div>
                  </div>

                  {/* Type badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium">
                    {item.type === "video" ? "Video" : "Photo"}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground capitalize">
                    {item.category.replace("-", " ")}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Empty state */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                No items found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Like What You See?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's create something amazing together. Get in touch to discuss your
            project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
                <Button size="lg" variant="default">
                  Start Your Project
                </Button>
              </Link>
            <Link href="/services">
                <Button size="lg" variant="outline">
                  View Services
                </Button>
              </Link>
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-sm text-muted-foreground">
            Portfolio items shown are placeholders. Actual work will be added through
            the content management system once integrated.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-2xl font-bold text-foreground mb-2">FrameTell</p>
              <p className="text-sm text-muted-foreground">
                Professional Video Production & Photography
              </p>
            </div>
            <div className="flex gap-8">
              <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Services
            </Link>
              <Link href="/portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Portfolio
            </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 FrameTell. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
