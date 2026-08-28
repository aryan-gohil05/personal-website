"use client";

import { useSyncExternalStore } from "react";

type ThemeMode = "auto" | "light" | "dark";

const STORAGE_KEY = "theme";
const CHANGE_EVENT = "theme-toggle-change";
const ORDER: ThemeMode[] = ["auto", "light", "dark"];
const LABEL: Record<ThemeMode, string> = {
  auto: "Auto",
  light: "Light",
  dark: "Dark",
};

function applyTheme(mode: ThemeMode) {
  const root = document.documentElement;
  if (mode === "light") {
    root.setAttribute("data-theme", "winter");
  } else if (mode === "dark") {
    root.setAttribute("data-theme", "night");
  } else {
    root.removeAttribute("data-theme");
  }
}

function subscribe(callback: () => void) {
  window.addEventListener(CHANGE_EVENT, callback);
  return () => window.removeEventListener(CHANGE_EVENT, callback);
}

function getSnapshot(): ThemeMode {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "light" || stored === "dark" ? stored : "auto";
}

function getServerSnapshot(): ThemeMode {
  return "auto";
}

export default function ThemeToggle() {
  const mode = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const cycle = () => {
    const next = ORDER[(ORDER.indexOf(mode) + 1) % ORDER.length];
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
    window.dispatchEvent(new Event(CHANGE_EVENT));
  };

  return (
    <button
      type="button"
      onClick={cycle}
      className="btn btn-sm"
      aria-label={`Theme: ${LABEL[mode]}. Click to change.`}
    >
      {LABEL[mode]}
    </button>
  );
}