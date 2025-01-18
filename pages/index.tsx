import CardBack from "@/components/CardBack";
import CardForm from "@/components/CardForm";
import CardFront from "@/components/CardFront";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expDateMonth, setExpDateMonth] = useState("");
  const [expDateYear, setExpDateYear] = useState("");
  const [cvc, setCvc] = useState("");

  return (
    <div className="flex w-full h-screen relative justify-center items-center">
      <div className="absolute hidden lg:flex h-full w-[35%] left-0 top-0 -z-10">
        <Image
          src="/images/bg-main-desktop.png"
          alt="bg-desktop"
          width={10000}
          height={10000}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute flex lg:hidden w-full h-[300px] top-0 -z-10">
        <Image
          src="/images/bg-main-mobile.png"
          alt="bg-mobile"
          width={10000}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col lg:flex-row w-full max-w-[1300px] h-full lg:justify-between items-center px-6 lg:px-16 gap-y-10">
        {/* Card*/}
        <div className="flex w-full max-w-[450px] lg:max-w-[550px] flex-col-reverse lg:flex-col gap-4 mt-10">
          <div className="flex w-full max-w-[350px] lg:max-w-[400px] relative overflow-hidden rounded-lg z-10 -mt-20">
            <CardFront
              name={name}
              cardNumber={cardNumber}
              expDateMonth={expDateMonth}
              expDateYear={expDateYear}
            />
          </div>
          <div className="flex w-full max-w-[350px] lg:max-w-[400px] self-end">
            <CardBack cvc={cvc} />
          </div>
        </div>

        {/* Form */}
        <div className="flex w-full max-w-[400px] relative mb-10">
          <CardForm
            name={name}
            setName={setName}
            cardNumber={cardNumber}
            setCardNumber={setCardNumber}
            expDateMonth={expDateMonth}
            setExpDateMonth={setExpDateMonth}
            expDateYear={expDateYear}
            setExpDateYear={setExpDateYear}
            cvc={cvc}
            setCvc={setCvc}
          />
        </div>
      </div>
    </div>
  );
}
