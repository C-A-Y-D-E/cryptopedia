import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { MdUnfoldMore } from "react-icons/md";
const CoinTable = () => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>
            <div className="flex items-center gap-2 justify-start lg:justify-center h-[50px]">
              <MdUnfoldMore /> #
            </div>
          </Th>
          <Th>
            <div className="flex items-center gap-2 justify-start lg:justify-center h-[50px]">
              <MdUnfoldMore /> Coin
            </div>
          </Th>
          <Th>
            <div className="flex items-center gap-2 justify-start lg:justify-center h-[50px]">
              <MdUnfoldMore /> Marker Cap
            </div>
          </Th>
          <Th>
            <div className="flex items-center gap-2 justify-start lg:justify-center h-[50px]">
              <MdUnfoldMore /> Volume 24h
            </div>
          </Th>
          <Th>
            <div className="flex items-center gap-2 justify-start lg:justify-center h-[50px]">
              <MdUnfoldMore /> Circulating Supply
            </div>
          </Th>
          <Th>
            <div className="flex items-center gap-2 justify-start lg:justify-center h-[50px]">
              <MdUnfoldMore /> Last 7 Days
            </div>
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>
            <Currency />
          </Td>
          <Td>
            <span className="text-gray-300">$911,405,112,636</span>
          </Td>
          <Td>$25,029,085,894</Td>
          <Td>$48,384.57</Td>
          <Td>
            <span className="text-gray-300">18,794,087 BTC</span>
          </Td>
          <Td>
            <div>
              <img class="mx-auto" src="/1.png" />
            </div>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Currency />
          </Td>
          <Td>
            <span className="text-gray-300">$911,405,112,636</span>
          </Td>
          <Td>$25,029,085,894</Td>
          <Td>$48,384.57</Td>
          <Td>
            <span className="text-gray-300">18,794,087 BTC</span>
          </Td>
          <Td>
            <div>
              <img class="mx-auto" src="/1.png" />
            </div>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Currency />
          </Td>
          <Td>
            <span className="text-gray-300">$911,405,112,636</span>
          </Td>
          <Td>$25,029,085,894</Td>
          <Td>$48,384.57</Td>
          <Td>
            <span className="text-gray-300">18,794,087 BTC</span>
          </Td>
          <Td>
            <div>
              <img class="mx-auto" src="/1.png" />
            </div>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default CoinTable;

const Currency = () => {
  return (
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
  );
};
