import React, { useState, useEffect } from "react";
import Web3 from "web3";
const honeypot = () => {
  const [tokenName, setTokenName] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [tokenAddress, setTokenAddress] = useState("");
  const [showToken, setShowToken] = useState("");

  const [tokenInfo, setTokenInfo] = useState(null);
  const [buyTax, setBuyTax] = useState(null);
  const [sellTax, setSellTax] = useState(null);
  const [buyGas, setBuyGas] = useState("");
  const [sellGas, setSellGas] = useState("");

  const [show, setShow] = useState(null);
  let web3 = null;
  //   let tokenName = "";
  //   let tokenSymbol = "";
  let tokenDecimals = 0;
  let maxSell = 0;
  let maxTXAmount = 0;
  let bnbIN = 1000000000000000000;
  let maxTxBNB = null;
  web3 = new Web3("https://bsc-dataseed.binance.org/");
  //   const urlParams = new URLSearchParams(window.location.search);
  //   let address = urlParams.get("address");
  //   if (address.length < 1) {
  //     pathname = window.location.pathname;
  //     if (pathname.startsWith("/token/")) {
  //       let tokenAddress = pathname.split("/")[pathname.length - 1];
  //       address = tokenAddress;
  //     }
  //   }

  useEffect(() => {
    if (process.browser) {
      const screenWidth = screen.width;

      if (screenWidth < 768) {
        let output =
          tokenAddress.substring(0, 6) +
          "..." +
          tokenAddress.substring(tokenAddress.length - 4);
        setShowToken(output);
      }
    }
  }, [tokenAddress]);

  const handleHoney = () => {
    run(tokenAddress);
  };

  const handleInput = (e) => {
    setShow(null);
    setTokenAddress(e.target.value);
  };
  function encodeBasicFunction(web3, funcName) {
    return web3.eth.abi.encodeFunctionCall(
      {
        name: funcName,
        type: "function",
        inputs: [],
      },
      []
    );
  }

  async function updateTokenInformation(web3, tokenAddress) {
    web3.eth
      .call({
        to: tokenAddress,
        value: 0,
        gas: 150000,
        data: encodeBasicFunction(web3, "name"),
      })
      .then((value) => {
        setTokenName(web3.eth.abi.decodeParameter("string", value));
      });

    web3.eth
      .call({
        to: tokenAddress,
        value: 0,
        gas: 150000,
        data: encodeBasicFunction(web3, "symbol"),
      })
      .then((value) => {
        setTokenSymbol(web3.eth.abi.decodeParameter("string", value));
      });
  }

  async function run(tokenAddress) {
    console.log("here");
    let x = updateTokenInformation(web3, tokenAddress);
    console.log("kek");
    await getMaxes();
    if (maxTXAmount != 0 || maxSell != 0) {
      await getDecimals(tokenAddress);
      await getBNBIn(tokenAddress);
    }
    await honeypotIs(tokenAddress);
    await x;
  }

  async function getDecimals(tokenAddress) {
    let sig = encodeBasicFunction(web3, "decimals");
    let d = {
      to: tokenAddress,
      from: "0x8894e0a0c962cb723c1976a4421c95949be2d4e3",
      value: 0,
      gas: 15000000,
      data: sig,
    };
    try {
      let val = await web3.eth.call(d);
      tokenDecimals = web3.utils.hexToNumber(val);
    } catch (e) {
      console.log("decimals", e);
    }
  }

  async function getBNBIn(tokenAddress) {
    let amountIn = maxTXAmount;
    if (maxSell != 0) {
      amountIn = maxSell;
    }
    let WETH = "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c";
    let path = [tokenAddress, WETH];
    let sig = web3.eth.abi.encodeFunctionCall(
      {
        name: "getAmountsOut",
        type: "function",
        inputs: [
          { type: "uint256", name: "amountIn" },
          { type: "address[]", name: "path" },
        ],
        outputs: [{ type: "uint256[]", name: "amounts" }],
      },
      [amountIn, path]
    );

    let d = {
      to: "0x10ED43C718714eb63d5aA57B78B54704E256024E",
      from: "0x8894e0a0c962cb723c1976a4421c95949be2d4e3",
      value: 0,
      gas: 15000000,
      data: sig,
    };
    try {
      let val = await web3.eth.call(d);
      let decoded = web3.eth.abi.decodeParameter("uint256[]", val);
      bnbIN = web3.utils.toBN(decoded[1]);
      maxTxBNB = bnbIN;
    } catch (e) {
      console.log(e);
    }
    console.log(bnbIN, amountIn);
  }

  async function getMaxes() {
    let sig = web3.eth.abi.encodeFunctionSignature({
      name: "_maxTxAmount",
      type: "function",
      inputs: [],
    });
    let d = {
      to: tokenAddress,
      from: "0x8894e0a0c962cb723c1976a4421c95949be2d4e3",
      value: 0,
      gas: 15000000,
      data: sig,
    };
    try {
      let val = await web3.eth.call(d);
      maxTXAmount = web3.utils.toBN(val);
      console.log(val, maxTXAmount);
    } catch (e) {
      console.log("_maxTxAmount: ", e);
      // I will nest as much as I want. screw javascript.
      sig = web3.eth.abi.encodeFunctionSignature({
        name: "maxSellTransactionAmount",
        type: "function",
        inputs: [],
      });
      d = {
        to: tokenAddress,
        from: "0x8894e0a0c962cb723c1976a4421c95949be2d4e3",
        value: 0,
        gas: 15000000,
        data: sig,
      };
      try {
        let val2 = await web3.eth.call(d);
        maxSell = web3.utils.toBN(val2);
        console.log(val2, maxSell);
      } catch (e) {}
    }
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  async function honeypotIs(tokenAddress) {
    let encodedAddress = web3.eth.abi.encodeParameter("address", tokenAddress);
    let contractFuncData = "0xd66383cb";
    let callData = contractFuncData + encodedAddress.substring(2);

    let val = 100000000000000000;
    if (bnbIN < val) {
      val = bnbIN - 1000;
    }
    web3.eth
      .call({
        to: "0x5bf62ec82af715ca7aa365634fab0e8fd7bf92c7",
        from: "0x8894e0a0c962cb723c1976a4421c95949be2d4e3",
        value: val,
        gas: 45000000,
        data: callData,
      })
      .then((val) => {
        let decoded = web3.eth.abi.decodeParameters(
          ["uint256", "uint256", "uint256", "uint256", "uint256", "uint256"],
          val
        );
        let buyExpectedOut = web3.utils.toBN(decoded[0]);
        let buyActualOut = web3.utils.toBN(decoded[1]);
        let sellExpectedOut = web3.utils.toBN(decoded[2]);
        let sellActualOut = web3.utils.toBN(decoded[3]);
        // let buyGasUsed = web3.utils.toBN(decoded[4]);
        // let sellGasUsed = web3.utils.toBN(decoded[5]);
        setBuyGas(web3.utils.toBN(decoded[4]));
        setSellGas(web3.utils.toBN(decoded[5]));
        // buy_tax =
        //   Math.round(
        //     ((buyExpectedOut - buyActualOut) / buyExpectedOut) * 100 * 10
        //   ) / 10;

        setBuyTax(
          Math.round(
            ((buyExpectedOut - buyActualOut) / buyExpectedOut) * 100 * 10
          ) / 10
        );

        setSellTax(
          Math.round(
            ((sellExpectedOut - sellActualOut) / sellExpectedOut) * 100 * 10
          ) / 10
        );
        // sell_tax =
        //   Math.round(
        //     ((sellExpectedOut - sellActualOut) / sellExpectedOut) * 100 * 10
        //   ) / 10;
        // console.log(buy_tax, sell_tax);

        if (maxTXAmount != 0 || maxSell != 0) {
          let n = "Max TX";
          let x = maxTXAmount;
          if (maxSell != 0) {
            n = "Max Sell";
            x = maxSell;
          }
          let bnbWorth = "?";
          if (maxTxBNB != null) {
            bnbWorth = Math.round(maxTxBNB / 10 ** 15) / 10 ** 3;
          }
          let tokens = Math.round(x / 10 ** tokenDecimals);
        }
        setShow("success");
      })
      .catch((err) => {
        setShow("error");
      });
    updateTokenInformation(web3, tokenAddress);
  }

  return (
    <div className=" pb-2 gap-12  pt-40 relative w-full px-8 lg:px-16 xl:px-20 ">
      <div className="text-center">
        <h2 className="">
          <span className="text-accent">honeypot </span> Detector for BSC
          Network.
        </h2>

        <div className="mt-8 max-w-[800px] mx-auto">
          See if a BSC token is a honeypot at the moment. Requires liquidity on
          PancakeSwap with BNB. This website simulates a buy and a sell
          transaction to determine if the token is a honeypot or not.
        </div>
      </div>

      <div className="max-w-[800px] flex flex-col mt-8 mx-auto">
        <div className="flex ">
          <input
            value={tokenAddress}
            onChange={handleInput}
            className="h-16 w-[80%] focus-visible:outline-none text-lg lg:text-2xl py-2 px-6 text-accent bg-black border-accent border "
          />
          <button
            onClick={handleHoney}
            className="bg-accent rounded-r-full py-2 px-4  items-center flex gap-2 border-white/30"
          >
            honeypot?
          </button>
        </div>

        {show && (
          <div className="bg-dark px-4 py-6 mt-4   flex flex-wrap items-center border border-accent/20  gap-4  relative z-20">
            {show === "error" && (
              <div className="flex flex-col items-center  gap-4 mx-auto">
                <div className="text-xl lg:text-3xl text-red-400 break-words">
                  Yup, honeypot. Run the fuck away.
                </div>
                <div className="text-lg lg:text-2xl">
                  Address: {showToken ? showToken : tokenAddress}
                </div>
                <div className="text-lg lg:text-2xl border-b text-red-400">
                  {tokenName} ( {tokenSymbol} )
                </div>
              </div>
            )}

            {show === "success" && (
              <div className="flex flex-col items-center  gap-4 mx-auto">
                <div className=" text-xl lg:text-3xl text-green-400">
                  Does not seem like a honeypot.
                </div>
                <div className="text-lg lg:text-2xl">
                  This can always change! Do your own due diligence.
                </div>
                <div className="text-lg lg:text-2xl">
                  Address: {showToken ? showToken : tokenAddress}
                </div>
                <div className="text-lg lg:text-2xl border-b text-accent">
                  {tokenName} ( {tokenSymbol} )
                </div>
                <div className="text-lg lg:text-2xl">
                  <div>Gas used for Buying: {numberWithCommas(buyGas)}</div>
                  <div>Gas used for Selling: {numberWithCommas(sellGas)}</div>
                </div>
                <div className="text-lg lg:text-2xl">
                  <div>Buy Tax: {buyTax}%</div>
                  <div>Sell Tax: {sellTax}%</div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default honeypot;
