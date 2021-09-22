// import Chart from "kaktana-react-lightweight-charts";
import dynamic from "next/dynamic";
import React from "react";
const TradingViewWidget = dynamic(() => import("react-tradingview-widget"), {
  ssr: false,
});
// const { Themes } = dynamic(() => import("react-tradingview-widget"), {
//   ssr: false,
// });

const App = ({ symbol }) => (
  <TradingViewWidget
    symbol={symbol}
    theme="DARK"
    locale="en"
    // width={800}
    height={600}
    // autosize
  />
);

export default App;
