import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, MessageCircle, Phone, Star } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitCakeOrder } from "../hooks/useQueries";

const cakeTypes = [
  {
    name: "Birthday Cake",
    desc: "Custom-designed cakes for your special birthday celebration",
    image: "/assets/generated/birthday-cake.dim_600x600.jpg",
  },
  {
    name: "Anniversary Cake",
    desc: "Romantic and elegant cakes to mark your special milestones",
    image: "/assets/generated/birthday-cake.dim_600x600.jpg",
  },
  {
    name: "Baby Shower Cake",
    desc: "Adorable themed cakes for welcoming the newest arrival",
    image: "/assets/generated/birthday-cake.dim_600x600.jpg",
  },
];

interface FormState {
  customerName: string;
  phoneNumber: string;
  cakeType: string;
  eventDate: string;
  servings: string;
  specialRequirements: string;
}

const initialForm: FormState = {
  customerName: "",
  phoneNumber: "",
  cakeType: "",
  eventDate: "",
  servings: "",
  specialRequirements: "",
};

export default function CustomCakesPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const { mutateAsync: submitOrder, isPending } = useSubmitCakeOrder();

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (
      !form.customerName ||
      !form.phoneNumber ||
      !form.cakeType ||
      !form.eventDate
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      await submitOrder({
        customerName: form.customerName,
        phoneNumber: form.phoneNumber,
        cakeType: form.cakeType,
        eventDate: form.eventDate,
        servings: BigInt(form.servings || "10"),
        specialRequirements: form.specialRequirements,
      });
      setSubmitted(true);
      setForm(initialForm);
      toast.success(
        "Your cake inquiry has been submitted! We'll contact you within 24 hours.",
      );
    } catch (err) {
      toast.error(
        "Something went wrong. Please try again or contact us directly.",
      );
      console.error(err);
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative h-64 sm:h-80 flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/birthday-cake.dim_600x600.jpg"
            alt="Custom cakes"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brown-dark/90 via-brown-dark/50 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-7xl pb-10">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl md:text-5xl font-bold text-white"
          >
            Custom Cakes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white/80 font-body text-lg mt-2"
          >
            Your dream cake, crafted with love
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section
        className="py-12 md:py-16"
        style={{ backgroundColor: "oklch(var(--cream-deep))" }}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brown-dark mb-5">
              Your Dream Cake, Made to Order
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              At The Indian Bread Factory, every custom cake is a labour of
              love. Tell us your occasion, preferences, and serving size — and
              we'll create a cake that's uniquely yours. We specialize in
              birthday cakes, anniversary cakes, baby shower cakes, and
              celebration cakes for every milestone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cake Types */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-brown-dark">
              Types of Cakes We Make
            </h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cakeTypes.map((type, idx) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-warm transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={type.image}
                    alt={type.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-display font-bold text-lg text-brown-dark mb-2 flex items-center gap-2">
                    <Star
                      className="w-4 h-4 fill-current"
                      style={{ color: "oklch(var(--golden))" }}
                    />
                    {type.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">{type.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section
        className="py-12 md:py-16"
        style={{ backgroundColor: "oklch(var(--cream-deep))" }}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card rounded-2xl shadow-warm p-8 md:p-10">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-brown-dark mb-2">
                Place Your Order Inquiry
              </h2>
              <p className="text-muted-foreground font-body mb-8">
                Fill in the details below and we'll get back to you within 24
                hours
              </p>

              {submitted ? (
                <div className="text-center py-10">
                  <div className="text-5xl mb-4">🎂</div>
                  <h3 className="font-display text-2xl font-bold text-brown-dark mb-3">
                    Inquiry Received!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you! We'll contact you within 24 hours to confirm
                    details.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    className="bg-primary hover:bg-brown-dark text-primary-foreground rounded-full"
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label
                        htmlFor="customerName"
                        className="font-sans-ui font-medium text-foreground"
                      >
                        Your Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="customerName"
                        name="customerName"
                        value={form.customerName}
                        onChange={handleChange}
                        placeholder="Priya Sharma"
                        required
                        className="rounded-xl border-border focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="phoneNumber"
                        className="font-sans-ui font-medium text-foreground"
                      >
                        Phone Number <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        value={form.phoneNumber}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        required
                        className="rounded-xl border-border"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="cakeType"
                      className="font-sans-ui font-medium text-foreground"
                    >
                      Cake Type <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="cakeType"
                      name="cakeType"
                      value={form.cakeType}
                      onChange={handleChange}
                      placeholder="e.g., Chocolate Birthday Cake, Princess Cake..."
                      required
                      className="rounded-xl border-border"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label
                        htmlFor="eventDate"
                        className="font-sans-ui font-medium text-foreground"
                      >
                        Event Date <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="eventDate"
                        name="eventDate"
                        type="date"
                        value={form.eventDate}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split("T")[0]}
                        className="rounded-xl border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="servings"
                        className="font-sans-ui font-medium text-foreground"
                      >
                        Number of Servings
                      </Label>
                      <Input
                        id="servings"
                        name="servings"
                        type="number"
                        value={form.servings}
                        onChange={handleChange}
                        placeholder="e.g., 20"
                        min="1"
                        className="rounded-xl border-border"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="specialRequirements"
                      className="font-sans-ui font-medium text-foreground"
                    >
                      Special Requirements
                    </Label>
                    <Textarea
                      id="specialRequirements"
                      name="specialRequirements"
                      value={form.specialRequirements}
                      onChange={handleChange}
                      placeholder="Eggless, specific colors, theme, personalized message..."
                      rows={4}
                      className="rounded-xl border-border resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-primary hover:bg-brown-dark text-primary-foreground font-sans-ui font-bold rounded-full py-3 text-base shadow-warm transition-all hover:shadow-warm-lg"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Inquiry 🎂"
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Direct Contact */}
      <section className="py-10 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-primary-foreground"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Prefer to Call or WhatsApp?
            </h3>
            <p className="opacity-80 font-body mb-6">
              Speak to us directly for urgent orders or detailed cake
              customization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+918262862915"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary-foreground text-foreground font-sans-ui font-bold shadow-card transition-all hover:shadow-warm"
              >
                <Phone className="w-5 h-5" />
                Call Us: +91 82628 62915
              </a>
              <a
                href="https://wa.me/918262862915?text=Hi! I'd like to order a custom cake."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-sans-ui font-bold text-white shadow-card transition-all hover:shadow-warm"
                style={{ backgroundColor: "#25D366" }}
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
