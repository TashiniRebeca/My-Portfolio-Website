import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import ActiveSecContextProvider from "@/context/active-sec-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tashini | Personal Portfolio",
  description: "Created by Tashini Weerasooriya",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-white relative`}>
        <ActiveSecContextProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster position="top-right" />
        </ActiveSecContextProvider>
      </body>
    </html>
  );
}
