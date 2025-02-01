import type { Metadata } from "next";

import "./globals.css";
import { Navbar } from "@/components/navbar";
import { ApolloWrapper } from "@/components/apolloWrapper";

export const metadata: Metadata = {
  title: "Welcome to my Portfolio",
  description:
    "this is a portfolio page for Jain C Kuriakose, Full-stack developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-white overflow-y-scroll overflow-x-hidden px-4 sm:px-24`}
      >
        <ApolloWrapper>
          <Navbar />
          {children}
        </ApolloWrapper>
      </body>
    </html>
  );
}
