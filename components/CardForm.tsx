import { useState } from "react";
interface CardFormProps {
  name: string;
  setName: (name: string) => void;
  cardNumber: string;
  setCardNumber: (cardNumber: string) => void;
  expDateMonth: string;
  setExpDateMonth: (expDateMonth: string) => void;
  expDateYear: string;
  setExpDateYear: (expDateYear: string) => void;
  cvc: string;
  setCvc: (cvc: string) => void;
}

export default function CardForm({
  name,
  setName,
  cardNumber,
  setCardNumber,
  expDateMonth,
  setExpDateMonth,
  expDateYear,
  setExpDateYear,
  cvc,
  setCvc,
}: CardFormProps) {
  const [invalidName, setInvalidName] = useState({
    status: false,
    message: "",
  });
  const [invalidCardNumber, setInvalidCardNumber] = useState({
    status: false,
    message: "",
  });
  const [invalidExpDateMonth, setInvalidExpDateMonth] = useState({
    status: false,
    message: "",
  });
  const [invalidExpDateYear, setInvalidExpDateYear] = useState({
    status: false,
    message: "",
  });
  const [invalidCvc, setInvalidCvc] = useState({ status: false, message: "" });

  const cardNumberNormalize = (value: string) => {
    const onlyNumbers = value.replace(/\D/g, "");
    const matched = onlyNumbers.replace(/\s/g, "").match(/.{1,4}/g);
    return matched ? matched.join(" ").substr(0, 19) : "";
  };

  const expDateMonthNormalize = (value: string) => {
    const onlyNumbers = value.replace(/\D/g, "");
    // If the value is greater than 12, return 12
    if (parseInt(onlyNumbers) > 12) return "12";
    // If the value lower than 1, return 1
    if (parseInt(onlyNumbers) < 1) return "1";
    return onlyNumbers.substr(0, 2);
  };

  const expDateYearNormalize = (value: string) => {
    const onlyNumbers = value.replace(/\D/g, "");
    return onlyNumbers.substr(0, 2);
  };

  const cvcNormalize = (value: string) => {
    const onlyNumbers = value.replace(/\D/g, "");
    return onlyNumbers.substr(0, 3);
  };

  const fieldBlankValidate = (
    value: string,
    setInvalidValue: (invalidValue: {
      status: boolean;
      message: string;
    }) => void
  ) => {
    if (value === "") {
      return setInvalidValue({
        status: true,
        message: "Can't be blank",
      });
    } else setInvalidValue({ status: false, message: "" });
  };

  const cardNumberValidate = () => {
    if (cardNumber === "") {
      setInvalidCardNumber({ status: true, message: "Can't be blank" });
    } else if (cardNumber.length < 19)
      setInvalidCardNumber({ status: true, message: "Wrong Format" });
    else setInvalidCardNumber({ status: false, message: "" });
  };

  const cvcValidate = () => {
    if (cvc.length === 0)
      setInvalidCvc({
        status: true,
        message: "Cna't be blank",
      });
    else if (cvc.length < 3)
      setInvalidCvc({ status: true, message: "Wrong Format" });
    else setInvalidCvc({ status: false, message: "" });
  };

  const handleSubmit = () => {
    fieldBlankValidate(name, setInvalidName);
    cardNumberValidate();
    fieldBlankValidate(expDateMonth, setInvalidExpDateMonth);
    fieldBlankValidate(expDateYear, setInvalidExpDateYear);
    cvcValidate();
    if (
      invalidName.status ||
      invalidCardNumber.status ||
      invalidExpDateMonth.status ||
      invalidExpDateYear.status ||
      invalidCvc.status
    )
      return;
    console.log({
      name,
      cardNumber,
      expDateMonth,
      expDateYear,
      cvc,
    });
  };

  return (
    <div className="flex flex-col w-[400px] gap-6">
      <div className="flex flex-col w-full">
        <label htmlFor="name" className="text-[14px] tracking-widest mb-2">
          CARDHOLDER NAME
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => {
            fieldBlankValidate(name, setInvalidName);
          }}
          placeholder="e.g. Jane Appleseed"
          className={`p-2 w-full rounded-lg border border-lightGrayishViolet ${
            invalidName.status && "border-red"
          }`}
        />
        {invalidName.status && (
          <p className="text-red text-[12px]">{invalidName.message}</p>
        )}
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="cn" className="text-[14px] tracking-widest mb-2">
          CARD NUMBER
        </label>
        <input
          type="text"
          id="cn"
          onBlur={() => {
            cardNumberValidate();
          }}
          value={cardNumber}
          onChange={(e) => setCardNumber(cardNumberNormalize(e.target.value))}
          placeholder="e.g. 1234 5678 9123 0000"
          className={`p-2 w-full rounded-lg border border-lightGrayishViolet ${
            invalidCardNumber.status && "border-red"
          }`}
        />
        {invalidCardNumber.status && (
          <p className="text-red text-[12px]">{invalidCardNumber.message}</p>
        )}
      </div>

      <div className="flex w-full gap-8">
        <div className="flex flex-col">
          <label htmlFor="exp" className="text-[14px] tracking-widest mb-2">
            EXP. DATE (MM/YY)
          </label>
          <div id="exp" className="flex gap-2">
            <input
              type="text"
              value={expDateMonth}
              onChange={(e) =>
                setExpDateMonth(expDateMonthNormalize(e.target.value))
              }
              onBlur={(e) => {
                if (e.target.value.length === 1) {
                  setExpDateMonth(`0${e.target.value}`);
                }
                fieldBlankValidate(expDateMonth, setInvalidExpDateMonth);
              }}
              placeholder="MM"
              className={`p-2 w-16 rounded-lg border border-lightGrayishViolet ${
                invalidExpDateMonth.status && "border-red"
              }`}
            />
            <input
              type="text"
              placeholder="YY"
              value={expDateYear}
              onChange={(e) =>
                setExpDateYear(expDateYearNormalize(e.target.value))
              }
              onBlur={(e) => {
                if (e.target.value.length === 1) {
                  setExpDateYear(`0${e.target.value}`);
                }
                fieldBlankValidate(expDateYear, setInvalidExpDateYear);
              }}
              className={`p-2 w-16 rounded-lg border border-lightGrayishViolet ${
                invalidExpDateYear.status && "border-red"
              }`}
            />
          </div>
          {(invalidExpDateMonth.status || invalidExpDateYear.status) && (
            <p className="text-red text-[10px]">Can&apos;t be blank</p>
          )}
        </div>
        <div className="flex flex-col flex-grow">
          <label htmlFor="cvc" className="text-[14px] tracking-widest mb-2">
            CVC
          </label>
          <input
            type="text"
            id="cvc"
            value={cvc}
            onBlur={() => {
              cvcValidate();
            }}
            onChange={(e) => setCvc(cvcNormalize(e.target.value))}
            placeholder="e.g. 123"
            className={`p-2 w-full rounded-lg border border-lightGrayishViolet ${
              invalidCvc.status && "border-red"
            }`}
          />
          {invalidCvc.status && (
            <p className="text-red text-[10px]">{invalidCvc.message}</p>
          )}
        </div>
      </div>

      <button
        className="flex w-full justify-center p-4 bg-veryDarkViolet rounded-lg"
        onClick={handleSubmit}
      >
        <p className="text-white tracking-widest text-[16px]">Confirm</p>
      </button>
    </div>
  );
}
