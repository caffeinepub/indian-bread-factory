import { Award, Heart, Leaf, Users } from "lucide-react";
import { motion } from "motion/react";

const values = [
  {
    icon: Leaf,
    title: "Fresh Every Day",
    description:
      "We bake fresh every single morning. No day-old bread, no compromises.",
  },
  {
    icon: Award,
    title: "Quality Ingredients",
    description:
      "Only the finest wheat, dairy, and produce go into our baked goods.",
  },
  {
    icon: Heart,
    title: "Family Recipe",
    description:
      "Time-honored recipes passed down through the Kulkarni family, perfected over decades.",
  },
  {
    icon: Users,
    title: "Community Love",
    description:
      "We're not just a bakery — we're a part of the Chinchwad Gaon family.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function AboutPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="relative h-64 sm:h-80 md:h-96 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/bakery-shop.dim_800x500.jpg"
            alt="Kulkarni Bakery shop interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/90 via-brown-dark/50 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-7xl pb-10">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-white/80 mt-2 text-lg font-body"
          >
            Baked with love in Chinchwad Gaon
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 bg-accent/40 text-accent-foreground text-sm font-sans-ui font-semibold rounded-full mb-5">
                Est. Kulkarni Family
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-brown-dark mb-6 leading-snug">
                A Neighborhood Bakery,{" "}
                <span className="italic text-primary">A Family Legacy</span>
              </h2>
              <div className="space-y-4 font-body text-lg text-foreground/80 leading-relaxed">
                <p>
                  For generations, the Kulkarni family has been baking with love
                  in the heart of Chinchwad Gaon. What started as a small
                  neighborhood shop has grown into a beloved local institution —
                  but our values remain the same: fresh ingredients, honest
                  baking, and community.
                </p>
                <p>
                  Every morning, our bakers arrive before dawn to ensure that
                  when you walk in, you're greeted by the warm aroma of freshly
                  baked pav, crisp khari, and golden-crusted loaves straight
                  from the oven.
                </p>
                <p>
                  From a simple birthday cake to an elaborate wedding tier —
                  every creation carries the same care and craftsmanship that
                  the Kulkarni family has been known for in Pimpri-Chinchwad for
                  years.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-warm-lg">
                <img
                  src="/assets/generated/bakery-shop.dim_800x500.jpg"
                  alt="Inside the bakery"
                  className="w-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 hidden md:flex bg-card rounded-2xl shadow-warm p-4 flex-col items-center">
                <span className="font-display text-3xl font-bold text-primary">
                  Since
                </span>
                <span className="font-display text-2xl font-bold text-golden">
                  Est.
                </span>
                <span className="text-xs text-muted-foreground font-sans-ui mt-1">
                  Chinchwad Gaon
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brown-dark mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto">
              The principles that guide every loaf we bake and every cake we
              create
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div key={value.title} variants={itemVariants}>
                  <div className="bg-card rounded-2xl p-6 shadow-card h-full flex flex-col items-center text-center">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                      style={{ backgroundColor: "oklch(var(--golden) / 0.25)" }}
                    >
                      <Icon
                        className="w-6 h-6"
                        style={{ color: "oklch(var(--brown-mid))" }}
                      />
                    </div>
                    <h3 className="font-display font-bold text-lg text-brown-dark mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Location Banner */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-3">
              Visit Us in Chinchwad Gaon
            </p>
            <p className="text-primary-foreground/80 font-body text-lg">
              The Indian Bread Factory (Kulkarni Bakery) · Pimpri-Chinchwad,
              Maharashtra 411033
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
