export default function CardForm() {
  return (
    <div className="flex flex-col w-[400px] gap-6">
      <div className="flex flex-col w-full gap-2">
        <label htmlFor="name" className="text-[14px] tracking-widest">
          CARDHOLDER NAME
        </label>
        <input
          type="text"
          id="name"
          placeholder="e.g. Jane Appleseed"
          className="p-2 w-full rounded-lg border border-lightGrayishViolet"
        />
      </div>
      <div className="flex flex-col w-full gap-2">
        <label htmlFor="cn" className="text-[14px] tracking-widest">
          CARD NUMBER
        </label>
        <input
          type="text"
          id="cn"
          placeholder="e.g. 1234 5678 9123 0000"
          className="p-2 w-full rounded-lg border border-lightGrayishViolet"
        />
      </div>

      <div className="flex w-full gap-8">
        <div className="flex flex-col gap-2">
          <label htmlFor="exp" className="text-[14px] tracking-widest">
            EXP. DATE (MM/YY)
          </label>
          <div id="exp" className="flex gap-2">
            <input
              type="text"
              placeholder="MM"
              className="p-2 w-16 rounded-lg border border-lightGrayishViolet"
            />
            <input
              type="text"
              placeholder="YY"
              className="p-2 w-16 rounded-lg border border-lightGrayishViolet"
            />
          </div>
        </div>
        <div className="flex flex-col flex-grow gap-2">
          <label htmlFor="cvc" className="text-[14px] tracking-widest">
            CVC
          </label>
          <input
            type="text"
            id="cvc"
            placeholder="e.g. 123"
            className="p-2 w-full rounded-lg border border-lightGrayishViolet"
          />
        </div>
      </div>

      <button className="flex w-full justify-center p-4 bg-veryDarkViolet rounded-lg">
        <p className="text-white tracking-widest text-[16px]">Confirm</p>
      </button>
    </div>
  );
}
