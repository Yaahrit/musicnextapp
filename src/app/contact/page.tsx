"use client";
import React, { FormEvent, useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Spotlight } from "@/components/ui/Spotlight";

function ContactUs() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted:", { name, email, message });
    // Reset form
    setName("");
    setEmail("");
    setMessage("");
    alert("Message sent successfully!");
  };

  return (
    <div className="min-h-screen bg-background py-12 pt-36 relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <BackgroundBeams className="absolute inset-0 z-0" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-heading font-bold mb-6 text-white"
          >
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Touch</span>
          </motion.h1>
          <p className="text-neutral-400 max-w-lg mx-auto text-lg">
            Have questions about our courses or need guidance? Our team is 
            here to help you on your musical journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Contact Information</h2>
              <p className="text-neutral-400">
                Reach out to us through any of these channels or fill out the form. 
                We usually respond within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email Us", value: "hello@auramusic.com" },
                { icon: Phone, label: "Call Us", value: "+1 (555) 000-0000" },
                { icon: MapPin, label: "Visit Us", value: "123 Melody Lane, Music City, MC 54321" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-neutral-500 uppercase tracking-widest">{item.label}</div>
                    <div className="text-lg font-medium text-white">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="w-full bg-black/20 border border-white/10 rounded-xl py-4 px-4 text-white focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full bg-black/20 border border-white/10 rounded-xl py-4 px-4 text-white focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can we help you?"
                  className="w-full bg-black/20 border border-white/10 rounded-xl py-4 px-4 text-white focus:outline-none focus:border-primary transition-colors"
                  rows={5}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
