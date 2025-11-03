import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Film, Camera, Scissors, Play } from "lucide-react";
import { MobileMenu } from "@/components/MobileMenu";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <span className="text-2xl font-bold text-foreground hover:text-primary transition-colors cursor-pointer">
                FrameTell
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
              <Link href="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
                Portfolio
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/contact">
                <Button variant="default">Get in Touch</Button>
              </Link>
            </div>

            {/* Mobile Menu */}
            <MobileMenu />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-6 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
              Stories Worth Telling
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Professional videography, photography, and post-production services
              that capture your moments and elevate your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link href="/portfolio" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="gap-2 w-full sm:w-[220px]">
                  <Play className="h-5 w-5" />
                  View Our Work
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="default" size="lg" className="w-full sm:w-[220px]">
                  Start Your Project
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Video Placeholder */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 aspect-video flex items-center justify-center group cursor-pointer">
            {/* Video player overlay */}
            <div className="absolute inset-0 bg-black/20" />
            
            {/* Play button */}
            <div className="relative z-10 flex flex-col items-center justify-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/90 hover:bg-primary flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-2xl">
                <Play className="h-10 w-10 md:h-12 md:w-12 text-white ml-1" fill="white" />
              </div>
              <p className="text-white text-lg md:text-xl font-semibold mt-6 drop-shadow-lg">Watch Our Showreel</p>
              <p className="text-white/70 text-sm mt-2">Coming Soon</p>
            </div>
            
            {/* Video player controls bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6">
              <div className="flex items-center gap-4">
                {/* Progress bar */}
                <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full w-0 bg-primary rounded-full" />
                </div>
                {/* Time display */}
                <span className="text-white/80 text-xs md:text-sm font-mono">0:00 / 2:30</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-7xl">
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
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary flex flex-col">
                  <CardContent className="p-8 flex flex-col flex-1">
                    <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-lg">
                      <Film className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Videography
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                      Cinematic storytelling through motion. Capture weddings, events, and brand narratives with professional video production.
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
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary flex flex-col">
                  <CardContent className="p-8 flex flex-col flex-1">
                    <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-lg">
                      <Camera className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Photography
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                      Freeze moments in time. Professional photography for events, real estate, and creative portfolios.
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
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary flex flex-col">
                  <CardContent className="p-8 flex flex-col flex-1">
                    <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-lg">
                      <Scissors className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Post-Production
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                      Transform raw footage into polished content with expert editing, color grading, and finishing.
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
                      Cinematic storytelling through motion. Capture weddings, events, and brand narratives with professional video production.
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
                      Freeze moments in time. Professional photography for events, real estate, and creative portfolios.
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
                      Transform raw footage into polished content with expert editing, color grading, and finishing.
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
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              End-to-End Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              At FrameTell, we handle every aspect of your visual storytelling
              journey. From initial concept development to final delivery, our
              comprehensive approach ensures consistency, quality, and a seamless
              experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                <Camera className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Drone Capabilities
              </h3>
              <p className="text-muted-foreground">
                Stunning aerial perspectives for real estate and events
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                <Film className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Full Production Suite
              </h3>
              <p className="text-muted-foreground">
                Professional equipment and post-production facilities
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-full">
                <Scissors className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Personalized Service
              </h3>
              <p className="text-muted-foreground">
                Dedicated attention to your unique vision and requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Tell Your Story?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Let's create something extraordinary together. Get in touch to discuss
            your project.
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg" className="text-lg px-8">
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-background border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-foreground mb-4">FrameTell</h3>
              <p className="text-sm text-muted-foreground">
                Professional Video Production & Photography
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/services/videography" className="hover:text-foreground transition-colors">
                    Videography
                  </Link>
                </li>
                <li>
                  <Link href="/services/photography" className="hover:text-foreground transition-colors">
                    Photography
                  </Link>
                </li>
                <li>
                  <Link href="/services/post-production" className="hover:text-foreground transition-colors">
                    Post-Production
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/portfolio" className="hover:text-foreground transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Connect</h4>
              <p className="text-sm text-muted-foreground">
                Follow us on social media for latest work and updates.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 FrameTell. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
