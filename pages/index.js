import Head from "next/head";
import Home from "components/Home";
import Signal from "components/Signal";
import Tokenomics from "components/Tokenomics";
import Infrastrusture from "components/Infrastrusture";
import Feature from "components/Feature";
import Roadmap from "components/Roadmap";
import Mobile from "components/Mobile";
import Video from "components/Video";
import FAQ from "components/FAQ";
import Footer from "components/Footer";
import NavigateUp from "components/NavigateUp";

export default function App() {
  return (
    <div id="home" className=" flex flex-col">
      <div className="container mx-auto px-8 lg:px-16 xl:px-20  ">
        {" "}
        <Home />
      </div>
      <Signal />
      <div className="container mx-auto px-8 lg:px-16 xl:px-20  ">
        <Tokenomics />
      </div>

      <div className="container mx-auto px-8 lg:px-16 xl:px-20  ">
        {" "}
        <Infrastrusture />
      </div>

      <div className="container mx-auto px-8 lg:px-16 xl:px-20  ">
        {" "}
        <Video />
      </div>

      <div className="container mx-auto px-8 lg:px-16 xl:px-20  ">
        {" "}
        <Feature />
      </div>

      <div className="container mx-auto px-8 lg:px-16 xl:px-20  ">
        {" "}
        <Roadmap />
      </div>

      <div className="container mx-auto px-8 lg:px-16 xl:px-20  ">
        <Mobile />
      </div>

      <div className="container mx-auto px-8 lg:px-16 xl:px-20  ">
        {" "}
        <FAQ />
      </div>

      <div className="container mx-auto px-8 lg:px-16 xl:px-20  ">
        {" "}
        <Footer />
      </div>
      <div className="container mx-auto px-8 lg:px-16 xl:px-20  ">
        {" "}
        <NavigateUp />
      </div>
    </div>
  );
}
