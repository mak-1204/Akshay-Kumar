import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Akshay Kumar M — Portfolio',
  description: 'Portfolio of Akshay Kumar M, an Analyst at Deloitte and Production Engineering student at NIT Trichy.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Fira+Code:wght@300..700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-primary/30 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
