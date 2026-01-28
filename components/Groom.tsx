import Image from "next/image";
import { Icon } from "@iconify/react";

export default function Groom() {
  return (
    <section className="min-h-screen w-full flex flex-col items-start lg:pb-32 md:pb-20 pb-10 md:gap-10 gap-5 relative overflow-hidden text-white ">
      {/* Header Ayat */}
      <div className="h-72 bg-[#383737] w-full flex items-center justify-center text-center font-light lg:text-xl md:text-base text-sm flex-col md:px-12 px-9 relative z-10">
        &quot;Dan di antara tanda-tanda kekuasaan-Nya diciptakan-Nya untukmu
        pasangan hidup dari jenismu sendiri supaya
        <br className="md:block hidden" />
        kamu dapat ketenangan hati dan dijadikannya kasih sayang di antara kamu.
        Sesungguhnya yang
        <br className="md:block hidden" />
        demikian menjadi tanda-tanda kebesaran-Nya bagi Orang-orang yang
        berpikir.&quot;
        <span className="mt-4 lg:text-2xl md:text-xl text-base">
          ( Q.S. Ar-Rum 21 )
        </span>
      </div>

      {/* Background Desktop (Hanya muncul di Layar Besar) */}
      <Image
        src="/images/main-bg.webp"
        alt="Hero Background"
        fill
        priority
        className="object-cover object-center lg:block hidden -z-20"
      />

      {/* Background Mobile (Texture Abu-abu) */}
      <Image
        src="/images/bg-groom.png"
        alt="Hero Background"
        fill
        priority
        className="object-cover object-center w-auto lg:hidden -z-30"
      />

      {/* --- ORNAMEN BUNGA KIRI --- */}
      {/* Wrapper menentukan lebar fix (120px di HP) */}
      <div className="absolute -z-10 left-0 -bottom-40 w-[241px] lg:hidden h-full">
        <Image
          src="/images/ornament-flower-left.png"
          alt="Ornament Left"
          priority
          width={241}
          height={2200}
          className="w-full h-full absolute object-contain"
        />
      </div>
      <div className="absolute -z-10 right-0 -bottom-40 w-[241px] lg:hidden h-full">
        <Image
          src="/images/ornament-flower-left.png"
          alt="Ornament Right"
          priority
          width={241}
          height={2200}
          className="w-full h-full absolute object-contain rotate-180"
        />
      </div>

      {/* Container Konten & Ornamen */}
      <div className="flex items-center justify-center flex-col w-full lg:px-0 md:px-10 px-6 relative">
        {/* Konten Utama */}
        <div className="flex items-center flex-col lg:gap-16 md:gap-12 gap-8 justify-center lg:mt-20 md:mt-16 mt-8 w-full relative z-10">
          {/* Foto Utama */}
          <div className="relative border-3 border-[#d19b22] rounded-xl overflow-hidden lg:w-[50%] md:w-[60%] w-full md:aspect-video md:h-auto h-[250px]">
            <Image
              fill
              src="/images/weading.webp"
              alt="weading"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center ">
            <p className="font-medium lg:text-[32px] md:text-[24px]">
              Assalamu’alaikum Warahmatullahi Wabarokatuh
            </p>
            <p className="font-light lg:text-2xl md:text-xl text-sm mt-2">
              Dengan memohon Ridho & Rahmat Allah SWT,
              <br />
              kami bermaksud menyelenggarakan Syukuran & Resepsi kami:
            </p>
          </div>

          {/* Profil Mempelai */}
          <div className="flex md:flex-row flex-col lg:gap-40 md:gap-20 gap-10 w-1/2 items-center justify-center">
            {/* Pria */}
            <div className="flex flex-col items-center shrink-0">
              <div className="relative rounded-full overflow-hidden md:w-65 w-52 aspect-square border-3 border-[#d19b22]">
                <Image
                  fill
                  src="/images/pria.webp"
                  alt="weading"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col text-nowrap items-center gap-2 mt-4">
                <p className="text-[#d19b22] flex flex-col items-start lg:text-4xl md:text-2xl text-xl gap-6 font-playwrite-us-modern drop-shadow-md">
                  Amar Shabira Rochaedi
                </p>
                <p className="text-center mt-2 lg:text-[20px] md:text-[16px] text-sm">
                  Putra pertama dari Kel. <br /> Bapak Edi Rochaedi & Ibu Sri
                  Wahyuni
                </p>
              </div>
              <a
                target="_blank"
                href="https://www.instagram.com/amaar.sr/"
                className="font-normal lg:text-xl md:text-base text-sm tracking-widest bg-white/20 hover:bg-white/20 transition-colors rounded-full md:py-3 py-2 lg:px-12 md:px-8 px-6 backdrop-blur-md cursor-pointer border border-white/20 shadow-lg flex items-center  gap-2 mt-8"
              >
                <Icon icon="mdi:instagram" width="24" height="24" />
                @amaar.sr
              </a>
            </div>

            <span
              className={`lg:text-[64px] md:text-[48px] text-[32px] text-[#d19b22] text-center shrink-0 font-playwrite-us-modern`}
            >
              &
            </span>

            {/* Wanita */}
            <div className="flex flex-col items-center shrink-0">
              <div className="relative rounded-full overflow-hidden md:w-65 w-52 aspect-square border-3 border-[#d19b22]">
                <Image
                  fill
                  src="/images/wanita.webp"
                  alt="weading"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col text-nowrap items-center gap-2 mt-4">
                <p className="text-[#d19b22] flex flex-col items-start lg:text-4xl md:text-2xl text-xl gap-6 font-playwrite-us-modern drop-shadow-md">
                  Amalia Kholifatul Nissa
                </p>
                <p className="text-center mt-2 lg:text-[20px] md:text-[16px] text-sm">
                  Putri Kedua dari Kel. <br />
                  Bapak H. Turyono & Ibu Kistiyani
                </p>
              </div>
              <a
                target="_blank"
                href="https://www.instagram.com/amaliakholifa/"
                className="font-normal lg:text-xl md:text-base text-sm tracking-widest bg-white/20 hover:bg-white/20 transition-colors rounded-full md:py-3 py-2 lg:px-12 md:px-8 px-6 backdrop-blur-md cursor-pointer border border-white/20 shadow-lg flex items-center  gap-2 mt-8"
              >
                <Icon icon="mdi:instagram" width="24" height="24" />
                @amaliakholifa
              </a>
            </div>
          </div>

          {/* Info Akad */}
          <div className="border-3 border-[#d19b22] lg:px-12 lg:py-12 md:px-8 md:py-8 px-6 py-6 rounded-2xl text-center w-full sm:w-fit">
            <p className="font-bold lg:text-4xl md:text-3xl text-2xl text-[#D19B22]">
              AKAD NIKAH
            </p>
            <p className="lg:text-2xl md:text-lg text-base font-medium">
              Telah dilaksanakan 31 Januari 2026
            </p>
          </div>

          {/* Info Ngunduh Mantu */}
          <div className="flex flex-col gap-8 lg:text-[40px] md:text-[32px] text-2xl items-center justify-center ">
            <p className="lg:text-4xl md:text-3xl text-2xl text-[#D19B22] font-bold">
              NGUNDUH MANTU :
            </p>
            <div className="flex items-center justify-center lg:gap-10 md:gap-8 gap-5 lg:-translate-x-7 md:-translate-x-5 -translate-x-3 font-light">
              <p>Februari</p>
              <span className="flex flex-col border-r border-l px-8 py-4 items-center justify-center">
                <span className="lg:text-[32px] md:text-[24px] text-base">
                  Sabtu
                </span>
                <span className="lg:text-8xl md:text-6xl text-4xl text-[#d19b22]">
                  07
                </span>
              </span>
              <p>2026</p>
            </div>
          </div>

          {/* Info Jam */}
          <div className="flex flex-col items-center justify-center">
            <span className="font-medium lg:text-[32px] md:text-[24px] text-2xl">
              Pengajian Kaum Ibu
            </span>
            <span className="font-light lg:text-[32px] md:text-[24px] text-xl text-[#d19b22]">
              08.00 s/d 11.00
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="font-medium lg:text-[32px] md:text-[24px] text-2xl">
              Acara Resepsi
            </span>
            <span className="font-light lg:text-[32px] md:text-[24px] text-xl text-[#d19b22]">
              11.00 s/d 17.00
            </span>
          </div>

          {/* Lokasi */}
          <div className="text-center">
            <span className="font-medium lg:text-[32px] md:text-[24px] text-xl">
              Lokasi:
            </span>
            <p className="font-light lg lg:text-[32px] md:text-[24px] text-[15px]">
              Jl. Gunung Putri Utara, Gg. Tempe RT 04/09 No. 52,
              <br />
              Kec. Gunung Putri, Kab. Bogor
            </p>
          </div>

          <a
            target="_blank"
            href="https://maps.app.goo.gl/F7F3SPKdXTTgsxuA9"
            className="font-light lg:text-4xl md:text-xl text-base tracking-widest bg-white/20 hover:bg-white/20 transition-colors rounded-full py-3 px-12 backdrop-blur-md cursor-pointer border border-white/20 shadow-lg flex items-center gap-2 lg:mt-8 md:mt-6"
          >
            Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
