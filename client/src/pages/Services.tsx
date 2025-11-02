import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Film, Heart, Building, Users, Scissors, Radio, Sparkles } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
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
                <a className="text-sm text-foreground font-medium">Services</a>
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
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive visual storytelling solutions tailored to your needs.
            From intimate moments to grand events, we bring your vision to life.
          </p>
        </div>
      </section>

      {/* Main Service Categories */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <Link href="/services/videography">
              <a className="block group">
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
                  <CardContent className="p-8">
                    <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-lg">
                      <Film className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Videography
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Cinematic storytelling through motion. Capture weddings, events,
                      and brand narratives with professional video production.
                    </p>
                  </CardContent>
                </Card>
              </a>
            </Link>

            <Link href="/services/photography">
              <a className="block group">
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
                  <CardContent className="p-8">
                    <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-lg">
                      <Camera className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Photography
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Freeze moments in time. Professional photography for events,
                      real estate, and creative portfolios.
                    </p>
                  </CardContent>
                </Card>
              </a>
            </Link>

            <Link href="/services/post-production">
              <a className="block group">
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
                  <CardContent className="p-8">
                    <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-lg">
                      <Scissors className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Post-Production
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Transform raw footage into polished content with expert editing,
                      color grading, and finishing.
                    </p>
                  </CardContent>
                </Card>
              </a>
            </Link>
          </div>

          {/* Specialized Services */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Specialized Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our range of specialized offerings for every occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Heart className="h-8 w-8 text-primary mb-4" />
                <h4 className="font-bold text-foreground mb-2">Weddings</h4>
                <p className="text-sm text-muted-foreground">
                  Capture your special day with cinematic elegance
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-primary mb-4" />
                <h4 className="font-bold text-foreground mb-2">Events Coverage</h4>
                <p className="text-sm text-muted-foreground">
                  Professional documentation of corporate and social events
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Radio className="h-8 w-8 text-primary mb-4" />
                <h4 className="font-bold text-foreground mb-2">Live Streaming</h4>
                <p className="text-sm text-muted-foreground">
                  Broadcast your events to audiences worldwide
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Heart className="h-8 w-8 text-primary mb-4" />
                <h4 className="font-bold text-foreground mb-2">Love Stories</h4>
                <p className="text-sm text-muted-foreground">
                  Romantic narratives that celebrate your journey
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Sparkles className="h-8 w-8 text-primary mb-4" />
                <h4 className="font-bold text-foreground mb-2">Brand Stories</h4>
                <p className="text-sm text-muted-foreground">
                  Compelling visual content for your business
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Building className="h-8 w-8 text-primary mb-4" />
                <h4 className="font-bold text-foreground mb-2">Real Estate</h4>
                <p className="text-sm text-muted-foreground">
                  Showcase properties with stunning visuals
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Camera className="h-8 w-8 text-primary mb-4" />
                <h4 className="font-bold text-foreground mb-2">Model Portfolio</h4>
                <p className="text-sm text-muted-foreground">
                  Professional portfolio photography for models
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Film className="h-8 w-8 text-primary mb-4" />
                <h4 className="font-bold text-foreground mb-2">Drone Services</h4>
                <p className="text-sm text-muted-foreground">
                  Aerial perspectives for unique storytelling
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Create Together
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Ready to bring your vision to life? Contact us to discuss your project
            and get a custom quote.
          </p>
          <Link href="/contact">
            <a>
              <Button size="lg" variant="default">
                Get Started
              </Button>
            </a>
          </Link>
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
