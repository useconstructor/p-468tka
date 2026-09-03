import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Muebles Artesanales | Handcrafted Furniture with Soul',
  description: 'Timeless furniture, handcrafted in small batches by master artisans using responsibly sourced wood and natural materials.',
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
