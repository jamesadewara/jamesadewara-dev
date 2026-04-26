import Link from "next/link";
import { BackgroundFx } from "@/components/site/BackgroundFx";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center px-4">
      <BackgroundFx />
      <div className="max-w-md text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Error 404
        </p>
        <h1 className="mt-3 font-display text-6xl font-semibold tracking-tight text-gradient">
          Page not found
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-7">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            ← Back home
          </Link>
        </div>
      </div>
    </div>
  );
}
