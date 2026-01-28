import type { Metadata, Viewport } from "next";
import { Playwrite_US_Modern, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const playwriteUsModern = Playwrite_US_Modern({
  weight: ["400"],
  variable: "--font-playwrite-us-modern",
});

// 1. Konfigurasi Viewport (Warna Tema dipisah ke sini di Next.js terbaru)
export const viewport: Viewport = {
  themeColor: "#ffffff",
};

// 2. Metadata Lengkap
export const metadata: Metadata = {
  metadataBase: new URL("https://amar-amalia.my.id"),
  title: "The Wedding of Amar & Amalia",

  // Link Manifest
  manifest: "/manifest.json",

  // Konfigurasi Icons Lengkap
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/android-icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon-57x57.png", sizes: "57x57" },
      { url: "/apple-icon-60x60.png", sizes: "60x60" },
      { url: "/apple-icon-72x72.png", sizes: "72x72" },
      { url: "/apple-icon-76x76.png", sizes: "76x76" },
      { url: "/apple-icon-114x114.png", sizes: "114x114" },
      { url: "/apple-icon-120x120.png", sizes: "120x120" },
      { url: "/apple-icon-144x144.png", sizes: "144x144" },
      { url: "/apple-icon-152x152.png", sizes: "152x152" },
      { url: "/apple-icon-180x180.png", sizes: "180x180" },
    ],
  },

  // Konfigurasi Microsoft Tiles
  other: {
    "msapplication-TileColor": "#ffffff",
    "msapplication-TileImage": "/ms-icon-144x144.png",
  },

  openGraph: {
    title: "The Wedding of Amar & Amalia",
    description: "Sabtu 07 Februari 2026",
    url: "https://amar-amalia.my.id",
    siteName: "Amar & Amalia Wedding",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" translate="no">
      <body
        className={` ${poppins.variable} ${playwriteUsModern.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
