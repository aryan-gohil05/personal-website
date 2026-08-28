import { Bricolage_Grotesque } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={bricolageGrotesque.className}>{children}</body>
    </html>
  );
}
