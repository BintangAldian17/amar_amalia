"use client";

import { useState, useEffect } from "react";
import { TimeBox } from "./ui/TimeBox";



export default function Countdown() {
    // Set target tanggal: 7 Februari 2026, jam 08:00 pagi (sesuaikan jam akad)
    const targetDate = new Date("2026-02-07T11:00:00").getTime();

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        // Update setiap 1 detik
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(interval);
                // Bisa set state ke 0 semua jika waktu sudah lewat
            } else {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000),
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div className="flex flex-col h-75 items-center justify-center bg-[#383737] w-full">
            <h2 className="font-bold text-5xl text-[#D19B22] mb-16">Count The Date</h2>
            <div className="flex  justify-between w-full max-w-5xl mx-auto">
                <TimeBox value={timeLeft.days} label="Days" />
                <TimeBox value={timeLeft.hours} label="Hours" />
                <TimeBox value={timeLeft.minutes} label="Minutes" />
                <TimeBox value={timeLeft.seconds} label="Seconds" />
            </div>
        </div>
    );
}