import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bishal Biswas — Creative Developer',
  description: 'Scrollytelling portfolio bridging design and engineering through immersive digital experiences.',
  keywords: ['Creative Developer', 'Portfolio', 'Next.js', 'Motion Design', 'Frontend', 'WebGL'],
  authors: [{ name: 'Bishal Biswas' }],
  openGraph: {
    title: 'Bishal Biswas — Creative Developer',
    description: 'Immersive portfolio bridging design and engineering.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="noise bg-background antialiased">
        {children}
      </body>
    </html>
  );
}
