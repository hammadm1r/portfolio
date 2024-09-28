
import type { Metadata } from "next";
import {Inter} from 'next/font/google'
import "./globals.css";
import StarCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({subsets:['latin']})

export const metadata: Metadata = {
  title: "Hammad Farooq Ahmed Meer",
  description: "This is My Portfolio",
  icons:{ 
    icon:"/favicon.ico",
    apple:"favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${inter.className} antialiased bg-[#030014] overflow-y-scroll-x-hidden`}
      >
        
        <Navbar/>
        <StarCanvas />
        {children}
        <Footer />
      </body>
    </html>
  );
}
