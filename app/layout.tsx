import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const fontSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "r/IGCSE",
  description: "The website for r/IGCSE", // TODO: Add a better description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontSans.variable} h-full`}>
      <body className="min-h-screen">
        <Header />
        {children}
      </body>
    </html>
  );
}