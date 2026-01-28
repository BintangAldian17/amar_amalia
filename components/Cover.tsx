"use client";

import Image from "next/image";

export default function Cover({
  to,
  isOpen,
  onOpen,
}: {
  to: string | string[] | null;
  isOpen: boolean;
  onOpen: () => void;
}) {
  return (
    <div
      className={`
        fixed inset-0 z-50 h-screen w-full 
        transition-transform duration-1000 ease-in-out 
        ${isOpen ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <section className="h-screen w-full flex flex-col items-center justify-end pb-32 lg:gap-10 md:gap-8 gap-6 lg:text-4xl md:text-2xl text-xl relative overflow-hidden text-white ">
        {/* --- BACKGROUND IMAGE START --- */}
        <Image
          src="/images/cover.webp"
          alt="Cover Background"
          fill
          priority
          className="object-cover lg:object-center hidden md:block -z-20"
        />
        <Image
          src="/images/cover-mobile.webp"
          alt="Cover Background"
          fill
          priority
          className="object-cover lg:object-center md:hidden -z-20"
        />

        <div className="absolute inset-0 bg-black/50 -z-10" />
        {/* --- BACKGROUND IMAGE END --- */}

        {/* Grouping Header: Judul Acara & Nama Mempelai */}
        <header className="flex flex-col items-center justify-center md:gap-5 gap-2 text-center z-10">
          <div className="flex items-center gap-5 opacity-90">
            <p className="tracking-widest font-light">The Wedding Of</p>
          </div>

          <h1 className="text-[#d19b22] flex items-center gap-6 text-4xl md:text-[64px] font-playwrite-us-modern drop-shadow-md">
            Amar <span className="md:text-4xl text-2xl translate-y-3">&</span>{" "}
            Amalia
          </h1>
        </header>

        {/* Bagian Penerima Undangan & CTA */}
        <div className="flex flex-col items-center lg:gap-8 md:gap-6 gap-2 w-full z-10">
          {/* 3. Render Kondisional: Hanya muncul jika guestName ada */}
          {to && (
            <div className="text-center md:space-y-2">
              <p className="text-xl md:text-2xl">Dear,</p>
              <p className="font-semibold underline underline-offset-8 decoration-white/50">
                {to}
              </p>
            </div>
          )}

          <button
            type="button"
            onClick={onOpen}
            aria-label="Buka undangan"
            className="font-normal md:text-2xl mt-2 tracking-widest bg-white/20 hover:bg-white/20 transition-colors rounded-full md:py-3 py-2 lg:px-12 md:px-8 px-6 backdrop-blur-md cursor-pointer border border-white/20 shadow-lg"
          >
            Open The Invitation
          </button>
        </div>
      </section>
    </div>
  );
}
