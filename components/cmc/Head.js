import { FiShare } from "react-icons/fi";
import { MdPayment } from "react-icons/md";
const Head = () => {
  return (
    <div className="flex items-center flex-wrap gap-8 h-full justify-between">
      <div className="flex gap-5 items-center">
        <div>
          <img
            src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
            className="w-[40px]"
          />
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-bold">Bitcoin</span>
          <div className="text-4xl font-bold">
            <sup>$ </sup>7,204<sup>.44</sup>
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex gap-12 flex-wrap">
        <ul className="flex flex-wrap gap-8">
          <li>
            <div className="flex flex-col gap-1  ">
              <span className="text-sm text-gray-300 font-semibold">
                Market Cap
              </span>
              <span className="font-medium text-base">$943,387,084,983</span>
            </div>
          </li>
          <li>
            <div className="flex flex-col gap-1 ">
              <span className="text-sm text-gray-300 font-semibold">
                Vol.24H
              </span>
              <span className="font-medium text-base">$31,808,958,739</span>
            </div>
          </li>
          <li>
            <div className="flex flex-col gap-1 ">
              <span className="text-sm text-gray-300 font-semibold">
                Circulating Supply
              </span>
              <span className="font-medium text-base">18,794,768.00 BTC</span>
            </div>
          </li>
          <li>
            <div className="flex flex-col gap-1 ">
              <span className="text-sm text-gray-300 font-semibold">
                Max Supply
              </span>
              <span className="font-medium text-base">21,000,000</span>
            </div>
          </li>
        </ul>
        <div className="flex gap-1 mx-auto">
          <button className="border rounded-l-full items-center flex gap-2 py-2 px-4 border-white/30 ">
            <FiShare />
            Share
          </button>
          <button className="bg-accent rounded-r-full py-2 px-4  items-center flex gap-2 border-white/30">
            {" "}
            <MdPayment />
            Buy Bitcoin
          </button>
        </div>
      </div>
    </div>
  );
};
export default Head;
