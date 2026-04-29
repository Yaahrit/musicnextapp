"use client";
import Image from "next/image";
import React, { useState, useMemo } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/music_courses.json";
import { Spotlight } from "@/components/ui/Spotlight";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Music, ShoppingCart, Check } from "lucide-react";
import { useCart, CartItem } from "@/context/CartContext";

function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { addToCart, isInCart } = useCart();

  const categories = useMemo(() => {
    const cats = ["All", ...Array.from(new Set(courseData.courses.map((c) => c.category)))];
    return cats;
  }, []);

  const filteredCourses = useMemo(() => {
    return courseData.courses.filter((course) => {
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleEnroll = (course: typeof courseData.courses[0]) => {
    const cartItem: CartItem = {
      id: course.id,
      title: course.title,
      slug: course.slug,
      description: course.description,
      price: course.price,
      instructor: course.instructor,
      image: course.image,
      category: course.category,
    };
    addToCart(cartItem);
  };

  return (
    <div className="min-h-screen bg-background py-12 pt-36 relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="purple" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-heading font-bold mb-6 text-white"
          >
            All <span className="text-primary">Courses</span>
          </motion.h1>
          <p className="text-neutral-400 max-w-lg mx-auto text-lg">
            Explore our diverse range of music courses tailored for every skill level.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search courses..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  selectedCategory === cat 
                    ? "bg-primary text-white shadow-lg shadow-primary/20" 
                    : "bg-white/5 text-neutral-400 hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <AnimatePresence mode="popLayout">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCourses.map((course) => {
              const inCart = isInCart(course.id);
              return (
                <motion.div
                  key={course.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <CardContainer className="inter-var w-full">
                    <CardBody className="bg-white/5 relative group/card dark:hover:shadow-2xl dark:hover:shadow-primary/[0.1] border border-white/10 w-full h-auto rounded-2xl p-6 transition-all duration-300">
                      <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-white mb-2"
                      >
                        {course.title}
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-400 text-sm mb-6 line-clamp-2"
                      >
                        {course.description}
                      </CardItem>
                      <CardItem translateZ="100" className="w-full mb-6">
                        <Image
                          src={course.image}
                          height={600}
                          width={600}
                          className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                          alt={course.title}
                        />
                      </CardItem>
                      <div className="flex justify-between items-center">
                        <CardItem
                          translateZ={20}
                          className="text-primary font-bold text-lg"
                        >
                          ${course.price}
                        </CardItem>
                        <div onClick={() => handleEnroll(course)} className="cursor-pointer">
                          <CardItem
                            translateZ={20}
                            as="button"
                            className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                              inCart
                                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                                : "bg-primary text-white hover:bg-primary/90"
                            }`}
                          >
                            {inCart ? (
                              <>
                                <Check size={14} />
                                Added
                              </>
                            ) : (
                              <>
                                <ShoppingCart size={14} />
                                Enroll Now
                              </>
                            )}
                          </CardItem>
                        </div>
                      </div>
                    </CardBody>
                  </CardContainer>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
        
        {filteredCourses.length === 0 && (
          <div className="text-center py-20">
            <Music className="w-16 h-16 text-neutral-600 mx-auto mb-4 opacity-20" />
            <h3 className="text-xl font-bold text-neutral-400">No courses found</h3>
            <p className="text-neutral-500">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CoursesPage;
