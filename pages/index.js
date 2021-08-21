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
import Menu from "components/Menu";
import Header from "components/Header";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useState } from "react";
export default function App() {
  const [header, setHeader] = useState(false);
  return (
    <AnimateSharedLayout>
      <Header setHeader={setHeader} />
      <AnimatePresence>
        {header && <Menu setHeader={setHeader} />}
      </AnimatePresence>
      <div
        className={`container mx-auto px-8 lg:px-16 xl:px-20  flex flex-col ${
          header ? "hidden" : "block"
        }`}
      >
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
    </AnimateSharedLayout>
  );
}
