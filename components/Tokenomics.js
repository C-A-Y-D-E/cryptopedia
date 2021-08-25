import React, { useEffect } from "react";
import { GiTrophyCup } from "react-icons/gi";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const list = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delay: 0.5,
    },
  },
};

const variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: {
      duration: 0.8,
    },
  },
};
const Tokenomics = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);
  return (
    <div className="mt-20 relative" id="token">
      <div
        ref={ref}
        className="bg-dark p-8 lg:py-16 lg:px-24 flex gap-8 items-center flex-wrap relative z-20"
      >
        <motion.div variants={variants} initial="hidden" animate={controls}>
          <motion.h2 variants={item} className="leading-snug">
            <span className="text-accent">Tokenomics</span> <br />
            $CryptoPedia token
          </motion.h2>
          <motion.p variants={item} className="max-w-[450px] w-full mt-10">
            Our tokenomics have been designed to provide both stability and
            reward holders while sustaining the ecosystem development and
            growth.
          </motion.p>
          <motion.p variants={item} className="max-w-[450px] w-full mt-10">
            CryptoPedia token holders have access to the advanced tracking
            features and take advantage of CryptoPedia unique analytics
            platform.
          </motion.p>
        </motion.div>
        <div className="mx-auto lg:ml-auto">
          <motion.div
            variants={list}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 lg:grid-cols-2  gap-x-16 gap-y-8"
          >
            <Nomics number="2" text="back to holders" />
            <Nomics number="4" text="back to liquidity pool" />
            <Nomics number="2" text="funds development" />
            <Nomics number="2" text="funds innovation" />
          </motion.div>
        </div>
      </div>
      {/* <div className="h-[100px] w-[450px] bg-accent absolute right-0 -bottom-14 p-4 z-30">
        CryptoPedia token holders have access to the advanced tracking features
        and take advantage of CryptoPedia unique analytics platform.
      </div> */}
      <div className="absolute -left-10 -bottom-20 z-10">
        <img src="/pattern2.svg" />
      </div>
    </div>
  );
};

export default Tokenomics;
const Nomics = ({ number, text }) => {
  return (
    <motion.div
      variants={item}
      className="text-center border border-accent px-16 rounded-lg  py-8"
    >
      <div className="flex justify-center relative">
        <div className="h-[80px] w-[80px] bg-accent p-4 rounded-lg">
          <GiTrophyCup className="text-white text-5xl " />
        </div>
        <img src="/pattern2.svg" className="w-20 absolute -bottom-10 -left-4" />
      </div>
      <div className="text-4xl mt-16">{number} %</div>
      <div className="text-gray-300 mt-2">{text}</div>
    </motion.div>
  );
};
