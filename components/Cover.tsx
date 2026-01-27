"use client";

import Image from "next/image";
// Pastikan import font ini tetap ada agar style "&" jalan
import { Libre_Baskerville } from "next/font/google";

// Inisialisasi font (jika belum ada di file ini)
const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

export default function Cover({
  isOpen,
  onOpen,
}: {
  isOpen: boolean;
  onOpen: () => void;
}) {
  return (
    // Section wrapper: relative diperlukan agar Image fill bekerja terhadap section ini
    <div
      className={`
        fixed inset-0 z-50 h-screen w-full 
        transition-transform duration-1000 ease-in-out 
        ${isOpen ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <section className="h-screen w-full flex flex-col items-center justify-end pb-32 gap-10 text-4xl relative overflow-hidden text-white ">
        {/* --- BACKGROUND IMAGE START --- */}
        {/* 1. Gambar utama */}
        <Image
          src="/images/cover.webp"
          alt="Cover Background"
          fill // Otomatis full width & height mengikuti section
          priority // Load prioritas karena ini LCP (Largest Contentful Paint)
          className="object-cover -z-20" // Taruh di paling belakang (minus z-index)
        />

        {/* 2. Overlay Gelap (Supaya teks terbaca jelas) */}
        {/* Ganti opacity (ex: /30, /50) sesuai tingkat kecerahan gambarmu */}
        <div className="absolute inset-0 bg-black/50 -z-10" />
        {/* --- BACKGROUND IMAGE END --- */}

        {/* Grouping Header: Judul Acara & Nama Mempelai */}
        <header className="flex flex-col items-center justify-center gap-5 text-center z-10">
          <div className="flex items-center gap-5 opacity-90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-flower-icon lucide-flower"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5" />
              <path d="M12 7.5V9" />
              <path d="M7.5 12H9" />
              <path d="M16.5 12H15" />
              <path d="M12 16.5V15" />
              <path d="m8 8 1.88 1.88" />
              <path d="M14.12 9.88 16 8" />
              <path d="m8 16 1.88-1.88" />
              <path d="M14.12 14.12 16 16" />
            </svg>
            <p className="tracking-widest uppercase">The Wedding Of</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-flower-icon lucide-flower"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5" />
              <path d="M12 7.5V9" />
              <path d="M7.5 12H9" />
              <path d="M16.5 12H15" />
              <path d="M12 16.5V15" />
              <path d="m8 8 1.88 1.88" />
              <path d="M14.12 9.88 16 8" />
              <path d="m8 16 1.88-1.88" />
              <path d="M14.12 14.12 16 16" />
            </svg>
          </div>

          <h1 className="text-[#d19b22] flex items-center gap-6 text-4xl md:text-6xl font-anunedw drop-shadow-md">
            {/* AMAR */}
            <span className="flex items-end">
              <span className="text-6xl md:text-7xl leading-[0.8]">A</span>MAR
            </span>

            {/* Simbol & */}
            <span
              className={`${baskerville.className} italic text-5xl text-[#d19b22] translate-y-6`}
            >
              &
            </span>

            {/* AMALIA */}
            <span className="flex items-end">
              <span className="text-6xl md:text-7xl leading-[0.8]">A</span>MALIA
            </span>
          </h1>
        </header>

        {/* Bagian Penerima Undangan & CTA */}
        <div className="flex flex-col items-center gap-8 w-full z-10">
          <div className="text-center space-y-2">
            <p className="text-xl">Dear,</p>
            <p className="font-semibold underline underline-offset-8 decoration-white/50">
              Bintang
            </p>
          </div>

          <button
            type="button"
            onClick={onOpen}
            aria-label="Buka undangan"
            className="font-normal text-xl mt-2 tracking-widest bg-white/20 hover:bg-white/20 transition-colors rounded-full py-3 px-12 backdrop-blur-md cursor-pointer border border-white/20 shadow-lg"
          >
            Open The Invitation
          </button>
        </div>
      </section>
    </div>
  );
}
