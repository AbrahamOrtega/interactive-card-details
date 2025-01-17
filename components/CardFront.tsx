import Image from "next/image";

interface CardFrontProps {
  name: string;
  cardNumber: string;
  expDateMonth: string;
  expDateYear: string;
}

export default function CardFront({
  name,
  cardNumber,
  expDateMonth,
  expDateYear,
}: CardFrontProps) {
  return (
    <div className="flex w-full relative">
      <Image
        src="/images/bg-card-front.png"
        alt="bg-pattern-top"
        width={10000}
        height={10000}
        className="w-full h-full object-cover"
      />
      <div className="flex flex-col absolute w-full h-full justify-between p-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-full" />
          <div className="w-6 h-6 border rounded-full" />
        </div>
        <div className="flex flex-col w-full gap-6">
          <h1 className="text-white text-[24px] tracking-widest">
            {cardNumber}
          </h1>
          <div className="flex w-full justify-between text-lightGrayishViolet tracking-wider text-[14px]">
            <p className="uppercase">{name}</p>
            <p>{`${expDateMonth}/${expDateYear}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
