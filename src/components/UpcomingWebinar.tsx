'use client'
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, Play, Video, ArrowRight } from "lucide-react"

const featuredWebinars = [
  {
    title: 'Understanding Music Theory',
    description: 'Dive deep into the fundamentals of music theory and enhance your musical skills.',
    slug: 'understanding-music-theory',
    type: 'Live',
    date: 'Oct 24, 2024',
  },
  {
    title: 'The Art of Songwriting',
    description: 'Learn the craft of songwriting from experienced musicians and songwriters.',
    slug: 'the-art-of-songwriting',
    type: 'Trending',
    date: 'Oct 28, 2024',
  },
  {
    title: 'Mastering Your Instrument',
    description: 'Advanced techniques to master your musical instrument of choice.',
    slug: 'mastering-your-instrument',
    type: 'Recorded',
    date: 'Available Now',
  },
  {
    title: 'Music Production Essentials',
    description: 'Get started with music production with this comprehensive overview.',
    slug: 'music-production-essentials',
    type: 'Live',
    date: 'Nov 02, 2024',
  },
  {
    title: 'Live Performance Techniques',
    description: 'Enhance your live performance skills with expert tips and strategies.',
    slug: 'live-performance-techniques',
    type: 'Trending',
    date: 'Nov 05, 2024',
  },
  {
    title: 'Digital Music Marketing',
    description: 'Learn how to promote your music effectively in the digital age.',
    slug: 'digital-music-marketing',
    type: 'Recorded',
    date: 'Available Now',
  },
];

function UpcomingWebinar() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl md:text-5xl font-heading font-bold mb-6"
            >
              Masterclasses & <span className="text-primary">Webinars</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-neutral-400 text-lg"
            >
              Join live sessions with industry experts or watch recorded masterclasses at your own pace.
            </motion.p>
          </div>
          <Link 
            href="/webinars"
            className="group flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
          >
            View All Webinars
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredWebinars.map((webinar, index) => (
            <motion.div
              key={webinar.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all overflow-hidden"
            >
              {/* Background Icon */}
              <div className="absolute -right-4 -bottom-4 text-white/5 group-hover:text-primary/10 transition-colors duration-500">
                {webinar.type === 'Live' ? <Video size={120} /> : <Play size={120} />}
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                    webinar.type === 'Live' ? 'bg-red-500/20 text-red-500' : 
                    webinar.type === 'Trending' ? 'bg-orange-500/20 text-orange-500' : 
                    'bg-blue-500/20 text-blue-500'
                  }`}>
                    {webinar.type === 'Live' && <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-500 mr-1.5 animate-pulse" />}
                    {webinar.type}
                  </span>
                  <div className="flex items-center gap-2 text-neutral-500 text-xs font-medium">
                    <Calendar size={14} />
                    {webinar.date}
                  </div>
                </div>

                <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-primary transition-colors">
                  {webinar.title}
                </h3>
                
                <p className="text-neutral-400 mb-8 line-clamp-2">
                  {webinar.description}
                </p>

                <button className="flex items-center gap-2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                  Reserve Seat
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UpcomingWebinar