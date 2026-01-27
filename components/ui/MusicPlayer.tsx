"use client";

import { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";

interface MusicPlayerProps {
    isPlaying: boolean; // State dari parent (Wrapper)
}

export default function MusicPlayer({ isPlaying: initialPlayState }: MusicPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const playMusic = () => {
        if (audioRef.current) {
            audioRef.current.play()
                .then(() => {
                    setIsPlaying(true);
                })
                .catch((error) => {
                    console.log("Autoplay dicegah browser, perlu interaksi user:", error);
                    setIsPlaying(false);
                });
        }
    };

    useEffect(() => {
        if (initialPlayState) {
            playMusic();
        }
    }, [initialPlayState]);

    // 2. Fungsi Play/Pause manual
    const toggleMusic = () => {
        if (isPlaying) {
            audioRef.current?.pause();
        } else {
            audioRef.current?.play();
        }
        setIsPlaying(!isPlaying);
    };



    return (
        <div className="fixed bottom-6 right-6 z-50 ">
            {/* Element Audio Tersembunyi */}
            <audio ref={audioRef} src="/audio/music.mp3" loop />

            {/* Tombol Floating */}
            <button
                onClick={toggleMusic}
                className={` cursor-pointer
          w-12 h-12 rounded-full flex items-center justify-center 
          bg-[#D19B22]/80 backdrop-blur-md border border-white/20 shadow-lg text-white
          transition-all duration-300 ease-in-out
          ${isPlaying ? "animate-spin-slow" : ""}
        `}
                aria-label="Toggle Music"
            >
                {isPlaying ? (
                    <Icon icon="solar:music-note-2-bold" width="24" />
                ) : (
                    <Icon icon="solar:music-note-slider-bold-duotone" width="24" />
                )}
            </button>
        </div>
    );
}