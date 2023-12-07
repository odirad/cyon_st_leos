import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/globals.css";
import { LayoutProps } from "@/@types";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function AuthLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
