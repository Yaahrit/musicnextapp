"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft, Lock, CreditCard, Shield, CheckCircle,
  Mail, User, MapPin, Building, Phone
} from "lucide-react";
import { Spotlight } from "@/components/ui/Spotlight";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { cartItems, cartTotal, cartCount, clearCart } = useCart();
  const [step, setStep] = useState<"payment" | "success">("payment");
  const [isProcessing, setIsProcessing] = useState(false);

  // Form states
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [cardName, setCardName] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "upi" | "netbanking">("card");

  const formatCardNumber = (val: string) => {
    const nums = val.replace(/\D/g, "").slice(0, 16);
    return nums.replace(/(\d{4})(?=\d)/g, "$1 ");
  };

  const formatExpiry = (val: string) => {
    const nums = val.replace(/\D/g, "").slice(0, 4);
    if (nums.length > 2) return nums.slice(0, 2) + "/" + nums.slice(2);
    return nums;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep("success");
      clearCart();
    }, 2500);
  };

  if (cartCount === 0 && step !== "success") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4 pt-32">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
          <CreditCard size={48} className="mx-auto mb-6 text-neutral-600" />
          <h2 className="text-2xl font-heading font-bold mb-3">Nothing to checkout</h2>
          <p className="text-neutral-400 mb-8">Add some courses to your cart first.</p>
          <Link href="/courses" className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
            Browse Courses
          </Link>
        </motion.div>
      </div>
    );
  }

  if (step === "success") {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4 pt-32">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="purple" />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="text-center relative z-10 max-w-lg"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
            className="w-24 h-24 mx-auto mb-8 rounded-full bg-emerald-500/20 border-2 border-emerald-500/40 flex items-center justify-center"
          >
            <CheckCircle size={48} className="text-emerald-400" />
          </motion.div>
          <h1 className="text-4xl font-heading font-bold mb-4">Payment Successful!</h1>
          <p className="text-neutral-400 mb-3 text-lg">
            Thank you for your purchase. Your courses are now available.
          </p>
          <p className="text-neutral-500 text-sm mb-10">
            A confirmation email has been sent to your inbox with the enrollment details.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/courses"
              className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              Start Learning
            </Link>
            <Link
              href="/"
              className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold hover:bg-white/10 transition-all"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 pt-36 relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="purple" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <Link href="/cart" className="inline-flex items-center gap-2 text-neutral-400 hover:text-primary transition-colors mb-6">
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Back to Cart</span>
          </Link>
          <div className="flex items-center gap-3">
            <Lock size={20} className="text-primary" />
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-white">
              Secure <span className="text-primary">Checkout</span>
            </h1>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="mb-12">
          <div className="flex items-center gap-2 max-w-md">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">1</div>
              <span className="text-sm font-medium text-primary">Cart</span>
            </div>
            <div className="flex-1 h-0.5 bg-primary" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">2</div>
              <span className="text-sm font-medium text-primary">Payment</span>
            </div>
            <div className="flex-1 h-0.5 bg-white/10" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/10 text-neutral-500 text-sm font-bold flex items-center justify-center">3</div>
              <span className="text-sm font-medium text-neutral-500">Confirmation</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Payment Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Info */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-5 flex items-center gap-2">
                  <User size={18} className="text-primary" /> Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-neutral-300 mb-2 block">Full Name</label>
                    <div className="relative">
                      <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
                      <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-foreground placeholder:text-neutral-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all text-sm" required />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-neutral-300 mb-2 block">Email Address</label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-foreground placeholder:text-neutral-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all text-sm" required />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-neutral-300 mb-2 block">Phone</label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
                      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 98765 43210" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-foreground placeholder:text-neutral-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all text-sm" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-neutral-300 mb-2 block">Country</label>
                    <div className="relative">
                      <MapPin size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
                      <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="India" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-foreground placeholder:text-neutral-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all text-sm" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method Selection */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-5 flex items-center gap-2">
                  <CreditCard size={18} className="text-primary" /> Payment Method
                </h3>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {([
                    { id: "card" as const, label: "Credit Card", icon: CreditCard },
                    { id: "upi" as const, label: "UPI", icon: Phone },
                    { id: "netbanking" as const, label: "Net Banking", icon: Building },
                  ]).map((method) => (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setPaymentMethod(method.id)}
                      className={`py-3 px-4 rounded-xl border text-sm font-medium flex flex-col items-center gap-2 transition-all ${
                        paymentMethod === method.id
                          ? "bg-primary/10 border-primary/50 text-primary"
                          : "bg-white/5 border-white/10 text-neutral-400 hover:bg-white/10"
                      }`}
                    >
                      <method.icon size={20} />
                      {method.label}
                    </button>
                  ))}
                </div>

                {paymentMethod === "card" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-neutral-300 mb-2 block">Card Number</label>
                      <div className="relative">
                        <CreditCard size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
                        <input type="text" value={cardNumber} onChange={(e) => setCardNumber(formatCardNumber(e.target.value))} placeholder="1234 5678 9012 3456" maxLength={19} className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-foreground placeholder:text-neutral-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all text-sm tracking-wider font-mono" required />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-neutral-300 mb-2 block">Cardholder Name</label>
                      <input type="text" value={cardName} onChange={(e) => setCardName(e.target.value)} placeholder="Name on card" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-foreground placeholder:text-neutral-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all text-sm" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-neutral-300 mb-2 block">Expiry Date</label>
                        <input type="text" value={expiry} onChange={(e) => setExpiry(formatExpiry(e.target.value))} placeholder="MM/YY" maxLength={5} className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-foreground placeholder:text-neutral-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all text-sm font-mono tracking-wider" required />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-neutral-300 mb-2 block">CVC</label>
                        <div className="relative">
                          <input type="text" value={cvc} onChange={(e) => setCvc(e.target.value.replace(/\D/g, "").slice(0, 3))} placeholder="123" maxLength={3} className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-foreground placeholder:text-neutral-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all text-sm font-mono tracking-wider" required />
                          <Lock size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-600" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {paymentMethod === "upi" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <label className="text-sm font-medium text-neutral-300 mb-2 block">UPI ID</label>
                    <input type="text" placeholder="yourname@upi" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-foreground placeholder:text-neutral-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all text-sm" required />
                  </motion.div>
                )}

                {paymentMethod === "netbanking" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <label className="text-sm font-medium text-neutral-300 mb-2 block">Select Bank</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all text-sm appearance-none" required>
                      <option value="" className="bg-background">Choose your bank</option>
                      <option value="sbi" className="bg-background">State Bank of India</option>
                      <option value="hdfc" className="bg-background">HDFC Bank</option>
                      <option value="icici" className="bg-background">ICICI Bank</option>
                      <option value="axis" className="bg-background">Axis Bank</option>
                      <option value="kotak" className="bg-background">Kotak Mahindra Bank</option>
                    </select>
                  </motion.div>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isProcessing ? (
                  <>
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                    Processing Payment...
                  </>
                ) : (
                  <>
                    <Lock size={18} />
                    Pay ${cartTotal.toFixed(2)}
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-6 text-neutral-500">
                <div className="flex items-center gap-1.5"><Shield size={14} /> <span className="text-xs">256-bit SSL</span></div>
                <div className="flex items-center gap-1.5"><Lock size={14} /> <span className="text-xs">Secure Payment</span></div>
                <div className="flex items-center gap-1.5"><CheckCircle size={14} /> <span className="text-xs">30-day Refund</span></div>
              </div>
            </form>
          </motion.div>

          {/* Order Summary Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sticky top-32">
              <h3 className="text-lg font-bold mb-5">Order Summary</h3>

              <div className="space-y-3 mb-6 max-h-64 overflow-y-auto pr-1 scrollbar-hide">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3 p-3 bg-white/5 rounded-xl">
                    <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0">
                      <Image src={item.image} alt={item.title} fill sizes="56px" className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold truncate">{item.title}</h4>
                      <p className="text-xs text-neutral-500">{item.instructor}</p>
                    </div>
                    <span className="text-sm font-bold text-primary shrink-0">${item.price}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="flex justify-between text-sm text-neutral-400">
                  <span>Subtotal ({cartCount} items)</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-neutral-400">
                  <span>Tax</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between text-sm text-neutral-400">
                  <span>Platform Fee</span>
                  <span className="text-emerald-400">Free</span>
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-primary">${cartTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
