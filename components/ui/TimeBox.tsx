export const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center mx-2 md:mx-4 font-normal">
        <div className="text-5xl mb-1 w-12 md:w-16 text-center tabular-nums leading-[0.4]">
            {/* tabular-nums biar angka tidak goyang-goyang lebarnya */}
            {value < 10 ? `0${value}` : value}
        </div>
        <span className="text-[32px]">
            {label}
        </span>
    </div>
);