import Image from "next/image";

export default function SubmittedForm() {
  return (
    <div className="flex flex-col w-full items-center gap-8">
      <Image
        src={"/images/icon-complete.svg"}
        alt="icon-complete"
        width={64}
        height={64}
      />
      <div className="flex flex-col text-center gap-2">
        <h3 className="text-[28px] tracking-widest">THANK YOU!</h3>
        <p className="text-[16px] text-darkGrayishViolet">
          We&apos;ve added your card details
        </p>
      </div>
      <button className="flex w-full p-4 justify-center rounded-lg bg-veryDarkViolet text-white">
        Continue
      </button>
    </div>
  );
}
