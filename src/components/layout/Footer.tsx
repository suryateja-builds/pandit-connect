import Link from 'next/link';
import { BellRing } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <BellRing className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-primary">
                Pandit<span className="text-foreground">Connect</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Your trusted platform for booking verified pandits for all your religious and cultural events. Authentic rituals, transparent pricing.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Griha Pravesh</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Satyanarayan Katha</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Marriage Ceremony</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Namakaranam</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">For Pandits</h3>
            <ul className="space-y-2">
              <li><Link href="/auth/pandit-signup" className="text-sm text-muted-foreground hover:text-primary transition-colors">Join as Pandit</Link></li>
              <li><Link href="/auth/login" className="text-sm text-muted-foreground hover:text-primary transition-colors">Pandit Dashboard</Link></li>
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">Guidelines</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} PanditConnect. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with ❤️ in India
          </p>
        </div>
      </div>
    </footer>
  );
}
