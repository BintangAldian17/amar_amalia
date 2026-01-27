"use client";

import Cover from "./Cover";
import { useState } from "react";
import Hero from "./Hero";
import Groom from "./Groom";
import Countdown from "./Countdown";
import Gallery from "./Gallery";
import Gift from "./Gift";
import Thanks from "./Thanks";

export default function Wrapper({ to }: { to: string | string[] | null }) {
  const [isCoverOpen, setIsCoverOpen] = useState(false);

  return (
    <main
      className={`relative w-full font-poppins ${!isCoverOpen ? "h-screen overflow-hidden" : "min-h-screen"
        }`}
    >
      <Cover to={to} isOpen={isCoverOpen} onOpen={() => setIsCoverOpen(true)} />
      {isCoverOpen && (
        <>
          <Hero />
          <Groom />
          <Countdown />
          <Gallery />
          <Gift />
          <Thanks />
        </>
      )}
    </main>
  );
}