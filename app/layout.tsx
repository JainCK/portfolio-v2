import type { Metadata } from "next";

import "./globals.css";

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
        className={`antialiased bg-slate-950 overflow-y-scroll overflow-x-hidden`}
      >
        <ApolloWrapper>{children}</ApolloWrapper>
      </body>
    </html>
  );
}
