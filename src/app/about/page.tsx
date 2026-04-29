"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Music, Award, Users, Heart } from "lucide-react";

function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-8">
              Harmonizing <span className="text-primary">Education</span> & Passion
            </h1>
            <p className="text-xl text-neutral-400 leading-relaxed mb-8">
              At Aura Music Academy, we are passionate about providing world-class 
              music education to individuals of all ages and skill levels. 
              Our mission is to foster a global community of musicians.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/courses"
                className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                Explore Courses
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl font-bold hover:bg-white/10 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur-2xl opacity-20 animate-pulse-slow"></div>
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/dp.jpg"
                alt="Our Founder"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {[
            { icon: Users, label: "Active Students", value: "5,000+" },
            { icon: Music, label: "Online Courses", value: "150+" },
            { icon: Award, label: "Expert Mentors", value: "40+" },
            { icon: Heart, label: "Global Rating", value: "4.9/5" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center group hover:bg-white/10 transition-all"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-neutral-500 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
            <div className="space-y-6 text-neutral-400 leading-relaxed">
              <p>
                Founded in 2020, Aura Music Academy started with a simple vision: 
                to make high-quality music education accessible to everyone, 
                everywhere. We believe that music has the power to inspire, 
                uplift, and connect people across borders.
              </p>
              <p>
                Our team of experienced instructors is dedicated to creating a 
                nurturing environment where students can explore and express 
                their musical talents. Whether you are just starting your 
                musical journey or looking to refine your skills, we are here 
                to guide you every step of the way.
              </p>
            </div>
          </div>
          <div className="p-8 rounded-2xl bg-primary/10 border border-primary/20">
            <h3 className="text-xl font-bold mb-4">Why Aura?</h3>
            <ul className="space-y-4">
              {[
                "Personalized Mentorship",
                "Immersive Curriculum",
                "World-class Instructors",
                "Collaborative Community",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-neutral-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
