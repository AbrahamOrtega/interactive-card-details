import Image from "next/image";

interface CardBackProps {
  cvc: string;
}

export default function CardBack({ cvc }: CardBackProps) {
  return (
    <div className="flex w-full relative">
      <Image
        src="/images/bg-card-back.png"
        alt="bg-pattern-top"
        width={10000}
        height={10000}
        className="w-full h-full object-cover"
      />
      <div className="absolute flex h-full w-full items-center justify-end p-14">
        <p className="text-white tracking-widest text-[14px]">{cvc || "000"}</p>
      </div>
    </div>
  );
}
