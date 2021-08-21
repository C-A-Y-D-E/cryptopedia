import Head from "next/head";
import Home from "components/Home";
import Signal from "components/Signal";
import Tokenomics from "components/Tokenomics";
import Infrastrusture from "components/Infrastrusture";
import Feature from "components/Feature";
import Roadmap from "components/Roadmap";
import Mobile from "components/Mobile";
import FAQ from "components/FAQ";
import Footer from "components/Footer";
import NavigateUp from "components/NavigateUp";

export default function App() {
  return (
    <div className="container mx-auto px-8 lg:px-16 xl:px-20  flex flex-col">
      <Home />
      <Signal />
      <Tokenomics />
      <Infrastrusture />
      <Feature />
      <Roadmap />
      <Mobile />
      <FAQ />
      <Footer />
      <NavigateUp />
    </div>
  );
}
