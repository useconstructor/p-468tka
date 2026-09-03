import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Project 1788445793665',
  description: 'Muebles Artesanales is a direct-to-consumer handcrafted wooden furniture brand showcasing bespoke wood pieces with transparent pricing and artisan storytelling, targeting homeowners who value quality and sustainability.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#FAF1E8', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
