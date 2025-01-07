import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "./fonts";

export const metadata: Metadata = {
  title: "Sarhan's Portfolio",
  description: "Here is where magic happens :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("montserrat", montserrat);
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${montserrat.className} antialiased font-normal`}
      >
        {children}
      </body>
    </html>
  );
}
