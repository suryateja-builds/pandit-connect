export default function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-24 flex items-center justify-center">
      <div className="bg-card p-8 rounded-3xl shadow-xl border border-border max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-foreground mb-4">Sign In</h1>
        <p className="text-muted-foreground mb-8">
          Authentication is part of Phase 2. This page will soon support Google Sign-In and Phone OTP.
        </p>
        <div className="inline-flex h-12 items-center justify-center rounded-xl bg-muted w-full font-medium text-muted-foreground border border-border">
          Login Form Coming Soon
        </div>
      </div>
    </div>
  );
}
