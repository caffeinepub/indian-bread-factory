import { Button } from "@/components/ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/menu", label: "Menu" },
  { href: "/custom-cakes", label: "Custom Cakes" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [currentPath]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-card border-b border-border"
          : "bg-card/90 backdrop-blur-sm border-b border-border"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/assets/generated/bakery-logo-transparent.dim_300x300.png"
              alt="The Indian Bread Factory Logo"
              className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="font-display text-sm md:text-base font-bold text-brown-dark leading-tight">
                The Indian Bread Factory
              </span>
              <span className="font-sans text-xs text-muted-foreground leading-tight">
                Kulkarni Bakery
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-3 py-2 rounded-md text-sm font-sans-ui font-medium transition-colors ${
                  currentPath === link.href
                    ? "text-primary bg-accent/50"
                    : "text-foreground/80 hover:text-primary hover:bg-accent/30"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Order CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+918262862915"
              className="hidden md:flex items-center gap-2 text-sm font-medium text-primary hover:text-brown-dark transition-colors"
            >
              <span className="text-base">📞</span>
              <span className="font-sans-ui">+91 82628 62915</span>
            </a>
            <Button
              asChild
              size="sm"
              className="hidden md:flex bg-primary hover:bg-brown-dark text-primary-foreground font-sans-ui font-semibold rounded-full px-5"
            >
              <Link to="/custom-cakes">Order a Cake</Link>
            </Button>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-md text-foreground hover:bg-accent/30 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-border bg-card/98 backdrop-blur-md overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-3 rounded-lg text-sm font-sans-ui font-medium transition-colors ${
                    currentPath === link.href
                      ? "text-primary bg-accent/50"
                      : "text-foreground/80 hover:text-primary hover:bg-accent/30"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-border mt-2 flex flex-col gap-3">
                <a
                  href="tel:+918262862915"
                  className="flex items-center gap-2 text-sm font-medium text-primary px-4"
                >
                  <span>📞</span>
                  <span>+91 82628 62915</span>
                </a>
                <Button
                  asChild
                  className="bg-primary hover:bg-brown-dark text-primary-foreground font-semibold rounded-full mx-4"
                >
                  <Link to="/custom-cakes">Order a Cake</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
