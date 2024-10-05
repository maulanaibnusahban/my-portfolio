import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maulana Portfolio",
  description: "Maulana Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="" translate="no">
      <meta name="google" content="notranslate" />
      <body className={`${poppins.className} antialiased bg-black max-w-10xl flex justify-center`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
