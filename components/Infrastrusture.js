import React, { useState } from "react";
import FadeUp from "components/FadeUp";

import { motion, useTransform, useViewportScroll } from "framer-motion";
const Infrastrusture = () => {
  const { scrollYProgress } = useViewportScroll();
  // const yPosAnim = useTransform(scrollYProgress, [0, 0.4, 1], [0, -150, -100]);
  const xPosAnim = useTransform(scrollYProgress, [0, 0.4, 1], [-510, 0, -100]);

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
        <motion.div style={{ x: xPosAnim }} className="relative lg:-mt-20">
          <img src="/trade.png" className="mx-auto z-20 relative" />
          {/* <img src="/blobs/big.svg" className="absolute -top-48 z-10" /> */}
        </motion.div>
      </FadeUp>
    </div>
  );
};

export default Infrastrusture;
