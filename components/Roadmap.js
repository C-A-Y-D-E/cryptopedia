import React, { useEffect } from "react";
import { FiCheck, FiX } from "react-icons/fi";
import FadeUp from "components/FadeUp";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};
const Roadmap = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const roadmap1 = [
    { text: "Telegram Community", active: false, wrong: false },
    { text: "Website design", active: false, wrong: false },
    { text: "Crpytopedia Whitepaper Release", active: false, wrong: true },
    { text: "GFX Prototype", active: false, wrong: true },
    { text: "Marketing strategy implementation", active: false, wrong: true },
  ];

  const roadmap2 = [
    { text: "Dox development team", active: true, wrong: true },
    { text: "Fairlaunch Token", active: true, wrong: true },
    { text: "Listing on CoinGecko", active: true, wrong: true },
    { text: "Listing on CoinMarketCap", active: true, wrong: true },
    { text: "Listing on Blockfolio", active: true, wrong: true },
  ];

  const roadmap3 = [
    { text: "Audit - (Techrate)", active: false, wrong: true },
    {
      text: "Further Marketing Strategy implementation",
      active: false,
      wrong: true,
    },
    { text: "App/Web wallet development beta", active: false, wrong: true },
    { text: "Live trading feature prototype", active: false, wrong: true },
  ];

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);
  return (
    <div className="mt-20" id="roadmap">
      <h2 className="text-center text-accent">Roadmap</h2>

      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={controls}
        className="mt-24 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-24"
      >
        <RoadMap title="Ready" items={roadmap1} />
        <RoadMap title="Set" items={roadmap2} active={true} />
        <RoadMap title="Go" items={roadmap3} />
      </motion.div>
    </div>
  );
};

export default Roadmap;

const RoadMap = ({ active, items, title }) => {
  return (
    <motion.div
      variants={item}
      className={`border border-accent rounded-xl p-8 ${
        active ? "bg-accent" : ""
      }`}
    >
      <span className="text-2xl text-gray-300">{title}</span>
      <div className="text-3xl mt-4">Q3 2021</div>
      <ul className="mt-8 flex flex-col gap-5">
        {/* <ListItem text="Telegram Community" active={active} />
        <ListItem text="Website design" active={active} />
        <ListItem text="Crpytopedia Whitepaper Release" active={active} />
        <ListItem text="GFX Prototype" active={active} /> */}

        {items.map((item) => (
          <ListItem text={item.text} active={item.active} wrong={item.wrong} />
        ))}
        {/* <ListItem text="" active={active} />
        <ListItem text="" active={active} />
        <ListItem text="" wrong={true} />
        <ListItem text="" wrong={true} /> */}
      </ul>
    </motion.div>
  );
};

const ListItem = ({ wrong, active, text }) => {
  return (
    <li className="flex gap-6 items-center">
      <div
        className={`h-[35px] w-[35px] rounded-full text-2xl flex-shrink-0 ${
          wrong ? "bg-gray-400" : "bg-accent"
        } ${
          active ? "bg-white text-accent" : "bg-accent"
        } flex items-center justify-center`}
      >
        {wrong ? <FiX /> : <FiCheck />}
      </div>
      <div className={`${wrong ? "text-gray-300" : ""} `}>{text}</div>
    </li>
  );
};
