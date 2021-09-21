import React from "react";
import { BsArrowRight } from "react-icons/bs";
const Dexopedia = () => {
  return (
    <div className=" pb-2 gap-12  pt-40 relative w-full px-8 lg:px-16 xl:px-20 ">
      <div className="text-center">
        <h2 className="">
          <span className="text-accent">DEXOPEDIA</span>
          <br />
        </h2>

        <div className="mt-8 max-w-[800px] text-lg mx-auto">
          The only DEX resources you'll ever need
        </div>
      </div>

      <div>
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-24">
          <div className={`border border-accent rounded-xl p-8  `}>
            <div className="text-2xl">Pair Explorer</div>
            <div className="mt-4 text-gray-300">
              determine if a smart contract could be a scam,
            </div>
            <div className="mt-4 flex gap-2 items-center  text-gray-200">
              Checkout <BsArrowRight className="text-3xl" />
            </div>
          </div>
          <div className={`border border-accent rounded-xl p-8 `}>
            <div className="text-2xl">Rug Checker</div>
            <div className="mt-4 text-gray-300">
              determine if a smart contract could be a scam,
            </div>
            <div className="mt-4 flex gap-2 items-center  text-gray-200">
              Checkout <BsArrowRight className="text-3xl" />
            </div>
          </div>
          <div className={`border border-accent rounded-xl p-8 `}>
            <div className="text-2xl">Honeypot Checker</div>
            <div className="mt-4 text-gray-300">
              determine if a smart contract could be a scam,
            </div>
            <div className="mt-4 flex gap-2 items-center  text-gray-200">
              Checkout <BsArrowRight className="text-3xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dexopedia;
