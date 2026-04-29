"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Info, AlertCircle, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const icons = {
  success: CheckCircle,
  info: Info,
  error: AlertCircle,
};

const colors = {
  success: "from-emerald-500/20 to-emerald-500/5 border-emerald-500/30 text-emerald-400",
  info: "from-primary/20 to-primary/5 border-primary/30 text-primary",
  error: "from-red-500/20 to-red-500/5 border-red-500/30 text-red-400",
};

export default function ToastContainer() {
  const { toasts, removeToast } = useCart();

  return (
    <div className="fixed top-24 right-4 z-[100] flex flex-col gap-3 max-w-sm w-full pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => {
          const Icon = icons[toast.type];
          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 100, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className={`pointer-events-auto bg-gradient-to-r ${colors[toast.type]} backdrop-blur-xl border rounded-xl p-4 shadow-2xl shadow-black/20 flex items-start gap-3`}
            >
              <Icon size={20} className="mt-0.5 shrink-0" />
              <p className="text-sm font-medium text-foreground flex-1">{toast.message}</p>
              <button
                onClick={() => removeToast(toast.id)}
                className="text-foreground/50 hover:text-foreground transition-colors shrink-0"
              >
                <X size={16} />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
