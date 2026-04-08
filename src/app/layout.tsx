
import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

import { Outfit, JetBrains_Mono } from 'next/font/google';

const outfit = Outfit({ 
  subsets: ['latin'], 
  variable: '--font-outfit',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'], 
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Akshay Kumar M — Portfolio',
  description: 'Portfolio of Akshay Kumar M, an Analyst at Deloitte and Engineering student at NIT Trichy.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${outfit.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
      </head>
      <body className="font-body antialiased selection:bg-primary/30 selection:text-primary">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
