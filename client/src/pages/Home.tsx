import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Film, Scissors, Play } from "lucide-react";
import { Link } from "wouter";
import { MobileMenu } from "@/components/MobileMenu";

export default function Home() {
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
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
              Stories Worth Telling
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Professional videography, photography, and post-production services
              that capture your moments and elevate your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/portfolio">
                <Button size="lg" variant="default" className="w-full sm:w-auto">
                    <Play className="mr-2 h-5 w-5" />
                    View Our Work
                  </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Start Your Project
                  </Button>
              </Link>
            </div>
          </div>

          {/* Hero Video Placeholder */}
          <div className="mt-16 max-w-6xl mx-auto">
            <div className="relative aspect-video bg-muted rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Play className="h-20 w-20 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Showreel Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What We Do
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept to final output, we deliver end-to-end visual
              storytelling services.
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Videography */}
            <Link href="/services/videography" className="block group">
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
                  <CardContent className="p-8">
                    <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-lg">
                      <Film className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Videography
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Cinematic wedding films, love stories, business events, and
                      live streaming that capture every meaningful moment.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Weddings & Love Stories</li>
                      <li>• Business Events</li>
                      <li>• Live Event Coverage</li>
                      <li>• Brand Stories</li>
                    </ul>
                  </CardContent>
                </Card>
            </Link>

            {/* Photography */}
            <Link href="/services/photography" className="block group">
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
                  <CardContent className="p-8">
                    <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-lg">
                      <Camera className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Photography
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Professional photography for reportage, real estate, events,
                      and model portfolios with drone capabilities.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Reportage Photography</li>
                      <li>• Real Estate</li>
                      <li>• Event Coverage</li>
                      <li>• Model Portfolios</li>
                    </ul>
                  </CardContent>
                </Card>
            </Link>

            {/* Post-Production */}
            <Link href="/services/post-production" className="block group">
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
                  <CardContent className="p-8">
                    <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-lg">
                      <Scissors className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Post-Production
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Expert editing, color grading, and finishing services to
                      transform raw footage into polished masterpieces.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Video Editing</li>
                      <li>• Color Grading</li>
                      <li>• Audio Mixing</li>
                      <li>• Motion Graphics</li>
                    </ul>
                  </CardContent>
                </Card>
            </Link>
          </div>

          {/* Mobile Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto scrollbar-hide -mx-6 px-6">
            <div className="flex gap-6 pb-4">
              {/* Videography */}
              <Link href="/services/videography" className="block group flex-shrink-0 w-[85vw]">
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
                  <CardContent className="p-8">
                    <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-lg">
                      <Film className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Videography
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Cinematic wedding films, love stories, business events, and
                      live streaming that capture every meaningful moment.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Weddings & Love Stories</li>
                      <li>• Business Events</li>
                      <li>• Live Event Coverage</li>
                      <li>• Brand Stories</li>
                    </ul>
                  </CardContent>
                </Card>
              </Link>

              {/* Photography */}
              <Link href="/services/photography" className="block group flex-shrink-0 w-[85vw]">
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
                  <CardContent className="p-8">
                    <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-lg">
                      <Camera className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Photography
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Professional photography for reportage, real estate, events,
                      and model portfolios with drone capabilities.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Reportage Photography</li>
                      <li>• Real Estate</li>
                      <li>• Event Coverage</li>
                      <li>• Model Portfolios</li>
                    </ul>
                  </CardContent>
                </Card>
              </Link>

              {/* Post-Production */}
              <Link href="/services/post-production" className="block group flex-shrink-0 w-[85vw]">
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
                  <CardContent className="p-8">
                    <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-lg">
                      <Scissors className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Post-Production
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Expert editing, color grading, and finishing services to
                      transform raw footage into polished masterpieces.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Video Editing</li>
                      <li>• Color Grading</li>
                      <li>• Audio Mixing</li>
                      <li>• Motion Graphics</li>
                    </ul>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
          <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                End-to-End Excellence
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At FrameTell, we handle every aspect of your visual storytelling
                journey. From initial concept development to final delivery, our
                comprehensive approach ensures consistency, quality, and a
                seamless experience.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Drone Capabilities
                    </h4>
                    <p className="text-muted-foreground">
                      Stunning aerial perspectives for real estate and events
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Full Production Suite
                    </h4>
                    <p className="text-muted-foreground">
                      Professional equipment and post-production facilities
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Personalized Service
                    </h4>
                    <p className="text-muted-foreground">
                      Dedicated attention to your unique vision and requirements
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="h-24 w-24 text-primary/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Tell Your Story?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create something extraordinary together. Get in touch to discuss
            your project.
          </p>
          <Link href="/contact">
                <Button
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90"
              >
                Start Your Project
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
