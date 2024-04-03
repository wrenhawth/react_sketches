import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wren's Sketches",
  description: "A collection of things in progress",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      <body className={`flex min-h-screen  bg-gradient-to-tr from-indigo-50 to-sky-200 via-indigo-100 via-30% flex-col items-center justify-between p-24 ${inter.className}`}>{children}</body>
    </html>
  );
}
