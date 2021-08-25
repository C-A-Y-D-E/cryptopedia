import React from "react";
import Head from "components/cmc/Head";
import LeftBar from "components/cmc/LeftBar";

import Tab from "components/Tab";

const Detail = () => {
  return (
    <div className=" w-full  px-4 xl:p-16">
      <div className=" bg-dark mt-24 rounded-lg">
        <div className="p-8 lg:p-16 border-b-[.1px] border-accent/30">
          <Head />
        </div>
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="   h-full p-8">
            <LeftBar />
          </div>
          <div className=" border-t md:border-l border-accent/30  h-full w-full p-6">
            <Tab />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
