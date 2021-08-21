import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Mobile = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  const mobile = {
    hidden: {
      scale: 0.2,
    },

    show: {
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const container = {
    hidden: {
      opacity: 0,
    },

    show: {
      opacity: 1,
      transition: {
        staggerChildren: 1.6,
        delay: 1,
      },
    },
  };

  const children = {
    hidden: { opacity: 0 },
    show: { opacity: 1, trasitions: { duration: 1 } },
  };

  return (
    <div className="mt-56">
      <div
        ref={ref}
        className="bg-dark p-8 lg:py-16 lg:px-24 flex flex-wrap-reverse gap-4 items-center relative z-20"
      >
        <motion.div
          variants={container}
          animate={controls}
          initial="hidden"
          className="  relative"
        >
          <motion.h2 variants={children} className=" relative  inline-block">
            <span className="text-accent">Optimized </span>
            for every <br /> screen
          </motion.h2>
          <motion.div
            variants={children}
            className="mt-4 max-w-[440px] text-base"
          >
            Meet the most complete and easy to use tracking and analytics tool
            for the BSC and ETH networks, packed with never before seen features
            and state of the art UX to streamline your crypto investing
            workflow.
          </motion.div>
          <motion.div
            className="mt-8"
            variants={children}
            transition={{ delay: 1.8 }}
          >
            <span>Get the App</span>
            <div className="flex gap-6 mt-4">
              <img src="/google.png" />
              <img src="/apple.png" />
            </div>
          </motion.div>
        </motion.div>
        <div className="lg:absolute right-16">
          <motion.img
            initial="hidden"
            animate={controls}
            variants={mobile}
            src="/iphone.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Mobile;
