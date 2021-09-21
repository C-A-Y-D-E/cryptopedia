import React from "react";
import Link from "next/link";
import onClickOutside from "react-onclickoutside";
const SearchList = ({ list, setShow, search, handleInput, show }) => {
  SearchList.handleClickOutside = () => setShow(false);
  return (
    <div className="flex ">
      <input
        placeholder="Search..."
        value={search}
        onChange={handleInput}
        className="h-16 w-[80%] focus-visible:outline-none text-lg lg:text-2xl py-2 px-6 text-accent bg-dark border-accent border "
      />
      {show && (
        <div className="w-[80%] bg-black  top-16 z-[10] absolute  border border-accent">
          <ul className="flex flex-col  gap-4 px-6 py-8">
            {list.slice(0, 5).map((d) => (
              <Link href={`/dex/${encodeURIComponent(d.id)}`}>
                <a onClick={() => setShow(false)}>
                  <li className="flex justify-between">
                    <div className="flex  gap-4">
                      <img
                        src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${d.id}.png`}
                        className="w-[25px]"
                      />
                      <span className="">{d.name}</span>
                      <span className="text-gray-400">{d.symbol}</span>
                    </div>
                    <span className="text-gray-400">#{d.cmc_rank}</span>
                  </li>
                </a>
              </Link>
            ))}
          </ul>
        </div>
      )}
      <button
        // onClick={handleHoney}
        className="bg-accent rounded-r-full py-2 px-4  items-center flex gap-2 border-white/30"
      >
        Search
      </button>
    </div>
  );
};

const clickOutsideConfig = {
  handleClickOutside: () => SearchList.handleClickOutside,
};

export default onClickOutside(SearchList, clickOutsideConfig);
