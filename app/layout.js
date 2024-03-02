import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/components/providers";
import Navbar from "./_components/navbar";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Expense Monitoring",
  description: "Monitor your expense",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex h-full flex-col">
            <div style={{height:"54px"}}>
              <Navbar />
            </div>
            <div style={{height:"calc(100% - 54px"}}>
              {children}
            </div>
          </div>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
