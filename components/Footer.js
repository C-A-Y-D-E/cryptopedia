import React from "react";

const Footer = () => {
  return (
    <div className=" mt-24">
      <div className="h-[150px] w-full grid grid-cols-1 lg:grid-cols-3 justify-between items-center">
        <div className=" mx-auto lg:mx-0">CryptoPedia</div>
        <div className="mx-auto">
          © 2020 Landify UI Kit. All rights reserved
        </div>
        <div className="flex gap-6 items-center lg:ml-auto mx-auto lg:mx-0">
          <div className="h-[50px] w-[50px] rounded-full bg-accent"></div>
          <div className="h-[50px] w-[50px] rounded-full bg-accent"></div>
          <div className="h-[50px] w-[50px] rounded-full bg-accent"></div>
          <div className="h-[50px] w-[50px] rounded-full bg-accent"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
