import { FiShare, FiTrendingUp } from "react-icons/fi";
import { MdPayment } from "react-icons/md";
const Head = ({ coinData, info }) => {
  let dollarUSLocale = Intl.NumberFormat("en-US");
  return (
    <div className="flex items-center flex-wrap gap-8 h-full justify-between">
      <div className="flex gap-5 items-center">
        <div>
          <img src={info.logo} className="w-[40px]" />
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-bold flex gap-4">
            <span className="text-2xl">{coinData.name}</span>
            <span
              className={`${
                `${coinData.quote["USD"].percent_change_7d}`.includes("-")
                  ? "text-red-600"
                  : "text-accent"
              } flex gap-4 items-center`}
            >
              <FiTrendingUp />{" "}
              {parseFloat(coinData.quote["USD"].percent_change_7d).toFixed(2)}
            </span>
          </span>
          <div className="text-4xl font-bold">
            <sup>$ </sup>
            {dollarUSLocale.format(
              `${coinData.quote["USD"].price}`.split(".")[0]
            )}{" "}
            .
            <sup>
              {`${coinData.quote["USD"].price}`.split(".")[1].substring(0, 4)}
            </sup>
          </div>
        </div>
      </div>
      <div className="flex gap-12 flex-wrap">
        <ul className="flex flex-wrap gap-8">
          <li>
            <div className="flex flex-col gap-1  ">
              <span className="text-sm text-gray-300 font-semibold">
                Market Cap
              </span>
              <span className="font-medium text-base">
                ${dollarUSLocale.format(coinData.quote["USD"].market_cap)}
              </span>
            </div>
          </li>
          <li>
            <div className="flex flex-col gap-1 ">
              <span className="text-sm text-gray-300 font-semibold">
                Vol.24H
              </span>
              <span className="font-medium text-base">
                ${dollarUSLocale.format(coinData.quote["USD"].volume_24h)}
              </span>
            </div>
          </li>
          <li>
            <div className="flex flex-col gap-1 ">
              <span className="text-sm text-gray-300 font-semibold">
                Circulating Supply
              </span>
              <span className="font-medium text-base">
                {dollarUSLocale.format(coinData.circulating_supply)}{" "}
                {coinData.symbol}
              </span>
            </div>
          </li>
          <li>
            <div className="flex flex-col gap-1 ">
              <span className="text-sm text-gray-300 font-semibold">
                Max Supply
              </span>
              <span className="font-medium text-base">
                {coinData.max_supply
                  ? dollarUSLocale.format(coinData.max_supply)
                  : "Not available"}
              </span>
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
