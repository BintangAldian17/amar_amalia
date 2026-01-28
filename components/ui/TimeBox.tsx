export const TimeBox = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center mx-2 md:mx-4 font-normal">
    <div className="lg:text-5xl md:text-3xl text-2xl mb-1 w-12 md:w-16 text-center tabular-nums leading-[0.4]">
      {/* tabular-nums biar angka tidak goyang-goyang lebarnya */}
      {value < 10 ? `0${value}` : value}
    </div>
    <span className="lg:text-[32px] md:text-[24px] text-sm">{label}</span>
  </div>
);
