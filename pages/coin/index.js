import React from "react";
import CoinTable from "components/cmc/Table";
import { motion } from "framer-motion";
const CMC = () => {
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
              <div className="flex gap-5 items-center">
                <div>
                  <img
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                    className="w-[40px]"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <span className="font-bold">Bitcoin</span>
                  <div className="text-3xl font-bold">
                    <sup>$ </sup>7,204<sup>.44</sup>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 items-center">
                <div>
                  <img
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                    className="w-[40px]"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <span className="font-bold">Bitcoin</span>
                  <div className="text-3xl font-bold">
                    <sup>$ </sup>7,204<sup>.44</sup>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 items-center">
                <div>
                  <img
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                    className="w-[40px]"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <span className="font-bold">Bitcoin</span>
                  <div className="text-3xl font-bold">
                    <sup>$ </sup>7,204<sup>.44</sup>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 items-center">
                <div>
                  <img
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                    className="w-[40px]"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <span className="font-bold">Bitcoin</span>
                  <div className="text-3xl font-bold">
                    <sup>$ </sup>7,204<sup>.44</sup>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 mt-44 lg:mt-24 rounded-lg  lg:px-16 xl:px-20">
          <h2 className=" relative  inline-block leading-snug mb-0 lg:mb-6 ">
            <span className="text-accent">Top 10 </span>
            <br /> Cryptocurrency
          </h2>
          <CoinTable />
        </div>
      </div>
    </div>
  );
};

export default CMC;
