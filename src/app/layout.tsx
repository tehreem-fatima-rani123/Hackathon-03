import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Header from "@/components/header";
import Footer from "@/components/Footer";

// Add Inter font
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {/* Navbar */}
          <Navbar />

          {/* Header */}
          <Header />


          {/* Main Content */}
          {children}

          {/* Footer */}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
