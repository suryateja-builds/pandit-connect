'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function CheckoutContent() {
  const searchParams = useSearchParams();
  const panditId = searchParams.get('panditId');

  return (
    <div className="bg-card p-8 rounded-3xl shadow-xl border border-border max-w-xl w-full text-center">
      <h1 className="text-3xl font-bold text-foreground mb-4">Checkout & Booking</h1>
      <p className="text-muted-foreground mb-8">
        The booking flow and Razorpay payment integration is part of Phase 2.
        {panditId && <span> You are trying to book Pandit ID: {panditId}.</span>}
      </p>
      <div className="inline-flex h-12 items-center justify-center rounded-xl bg-muted w-full font-medium text-muted-foreground border border-border">
        Booking Widget Coming Soon
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <div className="container mx-auto px-4 py-24 flex items-center justify-center">
      <Suspense fallback={<div className="text-center text-muted-foreground">Loading checkout...</div>}>
        <CheckoutContent />
      </Suspense>
    </div>
  );
}
