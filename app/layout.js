import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/components/providers";
import Navbar from "./_components/navbar";

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
          <Navbar/>
          {children}<Toaster />
        </Providers>
      </body>
    </html>
  );
}
