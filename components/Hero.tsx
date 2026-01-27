"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-screen w-full flex flex-col items-start  pb-32 gap-10 text-4xl relative overflow-hidden text-white">
      {/* Background Image */}
      <Image
        src="/images/hero1.webp"
        alt="Hero Background"
        fill
        priority
        className="object-cover -z-20"
      />
      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-black/30 -z-10" />

      {/* CONTENT: Menggunakan style yang sama persis dengan Cover */}
      <div className="flex flex-col items-start justify-end z-10  w-full h-full  pl-20">
        {/* Top Text: Join Us + The Wedding Of */}
        <div className="flex flex-col gap-2 mb-3 opacity-90 text-4xl font-light tracking-widest">
          <p>
            Join Us to Celebrate <br /> The Weading Of
          </p>
        </div>

        {/* NAMA MEMPELAI (Copy-paste dari Cover agar size konsisten) */}
        <h1 className="text-[#d19b22] flex flex-col items-start gap-6 text-4xl md:text-[96px] font-playwrite-us-modern drop-shadow-md">
          {/* AMAR */}
          <span className="flex items-end">
            Amar
          </span>

          {/* Simbol & */}
          <span
            className={`italic text-5xl text-[#d19b22] translate-y-3   w-full text-center -translate-x-8`}
          >
            &
          </span>

          {/* AMALIA */}
          <span className="flex items-end">
            Amalia
          </span>
        </h1>

        {/* Tanggal Acara */}
        <p className="text-lg md:text-4xl font-light mt-5">07 . 02 . 26</p>
      </div>
    </section>
  );
}
