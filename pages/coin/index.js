import React from "react";
import CoinTable from "components/cmc/Table";
const CMC = () => {
  return (
    <div className="container mx-auto  w-full    lg:p-16">
      <div className="p-4 bg-dark rounded-lg">
        <CoinTable />
      </div>
    </div>
  );
};

export default CMC;
