import type { Metadata } from "next";
import { Anek_Devanagari } from "next/font/google";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import { cn } from "@/lib/utils";

const AnekDevanagari = Anek_Devanagari({ 
  subsets: ["latin"],
  variable : "--font-caption",
});

export const metadata: Metadata = {
  title: "My portfolio",
  description: "This portfolio speak about my professionnal life",
};

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(GeistSans.variable, AnekDevanagari, "font-sans h-full bg-background text-foreground")}>
        {children}
      </body>
    </html>
  );
}