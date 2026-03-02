import { Link } from "@tanstack/react-router";
import { Clock, Heart, MapPin, Phone } from "lucide-react";
import { SiFacebook, SiInstagram, SiWhatsapp } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brown-dark text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Main footer grid */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/uploads/WhatsApp-Image-2026-03-02-at-12.29.48-1-1.jpeg"
                alt="Logo"
                className="w-10 h-10 object-cover rounded-full opacity-90"
              />
              <div>
                <p className="font-display font-bold text-primary-foreground text-sm leading-tight">
                  The Indian Bread Factory
                </p>
                <p className="text-xs opacity-70">Kulkarni Bakery</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed mb-4">
              Freshly baked happiness every day. Your neighborhood bakery for
              all occasions.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/share/1EDR1HuAVF/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <SiFacebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/theindianbreadfactory?igsh=azFtcnpqcHFrZnk2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <SiInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/918262862915"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <SiWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-base mb-4 text-primary-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/menu", label: "Our Menu" },
                { to: "/custom-cakes", label: "Custom Cakes" },
                { to: "/gallery", label: "Gallery" },
                { to: "/reviews", label: "Reviews" },
                { to: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm opacity-75 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-display font-semibold text-base mb-4 text-primary-foreground">
              Our Products
            </h3>
            <ul className="space-y-2">
              {[
                "Birthday & Custom Cakes",
                "Fresh Breads (Pav, Buns)",
                "Donuts & Pastries",
                "Khari & Rusks",
                "Veg Puffs",
                "Cookies & Biscuits",
              ].map((product) => (
                <li key={product} className="text-sm opacity-75">
                  {product}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-base mb-4 text-primary-foreground">
              Visit Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm opacity-80">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>
                  Chinchwad Gaon, Pimpri-Chinchwad, Maharashtra 411033
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm opacity-80">
                <Phone className="w-4 h-4 shrink-0" />
                <a href="tel:+918262862915" className="hover:opacity-100">
                  +91 82628 62915
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm opacity-80">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <p>Mon–Sat: 7:00 AM – 9:00 PM</p>
                  <p>Sunday: 8:00 AM – 8:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs opacity-60 text-center sm:text-left">
            © {currentYear} The Indian Bread Factory (Kulkarni Bakery). All
            rights reserved.
          </p>
          <p className="text-xs opacity-60 flex items-center gap-1">
            Built with{" "}
            <Heart className="w-3 h-3 fill-current" aria-hidden="true" /> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-100 transition-opacity"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
