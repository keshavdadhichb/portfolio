import type { Metadata } from 'next';
import { Anton, Roboto_Flex } from 'next/font/google';
import { ReactLenis } from 'lenis/react';

import 'lenis/dist/lenis.css';
import './globals.css';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import StickyEmail from '@/components/StickyEmail';
import Preloader from '@/components/Preloader';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';

const antonFont = Anton({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-anton',
});

const robotoFlex = Roboto_Flex({
  weight: ['100', '400', '500', '600', '700', '800'],
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-roboto-flex',
});

export const metadata: Metadata = {
  title: 'Keshav Dadhich | Software Engineer',
  description: 'Computer Science undergraduate at VIT Vellore with expertise in full-stack engineering, blockchain protocols, and AI systems. Winner of national hackathons with a patent-pending safety system.',
  keywords: ['Keshav Dadhich', 'Software Engineer', 'Full Stack Developer', 'AI/ML', 'Blockchain', 'VIT Vellore'],
  authors: [{ name: 'Keshav Dadhich' }],
  openGraph: {
    title: 'Keshav Dadhich | Software Engineer',
    description: 'CS undergraduate building scalable systems in AI, Blockchain, and Full-Stack development',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${antonFont.variable} ${robotoFlex.variable} antialiased`}
      >
        <ReactLenis
          root
          options={{
            lerp: 0.1,
            duration: 1.4,
          }}
        >
          <Navbar />
          <main>{children}</main>
          <Footer />

          <ParticleBackground />
          <StickyEmail />
          <Preloader />
          <CustomCursor />
          <ScrollProgress />
        </ReactLenis>
      </body>
    </html>
  );
}
