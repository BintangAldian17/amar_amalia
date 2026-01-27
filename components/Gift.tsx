import { Icon } from "@iconify/react";
import CopyButton from "./ui/CopyButton";

export default function Gift() {
    return (
        <section className="min-h-screen w-full flex flex-col items-center pb-32 gap-10 relative overflow-hidden text-white py-16 bg-[#383737]">
            <div className="w-full text-center px-4 z-10">

                <h2 className="uppercase text-[#D19B22] font-bold text-4xl mb-5 tracking-widest">
                    Wedding Gift
                </h2>
                <p className="font-light text-xl md:text-2xl">
                    Your prayers and blessings are a precious gift for us. If giving is a sign of affection,
                    <br />
                    you may send your gift cashlessly.

                </p>
            </div>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3 items-center justify-center text-center">
                    <Icon icon="famicons:home-sharp" width="74" height="70" />
                    <h3 className="font-medium text-2xl">Address to send a Gift</h3>
                    <p className="text-xl font-light">Jl. Gunung Putri Utara, Gg. Tempe RT 04/09 No. 52,
                        <br />
                        Kec. Gunung Putri, Kab. Bogor</p>
                    <CopyButton textToCopy="Jl. Gunung Putri Utara, Gg. Tempe RT 04/09 No. 52, Kec. Gunung Putri, Kab. Bogor" label="Copy Address"></CopyButton>
                </div>
                <div className="flex flex-col gap-3 items-center justify-center text-center">
                    <Icon icon="tabler:gift-filled" width="65" height="70" />
                    <h3 className="font-medium text-2xl">E-Angpao</h3>
                    <p className="text-xl font-light">
                        BCA - 5721253091
                        <br />
                        Amar Shabira Rochaedi
                    </p>
                    <CopyButton textToCopy="5721253091" label="Copy Account"></CopyButton>
                </div>
                <div className="flex flex-col gap-3 items-center justify-center text-center">
                    <p className="text-xl font-light">
                        BCA - 5725821864
                        <br />
                        Amalia Kholifatul Nissa
                    </p>
                    <CopyButton textToCopy="5725821864" label="Copy Account"></CopyButton>
                </div>
            </div>
        </section>
    )
}
