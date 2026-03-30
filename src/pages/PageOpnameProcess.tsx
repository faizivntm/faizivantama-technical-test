import { useState } from "react";

type Props = {
  id: string;
  productName: string;
  totStock: number;
  lokasiProduksi: string;
  setQtyInput: (qty: number) => void;
  setOpname: (state: boolean) => void;
};

const PageOpnameProcess = ({
  id,
  productName,
  totStock,
  lokasiProduksi,
  setQtyInput,
  setOpname,
}: Props) => {
  const [qty, setQty] = useState<number>(0);
  const [tempStr, setTempStr] = useState<number>(0);

  const handleinput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQty(parseInt(event.target.value));
    setTempStr(parseInt(event.target.value));
  };

  const handleClick = () => {
    setOpname(false);
    setQtyInput(tempStr);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-[50%] items-center justify-center flex flex-col bg-gray-300 p-10 rounded">
        <h1 className="text-2xl font-bold">OPNAME PROCESS</h1>
        <button className="text-blue-500 mb-2">List Product</button>

        <div className="h-1 w-full bg-black" />

        <h2 className="font-bold mt-2">PRODUCT</h2>
        <p className="text-[14px]">{productName} </p>
        <p className="text-[14px] mb-2"> {id}</p>

        <div className="h-1 w-full bg-black" />

        <h2 className="mt-2">Input QTY : {qty}</h2>
        <input
          onChange={handleinput}
          type="number"
          className="border-2 border-black mb-2"
        />

        <div className="mb-2 h-1 w-full bg-black" />

        <button
          onClick={handleClick}
          className="hover:cursor-pointer mb-2 bg-gray-500 text-white py-2 px-10 rounded"
        >
          Confirm
        </button>

        <div className="h-1 w-full bg-black" />

        <h2 className="mt-2 text-[14px]">TOT STOCK SYSTEM: {totStock}</h2>
        <h2 className="text-[14px]">LOKASI PRODUKSI: {lokasiProduksi}</h2>
      </div>
    </div>
  );
};

export default PageOpnameProcess;
