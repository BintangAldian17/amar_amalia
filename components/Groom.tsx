import Image from "next/image";
import { Icon } from "@iconify/react"

export default function Groom() {
  return (
    <section className="min-h-screen w-full flex flex-col items-start  pb-32 gap-10 relative overflow-hidden text-white ">
      <div className="h-72 bg-[#383737] w-full flex items-center justify-center text-center text-xl flex-col">
        &quot;Dan di antara tanda-tanda kekuasaan-Nya diciptakan-Nya untukmu pasangan hidup dari jenismu sendiri supaya
        <br />
        kamu dapat ketenangan hati dan dijadikannya kasih sayang di antara kamu. Sesungguhnya yang
        <br />
        demikian menjadi tanda-tanda kebesaran-Nya bagi Orang-orang yang berpikir.&quot;
        <span className="mt-4 text-2xl">( Q.S. Ar-Rum 21 )</span>
      </div>
      <Image
        src="/images/main-bg.webp"
        alt="Hero Background"
        fill
        priority
        className="object-cover object-center -z-20"
      />
      <div className="flex items-center justify-center flex-col w-full">
        <div className="flex items-center flex-col gap-16 justify-center mt-20">
          <div className="relative border-3 border-[#d19b22] rounded-xl overflow-hidden w-[60%] aspect-video">
            <Image
              fill
              src="/images/weading.webp"
              alt="weading"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center ">
            <p className="font-medium text-[32px]">
              Assalamu’alaikum Warahmatulllahi Wabarokatuh
            </p>
            <p className="font-light text-2xl mt-2">
              Dengan memohon Ridho & Rahmat Allah SWT,
              <br />
              kami bermaksud menyelenggarakan Syukuran & Resepsi kami:
            </p>
          </div>
          <div className="flex gap-40 w-1/2 items-center justify-center">
            <div className="flex flex-col items-center shrink-0">
              <div className="relative rounded-full overflow-hidden w-65 aspect-square border-3 border-[#d19b22]">
                <Image
                  fill
                  src="/images/pria.webp"
                  alt="weading"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col text-nowrap items-center gap-2 mt-4">
                <p className="text-[#d19b22] flex flex-col items-start text-4xl gap-6 font-playwrite-us-modern drop-shadow-md">
                  Amar Shabira Rochaedi
                </p>
                <p className="text-[20px] text-center mt-2">
                  Putra pertama dari Kel. <br /> Bapak Edi Rochaedi & Ibu Sri Wahyuni
                </p>
              </div>
              <a target="_blank" href="https://www.instagram.com/amaar.sr/" className="font-normal text-xl tracking-widest bg-white/20 hover:bg-white/20 transition-colors rounded-full py-3 px-12 backdrop-blur-md cursor-pointer border border-white/20 shadow-lg flex items-center  gap-2 mt-8">
                <Icon icon="mdi:instagram" width="24" height="24" />
                @amaliakholifa
              </a>
            </div>

            <span
              className={`text-[64px] text-[#d19b22] text-center shrink-0 font-playwrite-us-modern`}
            >
              &
            </span>
            <div className="flex flex-col items-center shrink-0">
              <div className="relative rounded-full overflow-hidden w-65 aspect-square border-3 border-[#d19b22]">
                <Image
                  fill
                  src="/images/wanita.webp"
                  alt="weading"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col text-nowrap items-center gap-2 mt-4">
                <p className="text-[#d19b22] flex flex-col items-start text-4xl gap-6 font-playwrite-us-modern drop-shadow-md">
                  Amalia Kholifatul Nissa
                </p>
                <p className="text-[20px] text-center mt-2">
                  Putri Kedua dari Kel. <br />
                  Bapak H. Turyono & Ibu Kistiyani
                </p>
              </div>
              <a target="_blank" href="https://www.instagram.com/amaliakholifa/" className="font-normal text-xl tracking-widest bg-white/20 hover:bg-white/20 transition-colors rounded-full py-3 px-12 backdrop-blur-md cursor-pointer border border-white/20 shadow-lg flex items-center  gap-2 mt-8">
                <Icon icon="mdi:instagram" width="24" height="24" />
                @amaliakholifa
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-8 text-[40px] items-center justify-center ">
            <p className="text-4xl text-[#D19B22] font-bold">NGUNDUH MANTU :</p>
            <div className="flex items-center justify-center gap-10 -translate-x-7 font-light">
              <p>Februari</p>
              <span className="flex flex-col border-r border-l px-8 py-4 items-center justify-center">
                <span className="text-[32px]">Sabtu</span>
                <span className="text-8xl text-[#d19b22]">07</span>
              </span>
              <p>2026</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="font-medium text-[32px]">Pengajian Kaum Ibu</span>
            <span className="font-light text-[32px] text-[#d19b22]">08.00 s/d 11.00</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="font-medium text-[32px]">Acara Resepsi</span>
            <span className="font-light text-[32px] text-[#d19b22]">11.00 s/d 17.00</span>
          </div>
          <div className="text-[32px] text-center">
            <span className="font-medium">Lokasi:</span>
            <p className="font-light">Jl. Gunung Putri Utara, Gg. Tempe RT 04/09 No. 52,<br />
              Kec. Gunung Putri, Kab. Bogor</p>
          </div>
          <a target="_blank" href="https://maps.app.goo.gl/F7F3SPKdXTTgsxuA9" className="font-light text-4xl tracking-widest bg-white/20 hover:bg-white/20 transition-colors rounded-full py-3 px-12 backdrop-blur-md cursor-pointer border border-white/20 shadow-lg flex items-center  gap-2 mt-8">
            Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
