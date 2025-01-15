import Image from "next/image";

export function CardFront() {
  return (
    <div className="flex w-full">
      <Image
        src="/images/bg-card-front.png"
        alt="bg-pattern-top"
        width={10000}
        height={10000}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
