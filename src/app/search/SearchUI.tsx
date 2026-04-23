'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, Filter, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

type Pandit = any; // We'll use any for now to avoid complex Prisma type imports in the client

export function SearchUI({ initialPandits }: { initialPandits: Pandit[] }) {
  const [pandits, setPandits] = useState(initialPandits);
  const [locationFilter, setLocationFilter] = useState('');
  
  // Simple client-side filtering
  const filteredPandits = pandits.filter(p => 
    p.location.toLowerCase().includes(locationFilter.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8">
      
      {/* Sidebar Filters */}
      <aside className="w-full md:w-64 shrink-0 space-y-6">
        <div className="bg-card p-6 rounded-2xl border border-border shadow-sm">
          <div className="flex items-center gap-2 font-semibold text-lg mb-4">
            <Filter className="h-5 w-5" /> Filters
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="City or Area"
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="border-t border-border pt-4">
              <label className="text-sm font-medium text-foreground mb-2 block">Language</label>
              {['Hindi', 'Telugu', 'Tamil', 'Sanskrit'].map(lang => (
                <label key={lang} className="flex items-center gap-2 mb-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-input text-primary focus:ring-primary" />
                  <span className="text-sm text-foreground/80">{lang}</span>
                </label>
              ))}
            </div>

            <div className="border-t border-border pt-4">
              <label className="text-sm font-medium text-foreground mb-2 block">Price Range</label>
              <input type="range" min="500" max="10000" className="w-full accent-primary" />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>₹500</span>
                <span>₹10,000+</span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Results */}
      <main className="flex-1">
        <h1 className="text-2xl font-bold text-foreground mb-6">
          {filteredPandits.length} Pandits Found
        </h1>

        <div className="space-y-4">
          {filteredPandits.map((pandit, idx) => (
            <motion.div 
              key={pandit.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card p-6 rounded-2xl border border-border shadow-sm flex flex-col sm:flex-row gap-6 hover:shadow-md transition-shadow"
            >
              <div className="h-24 w-24 sm:h-32 sm:w-32 shrink-0 rounded-xl overflow-hidden bg-muted relative">
                {pandit.user.image ? (
                  <img 
                    src={pandit.user.image} 
                    alt={pandit.user.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      if (e.currentTarget.nextElementSibling) {
                        (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                      }
                    }}
                  />
                ) : null}
                <div 
                  className="w-full h-full items-center justify-center bg-primary/10 text-primary text-2xl font-bold"
                  style={{ display: pandit.user.image ? 'none' : 'flex' }}
                >
                  {pandit.user.name?.[0]}
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                        {pandit.user.name}
                        {pandit.isVerified && <ShieldCheck className="h-5 w-5 text-green-600" />}
                      </h2>
                      <div className="text-sm text-muted-foreground flex items-center gap-1">
                        <MapPin className="h-4 w-4" /> {pandit.location}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 bg-accent/20 text-accent-foreground px-2.5 py-1 rounded-md font-medium text-sm">
                      <Star className="h-4 w-4 fill-current" />
                      {pandit.rating}
                    </div>
                  </div>

                  <p className="text-sm text-foreground/80 line-clamp-2 mt-2">
                    {pandit.bio}
                  </p>
                  
                  <div className="flex gap-2 mt-3 flex-wrap">
                    {pandit.languages.split(',').map((lang: string) => (
                      <span key={lang} className="text-xs font-medium bg-muted text-muted-foreground px-2 py-1 rounded-md">
                        {lang.trim()}
                      </span>
                    ))}
                    <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-md">
                      {pandit.experienceYrs} yrs exp
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
                  <div className="font-semibold text-foreground">
                    ₹{pandit.hourlyRate} <span className="text-sm text-muted-foreground font-normal">/ hour</span>
                  </div>
                  <Link 
                    href={`/pandit/${pandit.id}`}
                    className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
          
          {filteredPandits.length === 0 && (
            <div className="text-center py-12 bg-card rounded-2xl border border-border">
              <h3 className="text-lg font-medium text-foreground">No Pandits found</h3>
              <p className="text-muted-foreground mt-2">Try adjusting your filters or location.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
