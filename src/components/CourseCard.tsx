"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, Users, Clock, ShoppingCart, Check } from "lucide-react";
import { useCart, CartItem } from "@/context/CartContext";

interface CourseCardProps {
  course: {
    id: number;
    title: string;
    description: string;
    slug: string;
    instructor: string;
    price: number;
    category: string;
    image?: string;
  };
}

export function CourseCard({ course }: CourseCardProps) {
  const { addToCart, isInCart } = useCart();
  const alreadyInCart = isInCart(course.id);

  const handleEnroll = () => {
    const cartItem: CartItem = {
      id: course.id,
      title: course.title,
      slug: course.slug,
      description: course.description,
      price: course.price,
      instructor: course.instructor,
      image: course.image || "/courses/guitar.jpg",
      category: course.category,
    };
    addToCart(cartItem);
  };

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative flex flex-col h-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="p-6 flex flex-col h-full relative z-10">
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
            {course.category}
          </span>
          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={14} fill="currentColor" />
            <span className="text-sm font-bold text-foreground">4.8</span>
          </div>
        </div>

        <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
          {course.title}
        </h3>
        
        <p className="text-neutral-400 text-sm mb-6 flex-grow line-clamp-3">
          {course.description}
        </p>

        <div className="flex items-center gap-4 mb-6 text-neutral-500 text-xs">
          <div className="flex items-center gap-1">
            <Users size={14} />
            <span>1.2k Students</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>12h Content</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
          <span className="text-2xl font-bold text-primary">${course.price}</span>
          <button
            onClick={handleEnroll}
            disabled={alreadyInCart}
            className={`flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-xl transition-all ${
              alreadyInCart
                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 cursor-default"
                : "bg-primary/10 text-primary border border-primary/30 hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/20 active:scale-95"
            }`}
          >
            {alreadyInCart ? (
              <>
                <Check size={16} />
                Added
              </>
            ) : (
              <>
                <ShoppingCart size={16} />
                Enroll Now
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
