import { useEffect, useState } from "react";
import PageOpnameProcess from "./PageOpnameProcess";

type typeStock = {
  productCode: string;
  location: string;
  productName: string;
  totStock: number;
  opname: number;
  status: string;
  lokasiProduksi: string;
};

const PageOpname = () => {
  const [allStock, _setAllStock] = useState<typeStock[]>([
    {
      productCode: "000001",
      location: "CGBA1000",
      productName: "ABC KECAP ASIN",
      totStock: 12,
      opname: 0,
      status: "proses",
      lokasiProduksi: "ABC123",
    },
    {
      productCode: "000002",
      location: "CGBA1001",
      productName: "ABC KECAP MANIS",
      totStock: 12,
      opname: 0,
      status: "proses",
      lokasiProduksi: "ABC124",
    },
    {
      productCode: "000003",
      location: "CGBA1000",
      productName: "ABC SAUS SAMBAL",
      totStock: 12,
      opname: 0,
      status: "unproses",
      lokasiProduksi: "ABC125",
    },
    {
      productCode: "000004",
      location: "CGBA1001",
      productName: "ABC SAUS",
      totStock: 12,
      opname: 0,
      status: "proses",
      lokasiProduksi: "ABC126s",
    },
  ]);

  const [tableStock, setTableStock] = useState<typeStock[]>(allStock);

  const [filterStock, setFilterStock] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setFilterStock(value);

    setTableStock(
      allStock.filter((t) =>
        t.productCode.toLowerCase().includes(value.toLowerCase()),
      ),
    );
  };

  const handleClickProses = () => {
    const filtered = allStock.filter((t) => t.status === "proses");
    setTableStock(filtered);
  };

  const handleClickUnproses = () => {
    const filtered = allStock.filter((t) => t.status === "unproses");
    setTableStock(filtered);
  };

  const handleClickAll = () => {
    setTableStock(allStock);
  };

  const [opname, setOpname] = useState<boolean>(false);
  const [id, setId] = useState<string>("");
  const [lokasi, setLokasi] = useState<string>("");
  const [totStock, setTotStock] = useState<number>(0);
  const [produkName, setProdukName] = useState<string>("");

  const [qtyInput, setQtyInput] = useState<number>(0);

  const hanldeNavigateOpnameProcess = (
    id: string,
    lokasiProduksi: string,
    productName: string,
    totStock: number,
  ) => {
    setOpname(true);
    setLokasi(lokasiProduksi);
    setTotStock(totStock);
    setProdukName(productName);
    setId(id);
  };

  useEffect(() => {
    setTableStock((prev) =>
      prev.map((data) =>
        data.productCode === id ? { ...data, opname: qtyInput } : data,
      ),
    );
  }, [qtyInput]);

  if (opname) {
    return (
      <PageOpnameProcess
        id={id}
        lokasiProduksi={lokasi}
        productName={produkName}
        totStock={totStock}
        setQtyInput={setQtyInput}
        setOpname={setOpname}
      />
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-[50%] items-center justify-center flex flex-col bg-gray-300 p-10 rounded">
        <h1 className="text-3xl font-bold mt-10">OPNAME PROCESS</h1>
        <h2>Wo Number: x2323231627</h2>

        <div className="h-1 w-full bg-black" />

        <h2>Filter Location</h2>

        <div className="flex gep-3">
          <button onClick={handleClickProses} className="mr-2 text-blue-500">
            Process
          </button>
          <button onClick={handleClickUnproses} className="mr-2 text-blue-500">
            Unprocess
          </button>
          <button onClick={handleClickAll} className="mr-2 text-blue-500">
            All
          </button>
        </div>

        <div className="h-1 w-full bg-black" />

        <h2>SCAN PRODUCT {filterStock}</h2>
        <input
          onChange={handleChange}
          type="text"
          className="border-black border-2 mb-2"
        />

        <div className="h-1 w-full bg-black" />

        <div className="w-full">
          <div className="grid grid-cols-5 gap-2 font-bold">
            <div>NAME</div>
            <div>CODE</div>
            <div>TOT STOCK</div>
            <div>OPNAME</div>
            <div>ACTION</div>
          </div>

          <div className="h-1 w-full bg-black my-2" />

          {tableStock.map((val) => (
            <div
              className="grid grid-cols-5 gap-2 items-center mt-2"
              key={val.productCode}
            >
              <div
                className={`${val.opname === 0 ? "text-green-500" : "text-black"}`}
              >
                {val.productName}
              </div>
              <div>{val.productCode}</div>
              <div>{val.totStock}</div>
              <div>{val.opname}</div>
              <button
                className="bg-gray-500 text-white py-1 px-3 rounded hover:cursor-pointer"
                onClick={() => {
                  hanldeNavigateOpnameProcess(
                    val.productCode,
                    val.lokasiProduksi,
                    val.productName,
                    val.totStock,
                  );
                }}
              >
                p
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageOpname;
