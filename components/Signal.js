import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import FadeUp from "components/FadeUp";
import { motion } from "framer-motion";

import Carousel from "react-multi-carousel";
import UAParser from "ua-parser-js";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 4,
  },
  laptop: {
    breakpoint: { max: 1300, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 700 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 1,
  },
};

const Signal = ({ deviceType }) => {
  return (
    <div className="mt-8 overflow-x-hidden">
      <div className="flex items-center gap-6  flex-wrap px-8 lg:px-16 xl:px-20  ">
        <div className="lg:flex-1 relative">
          <FadeUp>
            <h2 className=" relative  inline-block leading-snug">
              <span className="text-accent">Predict</span> changes and{" "}
              <br className="lg:hidden 2xl:inline-block" /> signal to sell or{" "}
              <span className="relative">
                buy.{" "}
                <img
                  src="/blobs/headingblob.svg"
                  className="absolute -right-10 -top-2 z-[-1]"
                />
              </span>
            </h2>
          </FadeUp>
        </div>

        <div className="lg:flex-1 ">
          <FadeUp amount={0.2}>
            <p className="max-w-[500px] ml-auto mt-0">
              We believe that your ability to take good investment decisions
              shouldn’t require you to waste precious time on digging into
              contracts or reddit and countless social channels.
            </p>
          </FadeUp>
        </div>
      </div>

      <div className="whitespace-nowrap mt-24 flex scale-[5]  lg:scale-[2]">
        <motion.img
          animate={{
            x: "0",
          }}
          initial={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 24,
            ease: "linear",
          }}
          src="/card2.svg"
        />
        <motion.img
          animate={{
            x: "0",
          }}
          initial={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 24,
            ease: "linear",
          }}
          src="/card2.svg"
        />
      </div>
      <div className="whitespace-nowrap mt-32 flex scale-[5] lg:scale-[2]">
        <motion.img
          animate={{
            x: "-100%",
          }}
          initial={{ x: "0" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 32,
            ease: "linear",
          }}
          src="/card.svg"
        />
        <motion.img
          animate={{
            x: "-100%",
          }}
          initial={{ x: "0" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 32,
            ease: "linear",
          }}
          src="/card.svg"
        />
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-8 lg:px-16 xl:px-20  ">
        <SpecialityCard
          heading="Liquidity"
          text="Deep order book liquidity in all market condition"
          br={true}
        />
        <SpecialityCard
          heading="Speed"
          text="2.5m Tps matching engine 50 micro second core letency"
          br={true}
        />
        <SpecialityCard
          heading="Security"
          text="ISO/IEC 27001:2013, PCI:DSS v3.2.1, Level 1 compilance. Cryptocurrecy Security Standard "
        />
      </div>
    </div>
  );
};

export default Signal;

const CoinCard = () => {
  return (
    <div className="bg-dark p-8 select-none">
      <div className="flex gap-6">
        <div>
          <h4 className="flex items-center gap-4 text-lg">
            Bitcoin <FiArrowUpRight className="text-accent" />
          </h4>
          <div className="text-xl mt-4">$8.313</div>
        </div>
        <div className="ml-auto ">
          <img src="/graph.svg " className="select-none" />
        </div>
      </div>
    </div>
  );
};

const SpecialityCard = ({ br, heading, text }) => {
  return (
    <div
      className={`${
        br
          ? "border-b-[.5px] lg:border-b-0 lg:border-r-[.5px] border-white"
          : ""
      } p-4`}
    >
      <div className="flex gap-6 items-center">
        <div className="h-[50px] w-[50px] rounded-full bg-accent/40 flex items-center justify-center text-3xl">
          <RiMoneyDollarCircleFill />
        </div>
        <h5 className="text-2xl">{heading}</h5>
      </div>
      <div className="mt-6 text-gray-300">{text}</div>
    </div>
  );
};

Signal.getInitialProps = ({ req }) => {
  let userAgent;
  if (req) {
    userAgent = req.headers["user-agent"];
  } else {
    userAgent = navigator.userAgent;
  }
  const parser = new UAParser();
  parser.setUA(userAgent);
  const result = parser.getResult();
  const deviceType = (result.device && result.device.type) || "desktop";
  return { deviceType };
};
