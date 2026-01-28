import { Icon } from "@iconify/react";
import CopyButton from "./ui/CopyButton";

export default function Gift() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center  lg:pb-32 md:pb-20 pb-10 lg:gap-10 md:gap-8 gap-6 relative overflow-hidden text-white py-16 bg-[#383737] lg:px-0 md:px-10 px-6">
      <div className="w-full text-center px-4 z-10">
        <h2 className="uppercase text-[#D19B22] font-bold lg:text-4xl md:text-3xl text-2xl mb-5 tracking-widest">
          Wedding Gift
        </h2>
        <p className="font-light  lg:text-2xl md:text-xl">
          Your prayers and blessings are a precious gift for us. If giving is a
          sign of affection,
          <br />
          you may send your gift cashlessly.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col lg:gap-3 gap-2 items-center justify-center text-center">
          <Icon
            icon="famicons:home-sharp"
            className="lg:size-24 md:size-20 size-16"
          />
          <h3 className="font-medium lg:text-2xl md:text-xl text-lg">
            Address to send a Gift
          </h3>
          <p className="lg:text-xl md:text-lg text-base font-light">
            Jl. Gunung Putri Utara,
            <br className="md:hidden" />
            Gg. Tempe RT 04/09 No. 52,
            <br />
            Kec. Gunung Putri, Kab. Bogor
          </p>
          <CopyButton
            textToCopy="Jl. Gunung Putri Utara, Gg. Tempe RT 04/09 No. 52, Kec. Gunung Putri, Kab. Bogor"
            label="Copy Address"
          ></CopyButton>
        </div>
        <div className="flex flex-col lg:gap-3 gap-2 items-center justify-center text-center">
          <Icon
            icon="tabler:gift-filled"
            className="lg:size-24 md:size-20 size-16"
          />
          <h3 className="font-medium lg:text-2xl md:text-xl text-lg">
            E-Angpao
          </h3>
          <p className="lg:text-xl md:text-lg text-base font-light">
            BCA - 5721253091
            <br />
            Amar Shabira Rochaedi
          </p>
          <CopyButton textToCopy="5721253091" label="Copy Account"></CopyButton>
        </div>
        <div className="flex flex-col lg:gap-3 gap-2 items-center justify-center text-center">
          <p className="lg:text-xl md:text-lg text-base font-light">
            BCA - 5725821864
            <br />
            Amalia Kholifatul Nissa
          </p>
          <CopyButton textToCopy="5725821864" label="Copy Account"></CopyButton>
        </div>
      </div>
    </section>
  );
}
