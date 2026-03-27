import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "INIFIRLI STORE - Akun Premium Murah, Aman & Bergaransi",
  description: "Jual beli akun premium digital termurah dan terpercaya. CapCut Pro, Canva Pro, Spotify Premium, Netflix, dan banyak lagi. Proses cepat, aman, dan bergaransi.",
  keywords: ["akun premium", "CapCut Pro", "Canva Pro", "Spotify Premium", "Netflix", "akun digital", "premium account", "jual beli akun"],
  authors: [{ name: "INIFIRLI STORE" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "INIFIRLI STORE - Akun Premium Digital",
    description: "Akun Premium Murah, Aman & Bergaransi",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
