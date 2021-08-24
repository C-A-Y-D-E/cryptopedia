import React from "react";
import { BiMouse } from "react-icons/bi";

import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap  mt-40 relative w-full">
      <div className="">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute top-10 -left-20 z-[1]"
        >
          <img src="/pattern1.svg" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="absolute -top-48 -left-64 z-[1]"
        >
          <img src="/blobs/1.svg" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-4xl break-words leading-snug md:text-5xl 2xl:leading-snug 2xl:text-6xl font-bold relative z-20 "
        >
          This is an <span className="text-accent">Intelligent</span> <br />{" "}
          Trading Platform
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 max-w-[440px] text-base"
        >
          We aim to deliver a first of its kind platform to enable easy and
          simplistic investment methods. From analytical tools to advantageous
          information to licence a warrant for an increase in safety and profits
          from investments.
        </motion.div>
        <div className="relative mt-16 hidden lg:block ">
          <motion.div
            animate={{ scale: [0.8, 1] }}
            transition={{ flip: Infinity }}
            className="h-[100px]  w-[100px] bg-accent/30 rounded-full flex items-center justify-center text-4xl"
          >
            <BiMouse className="text-accent animate-bounce " />
          </motion.div>
          <span className="absolute top-1/2 -translate-y-1/2 left-20">
            Scroll Down
          </span>
        </div>
      </div>
      <motion.div
        // initial={{ scale: 0.2, right: -8000 }}
        animate={{ scale: [0, 1], right: [-1000, 0] }}
        trasitions={{ damping: 25, type: "spring" }}
        className="mt-20 w-full lg:-ml-10 ml-auto   lg:w-[600px] 2xl:w-[800px] relative"
      >
        <motion.img
          // initial={{ y: 0 }}
          animate={{ y: -30 }}
          transition={{ flip: Infinity, duration: 1.5 }}
          src="/mac2.png"
          className="relative z-20 w-full lg:-mt-44 lg:w-[1500px]"
        />
        {/* <div className="absolute -top-72 -right-20 z-[1]">
          <img src="/blobs/2.svg" />
        </div> */}
        {/* <div className="absolute -bottom-24 right-64 z-[1]">
          <img src="/blobs/3.svg" />
        </div> */}
      </motion.div>
    </div>
  );
};

export default Home;
