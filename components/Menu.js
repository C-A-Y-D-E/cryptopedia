import React from "react";
import { FiX } from "react-icons/fi";
import { motion } from "framer-motion";
const Menu = ({ setHeader }) => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      layoutId="h"
      className="fixed h-full w-full inset-0  overflow-y-auto overflow-x-hidden"
      style={{ zIndex: 999 }}
    >
      <motion.div
        layoutId="header"
        className="flex justify-between text-2xl lg:text-4xl my-6 container mx-auto px-8 items-center lg:px-16"
      >
        <div>Cryptopedia</div>
        <div className="cursor-pointer" onClick={() => setHeader(false)}>
          <FiX />
        </div>
      </motion.div>

      <motion.div
        layout
        class="max-w-screen-lg mx-auto px-10 md:px-6 py-24 lg:py-16 min-h-full flex items-center flex-col md:flex-row "
      >
        <motion.div class="w-full md:w-9/12">
          <div class="py-3 md:py-5">
            <a class="no-underline hover:text-accent" href="/">
              <span class="text-3xl md:text-6xl font-semibold">Home</span>
            </a>
          </div>
          <div class="py-3 md:py-5">
            <a class="no-underline hover:text-accent" href="/works">
              <span class="text-3xl md:text-6xl font-semibold">Works</span>
            </a>
          </div>
          <div class="py-3 md:py-5">
            <a class="no-underline hover:text-accent" href="/studio">
              <span class="text-3xl md:text-6xl font-semibold">Studio</span>
            </a>
          </div>
          <div class="py-3 md:py-5">
            <a class="no-underline hover:text-accent" href="/what-we-do">
              <span class="text-3xl md:text-6xl font-semibold">What We Do</span>
            </a>
          </div>
          <div class="py-3 md:py-5">
            <a class="no-underline hover:text-accent" href="/manifesto">
              <span class="text-3xl md:text-6xl font-semibold">Manifesto</span>
            </a>
          </div>
          <div class="py-3 md:py-5">
            <a class="no-underline hover:text-accent" href="/contact">
              <span class="text-3xl md:text-6xl font-semibold">Contact</span>
            </a>
          </div>
        </motion.div>
        <div class="w-full md:w-1/2 lg:w-1/12 mt-10 md:mt-0">
          <h6 class="text-gray-400 font-bold mb-6">Socials</h6>
          <div class="text-white">
            <div class="my-2">
              <a
                href="https://dribbble.com/omnicreativora"
                target="_blank"
                rel="noreferrer"
                class="no-underline text-lg font-bold hover:text-accent"
              >
                Dribbble
              </a>
            </div>
            <div class="my-2">
              <a
                href="https://www.behance.net/AnggitYuniar"
                target="_blank"
                rel="noreferrer"
                class="no-underline text-lg font-bold hover:text-accent"
              >
                Behance
              </a>
            </div>
            <div class="my-2">
              <a
                href="https://www.facebook.com/omnicreativora/"
                target="_blank"
                rel="noreferrer"
                class="no-underline text-lg font-bold hover:text-accent"
              >
                Facebook
              </a>
            </div>
            <div class="my-2">
              <a
                href="https://www.instagram.com/omnicreativora/"
                target="_blank"
                rel="noreferrer"
                class="no-underline text-lg font-bold hover:text-accent"
              >
                Instagram
              </a>
            </div>
            <div class="my-2">
              <a
                href="https://twitter.com/omnicreativora"
                target="_blank"
                rel="noreferrer"
                class="no-underline text-lg font-bold hover:text-accent"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Menu;
