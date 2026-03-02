import { motion } from "motion/react";
import { SiWhatsapp } from "react-icons/si";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/918262862915"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-warm-lg"
      style={{ backgroundColor: "#25D366" }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <SiWhatsapp className="w-7 h-7 text-white" />
    </motion.a>
  );
}
