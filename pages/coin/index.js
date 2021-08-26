import React from "react";
import CoinTable from "components/cmc/Table";
import { motion } from "framer-motion";
import axios from "axios";
import { fetcher } from "utils/fetcher";
const CMC = ({ data }) => {
  let dollarUSLocale = Intl.NumberFormat("en-US");
  console.log(data);
  const topCoin = [...data].splice(0, 3);
  return (
    <div>
      <div className="bg-dark h-[700px]">
        <div className="flex flex-wrap lg:flex-nowrap pb-24  pt-40 relative w-full px-8 lg:px-16 xl:px-20 ">
          <div className="">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="text-4xl break-words leading-snug md:text-5xl 2xl:leading-snug 2xl:text-6xl font-bold relative z-20 "
            >
              Today <br />
              <span className="text-accent">Cryptocurrency</span> <br /> prices
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-8 max-w-[440px] text-lg"
            >
              The global crypto market cap is $1.86T
            </motion.div>
          </div>
          <div className="ml-auto  relative">
            <img
              src="/cmc.png"
              className="relative z-20 w-full  lg:w-[600px]"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto   -mt-24">
        <div className="px-8 hidden md:block lg:px-16 xl:px-20">
          <div className=" rounded-lg bg-dark  border border-accent/20 ">
            <div className="flex p-8 gap-16 flex-wrap h-full w-full items-center justify-center">
              {topCoin.map((curr) => {
                return (
                  <div className="flex gap-5 items-center">
                    <div>
                      <img
                        src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${curr.id}.png`}
                        className="w-[40px]"
                      />
                    </div>
                    <div className="flex gap-4">
                      <div className="flex flex-col gap-4">
                        <span className="font-bold flex gap-4 items-center">
                          <span>{curr.name}</span>
                          <span
                            className={`${
                              `${curr.quote["USD"].percent_change_1h}`.includes(
                                "-"
                              )
                                ? "bg-red-600"
                                : "bg-accent"
                            }   p-1 flex flex-shrink-0 items-center justify-center rounded-full w-[60px]   text-sm`}
                          >
                            {parseFloat(
                              curr.quote["USD"].percent_change_1h
                            ).toFixed(2)}
                            %
                          </span>
                        </span>
                        <div className="text-3xl font-bold">
                          <sup>$ </sup>
                          {dollarUSLocale.format(
                            `${curr.quote["USD"].price}`.split(".")[0]
                          )}{" "}
                          .
                          <sup>
                            {`${curr.quote["USD"].price}`
                              .split(".")[1]
                              .substring(0, 2)}
                          </sup>
                        </div>
                      </div>

                      <div>
                        <img
                          class={`${
                            `${curr.quote["USD"].percent_change_7d}`.includes(
                              "-"
                            )
                              ? "red"
                              : "green"
                          }    mx-auto w-[120px]`}
                          src={`https://s3.coinmarketcap.com/generated/sparklines/web/7d/usd/${curr.id}.png`}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="p-4 mt-44 lg:mt-24 rounded-lg  lg:px-16 xl:px-20">
          <h2 className=" relative  inline-block leading-snug mb-0 lg:mb-6 ">
            <span className="text-accent">Top 10 </span>
            <br /> Cryptocurrency
          </h2>
          <CoinTable currency={data} />
        </div>
      </div>
    </div>
  );
};

export default CMC;

export const getServerSideProps = async () => {
  const res = await fetcher.get("/listings/latest?limit=10");

  const data = res.data.data;

  return {
    props: {
      data,
    },
  };
};
