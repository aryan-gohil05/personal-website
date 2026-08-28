import { Bricolage_Grotesque } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";
import "./globals.css";

const THEME_INIT_SCRIPT = `
(function () {
  try {
    var theme = localStorage.getItem("theme");
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "winter");
    } else if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "night");
    }
  } catch (e) {}
})();
`;

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={bricolageGrotesque.className}>
        <Script id="theme-init" strategy="beforeInteractive">
          {THEME_INIT_SCRIPT}
        </Script>
        {children}
      </body>
    </html>
  );
}
