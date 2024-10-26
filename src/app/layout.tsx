import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./components/navbar";
import { ThemeProvider } from "@/context/theme-provider";
import Footer from "./components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nethmi Dinanjana",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased dark:bg-[#081115] bg-[#547380] min-h-screen overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar/>
          <div className="flex justify-center">
            <main className="w-full max-w-7xl flex-grow">{children}</main>
          </div>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
