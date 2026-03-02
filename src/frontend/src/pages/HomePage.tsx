import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { Award, ChevronRight, Clock, Star, Users } from "lucide-react";
import { motion } from "motion/react";

const featuredCategories = [
  {
    title: "Birthday & Custom Cakes",
    description: "Celebrate every occasion with our handcrafted cakes",
    image: "/assets/generated/birthday-cake.dim_600x600.jpg",
    link: "/menu",
    badge: "Most Popular",
  },
  {
    title: "Fresh Breads",
    description: "Pav, buns, white & brown bread baked fresh daily",
    image: "/assets/generated/fresh-breads.dim_600x600.jpg",
    link: "/menu",
    badge: "Daily Fresh",
  },
  {
    title: "Donuts & Pastries",
    description: "Delightful treats for every sweet craving",
    image: "/assets/generated/donuts-pastries.dim_600x600.jpg",
    link: "/menu",
    badge: "Must Try",
  },
  {
    title: "Veg Puffs",
    description: "Crispy, flavorful puffs made with love",
    image: "/assets/generated/bakery-puffs.dim_600x600.jpg",
    link: "/menu",
    badge: "Crispy & Hot",
  },
];

const whyUsPoints = [
  {
    icon: Clock,
    title: "Baked Fresh Daily",
    description:
      "Every item is made fresh each morning — we never compromise on freshness.",
  },
  {
    icon: Award,
    title: "Quality Ingredients",
    description:
      "We source the finest ingredients to ensure every bite is delicious.",
  },
  {
    icon: Users,
    title: "Family Tradition",
    description:
      "Three generations of baking wisdom in every loaf and every cake.",
  },
  {
    icon: Star,
    title: "Custom Orders",
    description: "Your dream cake, crafted exactly the way you envision it.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[520px] max-h-[720px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-bakery.dim_1200x600.jpg"
            alt="Fresh baked goods at The Indian Bread Factory"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/65" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block mb-4 px-4 py-1.5 bg-golden/90 text-brown-dark text-sm font-sans-ui font-semibold rounded-full"
          >
            Chinchwad Gaon, Pimpri-Chinchwad
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-5 leading-tight"
          >
            Freshly Baked{" "}
            <span className="italic" style={{ color: "oklch(0.82 0.16 88)" }}>
              Happiness
            </span>{" "}
            Every Day
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-white/85 text-lg sm:text-xl md:text-2xl font-body mb-8 max-w-2xl mx-auto"
          >
            Fresh from oven to your table — celebrating every occasion since
            years
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-brown-dark text-primary-foreground font-sans-ui font-semibold rounded-full px-8 py-3 text-base shadow-warm transition-all hover:shadow-warm-lg hover:-translate-y-0.5"
            >
              <Link to="/menu">
                View Our Menu <ChevronRight className="w-5 h-5 ml-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-foreground font-sans-ui font-semibold rounded-full px-8 py-3 text-base transition-all"
            >
              <Link to="/custom-cakes">Order a Cake 🎂</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-px h-12 bg-white/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
        </motion.div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brown-dark mb-4">
              What We Bake
            </h2>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
              From celebratory cakes to everyday staples — everything crafted
              with love and tradition
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {featuredCategories.map((cat) => (
              <motion.div key={cat.title} variants={itemVariants}>
                <Link to={cat.link} className="block group">
                  <Card className="overflow-hidden border-border hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 bg-golden text-brown-dark text-xs font-sans-ui font-bold rounded-full">
                          {cat.badge}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-display font-semibold text-base text-brown-dark mb-1 group-hover:text-primary transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {cat.description}
                      </p>
                      <div className="mt-3 flex items-center text-primary text-sm font-sans-ui font-medium gap-1 group-hover:gap-2 transition-all">
                        View Items <ChevronRight className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: "oklch(var(--cream-deep))" }}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brown-dark mb-4">
              Why Choose Us?
            </h2>
            <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto">
              We believe great baking is about more than just ingredients
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {whyUsPoints.map((point) => {
              const Icon = point.icon;
              return (
                <motion.div key={point.title} variants={itemVariants}>
                  <div className="bg-card rounded-2xl p-6 shadow-card text-center h-full">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: "oklch(var(--golden) / 0.3)" }}
                    >
                      <Icon
                        className="w-6 h-6"
                        style={{ color: "oklch(var(--brown-mid))" }}
                      />
                    </div>
                    <h3 className="font-display font-bold text-lg text-brown-dark mb-2">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Celebrating a Special Occasion?
            </h2>
            <p className="text-primary-foreground/80 font-body text-lg mb-8">
              Let us create your dream cake! Custom orders for birthdays,
              anniversaries, weddings, and every sweet milestone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-golden hover:bg-accent text-foreground font-sans-ui font-bold rounded-full px-8 shadow-warm transition-all hover:shadow-warm-lg"
              >
                <Link to="/custom-cakes">
                  Order for Birthday / Special Occasion 🎂
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground font-sans-ui font-semibold rounded-full px-8 transition-all"
              >
                <a
                  href="https://wa.me/918262862915"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Order via WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
