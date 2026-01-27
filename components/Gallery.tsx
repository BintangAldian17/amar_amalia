"use client";

import Image from "next/image";
import React from "react";

// Data Dummy: Hanya menentukan tipe (wide/narrow) tanpa URL gambar
const row1Items = [
    { id: 1, type: "narrow" },
    { id: 2, type: "wide" },
    { id: 3, type: "narrow" },
    { id: 4, type: "wide" },
    { id: 5, type: "narrow" },
    { id: 6, type: "wide" },
];

const row2Items = [
    { id: 7, type: "wide" },
    { id: 8, type: "narrow" },
    { id: 9, type: "wide" },
    { id: 10, type: "narrow" },
    { id: 11, type: "wide" },
    { id: 12, type: "narrow" },
];

export default function Gallery() {
    return (
        <section className="min-h-screen w-full flex flex-col items-center pb-32 gap-10 relative overflow-hidden text-white py-16">

            {/* Background Image (Tetap ada sebagai mood background) */}
            <Image
                src="/images/main-bg.webp"
                alt="Hero Background"
                fill
                priority
                className="object-cover object-center -z-20 rotate-180"
            />

            {/* Header Text */}
            <div className="w-full text-center px-4 z-10">
                <h2 className="uppercase text-[#D19B22] font-bold text-4xl mb-5 tracking-widest">
                    Gallery Foto
                </h2>
                <p className="font-light text-xl md:text-2xl">
                    There is nothing extraordinary about our story. But we are truly special to each other.
                    <br />
                    And for that, we are grateful—brought together by God at the perfect time.
                    <br />
                    Now, we are counting down to our special day.
                </p>
            </div>


            <div className="w-full px-4 z-10">
                <div className="relative border-4 border-[#d19b22]/30 rounded-xl overflow-hidden w-full md:w-[60%] mx-auto aspect-video shadow-2xl bg-black">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        // UPDATE: Tambahkan '?autoplay=1&mute=1' di akhir link
                        // 'mute=1' WAJIB agar autoplay jalan di Chrome/HP
                        src="https://www.youtube.com/embed/U3x4civmNx4?autoplay=1&mute=1&controls=0&loop=1&playlist=U3x4civmNx4"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            {/* --- INFINITE SCROLL GALLERY (PLACEHOLDER MODE) --- */}
            <div className="flex flex-col gap-6 w-full mt-10 marquee-container z-10">

                {/* ROW 1: Bergerak ke KIRI (Atas) */}
                <div className="flex overflow-hidden w-full relative mask-gradient">
                    <div className="flex gap-4 animate-scroll-left w-max pl-4">
                        {/* Render 2x untuk looping seamless */}
                        {[...row1Items, ...row1Items].map((item, idx) => (
                            <div
                                key={`r1-${idx}`}
                                className={`
                  relative h-[200px] md:h-[250px] shrink-0 rounded-lg 
                  bg-neutral-800 border border-white/10 flex items-center justify-center
                  hover:bg-neutral-700 transition-colors duration-300
                  ${item.type === "wide" ? "w-[300px] md:w-[400px]" : "w-[120px] md:w-[180px]"}
                `}
                            >
                                {/* Text Label di dalam kotak */}
                                <span className="text-white/20 font-mono text-sm">
                                    {item.type === "wide" ? "WIDE FRAME" : "PORTRAIT"}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ROW 2: Bergerak ke KANAN (Bawah) */}
                <div className="flex overflow-hidden w-full relative mask-gradient">
                    <div className="flex gap-4 animate-scroll-right w-max pl-4">
                        {/* Render 2x untuk looping seamless */}
                        {[...row2Items, ...row2Items].map((item, idx) => (
                            <div
                                key={`r2-${idx}`}
                                className={`
                  relative h-[200px] md:h-[250px] shrink-0 rounded-lg 
                  bg-neutral-800 border border-white/10 flex items-center justify-center
                  hover:bg-neutral-700 transition-colors duration-300
                  ${item.type === "wide" ? "w-[300px] md:w-[400px]" : "w-[120px] md:w-[180px]"}
                `}
                            >
                                <span className="text-white/20 font-mono text-sm">
                                    {item.type === "wide" ? "WIDE FRAME" : "PORTRAIT"}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}