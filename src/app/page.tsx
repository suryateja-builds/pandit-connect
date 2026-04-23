'use client';

import { motion } from 'framer-motion';
import { Search, MapPin, Calendar, Star, ShieldCheck, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/5 -z-10" />
        <div className="absolute inset-0 bg-[url('/mandala-pattern.svg')] opacity-5 -z-10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6"
            >
              Divine Blessings, <span className="text-primary">Delivered.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Book verified, experienced Pandits for all your religious ceremonies, poojas, and cultural events. Authentic rituals with transparent pricing.
            </motion.p>

            {/* Search Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card p-4 rounded-2xl shadow-xl border border-border/50 max-w-3xl mx-auto flex flex-col md:flex-row gap-4"
            >
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <input 
                  type="text" 
                  placeholder="Enter your city..." 
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-muted/50 border-none focus:ring-2 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <input 
                  type="text" 
                  placeholder="E.g., Griha Pravesh, Marriage" 
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-muted/50 border-none focus:ring-2 focus:ring-primary outline-none transition-all"
                />
              </div>
              <Link 
                href="/search"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Search Pandits
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose PanditConnect?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">We bring trust, authenticity, and convenience to your spiritual journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-background border border-border/50 shadow-sm text-center"
            >
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">100% Verified</h3>
              <p className="text-muted-foreground">Every pandit undergoes rigorous background and qualification checks.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-background border border-border/50 shadow-sm text-center"
            >
              <div className="w-14 h-14 bg-accent/20 text-accent-foreground rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Instant Booking</h3>
              <p className="text-muted-foreground">Check real-time availability and book your pandit in just a few clicks.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-background border border-border/50 shadow-sm text-center"
            >
              <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Authentic Rituals</h3>
              <p className="text-muted-foreground">Experienced priests ensuring rituals are performed according to Vedic standards.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Popular Services</h2>
              <p className="text-muted-foreground">Book pandits for your specific needs</p>
            </div>
            <Link href="/services" className="text-primary font-medium hover:underline hidden sm:block">
              View All Services
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Griha Pravesh', img: '/images/griha_pravesh.png' },
              { name: 'Marriage Ceremony', img: '/images/marriage_ceremony.png' },
              { name: 'Satyanarayan Katha', img: '/images/satyanarayan_katha.png' },
              { name: 'Namakaranam', img: '/images/namakaranam.png' }
            ].map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer relative overflow-hidden rounded-2xl aspect-[4/5]"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={service.img}
                  alt={service.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 p-6 z-20">
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <div className="flex items-center text-white/80 text-sm gap-2">
                    <span>Starts at ₹2100</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
