import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/globals.css";
import Navbar from "../(pre-auth)/_components/layout/Navbar";
const inter = Inter({ subsets: ["latin"] });

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar /> */}

        <main>{children}</main>
      </body>
    </html>
  );
}
