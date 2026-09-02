"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Socials from "./Socials";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { href: "#posts", label: "Blog Posts" },
  { href: "#worth-your-time", label: "Worth Your Time" },
];

const TRANSITION_MS = 300;

const HamburgerIcon = () => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const rafId = useRef<number | null>(null);
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearPending = useCallback(() => {
    if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    if (timeoutId.current !== null) clearTimeout(timeoutId.current);
    rafId.current = null;
    timeoutId.current = null;
  }, []);

  const openMenu = useCallback(() => {
    clearPending();
    setMounted(true);
    // Wait for the initial (hidden) paint before flipping to visible,
    // otherwise there's nothing for the CSS transition to animate from.
    rafId.current = requestAnimationFrame(() => {
      rafId.current = requestAnimationFrame(() => setOpen(true));
    });
  }, [clearPending]);

  const closeMenu = useCallback(() => {
    clearPending();
    setOpen(false);
    timeoutId.current = setTimeout(() => setMounted(false), TRANSITION_MS);
  }, [clearPending]);

  useEffect(() => clearPending, [clearPending]);

  useEffect(() => {
    if (!mounted) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mounted, closeMenu]);

  return (
    <>
      <button
        type="button"
        onClick={openMenu}
        className="btn btn-square btn-sm btn-secondary shrink-0 md:hidden"
        aria-label="Open menu"
        aria-expanded={open}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {mounted && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className={`fixed inset-0 z-50 flex flex-col bg-base-100 px-6 py-8 transition-all duration-300 ease-out md:hidden ${
            open ? "opacity-100 scale-100" : "opacity-0 scale-100"
          }`}
        >
          <div className="flex items-center justify-between">
            <ThemeToggle />
            <button
              type="button"
              onClick={closeMenu}
              className="btn btn-square btn-sm btn-secondary"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="mt-12 flex flex-col items-center gap-16">
            <nav className="flex flex-col items-center space-y-12">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-xl font-black"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <Socials />
          </div>
        </div>
      )}
    </>
  );
};

export default HamburgerIcon;
