import React from "react";
import {
  FaTelegramPlane,
  FaTwitter,
  FaRedditAlien,
  FaDiscord,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className=" mt-24">
      <div className="h-[150px] gap-4 w-full grid grid-cols-1 lg:grid-cols-3 justify-between items-center">
        <div className=" mx-auto lg:mx-0">
          {" "}
          <img src="/logo.svg" className="w-[120px]" />
        </div>
        <div className="mx-auto">© 2021 Cryptopedia</div>
        <div className="flex gap-6 items-center lg:ml-auto mx-auto lg:mx-0">
          <div className="h-[50px] w-[50px] rounded-full bg-accent/20 flex items-center justify-center text-xl text-accent">
            <FaTelegramPlane />
          </div>
          <div className="h-[50px] w-[50px] rounded-full bg-accent/20 flex items-center justify-center text-xl text-accent">
            <FaTwitter />
          </div>
          <div className="h-[50px] w-[50px] rounded-full bg-accent/20 flex items-center justify-center text-xl text-accent">
            <FaRedditAlien />
          </div>
          <div className="h-[50px] w-[50px] rounded-full bg-accent/20 flex items-center justify-center text-xl text-accent">
            <FaDiscord />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
