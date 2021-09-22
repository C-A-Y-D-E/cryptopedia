import React from "react";
import Head from "components/cmc/Head";
import LeftBar from "components/cmc/LeftBar";
import { fetcher } from "utils/fetcher";
import Tab from "components/Tab";
import SearchList from "components/cmc/SearchList";
const Detail = ({ info, id, data }) => {
  const coinData = data.find((data) => data.id === parseInt(id));
  console.log(coinData);
  return (
    <div className=" w-full  px-4 xl:p-16 relative">
      <div className=" bg-dark mt-44 lg:mt-32 rounded-lg">
        <div className="p-8 lg:p-16 border-b-[.1px] border-accent/30">
          <Head
            coinData={coinData}
            info={info[id]}
            data={data.filter(
              (d) => d?.platform?.name !== "Binance Smart Chain"
            )}
          />
        </div>
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="   h-full p-8">
            <LeftBar info={info[id]} coinData={coinData} data={data} />
          </div>
          <div className=" border-t md:border-l border-accent/30  h-full w-full p-6">
            <Tab symbol={coinData.symbol} />
          </div>
        </div>
      </div>
    </div>
  );
};
export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const coinInfo = await fetcher.get("/info", {
    params: { id },
  });

  const res = await fetcher.get("/listings/latest?limit=10");

  const data = res.data.data;

  const info = coinInfo.data.data;

  return {
    props: {
      info,
      data,
      id,
    },
  };
};

export default Detail;
