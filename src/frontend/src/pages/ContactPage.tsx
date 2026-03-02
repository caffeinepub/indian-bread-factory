import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";
import { SiFacebook, SiInstagram, SiWhatsapp } from "react-icons/si";

export default function ContactPage() {
  return (
    <div>
      {/* Header */}
      <section
        className="py-14 md:py-20"
        style={{ backgroundColor: "oklch(var(--cream-deep))" }}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-brown-dark mb-4"
          >
            Find Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-body text-lg text-muted-foreground max-w-xl mx-auto"
          >
            We'd love to see you! Come visit us or get in touch
          </motion.p>
        </div>
      </section>

      {/* Contact Details + Map */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Address */}
              <div className="bg-card rounded-2xl p-6 shadow-card flex gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "oklch(var(--golden) / 0.25)" }}
                >
                  <MapPin
                    className="w-5 h-5"
                    style={{ color: "oklch(var(--brown-mid))" }}
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-brown-dark mb-2">
                    Our Location
                  </h3>
                  <p className="font-body text-foreground/80 leading-relaxed">
                    The Indian Bread Factory (Kulkarni Bakery)
                    <br />
                    Chinchwad Gaon
                    <br />
                    Pimpri-Chinchwad, Maharashtra 411033
                  </p>
                  <a
                    href="https://maps.app.goo.gl/dEwfjB7skcH2jYmJ6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary text-sm font-sans-ui font-semibold mt-3 hover:underline"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-card rounded-2xl p-6 shadow-card flex gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "oklch(var(--golden) / 0.25)" }}
                >
                  <Phone
                    className="w-5 h-5"
                    style={{ color: "oklch(var(--brown-mid))" }}
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-brown-dark mb-2">
                    Phone
                  </h3>
                  <a
                    href="tel:+918262862915"
                    className="font-body text-xl text-primary hover:text-brown-dark transition-colors"
                  >
                    +91 82628 62915
                  </a>
                  <p className="text-sm text-muted-foreground mt-1 font-sans-ui">
                    Call us for orders & inquiries
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-card rounded-2xl p-6 shadow-card flex gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "oklch(var(--golden) / 0.25)" }}
                >
                  <Clock
                    className="w-5 h-5"
                    style={{ color: "oklch(var(--brown-mid))" }}
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-brown-dark mb-3">
                    Business Hours
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center gap-8">
                      <span className="font-sans-ui text-sm text-muted-foreground">
                        Monday – Saturday
                      </span>
                      <span className="font-sans-ui text-sm font-semibold text-foreground">
                        7:00 AM – 9:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between items-center gap-8">
                      <span className="font-sans-ui text-sm text-muted-foreground">
                        Sunday
                      </span>
                      <span className="font-sans-ui text-sm font-semibold text-foreground">
                        8:00 AM – 8:00 PM
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp & Social */}
              <div className="bg-card rounded-2xl p-6 shadow-card">
                <h3 className="font-display font-bold text-lg text-brown-dark mb-4">
                  Reach Us Online
                </h3>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/918262862915"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full font-sans-ui text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-md"
                    style={{ backgroundColor: "#25D366" }}
                  >
                    <SiWhatsapp className="w-4 h-4" />
                    WhatsApp
                  </a>
                  <a
                    href="https://www.facebook.com/share/1EDR1HuAVF/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full font-sans-ui text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-md"
                    style={{ backgroundColor: "#1877F2" }}
                  >
                    <SiFacebook className="w-4 h-4" />
                    Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/theindianbreadfactory?igsh=azFtcnpqcHFrZnk2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full font-sans-ui text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-md"
                    style={{
                      background:
                        "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                    }}
                  >
                    <SiInstagram className="w-4 h-4" />
                    Instagram
                  </a>
                  <a
                    href="mailto:kulkarnibakery@example.com"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full font-sans-ui text-sm font-semibold border border-border text-foreground/70 hover:text-primary hover:border-primary transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    Email Us
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <div className="rounded-2xl overflow-hidden shadow-warm-lg h-96 lg:h-full min-h-[400px]">
                <iframe
                  src="https://maps.google.com/maps?q=The+Indian+Bread+Factory+Kulkarni+Bakery+Chinchwad+Gaon+Pimpri-Chinchwad&output=embed"
                  className="w-full h-full"
                  loading="lazy"
                  title="Kulkarni Bakery Location"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Order CTA */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-foreground"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Want to Place an Order?
            </h3>
            <p className="opacity-80 font-body mb-6">
              Call us, WhatsApp us, or walk into our shop — we're ready to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+918262862915"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary-foreground text-foreground font-sans-ui font-bold shadow-card transition-all hover:shadow-warm"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-sans-ui font-bold text-white shadow-card transition-all hover:shadow-warm"
                style={{ backgroundColor: "#25D366" }}
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Order
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
