"use client";

import Cover from "./Cover";
import { useState } from "react";
import Hero from "./Hero";
import Groom from "./Groom";
import Countdown from "./Countdown";
import Gallery from "./Gallery";
import Gift from "./Gift";
import Thanks from "./Thanks";
import MusicPlayer from "./ui/MusicPlayer";

export default function Wrapper({ to }: { to: string | string[] | null }) {
  const [isCoverOpen, setIsCoverOpen] = useState(false);
  const [shouldPlayMusic, setShouldPlayMusic] = useState(false)

  const handleOpenInvitation = () => {
    setIsCoverOpen(true);
    setShouldPlayMusic(true);
  };

  return (
    <main
      className={`relative w-full font-poppins ${!isCoverOpen ? "h-screen overflow-hidden" : "min-h-screen"
        }`}
    >
      <Cover to={to} isOpen={isCoverOpen} onOpen={handleOpenInvitation} />
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
      {isCoverOpen && <MusicPlayer isPlaying={shouldPlayMusic} />}
    </main>
  );
}