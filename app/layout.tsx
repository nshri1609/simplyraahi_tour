import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SimplyRaahi - Your Journey Begins Here",
  description:
    "Discover amazing treks, tours, and adventures in the Himalayas with SimplyRaahi",
  icons: {
    icon: [
      {
        url: "/Logo SimplyRaahi.PNG",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/Logo SimplyRaahi.PNG",
        type: "image/png",
      },
    ],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
