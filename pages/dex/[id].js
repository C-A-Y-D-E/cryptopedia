import React, { useState, useEffect } from "react";
import { FiShare, FiTrendingUp } from "react-icons/fi";
import { MdPayment } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";
import { fetcher } from "utils/fetcher";
import Link from "next/link";
import MenuCard from "components/cmc/Chart";
import DEXTAB from "components/cmc/DEXTAB";
import SearchList from "components/cmc/SearchList";
import {
  FaTelegramPlane,
  FaTwitter,
  FaRedditAlien,
  FaDiscord,
} from "react-icons/fa";
const DEX = ({ info, id, data }) => {
  const coinData = data.find((data) => data.id === parseInt(id));

  return (
    <div className=" w-full  px-4 xl:p-16">
      <div className=" bg-dark mt-44 lg:mt-32 rounded-lg">
        <div className="p-8 lg:p-16 border-b-[.1px] border-accent/30">
          <Head coinData={coinData} data={data} info={info[id]} />
        </div>
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="   h-full p-8">
            <LeftBar info={info[id]} coinData={coinData} />
          </div>
          <div className=" border-t md:border-l border-accent/30  h-full w-full p-6">
            <DEXTAB symbol={coinData.symbol} />
            {/* <div className="">
              <MenuCard symbol={coinData.symbol} />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DEX;

// HEAD ///

const Head = ({ coinData, info, data }) => {
  let dollarUSLocale = Intl.NumberFormat("en-US");

  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (search.length >= 1) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [search.length]);

  const handleInput = (e) => {
    setSearch(e.target.value);
    setList(
      data.filter(
        (d) =>
          d.name.toLowerCase().startsWith(search) ||
          d.symbol.toLowerCase().startsWith(search)
      )
    );
  };

  return (
    <div className="flex items-center flex-wrap gap-8 h-full justify-between">
      <div className="flex flex-col gap-12 items-center">
        <div className="flex gap-5 items-center">
          <div>
            <img src={info.logo} className="w-[40px]" />
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-bold flex gap-4">
              <span className="text-2xl">{coinData?.name}</span>
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
                {`${coinData.quote["USD"].price}`.split(".")[1].substring(0, 5)}
              </sup>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-12 flex-wrap relative">
        <SearchList
          list={list}
          setShow={setShow}
          handleInput={handleInput}
          show={show}
          search={search}
        />
      </div>
    </div>
  );
};

// LEFT // ---------------

const LeftBar = ({ info, coinData }) => {
  return (
    <div className="max-w-[580px]">
      <div className="">
        <div className="font-bold text-lg text-accent">Socials</div>
        <div className="flex gap-6 items-center lg:ml-auto mx-auto mt-6 lg:mx-0">
          <div className="h-[40px] w-[40px] rounded-full bg-accent/20 flex items-center justify-center text-base text-accent">
            <FaTelegramPlane />
          </div>
          <div className="h-[40px] w-[40px] rounded-full bg-accent/20 flex items-center justify-center text-base text-accent">
            <FaTwitter />
          </div>
          <div className="h-[40px] w-[40px] rounded-full bg-accent/20 flex items-center justify-center text-base text-accent">
            <FaRedditAlien />
          </div>
          <div className="h-[40px] w-[40px] rounded-full bg-accent/20 flex items-center justify-center text-base text-accent">
            <FaDiscord />
          </div>
        </div>
      </div>
      <div className="font-bold mt-8 text-lg text-accent">Key Token Info</div>

      <div className="mt-8">
        <ul className="flex flex-wrap md:flex-col">
          <li>
            <div className="flex gap-4 p-4">
              <FiExternalLink className="text-2xl" />
              <div>
                <h5 className="font-semibold">Contact Address</h5>
                <span className="text-gray-200">
                  {"0xd3d865e400e1686ce35d83c642a96f13d46946d5".substring(
                    0,
                    18
                  ) +
                    "..." +
                    "0xd3d865e400e1686ce35d83c642a96f13d46946d5".substring(
                      "0xd3d865e400e1686ce35d83c642a96f13d46946d5".length - 2
                    )}
                </span>
              </div>
            </div>
          </li>
          <li>
            <div className="flex gap-4 p-4">
              <FiExternalLink className="text-2xl" />
              <div>
                <h5 className="font-semibold">Launch Date</h5>
                <span className="text-gray-200">NA</span>
              </div>
            </div>
          </li>
          <li>
            <div className="flex gap-4 p-4">
              <FiExternalLink className="text-2xl" />
              <div>
                <h5 className="font-semibold">Launch Style</h5>
                ICO / Fair Launch / Presale
              </div>
            </div>
          </li>
          <li>
            <div className="flex gap-4 p-4">
              <FiExternalLink className="text-2xl" />
              <div>
                <h5 className="font-semibold">Honeypot</h5>
                <Link href="/honeypot">
                  <a>Check Here</a>
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="flex gap-4 p-4">
              <FiExternalLink className="text-2xl" />
              <div>
                <h5 className="font-semibold">
                  Ownership Renounced ? Yes / No
                </h5>
                Click to verify txn
              </div>
            </div>
          </li>
          <li>
            <div className="flex gap-4 p-4">
              <FiExternalLink className="text-2xl" />
              <div>
                <h5 className="font-semibold">Liquidity Lock ? [Y/N]</h5>
                Click to verify
              </div>
            </div>
          </li>
          <li>
            <div className="flex gap-4 p-4">
              <FiExternalLink className="text-2xl" />
              <div>
                <h5 className="font-semibold">Liquidity Lock Length</h5>
                NA
              </div>
            </div>
          </li>
          <li>
            <div className="flex gap-4 p-4">
              <FiExternalLink className="text-2xl" />
              <div>
                <h5 className="font-semibold">Listing</h5>
                CMC [Y/N], CG [Y/N], Cryptopedia [Y/N]
              </div>
            </div>
          </li>
          <li>
            <div className="flex gap-4 p-4">
              <FiExternalLink className="text-2xl" />
              <div>
                <h5 className="font-semibold">Contract Audited</h5>
                Click to verify
              </div>
            </div>
          </li>
          <li>
            <div className="flex gap-4 p-4">
              <FiExternalLink className="text-2xl" />
              <div>
                <h5 className="font-semibold">Dev Doxxed [Y/N]</h5>
                Check Here
              </div>
            </div>
          </li>
          <li>
            <div className="flex gap-4 p-4">
              <FiExternalLink className="text-2xl" />
              <div>
                <h5 className="font-semibold">Rug Checker</h5>
                <Link href="/rugchecker">
                  <a>Check Here</a>
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="flex gap-4 p-4">
              <FiExternalLink className="text-2xl" />
              <div>
                <h5 className="font-semibold">Other Dev team projects</h5>
                NA
              </div>
            </div>
          </li>
          <li>
            <div className="flex gap-4 p-4">
              <FiExternalLink className="text-2xl" />
              <div>
                <h5 className="font-semibold">Initial Liquidity Provided</h5>
                NA
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <div className="font-bold text-lg text-accent">Tokenomics</div>
        <ul className="mt-6 flex gap-6 flex-wrap md:flex-col">
          {/* {info.urls.explorer.map((e) => {
            return (
              <li>
                <div className="flex gap-4">
                  <FiExternalLink className="text-2xl flex-shrink-0" />{" "}
                  <a href={e} target="_blank" className="break-all">
                    {e}
                  </a>
                </div>
              </li>
            );
          })} */}
          <li>Buy Tax: %</li>
          <li>Sell Tax: %</li>
          <li>Burn : %</li>
          <li>Marketing Wallet: %</li>
          <li>Redistribution: %</li>
        </ul>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const coinInfo = await fetcher.get("/info", {
    params: { id },
  });
  // console.log(coinInfo);

  const res = await fetcher.get(`/listings/latest?limit=${5000}`);

  // const marketPairRes = await fetcher.get(`/market-pairs/latest`, {
  //   params: { id },
  // });

  const data = res.data.data;

  const info = coinInfo.data.data;
  // const marketData = marketPairRes.data.data;
  return {
    props: {
      info,
      data,
      id,
      // marketData,
    },
  };
};
