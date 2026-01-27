import type { Metadata } from "next";
import { Playwrite_US_Modern, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", '500', '600', "700"],
  variable: "--font-poppins",
});

const playwriteUsModern = Playwrite_US_Modern({
  weight: ["400"],
  variable: "--font-playwrite-us-modern",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://amar-amalia.my.id'),
  title: "The Wedding of Amar & Amalia",

  openGraph: {
    title: "The Wedding of Amar & Amalia",
    description: "Sabtu 07 Februari 2026",
    url: 'https://amar-amalia.my.id',
    siteName: 'Amar & Amalia Wedding',
    locale: 'id_ID',
    type: 'website',
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