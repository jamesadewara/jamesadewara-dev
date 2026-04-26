"use client";

import type { FC } from "react";

/**
 * Decorative ambient background: grid + radial glow.
 * Pure presentation, pointer-events disabled.
 */
export const BackgroundFx: FC = () => {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div
        className="absolute -top-40 left-1/2 h-[640px] w-[1100px] -translate-x-1/2"
        style={{ background: "var(--gradient-radial-glow)" }}
      />
      <div
        className="absolute bottom-[-200px] right-[-160px] h-[520px] w-[520px] rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--gradient-brand)" }}
      />
    </div>
  );
}
