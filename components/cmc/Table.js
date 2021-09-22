import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { MdUnfoldMore } from "react-icons/md";
import Link from "next/link";
const CoinTable = ({ currency }) => {
  let dollarUSLocale = Intl.NumberFormat("en-US");
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>
            <div className="flex items-center gap-2 justify-start  lg:h-[50px]">
              <MdUnfoldMore /> #
            </div>
          </Th>
          <Th>
            <div className="flex items-center gap-2 justify-start  lg:h-[50px]">
              <MdUnfoldMore /> Coin
            </div>
          </Th>
          <Th>
            <div className="flex items-center gap-2 justify-start  lg:h-[50px]">
              <MdUnfoldMore /> Price
            </div>
          </Th>
          <Th>
            <div className="flex items-center gap-2 justify-start  lg:h-[50px]">
              <MdUnfoldMore /> Marker Cap
            </div>
          </Th>
          <Th>
            <div className="flex items-center gap-2 justify-start  lg:h-[50px]">
              <MdUnfoldMore /> Volume 24h
            </div>
          </Th>

          <Th>
            <div className="flex items-center gap-2 justify-start  lg:h-[50px]">
              <MdUnfoldMore />
              Circulating Supply
            </div>
          </Th>
          <Th>
            <div className="flex items-center gap-2 justify-start  lg:h-[50px]">
              <MdUnfoldMore /> Last 7 Days
            </div>
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {currency.map((curr) => {
          return (
            <Link href={`/coin/${encodeURIComponent(curr.id)}`}>
              <Tr className="text-center" key={curr.id}>
                <Td>{curr.cmc_rank}</Td>
                <Td>
                  <Currency id={curr.id} text={curr.name} />
                </Td>
                <Td>${dollarUSLocale.format(curr.quote["USD"].price)}</Td>
                <Td>
                  <span>
                    $
                    {
                      dollarUSLocale
                        .format(curr.quote["USD"].market_cap)
                        .split(".")[0]
                    }
                  </span>
                </Td>
                <Td>
                  $
                  {
                    dollarUSLocale
                      .format(curr.quote["USD"].volume_24h)
                      .split(".")[0]
                  }
                </Td>

                <Td>
                  <span>
                    {
                      dollarUSLocale
                        .format(curr.circulating_supply)
                        .split(".")[0]
                    }
                  </span>
                </Td>
                <Td>
                  {/* <span>
                    $
                    {dollarUSLocale.format(curr.quote["USD"].percent_change_7d)}
                  </span> */}
                  <div>
                    <img
                      class={`${
                        `${curr.quote["USD"].percent_change_7d}`.includes("-")
                          ? "red"
                          : "green"
                      }    mx-auto `}
                      src={`https://s3.coinmarketcap.com/generated/sparklines/web/7d/usd/${curr.id}.png`}
                    />
                  </div>
                </Td>
              </Tr>
            </Link>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default CoinTable;

const Currency = ({ text, id }) => {
  return (
    <div class="flex gap-4 items-center">
      <img
        class="w-[30px]"
        src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`}
      />
      <div class="flex items-center gap-3">
        <p font-weight="semibold" color="text" font-size="1" class="font-bold">
          {text}
        </p>
      </div>
    </div>
  );
};
