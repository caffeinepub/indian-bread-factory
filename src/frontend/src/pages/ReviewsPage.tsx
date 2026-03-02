import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";
import { Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import type { CustomerReview } from "../backend.d";
import { useAddReview, useCustomerReviews } from "../hooks/useQueries";

const staticReviews: CustomerReview[] = [
  {
    id: BigInt(1),
    customerName: "Pooja Kulkarni",
    rating: BigInt(5),
    comment:
      "The birthday cake was absolutely perfect! The chocolate layers were moist and the cream was divine. Our family loved every bite. Will definitely order again!",
    createdAt: BigInt(Date.now()),
  },
  {
    id: BigInt(2),
    customerName: "Rahul Deshmukh",
    rating: BigInt(5),
    comment:
      "Best pav in Chinchwad! Soft, fluffy, and freshly baked every morning. I buy from here daily for breakfast. The khari is also excellent.",
    createdAt: BigInt(Date.now()),
  },
  {
    id: BigInt(3),
    customerName: "Sunita Joshi",
    rating: BigInt(4),
    comment:
      "Ordered a custom cake for my daughter's 5th birthday. They made it exactly as we asked — princess theme with pink frosting. Very happy!",
    createdAt: BigInt(Date.now()),
  },
  {
    id: BigInt(4),
    customerName: "Amit Patil",
    rating: BigInt(5),
    comment:
      "The veg puffs are out of this world. Crispy on the outside, perfectly spiced inside. Kulkarni Bakery is the best in Pimpri-Chinchwad!",
    createdAt: BigInt(Date.now()),
  },
  {
    id: BigInt(5),
    customerName: "Meera Sharma",
    rating: BigInt(5),
    comment:
      "We've been coming here for over 10 years. The quality has never gone down. The butter cookies are addictive and the bread is always fresh!",
    createdAt: BigInt(Date.now()),
  },
  {
    id: BigInt(6),
    customerName: "Vikram Nair",
    rating: BigInt(4),
    comment:
      "Very affordable prices for excellent quality. The donuts remind me of childhood. Highly recommend the glazed ones while they're still warm!",
    createdAt: BigInt(Date.now()),
  },
];

function StarDisplay({
  rating,
  size = "sm",
}: { rating: number; size?: "sm" | "md" }) {
  return (
    <div
      className={`flex items-center gap-0.5 ${size === "md" ? "gap-1" : ""}`}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${size === "md" ? "w-5 h-5" : "w-4 h-4"} ${
            star <= rating ? "fill-current text-golden" : "text-border"
          }`}
          style={star <= rating ? { color: "oklch(var(--golden))" } : undefined}
        />
      ))}
    </div>
  );
}

function StarSelector({
  value,
  onChange,
}: {
  value: number;
  onChange: (val: number) => void;
}) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          className="transition-transform hover:scale-110"
          aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
        >
          <Star
            className="w-7 h-7 transition-colors"
            fill={(hovered || value) >= star ? "oklch(var(--golden))" : "none"}
            style={{
              color:
                (hovered || value) >= star
                  ? "oklch(var(--golden))"
                  : "oklch(var(--border))",
            }}
          />
        </button>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: CustomerReview }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className="bg-card rounded-2xl p-6 shadow-card hover:shadow-warm transition-all duration-300 flex flex-col gap-3"
    >
      <StarDisplay rating={Number(review.rating)} />
      <p className="font-body text-base text-foreground/85 leading-relaxed italic">
        "{review.comment}"
      </p>
      <div className="flex items-center gap-3 pt-2 border-t border-border mt-auto">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center font-display font-bold text-sm text-primary-foreground"
          style={{ backgroundColor: "oklch(var(--brown-mid))" }}
        >
          {review.customerName.charAt(0).toUpperCase()}
        </div>
        <span className="font-sans-ui font-semibold text-sm text-foreground">
          {review.customerName}
        </span>
      </div>
    </motion.div>
  );
}

function ReviewsSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }, (_, i) => `skeleton-${i}`).map((key) => (
        <div
          key={key}
          className="bg-card rounded-2xl p-6 shadow-card space-y-3"
        >
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
          <div className="flex items-center gap-3 pt-2">
            <Skeleton className="w-9 h-9 rounded-full" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const { data: backendReviews, isLoading } = useCustomerReviews();
  const { mutateAsync: addReview, isPending } = useAddReview();

  const reviews: CustomerReview[] =
    backendReviews && backendReviews.length > 0
      ? backendReviews
      : staticReviews;

  const averageRating =
    reviews.reduce((acc, r) => acc + Number(r.rating), 0) / reviews.length;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) {
      toast.error("Please fill in your name and comment.");
      return;
    }

    try {
      await addReview({
        customerName: name,
        rating: BigInt(rating),
        comment,
      });
      setSubmitted(true);
      setName("");
      setRating(5);
      setComment("");
      toast.success("Thank you for your review! 🎉");
    } catch (err) {
      toast.error("Couldn't submit review. Please try again.");
      console.error(err);
    }
  }

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
            What Our Customers Say
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-body text-lg text-muted-foreground mb-6 max-w-xl mx-auto"
          >
            The love and trust of our community keeps us baking every day
          </motion.p>

          {/* Rating summary */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="inline-flex items-center gap-4 bg-card rounded-2xl px-8 py-5 shadow-card"
          >
            <div>
              <div className="font-display text-5xl font-bold text-brown-dark">
                {averageRating.toFixed(1)}
              </div>
              <div className="text-xs text-muted-foreground font-sans-ui mt-1">
                out of 5
              </div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <StarDisplay rating={Math.round(averageRating)} size="md" />
              <div className="text-xs text-muted-foreground font-sans-ui mt-1">
                {reviews.length} reviews
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          {isLoading ? (
            <ReviewsSkeleton />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <ReviewCard key={review.id.toString()} review={review} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Leave a Review Form */}
      <section
        className="py-12 md:py-16"
        style={{ backgroundColor: "oklch(var(--cream-deep))" }}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-xl">
          <div className="bg-card rounded-2xl shadow-warm p-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-brown-dark mb-2">
              Leave a Review
            </h2>
            <p className="text-muted-foreground font-body mb-6">
              Share your experience with us and help other customers
            </p>

            {submitted ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">⭐</div>
                <h3 className="font-display text-xl font-bold text-brown-dark mb-2">
                  Thank You!
                </h3>
                <p className="text-muted-foreground mb-5">
                  Your review helps others discover us.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  className="bg-primary hover:bg-brown-dark text-primary-foreground rounded-full"
                >
                  Write Another Review
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label
                    htmlFor="reviewName"
                    className="font-sans-ui font-medium"
                  >
                    Your Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="reviewName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Priya Sharma"
                    required
                    className="rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="font-sans-ui font-medium">
                    Rating <span className="text-destructive">*</span>
                  </Label>
                  <StarSelector value={rating} onChange={setRating} />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="reviewComment"
                    className="font-sans-ui font-medium"
                  >
                    Your Review <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="reviewComment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Tell us about your experience..."
                    rows={4}
                    required
                    className="rounded-xl resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-primary hover:bg-brown-dark text-primary-foreground font-bold rounded-full py-3 shadow-warm"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Review ⭐"
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
