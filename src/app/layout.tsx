import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { CartProvider } from "@/context/CartContext";
import ToastContainer from "@/components/Toast";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Aura Music | Master the Art of Sound",
  description: "Join the world's most immersive music learning platform. Expert-led courses, live webinars, and a global community of musicians.",
  keywords: ["music school", "learn music", "online music courses", "guitar lessons", "piano lessons", "music production"],
  openGraph: {
    title: "Aura Music | Master the Art of Sound",
    description: "Join the world's most immersive music learning platform.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CartProvider>
            <div className="relative w-full flex items-center justify-center">
              <Navbar />
            </div>
            {children}
            <Footer />
            <ToastContainer />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
