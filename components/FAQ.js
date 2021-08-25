import React, { useState } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

import { FiMinus, FiPlus } from "react-icons/fi";
const FAQ = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="mt-20 lg:mt-44 " id="faq">
      <div className="flex flex-wrap gap-16">
        <div className="  relative lg:flex-1">
          <h2 className=" relative  inline-block leading-snug">
            Frquently <br /> Asked{" "}
            <span className="text-accent">Question </span>
          </h2>
          <div className="absolute -top-32 -left-44 z-[1]">
            <img src="/blobs/4.svg" />
          </div>
          <div className="mt-4 max-w-[440px] text-base">
            we know you have some questions in mind, we’ve tried to list the
            most importance ones.
          </div>
          <div className="mt-10">
            <img src="/pattern3.svg" />
          </div>
        </div>

        <div className=" lg:flex-1 flex flex-col gap-4  relative">
          <div className="flex flex-col gap-4  z-30">
            <AnimateSharedLayout>
              <div className="absolute -bottom-24  md:-right-20 z-[-2]">
                <img src="/blobs/5.svg" />
              </div>
              <Question
                heading="Will contract ownership be renounced?"
                text="We will not be renoucing ownership.  This limits our ability to implement necessary changes and upgrades without a cumbersome contract migration.  How many projects never recovered after having to migrate from PCS v1 to v2?  A change no one saw coming.  This is only one example of many things we anticipate the need to adapt to as the space continues to change."
                no={1}
                active={active}
                setActive={setActive}
              />
              <hr />
              <Question
                heading="If you're not renouncing, how can I be sure as an investor that I won't be scammed or rugged?"
                text={[
                  "Renouncing ownership has become the norm in the fraud-filled BSC space but in reality is a gimmick that only provides the illusion of safety.  We have employed several layers of protection for potential investors.  The LP pool will be locked.",
                  ,
                  <br />,
                  <br />,
                  "Our contract code has been audited for security vulnerabilities.  After launch, we will be seeking even higher levels of auditing from CertiK.  The core officer team is fully doxxed.  The marketing and development wallets are only accessible through multi-sig technology which must be signed by all members of the officer team to release any funds. ",
                  ,
                  <br />,
                  <br />,
                  "We are just as sick and tired of the proliferation of fraud and scams as anyone else.  Our mission, our identity, and our singular goal is to change this unsavory reality in every way that we can.  We understand trust is hard to come by in this space, we only ask for the opportunity to earn it from each and every investor.",
                  ,
                  <br />,
                ]}
                no={2}
                active={active}
                setActive={setActive}
              />

              <hr />
            </AnimateSharedLayout>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

const Question = ({ heading, text, setActive, no, active }) => {
  const open = active === no ? true : false;

  return (
    <div>
      <div className="">
        <div
          onClick={() => {
            if (active === no) {
              setActive(null);
            } else {
              setActive(no);
            }
          }}
          className=" cursor-pointer flex py-4 justify-between items-center w-full px-4  text-sm font-semibold text-left text-purple-900  rounded-lg "
        >
          <span className={`${open ? "text-accent" : "text-white"} text-lg  `}>
            {heading}
          </span>
          <div className="text-xl ml-auto">
            {open ? <FiMinus /> : <FiPlus className="text-accent" />}
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              key="modal"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
              className="px-4  leading-loose  text-base  font-medium text-gray-400"
            >
              {text}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// const QuestionTier = ({ setActive, no, active }) => {
//   const open = active === no ? true : false;
//   return (
//     <div className="">
//       <div
//         onClick={() => {
//           if (active === no) {
//             setActive(null);
//           } else {
//             setActive(no);
//           }
//         }}
//         className="flex cursor-pointer py-4 justify-between items-center w-full px-4  text-sm font-semibold text-left text-purple-900  rounded-lg "
//       >
//         <span
//           className={`${
//             open ? "text-accent" : "text-primary"
//           } text-xl w-[90%] transition-all duration-700`}
//         >
//           How can i join the presale?
//         </span>
//         <div className="text-xl ml-auto">
//           {open ? <FiMinus /> : <FiPlus className="text-accent" />}
//         </div>
//       </div>
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial="collapsed"
//             animate="open"
//             exit="collapsed"
//             variants={{
//               open: { opacity: 1, height: "auto" },
//               collapsed: { opacity: 0, height: 0 },
//             }}
//             transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
//             className="px-4   text-base lg:text-lg font-medium text-gray-400 "
//           >
//             Our 2-tier Presale will be on our platform
//             <a
//               target="_blank"
//               className="text-accent ml-2 underline"
//               href="https://www.snowden.finance/"
//             >
//               www.snowden.finance
//             </a>
//             <div className="mt-4">
//               <h4 className="font-bold">TIER 1:</h4>
//               This will be a premium whitelist of 300 spots. Join the
//               sweepwidget contest using the link below!
//               <br />
//               <a
//                 target="_blank"
//                 className="text-accent  underline "
//                 href="https://sweepwidget.com/view/27101-wfnkx60t"
//               >
//                 https://sweepwidget.com/view/27101-wfnkx60t
//               </a>
//             </div>
//             <div className="mt-4">
//               <h4 className="font-bold">TIER 2:</h4>
//               This tier will be a public presale, open for anyone to join in!
//               The price will be 10% higher than that of Tier-1.
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };
