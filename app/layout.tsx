import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ServicesProvider } from '@/context/servicesContext';
import { ProfessionalsProvider } from '@/context/profesionalsContext';
import { BookingsProvider } from "@/context/bookingsContext";


const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OG React",
  description: "A React practice project to learn and improve React skills through building a booking application for a beauty salon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        <BookingsProvider>
          <ServicesProvider>
            <ProfessionalsProvider>
              {children}
            </ProfessionalsProvider>
          </ServicesProvider>
        </BookingsProvider>
      </body>
    </html>
  );
}
