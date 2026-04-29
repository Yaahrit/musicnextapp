import { Music, Globe, Send, Camera, Video, Share2 } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                <Music size={24} />
              </div>
              <span className="text-xl font-heading font-bold tracking-tight">
                Aura<span className="text-primary">Music</span>
              </span>
            </Link>
            <p className="text-neutral-400 leading-relaxed">
              Empowering the next generation of musicians through immersive 
              online learning and world-class mentorship.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-all text-neutral-400">
                <Globe size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-all text-neutral-400">
                <Share2 size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-all text-neutral-400">
                <Camera size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-all text-neutral-400">
                <Video size={18} />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Platform</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="/courses" className="text-neutral-400 hover:text-primary transition-colors">All Courses</Link></li>
              <li><Link href="/webinars" className="text-neutral-400 hover:text-primary transition-colors">Webinars</Link></li>
              <li><Link href="/instructors" className="text-neutral-400 hover:text-primary transition-colors">Instructors</Link></li>
              <li><Link href="/pricing" className="text-neutral-400 hover:text-primary transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Company</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="/about" className="text-neutral-400 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="text-neutral-400 hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="text-neutral-400 hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-neutral-400 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Subscribe</h3>
            <p className="text-neutral-400 text-sm mb-6">
              Get the latest updates on new courses and workshops.
            </p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <button className="absolute right-2 top-1.5 p-1.5 bg-primary rounded-lg text-white hover:bg-primary/90 transition-colors">
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-neutral-500">
          <p>© 2026 Aura Music Academy. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
