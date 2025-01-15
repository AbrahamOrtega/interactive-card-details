import Image from "next/image";

export default function Home() {
  return (
    <div className="flex w-full h-screen relative justify-center items-center">
      <div className="absolute h-full w-[35%] left-0 top-0 -z-10">
        <Image
          src="/images/bg-main-desktop.png"
          alt="bg-pattern-top"
          width={10000}
          height={10000}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex w-full max-w-5xl justify-between">
        {/* Card */}
        <div></div>

        {/* Form */}
        <div className="flex flex-col"></div>
      </div>
    </div>
  );
}
