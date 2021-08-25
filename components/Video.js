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
        staggerChildren: 1.4,
        delay: 1,
      },
    },
  };

  const children = {
    hidden: { opacity: 0 },
    show: { opacity: 1, trasitions: { duration: 1 } },
  };

  return (
    <div className="" id="about">
      <div
        ref={ref}
        className="bg-dark  flex flex-wrap items-center border border-accent/20  gap-4  relative z-20"
      >
        <motion.div
          variants={container}
          animate={controls}
          initial="hidden"
          className="  relative p-8 lg:py-16 lg:px-24 "
        >
          <motion.h2
            variants={children}
            className=" relative  inline-block leading-snug"
          >
            <span className="text-accent">Inisght </span>
            into <br className=" hidden lg:block" />
            Cryptopedia
          </motion.h2>
          <motion.div
            variants={children}
            className="mt-4 max-w-[440px] text-base"
          >
            Cryptopedia stipulates an absolute and complete cryptocurrency
            experience for users from all sides of the spectrum. This brings the
            opportunity to align numerous features from various platforms into a
            single hub to promote simple and effortless investment activities.
          </motion.div>
        </motion.div>
        <div className="flex-1 lg:h-[500px] relative">
          {/* yo */}
          <video
            src="/video.m4v"
            loop
            autoPlay
            muted
            className=" h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Mobile;
