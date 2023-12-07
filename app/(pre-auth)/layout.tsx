import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/globals.css";
import Navbar from "@pre/@components/layout/Navbar";
import Footer from "@pre/@components/layout/Footer";
import Hero from "@pre/@components/layout/Hero";
import { LayoutProps } from "@/@types";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function PreAuthLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Hero />
        <main className="bg-white w-screen static">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
