"use client";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { motion } from "framer-motion";

const instructors = [
  {
    id: 1,
    name: "Elena Briggs",
    designation: "Vocal Coach",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Marcus Reid",
    designation: "Guitar Instructor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Julia Zhang",
    designation: "Piano Teacher",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Andre Gomez",
    designation: "Drumming Expert",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop",
  },
];

function Instructor() {
  return (
    <section className="relative h-[45rem] overflow-hidden flex items-center justify-center bg-background">
      <WavyBackground 
        className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full"
        containerClassName="bg-black"
        colors={["#4f46e5", "#7c3aed", "#c026d3", "#2563eb", "#0ea5e9"]}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center z-10"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl text-white font-heading font-bold mb-8">
            Meet Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Mentors</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-12">
            Discover the world-class professionals who will guide you from 
            foundational theory to professional production.
          </p>
          <div className="flex flex-row items-center justify-center mb-10 w-full scale-100 sm:scale-125 md:scale-150">
            <AnimatedTooltip items={instructors} />
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-20 flex gap-8 justify-center opacity-50 grayscale hover:grayscale-0 transition-all"
          >
            {/* Mock social proof logos can go here */}
            <span className="text-white font-bold text-xl tracking-tighter italic">GRAMMY WINNERS</span>
            <span className="text-white font-bold text-xl tracking-tighter italic">BERKLEE ALUMNI</span>
            <span className="text-white font-bold text-xl tracking-tighter italic">PRODUCERS</span>
          </motion.div>
        </motion.div>
      </WavyBackground>
    </section>
  );
}

export default Instructor;
