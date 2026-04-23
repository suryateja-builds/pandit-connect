import { PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';
import { MapPin, Star, ShieldCheck, Calendar, Clock, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const prisma = new PrismaClient();

export default async function PanditProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const pandit = await prisma.panditProfile.findUnique({
    where: { id },
    include: {
      user: true,
      services: true,
      reviews: {
        include: { customer: true }
      }
    }
  });

  if (!pandit) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Profile Header */}
          <div className="bg-card rounded-3xl p-6 md:p-8 shadow-sm border border-border flex flex-col md:flex-row gap-8 items-start">
            <div className="h-32 w-32 md:h-48 md:w-48 rounded-2xl overflow-hidden shrink-0 bg-muted">
              {pandit.user.image ? (
                <img 
                  src={pandit.user.image} 
                  alt={pandit.user.name || ''} 
                  className="w-full h-full object-cover"
                />
              ) : null}
              <div 
                className="w-full h-full items-center justify-center bg-primary/10 text-primary text-5xl font-bold"
                style={{ display: pandit.user.image ? 'none' : 'flex' }}
              >
                {pandit.user.name?.[0]}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold text-foreground flex items-center gap-2 mb-2">
                    {pandit.user.name}
                    {pandit.isVerified && <span title="Verified Pandit"><ShieldCheck className="h-7 w-7 text-green-600" /></span>}
                  </h1>
                  <p className="text-muted-foreground flex items-center gap-2 text-lg mb-4">
                    <MapPin className="h-5 w-5" /> {pandit.location}
                  </p>
                </div>
                <div className="bg-accent/20 text-accent-foreground px-3 py-1.5 rounded-lg flex items-center gap-1 font-bold text-lg">
                  <Star className="h-5 w-5 fill-current" />
                  {pandit.rating}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <div className="bg-muted px-4 py-2 rounded-xl text-sm font-medium">
                  <span className="text-muted-foreground block text-xs">Experience</span>
                  {pandit.experienceYrs} Years
                </div>
                <div className="bg-muted px-4 py-2 rounded-xl text-sm font-medium">
                  <span className="text-muted-foreground block text-xs">Languages</span>
                  {pandit.languages}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">About</h3>
                <p className="text-foreground/80 leading-relaxed">
                  {pandit.bio}
                </p>
              </div>
            </div>
          </div>

          {/* Services Offered */}
          <div className="bg-card rounded-3xl p-6 md:p-8 shadow-sm border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Services Offered</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pandit.services.map((service) => (
                <div key={service.id} className="border border-border rounded-2xl p-5 hover:border-primary transition-colors cursor-default">
                  <h3 className="font-bold text-lg mb-1">{service.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{service.description}</p>
                  <div className="font-semibold text-primary">Starts at ₹{service.basePrice}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar (Booking Widget) */}
        <div className="lg:col-span-1">
          <div className="bg-card rounded-3xl p-6 md:p-8 shadow-xl border border-border/50 sticky top-24">
            <h3 className="text-xl font-bold text-foreground mb-6">Book this Pandit</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center pb-4 border-b border-border">
                <span className="text-muted-foreground">Hourly Rate</span>
                <span className="font-bold text-lg">₹{pandit.hourlyRate}</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-foreground/80 pt-2">
                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                <span>100% Secure Payment</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-foreground/80">
                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                <span>Verified Background Check</span>
              </div>
            </div>

            <Link 
              href={`/checkout?panditId=${pandit.id}`}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
            >
              <Calendar className="h-5 w-5" />
              Select Date & Time
            </Link>
            
            <p className="text-center text-xs text-muted-foreground mt-4">
              You won't be charged yet.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
