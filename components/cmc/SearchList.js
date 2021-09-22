import React, { useState, useEffect } from "react";
import Link from "next/link";
import onClickOutside from "react-onclickoutside";
import { BsSearch } from "react-icons/bs";
const SearchList = ({ data, url }) => {
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (search.length >= 1) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [search.length]);

  const handleInput = (e) => {
    setSearch(e.target.value);
    setList(
      data.filter(
        (d) =>
          d.name.toLowerCase().startsWith(search) ||
          d.symbol.toLowerCase().startsWith(search)
      )
    );
  };
  SearchList.handleClickOutside = () => setShow(false);
  return (
    <div className="flex ml-auto">
      {/* <div className=" h-[45px] px-8 items-center justify-start bg-black flex gap-4">
        <BsSearch className="text-2xl" />
        <span>Search</span>
      </div> */}

      <>
        <BsSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-accent" />
        <input
          placeholder="Search..."
          value={search}
          onChange={handleInput}
          className="h-12 w-[100%] focus-visible:outline-none text-lg py-2 pl-12 px-6 text-accent bg-dark border-accent border "
        />

        {show && (
          <div className="w-[100%] bg-black  top-16 z-[10] absolute  border border-accent">
            <ul className="flex flex-col  gap-4 px-6 py-8">
              {list.slice(0, 5).map((d) => (
                <Link href={`/${url}/${encodeURIComponent(d.id)}`}>
                  <a
                    onClick={() => {
                      setShow(false);
                      setSearch("");
                    }}
                  >
                    <li className="flex justify-between">
                      <div className="flex   gap-4">
                        <img
                          src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${d.id}.png`}
                          className="w-[25px] flex-shrink-0"
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
      </>
    </div>
  );
};

const clickOutsideConfig = {
  handleClickOutside: () => SearchList.handleClickOutside,
};

export default onClickOutside(SearchList, clickOutsideConfig);
