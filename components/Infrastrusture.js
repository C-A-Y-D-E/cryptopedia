import React from "react";
import FadeUp from "components/FadeUp";
const Infrastrusture = () => {
  return (
    <div className="mt-44">
      <FadeUp>
        <div className="text-center">
          <h2 className="">
            <span className="text-accent">Trusted</span> Infrastucture
          </h2>

          <div className="mt-8">
            Navigate the depths of crypto with ease and pleasure
          </div>
        </div>
      </FadeUp>
      <FadeUp>
        <div className="relative lg:-mt-20">
          <img src="/trade.png" className="mx-auto z-20 relative" />
          {/* <img src="/blobs/big.svg" className="absolute -top-48 z-10" /> */}
        </div>
      </FadeUp>
    </div>
  );
};

export default Infrastrusture;
