import { X, ZoomIn } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const galleryItems = [
  {
    src: "/assets/generated/hero-bakery.dim_1200x600.jpg",
    caption: "Fresh Baked Every Morning",
    aspect: "wide",
  },
  {
    src: "/assets/generated/birthday-cake.dim_600x600.jpg",
    caption: "Custom Birthday Cakes",
    aspect: "square",
  },
  {
    src: "/assets/generated/fresh-breads.dim_600x600.jpg",
    caption: "Artisan Breads & Pav",
    aspect: "square",
  },
  {
    src: "/assets/generated/donuts-pastries.dim_600x600.jpg",
    caption: "Donuts, Cookies & Pastries",
    aspect: "square",
  },
  {
    src: "/assets/generated/bakery-puffs.dim_600x600.jpg",
    caption: "Crispy Veg Puffs",
    aspect: "square",
  },
  {
    src: "/assets/generated/bakery-shop.dim_800x500.jpg",
    caption: "Our Warm & Welcoming Bakery",
    aspect: "wide",
  },
];

interface GalleryItem {
  src: string;
  caption: string;
  aspect: string;
}

function LightboxModal({
  item,
  onClose,
}: {
  item: GalleryItem;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="relative max-w-4xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/80 hover:text-white p-2"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>
        <img
          src={item.src}
          alt={item.caption}
          className="w-full max-h-[80vh] object-contain rounded-2xl"
        />
        <p className="text-white/80 text-center mt-4 font-body text-lg">
          {item.caption}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function GalleryPage() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

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
            Our Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-body text-lg text-muted-foreground max-w-xl mx-auto"
          >
            A glimpse into our bakery — fresh creations, happy moments, and the
            joy of baking
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryItems.map((item, idx) => (
              <motion.div
                key={item.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className={`relative group cursor-pointer rounded-2xl overflow-hidden shadow-card hover:shadow-warm transition-all duration-300 ${
                  item.aspect === "wide" ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
                onClick={() => setSelectedItem(item)}
              >
                <div
                  className={`overflow-hidden ${
                    item.aspect === "wide" ? "h-64 md:h-72" : "h-64"
                  }`}
                >
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-brown-dark/0 group-hover:bg-brown-dark/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2 text-white">
                    <ZoomIn className="w-8 h-8" />
                    <span className="font-sans-ui text-sm font-semibold">
                      View
                    </span>
                  </div>
                </div>

                {/* Caption */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-sans-ui text-sm font-medium">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <LightboxModal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </AnimatePresence>

      {/* Instagram CTA */}
      <section
        className="py-12 text-center"
        style={{ backgroundColor: "oklch(var(--cream-deep))" }}
      >
        <div className="container mx-auto px-4 max-w-lg">
          <h3 className="font-display text-2xl font-bold text-brown-dark mb-3">
            Follow Us on Instagram
          </h3>
          <p className="text-muted-foreground mb-5 font-body">
            See our latest creations, behind-the-scenes baking, and daily
            specials
          </p>
          <a
            href="https://www.instagram.com/theindianbreadfactory?igsh=azFtcnpqcHFrZnk2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-sans-ui font-semibold text-white shadow-warm transition-all hover:shadow-warm-lg"
            style={{
              background:
                "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
            }}
          >
            📸 Follow @IndianBreadFactory
          </a>
        </div>
      </section>
    </div>
  );
}
