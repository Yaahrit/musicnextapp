"use client";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { motion } from "framer-motion";
import { Music, Star, Users, Play } from "lucide-react";

function HeroSection() {
  return (
    <div className="min-h-screen w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto pt-32 pb-20 md:py-0 bg-mesh-gradient">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 md:left-20 text-primary/30"
        >
          <Music size={120} />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-10 md:right-20 text-primary/20"
        >
          <div className="w-24 h-24 border-4 border-current rounded-full" />
        </motion.div>
      </div>

      <div className="p-4 relative z-10 w-full text-center max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6 inline-block border border-primary/20">
            Trusted by 50,000+ Students Worldwide
          </span>
          <h1 className="text-5xl md:text-8xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight">
            Master the Art <br /> of <span className="text-primary">Music</span>
          </h1>
          <p className="mt-8 font-normal text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Dive into our comprehensive music courses and transform your musical
            journey today. From theory to production, join the world&apos;s most 
            immersive learning platform.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 text-lg px-8 py-4 font-bold"
            >
              Explore Courses
            </Button>
          </Link>
          <button className="flex items-center gap-2 text-foreground font-semibold hover:text-primary transition-colors">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group">
              <Play size={20} className="fill-current" />
            </div>
            Watch Demo
          </button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-white/10 pt-12"
        >
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 text-yellow-500 mb-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <span className="text-2xl font-bold">4.9/5</span>
            <span className="text-sm text-neutral-500 uppercase tracking-wider">Rating</span>
          </div>
          <div className="flex flex-col items-center">
            <Users size={24} className="text-primary mb-2" />
            <span className="text-2xl font-bold">50k+</span>
            <span className="text-sm text-neutral-500 uppercase tracking-wider">Students</span>
          </div>
          <div className="flex flex-col items-center">
            <Play size={24} className="text-primary mb-2" />
            <span className="text-2xl font-bold">200+</span>
            <span className="text-sm text-neutral-500 uppercase tracking-wider">Courses</span>
          </div>
          <div className="flex flex-col items-center">
            <Star size={24} className="text-primary mb-2" />
            <span className="text-2xl font-bold">15+</span>
            <span className="text-sm text-neutral-500 uppercase tracking-wider">Instruments</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
