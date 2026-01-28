import Image from "next/image";
import React from "react";

export default function Thanks() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center gap-10 relative overflow-hidden text-white justify-center">
      <Image
        src="/images/thanks.jpg"
        alt="Hero Background"
        fill
        priority
        className=" object-cover object-[center_40%] -z-20"
      />
      <div className="absolute inset-0 bg-black/70 -z-10" />
      <div className="w-full h-full flex items-center justify-center flex-col text-center lg:max-w-full md:max-w-[50ch] max-w-[35ch] px-10">
        <p className="lg:text-2xl md:text-xl ">
          It would be a great happiness for us if you could attend this joyous
          day. Thank you
          <br />
          for all the greetings, prayers, and attention you have given.
          <br />
          See you at our Wedding Day!
        </p>
        <h2 className="text-[#d19b22] flex items-center lg:gap-6 gap-3 text-4xl md:text-[64px] font-playwrite-us-modern drop-shadow-md lg:mt-10 md:mt-8 mt-6">
          Amar{" "}
          <span className="lg:text-4xl md:text-3xl text-2xl lg:translate-y-3 md:translate-y-2 translate-y-1">
            &
          </span>{" "}
          Amalia
        </h2>
        <span className="font-extralight lg:text-4xl md:text-3xl text-2xl mt-5">
          07 . 02 . 26
        </span>
      </div>
    </section>
  );
}
