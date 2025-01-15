import Image from "next/image";

export function CardBack() {
  return (
    <div className="absolute h-full w-[35%]">
      <Image
        src="/images/bg-main-desktop.png"
        alt="bg-pattern-top"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
