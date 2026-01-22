import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Adham AgriTech | OSIRIS Command Center",
  description: "General greenhouse management platform for GCC operations"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
