import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Film, Heart, Award, Users, Zap } from "lucide-react";
import { Link } from "wouter";

export default function About() {
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
                <a className="text-sm text-foreground font-medium">About</a>
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
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
                Stories That Matter
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                At FrameTell, we believe every moment has a story worth telling. With
                passion, creativity, and technical excellence, we transform your
                vision into timeless visual narratives.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From intimate weddings to corporate events, from real estate
                showcases to brand stories, we bring a personalized approach to every
                project we undertake.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="h-24 w-24 text-primary/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Drives Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our core values guide every project we undertake
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="inline-flex p-4 bg-primary/10 rounded-full mb-6">
                  <Heart className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Passion</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We pour our heart into every frame, treating each project as if it
                  were our own story to tell.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="inline-flex p-4 bg-primary/10 rounded-full mb-6">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Excellence
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Professional equipment, proven techniques, and meticulous attention
                  to detail in every aspect.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="inline-flex p-4 bg-primary/10 rounded-full mb-6">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Collaboration
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Your vision guides our work. We listen, adapt, and create together
                  to achieve your goals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive visual storytelling from concept to delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Film className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Videography
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Wedding films and love stories</li>
                      <li>• Corporate and business events</li>
                      <li>• Live event coverage and streaming</li>
                      <li>• Brand stories and promotional content</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <Camera className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Photography
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Reportage and documentary photography</li>
                      <li>• Real estate and architectural shots</li>
                      <li>• Event coverage and portraits</li>
                      <li>• Model portfolios and creative sessions</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <Zap className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold text-foreground mb-2">
                  Drone Capabilities
                </h4>
                <p className="text-sm text-muted-foreground">
                  Licensed aerial photography and videography
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <Film className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold text-foreground mb-2">Post-Production</h4>
                <p className="text-sm text-muted-foreground">
                  Expert editing, color grading, and finishing
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-bold text-foreground mb-2">End-to-End</h4>
                <p className="text-sm text-muted-foreground">
                  From concept to final delivery, we handle it all
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              How We Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A seamless process designed around your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Consultation
              </h3>
              <p className="text-sm text-muted-foreground">
                We discuss your vision, requirements, and creative direction
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Planning</h3>
              <p className="text-sm text-muted-foreground">
                Detailed planning, scheduling, and creative preparation
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Production</h3>
              <p className="text-sm text-muted-foreground">
                Professional capture with state-of-the-art equipment
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Polished final product delivered in your preferred format
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create something extraordinary. Get in touch to discuss your
            project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <a>
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-background text-foreground hover:bg-background/90"
                >
                  Get Started
                </Button>
              </a>
            </Link>
            <Link href="/portfolio">
              <a>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                >
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
