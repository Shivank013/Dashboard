import type { Metadata } from "next";
import localFont from "next/font/local";
import {Inter,Ramabhadra, Radio_Canada, Rajdhani} from "next/font/google"
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--inter"})
const ramabhadra = Ramabhadra({ weight: "400", subsets: ["latin"], variable: "--ramabhadra"})
const radioCanada = Radio_Canada({variable: "--radioCanada", subsets: ["latin"]})
const rajdhani = Rajdhani({weight: "400", variable:"--rajdhani", subsets: ["latin"]})


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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} ${radioCanada.className} ${rajdhani.className} ${ramabhadra.className}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
