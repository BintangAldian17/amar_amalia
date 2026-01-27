"use client";

import Cover from "./Cover";
import { useState } from "react";
import Hero from "./Hero";
import Groom from "./Groom";
import Countdown from "./Countdown";

export default function Wrapper() {
  const [isCoverOpen, setIsCoverOpen] = useState(false);


  return (
    <main
      className={`relative w-full font-poppins ${!isCoverOpen ? "h-screen overflow-hidden" : "min-h-screen"
        }`}
    >
      <Cover isOpen={isCoverOpen} onOpen={() => setIsCoverOpen(true)} />
      {isCoverOpen && (
        <>
          <Hero />
          <Groom />
          <Countdown />
        </>
      )}
    </main>
  );
}