import React from "react";
import { useTable } from "react-table";

import { MdUnfoldMore } from "react-icons/md";
const Coin = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: () => {
          return (
            <div className="flex items-center gap-2 justify-center h-[50px]">
              <MdUnfoldMore /> #
            </div>
          );
        },
        accessor: "no",
      },
      {
        Header: () => {
          return (
            <div className="flex items-center gap-2 justify-center h-[50px]">
              Coin <MdUnfoldMore />
            </div>
          );
        },
        accessor: "coin",
      },
      {
        Header: () => {
          return (
            <div className="flex items-center gap-2 justify-center h-[50px]">
              <MdUnfoldMore /> Marker Cap
            </div>
          );
        },
        accessor: "mcap",
      },
      {
        Header: () => {
          return (
            <div className="flex items-center gap-2 justify-center h-[50px]">
              <MdUnfoldMore /> Volume 24h
            </div>
          );
        },
        accessor: "vol",
      },
      {
        Header: () => {
          return (
            <div className="flex items-center gap-2 justify-center h-[50px]">
              <MdUnfoldMore /> Circulating Supply
            </div>
          );
        },
        accessor: "supply",
      },
      {
        Header: () => {
          return (
            <div className="flex items-center gap-2 justify-center h-[50px]">
              <MdUnfoldMore /> Last 7 Days
            </div>
          );
        },
        accessor: "last",
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        no: "1",
        coin: (
          <div class="flex gap-4 justify-center">
            <img
              class="w-[30px]"
              src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
            />
            <div class="flex items-center gap-3">
              <p
                font-weight="semibold"
                color="text"
                font-size="1"
                class="sc-1eb5slv-0 hKkaxT"
              >
                Bitcoin
              </p>
            </div>
          </div>
        ),
        mcap: <span className="text-gray-300">$911,405,112,636</span>,
        vol: "$25,029,085,894",
        price: "$48,384.57",
        supply: <span className="text-gray-300">18,794,087 BTC</span>,
        last: (
          <div>
            <img class="mx-auto" src="/1.png" />
          </div>
        ),
      },
      {
        no: "2",
        coin: (
          <div class="flex gap-4 justify-center">
            <img
              class="w-[30px]"
              src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
            />
            <div class="flex items-center gap-3">
              <p
                font-weight="semibold"
                color="text"
                font-size="1"
                class="sc-1eb5slv-0 hKkaxT"
              >
                Bitcoin
              </p>
            </div>
          </div>
        ),
        mcap: <span className="text-gray-300">$911,405,112,636</span>,
        vol: "$25,029,085,894",
        price: "$48,384.57",
        supply: <span className="text-gray-300">18,794,087 BTC</span>,
        last: (
          <div>
            <img class="mx-auto" src="/1.png" />
          </div>
        ),
      },
      {
        no: "3",
        coin: (
          <div class="flex gap-4 justify-center">
            <img
              class="w-[30px]"
              src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
            />
            <div class="flex items-center gap-3">
              <p
                font-weight="semibold"
                color="text"
                font-size="1"
                class="sc-1eb5slv-0 hKkaxT"
              >
                Bitcoin
              </p>
            </div>
          </div>
        ),
        mcap: <span className="text-gray-300">$911,405,112,636</span>,
        vol: "$25,029,085,894",
        price: "$48,384.57",
        supply: <span className="text-gray-300">18,794,087 BTC</span>,
        last: (
          <div>
            <img class="mx-auto" src="/1.png" />
          </div>
        ),
      },
      {
        no: "4",
        coin: (
          <div class="flex gap-4 justify-center">
            <img
              class="w-[30px]"
              src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
            />
            <div class="flex items-center gap-3">
              <p
                font-weight="semibold"
                color="text"
                font-size="1"
                class="sc-1eb5slv-0 hKkaxT"
              >
                Bitcoin
              </p>
            </div>
          </div>
        ),
        mcap: <span className="text-gray-300">$911,405,112,636</span>,
        vol: "$25,029,085,894",
        price: "$48,384.57",
        supply: <span className="text-gray-300">18,794,087 BTC</span>,
        last: (
          <div>
            <img class="mx-auto" src="/1.png" />
          </div>
        ),
      },
    ],
    []
  );
  return (
    <div className="px-8 lg:p-16 mt-24">
      <div className="bg-dark border-accent mb-5 rounded-lg   w-full ">
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Coin;

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  // Render the UI for your table
  return (
    <table {...getTableProps()} className="">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
