"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

interface CopyButtonProps {
    textToCopy: string;
    label: string;
}

export default function CopyButton({ textToCopy, label }: CopyButtonProps) {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setIsCopied(true);

            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    return (
        <button
            onClick={handleCopy}
            type="button"
            className="font-light text-xl tracking-widest bg-white/20 hover:bg-white/20 transition-colors rounded-full py-3 px-10 backdrop-blur-md cursor-pointer border border-white/20 shadow-lg flex items-center gap-2 mt-5 min-w-[200px] justify-center"
        >
            {isCopied ? (
                <>
                    <Icon icon="lucide:check" width="24" />
                    <span>Copied!</span>
                </>
            ) : (
                <>
                    <span>{label}</span>
                </>
            )}
        </button>
    );
}