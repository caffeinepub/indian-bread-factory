import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import type { MenuItem } from "../backend.d";
import { MenuCategory, useMenuItems } from "../hooks/useQueries";

const categoryConfig: Record<
  string,
  { label: string; image: string; color: string }
> = {
  all: { label: "All Items", image: "", color: "oklch(var(--brown-mid))" },
  [MenuCategory.cakes]: {
    label: "Cakes",
    image: "/assets/generated/birthday-cake.dim_600x600.jpg",
    color: "oklch(0.62 0.14 48)",
  },
  [MenuCategory.breads]: {
    label: "Breads",
    image: "/assets/generated/fresh-breads.dim_600x600.jpg",
    color: "oklch(0.55 0.10 50)",
  },
  [MenuCategory.donuts]: {
    label: "Donuts",
    image: "/assets/generated/donuts-pastries.dim_600x600.jpg",
    color: "oklch(0.72 0.12 85)",
  },
  [MenuCategory.khari]: {
    label: "Khari",
    image: "/assets/generated/donuts-pastries.dim_600x600.jpg",
    color: "oklch(0.65 0.10 65)",
  },
  [MenuCategory.puffs]: {
    label: "Puffs",
    image: "/assets/generated/bakery-puffs.dim_600x600.jpg",
    color: "oklch(0.50 0.09 40)",
  },
  [MenuCategory.cookiesPastries]: {
    label: "Cookies & Pastries",
    image: "/assets/generated/donuts-pastries.dim_600x600.jpg",
    color: "oklch(0.75 0.13 75)",
  },
};

function getCategoryImage(category: MenuCategory): string {
  return (
    categoryConfig[category]?.image ||
    "/assets/generated/donuts-pastries.dim_600x600.jpg"
  );
}

const staticMenuItems: MenuItem[] = [
  {
    id: BigInt(1),
    name: "Chocolate Birthday Cake",
    description:
      "Rich dark chocolate layers with creamy ganache frosting, perfect for celebrations",
    category: MenuCategory.cakes,
    price: BigInt(750),
    isAvailable: true,
  },
  {
    id: BigInt(2),
    name: "Vanilla Cream Cake",
    description:
      "Light vanilla sponge with fresh cream and seasonal fruit toppings",
    category: MenuCategory.cakes,
    price: BigInt(650),
    isAvailable: true,
  },
  {
    id: BigInt(3),
    name: "Fresh Pav (6 pcs)",
    description: "Soft, fluffy dinner rolls baked fresh every morning",
    category: MenuCategory.breads,
    price: BigInt(30),
    isAvailable: true,
  },
  {
    id: BigInt(4),
    name: "Brown Bread Loaf",
    description: "Wholesome whole-wheat brown bread, sliced and ready",
    category: MenuCategory.breads,
    price: BigInt(55),
    isAvailable: true,
  },
  {
    id: BigInt(5),
    name: "White Bread Loaf",
    description: "Classic soft white sandwich bread baked fresh daily",
    category: MenuCategory.breads,
    price: BigInt(45),
    isAvailable: true,
  },
  {
    id: BigInt(6),
    name: "Glazed Donut",
    description: "Classic ring donut with a sweet sugar glaze",
    category: MenuCategory.donuts,
    price: BigInt(30),
    isAvailable: true,
  },
  {
    id: BigInt(7),
    name: "Chocolate Donut",
    description:
      "Fluffy donut dipped in rich chocolate glaze with rainbow sprinkles",
    category: MenuCategory.donuts,
    price: BigInt(35),
    isAvailable: true,
  },
  {
    id: BigInt(8),
    name: "Khari Biscuit (100g)",
    description:
      "Light, flaky, and buttery khari — the perfect tea-time companion",
    category: MenuCategory.khari,
    price: BigInt(40),
    isAvailable: true,
  },
  {
    id: BigInt(9),
    name: "Veg Puff",
    description:
      "Crispy golden puff filled with spiced vegetables and potatoes",
    category: MenuCategory.puffs,
    price: BigInt(20),
    isAvailable: true,
  },
  {
    id: BigInt(10),
    name: "Masala Puff",
    description: "Golden puff stuffed with spiced potato and onion filling",
    category: MenuCategory.puffs,
    price: BigInt(25),
    isAvailable: true,
  },
  {
    id: BigInt(11),
    name: "Butter Cookies (250g)",
    description: "Melt-in-your-mouth butter cookies with a hint of vanilla",
    category: MenuCategory.cookiesPastries,
    price: BigInt(80),
    isAvailable: true,
  },
  {
    id: BigInt(12),
    name: "Cream Pastry",
    description:
      "Layered sponge pastry filled with fresh whipped cream and fruit",
    category: MenuCategory.cookiesPastries,
    price: BigInt(50),
    isAvailable: true,
  },
];

