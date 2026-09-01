"use client";

import { useEffect, useRef } from "react";

export default function ProgressTracker() {
  const barRef = useRef<HTMLDivElement>(null);
  const ticking = useRef(false);

  useEffect(() => {
    // Where all the logic happens
    const calculateProgress = () => {
      const scrolled: number = window.scrollY;
      // Maximum possible scroll distance left
      const totalScrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      // How much of the maximum have I scrolled
      const percentage: number =
        totalScrollHeight > 0 ? (scrolled / totalScrollHeight) * 100 : 0;
      const clamped = Math.min(100, Math.max(0, percentage));

      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${clamped / 100})`;
      }
      ticking.current = false;
    };

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(calculateProgress);
    };

    calculateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", calculateProgress);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", calculateProgress);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 h-1.5 w-full bg-base-300">
      <div
        ref={barRef}
        className="h-full origin-left bg-secondary"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
