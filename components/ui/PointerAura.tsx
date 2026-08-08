"use client";

import { useEffect } from "react";

export function PointerAura() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const supportsFinePointer = window.matchMedia("(pointer: fine)");

    if (prefersReducedMotion.matches || !supportsFinePointer.matches) {
      return;
    }

    function updatePointer(event: PointerEvent) {
      document.documentElement.style.setProperty("--pointer-x", event.clientX + "px");
      document.documentElement.style.setProperty("--pointer-y", event.clientY + "px");
    }

    window.addEventListener("pointermove", updatePointer, { passive: true });
    return () => window.removeEventListener("pointermove", updatePointer);
  }, []);

  return <span aria-hidden="true" className="pointer-aura" />;
}
