import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jandrescholtz.com'),
  title: 'Jandré Scholtz | Fractional Head of Growth & Performance',
  description: 'Senior growth leadership without the full-time hire. Helping digital businesses launch, scale and improve customer acquisition with clear strategy, hands-on ownership and practical AI systems.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Jandré Scholtz | Fractional Growth Leadership',
    description: 'Clear strategy. Hands-on ownership. Systems that last.',
    url: '/',
    siteName: 'Jandré Scholtz',
    locale: 'en_ZA',
    type: 'website',
    images: [{ url: '/social-preview.png', width: 1200, height: 630, alt: 'Jandré Scholtz. Senior growth leadership. Not a full-time hire.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jandré Scholtz | Fractional Growth Leadership',
    description: 'Clear strategy. Hands-on ownership. Systems that last.',
    images: ['/social-preview.png'],
  },
};

export const viewport: Viewport = { themeColor: '#F5F2EB' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
