'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, User, Menu, X, BellRing } from 'lucide-react';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <BellRing className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-primary">
                Pandit<span className="text-foreground">Connect</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/search" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors flex items-center gap-2">
              <Search className="h-4 w-4" />
              Find a Pandit
            </Link>
            <Link href="/services" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              About Us
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/auth/pandit-signup" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
              Register as Pandit
            </Link>
            <Link
              href="/auth/login"
              className="inline-flex h-9 items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <User className="mr-2 h-4 w-4" />
              Sign In
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground/80 hover:text-foreground p-2 -mr-2"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background px-4 py-4 space-y-4 shadow-lg absolute w-full">
          <Link 
            href="/search" 
            className="flex items-center gap-2 text-base font-medium text-foreground/80 hover:text-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Search className="h-4 w-4" />
            Find a Pandit
          </Link>
          <Link 
            href="/services" 
            className="block text-base font-medium text-foreground/80 hover:text-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            href="/about" 
            className="block text-base font-medium text-foreground/80 hover:text-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <div className="pt-4 border-t border-border/40 flex flex-col gap-3">
            <Link 
              href="/auth/pandit-signup" 
              className="block text-base font-medium text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Register as Pandit
            </Link>
            <Link
              href="/auth/login"
              className="inline-flex h-10 items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <User className="mr-2 h-4 w-4" />
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
