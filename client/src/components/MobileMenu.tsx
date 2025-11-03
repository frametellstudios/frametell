import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.height = '100%';
      document.body.style.top = '0';
      document.body.style.left = '0';
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.height = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.documentElement.style.overflow = '';
      document.documentElement.style.height = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.documentElement.style.overflow = '';
      document.documentElement.style.height = '';
    };
  }, [isOpen]);

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

      {/* Mobile Menu Full Screen Overlay */}
      <div
        className={`fixed inset-0 bg-background z-[9999] md:hidden transition-all duration-300 min-h-screen h-screen overflow-hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col h-full min-h-screen">
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
