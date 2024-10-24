import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { ApolloWrapper } from "@/components/apolloWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Welcome to my Portfolio",
  description: "this is a portfolio page for Jain C Kuriakose, Full-stack developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 overflow-y-scroll overflow-x-hidden px-4 sm:px-24`}
      >
        <ApolloWrapper>
          <Navbar />
          {children}
        </ApolloWrapper>
      </body>
    </html>
  );
}
