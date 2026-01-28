"use client";

import Image from "next/image";

const row1Items = [
  { id: 1, type: "narrow", images: "/images/gallery/File109.webp" },
  { id: 2, type: "wide", images: "/images/gallery/File151.webp" },
  { id: 3, type: "narrow", images: "/images/gallery/File071.webp" },
  { id: 4, type: "wide", images: "/images/gallery/File152.webp" },
  { id: 5, type: "narrow", images: "/images/gallery/File171.webp" },
  { id: 6, type: "wide", images: "/images/gallery/File053.webp" },
];

const row2Items = [
  { id: 1, type: "narrow", images: "/images/gallery/Foto-04.webp" },
  { id: 2, type: "wide", images: "/images/gallery/Foto-01.webp" },
  { id: 3, type: "narrow", images: "/images/gallery/Foto-05.webp" },
  { id: 4, type: "wide", images: "/images/gallery/Foto-02.webp" },
  { id: 5, type: "narrow", images: "/images/gallery/Foto-06.webp" },
  { id: 6, type: "wide", images: "/images/gallery/Foto-03.webp" },
];

export default function Gallery() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center lg:pb-32 md:pb-20 pb-10 gap-10 relative overflow-hidden text-white lg:pt-16 md:pt-12 pt-8 ">
      {/* Background Desktop */}
      <Image
        src="/images/main-bg.webp"
        alt="Hero Background"
        fill
        priority
        className="object-cover object-center lg:block hidden -z-20"
      />

      {/* --- ORNAMEN BUNGA (Disamakan dengan Groom) --- */}

      {/* KIRI */}
      <div className="absolute -z-10 left-0 top-0 w-[241px]  lg:hidden">
        <Image
          src="/images/ornament-flower-left.png"
          alt="Ornament Left"
          priority
          width={241}
          height={800}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* KANAN */}
      <div className="absolute -z-10 right-0 top-0 w-[241px] lg:hidden">
        <Image
          src="/images/ornament-flower-right.png"
          alt="Ornament Right"
          priority
          width={241}
          height={800}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* --- KONTEN GALLERY --- */}
      <div className="w-full text-center z-10 lg:px-0 md:px-10 px-6 mt-10">
        <h2 className="font-bold lg:text-5xl md:text-3xl text-3xl text-[#D19B22] lg:mb-16 md:mb-12 mb-8 ">
          Gallery Foto
        </h2>
        <p className="font-light lg:text-2xl md:text-xl">
          There is nothing extraordinary about our story. But we are truly
          special to each other.
          <br />
          And for that, we are grateful—brought together by God at the perfect
          time.
          <br />
          Now, we are counting down to our special day.
        </p>
      </div>

      <div className="w-full px-4 z-10 lg:px-0 md:px-10 px-6">
        <div className="relative border-4 border-[#d19b22]/30 rounded-xl overflow-hidden w-full md:w-[60%] mx-auto aspect-video shadow-2xl bg-black group">
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            <iframe
              className="absolute top-1/2 left-1/2 w-[140%] h-[140%] -translate-x-1/2 -translate-y-1/2"
              src="https://www.youtube.com/embed/U3x4civmNx4?autoplay=1&mute=1&controls=0&loop=1&playlist=U3x4civmNx4&showinfo=0&modestbranding=1&iv_load_policy=3&rel=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <a
            href="https://www.instagram.com/reel/DS91rcgjwqk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-20 w-full h-full cursor-pointer flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/20"
          >
            <span className="text-white font-semibold tracking-widest bg-black/50 px-4 py-2 rounded-full border border-white/30 backdrop-blur-sm">
              Watch Full Video
            </span>
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-6 w-full mt-10 marquee-container z-10">
        {/* ROW 1: Bergerak ke KIRI (Atas) */}
        <div className="flex overflow-hidden w-full relative mask-gradient">
          <div className="flex gap-4 animate-scroll-left w-max pl-4">
            {/* Render 2x untuk looping seamless */}
            {[...row1Items, ...row1Items].map((item, idx) => (
              <div
                key={`r1-${idx}`}
                className={`
                 shrink-0 rounded-lg lg:h-[320px] md:h-[250px] h-[150px]
                  bg-neutral-800 border border-white/10 flex items-center justify-center
                  hover:bg-neutral-700 transition-colors duration-300 overflow-hidden relative
                  ${item.type === "wide" ? "w-[300px] md:w-[439px]" : "w-[120px] md:w-[221px]"}
                `}
              >
                {/* Text Label di dalam kotak */}
                <Image
                  src={item.images}
                  fill
                  alt={`Gallery item ${item.id}`}
                  className="w-full h-full object-cover absolute object-[center_40%]"
                />
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
                  relative lg:h-[320px] md:h-[250px] h-[150px] shrink-0 rounded-lg overflow-hidden
                  bg-neutral-800 border border-white/10 flex items-center justify-center
                  hover:bg-neutral-700 transition-colors duration-300
               ${item.type === "wide" ? "w-[300px] md:w-[439px]" : "w-[120px] md:w-[221px]"}
                `}
              >
                <Image
                  src={item.images}
                  fill
                  alt={`Gallery item ${item.id}`}
                  className="w-full h-full object-cover absolute object-[center_40%]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
