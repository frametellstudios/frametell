import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Film, Palette, Volume2, Sparkles, Check } from "lucide-react";
import { Link } from "wouter";

export default function PostProduction() {
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
                <Scissors className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Post-Production</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
                Polish Your Vision
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Transform raw footage into cinematic masterpieces with expert editing,
                color grading, and finishing services that elevate your content.
              </p>
              <Link href="/contact">
                <a>
                  <Button size="lg" variant="default">
                    Start Your Project
                  </Button>
                </a>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Scissors className="h-20 w-20 text-primary/20" />
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
              Post-Production Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional editing and finishing services to bring your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Video Editing */}
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-8">
                <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-lg">
                  <Film className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Video Editing
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Professional video editing that transforms raw footage into compelling
                  narratives. From corporate videos to wedding films, we craft stories
                  that engage and inspire.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Multi-camera editing
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Pacing and storytelling
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Transitions and effects
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Multiple format exports
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Color Grading */}
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-8">
                <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-lg">
                  <Palette className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Color Grading
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Cinematic color grading that sets the mood and enhances the visual
                  impact of your footage. Create consistent, professional looks across
                  all your content.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Professional color correction
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Cinematic LUT application
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Skin tone optimization
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Consistent color matching
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Audio Mixing */}
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-8">
                <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-lg">
                  <Volume2 className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Audio Mixing & Sound Design
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Crystal-clear audio that complements your visuals. From dialogue
                  enhancement to music mixing, we ensure your sound is as polished as
                  your picture.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Dialogue cleanup and enhancement
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Music selection and mixing
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Sound effects and foley
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Noise reduction and mastering
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Motion Graphics */}
            <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary">
              <CardContent className="p-8">
                <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-lg">
                  <Sparkles className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Motion Graphics & VFX
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Add dynamic motion graphics, titles, and visual effects to enhance
                  your videos. Perfect for corporate branding and creative projects.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Animated titles and lower thirds
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Logo animations
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Visual effects and compositing
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Infographics and data visualization
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Post-Production Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A streamlined workflow that ensures quality results and timely delivery
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
                Discuss your vision, style preferences, and project requirements
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Rough Cut
              </h3>
              <p className="text-sm text-muted-foreground">
                Initial edit for structure, pacing, and story flow approval
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Refinement
              </h3>
              <p className="text-sm text-muted-foreground">
                Color grading, audio mixing, and effects application
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                Final Delivery
              </h3>
              <p className="text-sm text-muted-foreground">
                Polished final product in your preferred formats
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Palette className="h-20 w-20 text-primary/20" />
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                End-to-End Excellence
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                From concept to final delivery, we handle every aspect of
                post-production with meticulous attention to detail. Our comprehensive
                approach ensures consistency, quality, and a seamless experience.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Professional Tools
                    </h4>
                    <p className="text-muted-foreground">
                      Industry-standard software and workflows
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Fast Turnaround
                    </h4>
                    <p className="text-muted-foreground">
                      Efficient processes without compromising quality
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Unlimited Revisions
                    </h4>
                    <p className="text-muted-foreground">
                      We work until you're completely satisfied
                    </p>
                  </div>
                </li>
              </ul>
              <Link href="/contact">
                <a>
                  <Button variant="default">
                    Discuss Your Project
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
            Ready to Polish Your Content?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's transform your raw footage into a cinematic masterpiece.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <a>
                <Button size="lg" variant="default">
                  Get Started
                </Button>
              </a>
            </Link>
            <Link href="/portfolio">
              <a>
                <Button size="lg" variant="outline">
                  View Our Work
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
