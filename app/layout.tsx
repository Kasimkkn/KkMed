import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KKMed - Medicine Delivery Platform",
  description: "Starting a medicine delivery startup involves a multifaceted approach, considering the unique challenges and regulations in the healthcare and pharmaceutical industries. KKMed provides a seamless and reliable solution for medicine delivery.",
  keywords: "medicine delivery, healthcare, KKMed, pharmaceutical delivery, online pharmacy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
