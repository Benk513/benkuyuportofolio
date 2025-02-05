import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { SpeedInsights } from '@vercel/speed-insights/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ben KUYU | Portofolio",
  description: "I am Ben KUYU, a passionate and detail-oriented Frontend Developer specializing in React.js Ecosystem. I thrive on building intuitive, responsive, and visually appealing web applications that deliver seamless user experiences. With a strong foundation in modern JavaScript, HTML, and CSS, I bring ideas to life through clean, maintainable, and scalable code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
             <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <SpeedInsights /> 
          </ThemeProvider>
      </body>
    </html>
  );
}
