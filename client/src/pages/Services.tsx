import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Film, Heart, Building, Users, Scissors, Radio, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { MobileMenu } from "@/components/MobileMenu";

export default function Services() {
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
              <Link href="/services" className="text-sm text-foreground font-medium">
              Services
            </Link>
              <Link href="/portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
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
      <section className="pt-32 pb-16 md:pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Comprehensive visual storytelling solutions tailored to your needs.
            From intimate moments to grand events, we bring your vision to life.
          </p>
        </div>
      </section>

      {/* Main Service Categories */}
      <section className="py-12 md:py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 mb-20">
            <Link href="/services/videography" className="block group">
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
            </Link>

            <Link href="/services/photography" className="block group">
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
            </Link>

            <Link href="/services/post-production" className="block group">
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
            </Link>
          </div>

          {/* Mobile Horizontal Scroll */}
          <div className="md:hidden mb-16 relative">
            <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory px-6 -mx-6">
              <Link href="/services/videography" className="flex-none w-[85%] snap-center">
                <Card className="h-full border-2 active:border-primary transition-all">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg">
                      <Film className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Videography
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Cinematic storytelling through motion. Capture weddings, events,
                      and brand narratives.
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/services/photography" className="flex-none w-[85%] snap-center">
                <Card className="h-full border-2 active:border-primary transition-all">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg">
                      <Camera className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Photography
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Freeze moments in time. Professional photography for events,
                      real estate, and portfolios.
                    </p>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/services/post-production" className="flex-none w-[85%] snap-center">
                <Card className="h-full border-2 active:border-primary transition-all">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg">
                      <Scissors className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Post-Production
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Transform raw footage into polished content with expert editing
                      and color grading.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
            {/* Scroll indicator */}
            <div className="text-center mt-2">
              <p className="text-xs text-muted-foreground">← Swipe to explore →</p>
            </div>
          </div>

          {/* Specialized Services */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
              Specialized Services
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our range of specialized offerings for every occasion
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/services/weddings" className="block">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Heart className="h-8 w-8 text-primary mb-4" />
                  <h4 className="font-bold text-foreground mb-2">Weddings & Love Stories</h4>
                  <p className="text-sm text-muted-foreground">
                    Capture your special day with cinematic elegance
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/events" className="block">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-primary mb-4" />
                  <h4 className="font-bold text-foreground mb-2">Events Coverage</h4>
                  <p className="text-sm text-muted-foreground">
                    Professional documentation of corporate and social events
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/real-estate" className="block">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Building className="h-8 w-8 text-primary mb-4" />
                  <h4 className="font-bold text-foreground mb-2">Real Estate</h4>
                  <p className="text-sm text-muted-foreground">
                    Showcase properties with stunning visuals
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/brand" className="block">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Sparkles className="h-8 w-8 text-primary mb-4" />
                  <h4 className="font-bold text-foreground mb-2">Brand Stories</h4>
                  <p className="text-sm text-muted-foreground">
                    Compelling visual content for your business
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/interviews" className="block">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Radio className="h-8 w-8 text-primary mb-4" />
                  <h4 className="font-bold text-foreground mb-2">Interviews</h4>
                  <p className="text-sm text-muted-foreground">
                    Professional interview filming and testimonials
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/model" className="block">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Camera className="h-8 w-8 text-primary mb-4" />
                  <h4 className="font-bold text-foreground mb-2">Model Portfolio</h4>
                  <p className="text-sm text-muted-foreground">
                    Professional portfolio photography for models
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Mobile Compact Grid (2 columns) */}
          <div className="md:hidden grid grid-cols-2 gap-3">
            <Link href="/services/weddings">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <Heart className="h-6 w-6 text-primary mb-2" />
                  <h4 className="font-bold text-sm text-foreground mb-1">Weddings & Love Stories</h4>
                  <p className="text-xs text-muted-foreground">
                    Cinematic elegance
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/events">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <Users className="h-6 w-6 text-primary mb-2" />
                  <h4 className="font-bold text-sm text-foreground mb-1">Events</h4>
                  <p className="text-xs text-muted-foreground">
                    Corporate & social
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/real-estate">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <Building className="h-6 w-6 text-primary mb-2" />
                  <h4 className="font-bold text-sm text-foreground mb-1">Real Estate</h4>
                  <p className="text-xs text-muted-foreground">
                    Property showcase
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/brand">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <Sparkles className="h-6 w-6 text-primary mb-2" />
                  <h4 className="font-bold text-sm text-foreground mb-1">Brand Stories</h4>
                  <p className="text-xs text-muted-foreground">
                    Business content
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/interviews">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <Radio className="h-6 w-6 text-primary mb-2" />
                  <h4 className="font-bold text-sm text-foreground mb-1">Interviews</h4>
                  <p className="text-xs text-muted-foreground">
                    Professional filming
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/model">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <Camera className="h-6 w-6 text-primary mb-2" />
                  <h4 className="font-bold text-sm text-foreground mb-1">Model Portfolio</h4>
                  <p className="text-xs text-muted-foreground">
                    Professional photos
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Let's Create Together
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8">
            Ready to bring your vision to life? Contact us to discuss your project
            and get a custom quote.
          </p>
          <Link href="/contact">
                <Button size="lg" variant="default">
                Get Started
              </Button>
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
