import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Heart, Building, Users, User, Plane, Check } from "lucide-react";
import { Link } from "wouter";

export default function Photography() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <a className="text-2xl font-bold text-foreground tracking-tight">
                FrameTell
              </a>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/services">
                <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </a>
              </Link>
              <Link href="/portfolio">
                <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Portfolio
                </a>
              </Link>
              <Link href="/about">
                <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <Button variant="default" size="sm">
                    Get in Touch
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Camera className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Photography</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
                Moments Frozen in Time
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Professional photography that captures the essence of your events,
                properties, and personalities with artistic precision.
              </p>
              <Link href="/contact">
                <a>
                  <Button size="lg" variant="default">
                    Book a Session
                  </Button>
                </a>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="h-20 w-20 text-primary/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Photography Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Capturing life's moments with professional expertise and creative vision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Reportage Photography */}
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-8">
                <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-lg">
                  <Camera className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Reportage Photography
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Authentic, candid photography that tells the story of your event as
                  it unfolds. Perfect for weddings, parties, and special occasions.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Natural, unposed moments
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Documentary-style storytelling
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Emotional and authentic captures
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Full-day coverage available
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Real Estate */}
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-8">
                <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-lg">
                  <Building className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Real Estate Photography
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Showcase properties at their best with professional architectural
                  and interior photography. Includes drone aerial shots for stunning
                  perspectives.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Interior and exterior photography
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Aerial drone photography
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      HDR and twilight shots
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Fast turnaround for listings
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Business Events */}
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-8">
                <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-lg">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Business Event Photography
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Professional coverage of corporate events, conferences, and business
                  gatherings. Create valuable content for marketing and communications.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Conference and seminar coverage
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Corporate headshots
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Team and group photos
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Product and venue photography
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Model Portfolio */}
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-8">
                <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-lg">
                  <User className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Model Portfolio Photography
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Build a stunning portfolio with professional fashion and portrait
                  photography. Perfect for aspiring and established models.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Studio and outdoor sessions
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Multiple looks and styling
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Professional retouching
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Portfolio consultation
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Drone Services Section */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Plane className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Drone Photography</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Aerial Perspectives
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Take your visuals to new heights with professional drone photography.
                Perfect for real estate, events, and unique creative projects that
                demand stunning aerial views.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Licensed and insured drone operations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    High-resolution aerial photography
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Panoramic and 360° captures
                  </span>
                </li>
              </ul>
              <Link href="/contact">
                <a>
                  <Button variant="default">
                    Request Drone Services
                  </Button>
                </a>
              </Link>
            </div>
            <div className="order-first md:order-last">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Plane className="h-20 w-20 text-primary/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Photography Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Heart className="h-20 w-20 text-primary/20" />
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Heart className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Wedding Photography</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Your Special Day
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Timeless wedding photography that captures the joy, emotion, and
                beauty of your celebration. We blend reportage and portrait styles to
                tell your unique love story.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Full-day wedding coverage
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Engagement photo sessions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Professional albums and prints
                  </span>
                </li>
              </ul>
              <Link href="/contact">
                <a>
                  <Button variant="default">
                    Discuss Your Wedding
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Capture Your Moments?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's create stunning photographs that you'll treasure forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <a>
                <Button size="lg" variant="default">
                  Book a Session
                </Button>
              </a>
            </Link>
            <Link href="/portfolio">
              <a>
                <Button size="lg" variant="outline">
                  View Portfolio
                </Button>
              </a>
            </Link>
          </div>
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
              <Link href="/services">
                <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </a>
              </Link>
              <Link href="/portfolio">
                <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Portfolio
                </a>
              </Link>
              <Link href="/about">
                <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
              </Link>
              <Link href="/contact">
                <a className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
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
