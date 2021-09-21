import React from "react";

import { fetcher } from "utils/fetcher";
import useSWR from "swr";
const RugChecker = ({ data }) => {
  console.log(data);
  //   let el = document.createElement("html");
  //   el.innerHTML = data;
  //   console.log(el);

  return (
    <div className=" pb-2 gap-12  pt-40 relative w-full px-8 lg:px-16 xl:px-20 ">
      <div className="text-center">
        <h2 className="">
          Free Binance Smart Chain{" "}
          <span className="text-accent"> Token Analyzer</span>
        </h2>

        <div className="mt-8 max-w-[800px] mx-auto">
          Warning : this website help you to determine if a smart contract could
          be a scam, without 100% guarantee. We are trying to do our best to
          detect all the scams but we could not be responsible for a specific
          malicious one... Always be careful with your money ;)
        </div>
      </div>

      <div className="max-w-[800px] flex flex-col mt-8 mx-auto">
        <div className="flex ">
          <input
            // value={tokenAddress}
            // onChange={handleInput}
            className="h-16 w-[80%] focus-visible:outline-none text-lg lg:text-2xl py-2 px-6 text-accent bg-black border-accent border "
          />
          <button
            // onClick={handleHoney}
            className="bg-accent rounded-r-full py-2 px-4  items-center flex gap-2 border-white/30"
          >
            honeypot?
          </button>
        </div>
      </div>

      <div>
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-24">
          {/* <Info content={el?.querySelector("#report_infos")} />
          <Info content={el?.querySelector("#report_infos")} />
          <Info content={el?.querySelector("#report_infos")} /> */}
          <div
            className={`border border-accent rounded-xl p-8 `}
            dangerouslySetInnerHTML={{ __html: data }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default RugChecker;

export const getServerSideProps = async (context) => {
  // const { id } = context.params;
  // const coinInfo = await fetcher.get("/info", {
  //   params: { id },
  // });

  const res = await fetcher.get(
    "https://bscheck.eu/check_contract.php?contract=0xd3d865e400e1686ce35d83c642a96f13d46946d5&sel=0&m=823eba1d94faee95c9ca806c886dfbd5f76883b21f46d8d0763d86c52bbbc594_6189"
  );

  const data = res.data;
  console.log(res);
  // const info = coinInfo.data.data;

  return {
    props: {
      // info,
      data,
    },
  };
};

const Info = ({ content }) => {
  return (
    <div
      className={`border border-accent rounded-xl p-8 `}
      dangerouslySetInnerHTML={{ __html: content }}
    >
      {content}
    </div>
  );
};