function MenuItemCard({ item }: { item: MenuItem }) {
  const image = getCategoryImage(item.category);
  const categoryLabel = categoryConfig[item.category]?.label || item.category;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="bg-card rounded-2xl shadow-card overflow-hidden flex flex-col hover:shadow-warm transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={image}
          alt={item.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <Badge
            className="text-xs font-sans-ui font-semibold"
            style={{
              backgroundColor: "oklch(var(--golden))",
              color: "oklch(var(--brown-dark))",
            }}
          >
            {categoryLabel}
          </Badge>
        </div>
        {!item.isAvailable && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="text-white font-semibold bg-black/60 px-3 py-1 rounded-full text-sm">
              Sold Out
            </span>
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-display font-bold text-base text-brown-dark mb-1 leading-tight">
          {item.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-3">
          {item.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="font-display font-bold text-xl text-primary">
            ₹{item.price.toString()}
          </span>
          <a
            href={`https://wa.me/918262862915?text=${encodeURIComponent(`Hi! I'd like to order: ${item.name} (₹${item.price}). Please confirm availability.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-sans-ui font-semibold px-3 py-2 rounded-full text-white transition-colors"
            style={{ backgroundColor: "#25D366" }}
          >
            Order via WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function MenuSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 8 }, (_, i) => `skeleton-${i}`).map((key) => (
        <div
          key={key}
          className="bg-card rounded-2xl overflow-hidden shadow-card"
        >
          <Skeleton className="h-44 w-full" />
          <div className="p-4 space-y-2">
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <div className="flex justify-between items-center pt-2">
              <Skeleton className="h-6 w-16" />
              <Skeleton className="h-8 w-32 rounded-full" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const { data: backendItems, isLoading } = useMenuItems();

  const items: MenuItem[] =
    backendItems && backendItems.length > 0 ? backendItems : staticMenuItems;

  const filteredItems =
    activeCategory === "all"
      ? items
      : items.filter((item) => item.category === activeCategory);

  const categories = ["all", ...Object.values(MenuCategory)];

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
            Our Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-body text-lg text-muted-foreground max-w-xl mx-auto"
          >
            Handcrafted with fresh ingredients — baked with love every morning
          </motion.p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-16 md:top-20 z-30 bg-card/95 backdrop-blur-sm border-b border-border shadow-xs">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-2 py-3 min-w-max">
              {categories.map((cat) => {
                const config = categoryConfig[cat];
                const label = config?.label || cat;
                return (
                  <Button
                    key={cat}
                    variant={activeCategory === cat ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory(cat)}
                    className={`rounded-full font-sans-ui font-medium whitespace-nowrap transition-all ${
                      activeCategory === cat
                        ? "bg-primary text-primary-foreground shadow-card"
                        : "border-border text-foreground/70 hover:border-primary hover:text-primary"
                    }`}
                  >
                    {label}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          {isLoading ? (
            <MenuSkeleton />
          ) : filteredItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-body text-xl text-muted-foreground">
                No items in this category yet.
              </p>
            </div>
          ) : (
            <AnimatePresence mode="popLayout">
              <motion.div
                key={activeCategory}
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filteredItems.map((item) => (
                  <MenuItemCard key={item.id.toString()} item={item} />
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </section>

      {/* Order CTA */}
      <section
        className="py-12 text-center"
        style={{ backgroundColor: "oklch(var(--cream-deep))" }}
      >
        <div className="container mx-auto px-4 max-w-2xl">
          <h3 className="font-display text-2xl font-bold text-brown-dark mb-3">
            Can't find what you're looking for?
          </h3>
          <p className="text-muted-foreground mb-6 font-body">
            We take custom orders! Contact us via WhatsApp for special requests.
          </p>
          <a
            href="https://wa.me/918262862915"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-sans-ui font-semibold text-white shadow-warm transition-all hover:shadow-warm-lg hover:-translate-y-0.5"
            style={{ backgroundColor: "#25D366" }}
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
