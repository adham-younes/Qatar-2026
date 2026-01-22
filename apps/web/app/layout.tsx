import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adham AgriTech | Greenhouse Operations Intelligence',
  description: 'General-purpose greenhouse management system for GCC and MENA operations.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
