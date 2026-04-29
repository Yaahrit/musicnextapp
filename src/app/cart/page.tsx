"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Trash2, ArrowRight, Music, ArrowLeft, Tag, Shield } from "lucide-react";
import { Spotlight } from "@/components/ui/Spotlight";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cartItems, cartTotal, removeFromCart, clearCart, cartCount } = useCart();

  return (
    <div className="min-h-screen bg-background py-12 pt-36 relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="purple" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Continue Shopping</span>
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white">
                Your <span className="text-primary">Cart</span>
              </h1>
              <p className="text-neutral-400 mt-2">
                {cartCount === 0
                  ? "Your cart is empty"
                  : `${cartCount} course${cartCount > 1 ? "s" : ""} in your cart`}
              </p>
            </div>
            {cartCount > 0 && (
              <button
                onClick={clearCart}
                className="px-4 py-2 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20 transition-all text-sm font-medium"
              >
                Clear Cart
              </button>
            )}
          </div>
        </motion.div>

        {cartCount === 0 ? (
          /* Empty State */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-24"
          >
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
              <ShoppingCart size={48} className="text-neutral-600" />
            </div>
            <h2 className="text-2xl font-heading font-bold mb-3">Your cart is empty</h2>
            <p className="text-neutral-400 mb-10 max-w-md mx-auto">
              Looks like you haven&apos;t added any courses yet. Explore our catalog to find the perfect course for you.
            </p>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 group"
            >
              Browse Courses
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        ) : (
          /* Cart Content */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <AnimatePresence>
                {cartItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30, height: 0, marginBottom: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex gap-5 p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all group"
                  >
                    {/* Course Image */}
                    <div className="relative w-28 h-28 rounded-xl overflow-hidden shrink-0 bg-white/5">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="112px"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="text-xs font-bold text-primary uppercase tracking-wider">
                            {item.category}
                          </span>
                          <h3 className="text-lg font-bold mt-1 truncate">{item.title}</h3>
                          <p className="text-sm text-neutral-500 mt-1">by {item.instructor}</p>
                        </div>
                        <span className="text-xl font-bold text-primary shrink-0">
                          ${item.price}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <p className="text-xs text-neutral-500 line-clamp-1 flex-1 mr-4">
                          {item.description}
                        </p>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 rounded-lg text-neutral-500 hover:text-red-400 hover:bg-red-500/10 transition-all shrink-0"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sticky top-32">
                <h3 className="text-lg font-bold mb-6">Order Summary</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-neutral-400">
                    <span>Subtotal ({cartCount} items)</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>Platform Fee</span>
                    <span className="text-emerald-400">Free</span>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-primary">${cartTotal.toFixed(2)}</span>
                  </div>
                </div>

                {/* Coupon */}
                <div className="mb-6">
                  <div className="relative">
                    <Tag size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
                    <input
                      type="text"
                      placeholder="Coupon code"
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-20 text-sm text-foreground placeholder:text-neutral-600 focus:outline-none focus:border-primary transition-all"
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-primary/20 text-primary rounded-lg text-xs font-bold hover:bg-primary/30 transition-all">
                      Apply
                    </button>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group"
                >
                  Proceed to Checkout
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Trust Badges */}
                <div className="flex items-center justify-center gap-2 mt-5 text-neutral-500">
                  <Shield size={14} />
                  <span className="text-xs">Secure checkout · 30-day money-back guarantee</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
