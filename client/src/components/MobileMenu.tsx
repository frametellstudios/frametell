import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-background border-l border-border shadow-2xl z-[9999] transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <span className="text-xl font-bold text-foreground">Menu</span>
            <button
              onClick={closeMenu}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-6">
            <div className="flex flex-col space-y-1 px-4">
              <Link
                href="/services"
                onClick={closeMenu}
                className="px-4 py-3 text-base text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                onClick={closeMenu}
                className="px-4 py-3 text-base text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/about"
                onClick={closeMenu}
                className="px-4 py-3 text-base text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="px-4 py-3 text-base text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* CTA Button */}
            <div className="px-4 mt-6">
              <Link href="/contact" onClick={closeMenu}>
                <Button variant="default" className="w-full">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-border">
            <p className="text-xs text-muted-foreground text-center">
              © 2025 FrameTell
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
