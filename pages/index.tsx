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
      <div className="absolute h-full w-[35%] left-0 top-0 -z-10">
        <Image
          src="/images/bg-main-desktop.png"
          alt="bg-pattern-top"
          width={10000}
          height={10000}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex w-full h-full justify-between items-center max-w-[1100px]">
        {/* Card*/}
        <div className="flex justify-between">
          {/* Card */}
          <div className="flex flex-col gap-10">
            <div className="flex w-full right-24 relative">
              <CardFront
                name={name}
                cardNumber={cardNumber}
                expDateMonth={expDateMonth}
                expDateYear={expDateYear}
              />
            </div>

            <CardBack cvc={cvc} />
          </div>

          {/* Form */}
          <div className="flex flex-col"></div>
        </div>

        {/* Form */}
        <div className="flex">
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
