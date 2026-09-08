import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import type { ReactNode } from 'react';
import './globals.css';

const GTM_ID = 'GTM-MZBLQS55';

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
  return (
    <html lang="en">
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        <Script id="gtm" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}</Script>
        {children}
      </body>
    </html>
  );
}
