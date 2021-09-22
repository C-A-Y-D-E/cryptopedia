import "styles/global.css";
import "styles/nprogress.css";
import { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import NProgress from "nprogress";
import Router from "next/router";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Menu from "components/Menu";
import Header from "components/Header";
import Head from "next/head";
Router.onRouteChangeStart = (url) => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();

Router.onRouteChangeError = () => NProgress.done();
function MyApp({ Component, pageProps }) {
  const [header, setHeader] = useState(false);
  return (
    <AnimateSharedLayout>
      <Header setHeader={setHeader} />
      <AnimatePresence>
        {header && <Menu setHeader={setHeader} />}
      </AnimatePresence>
      <Component {...pageProps} />
    </AnimateSharedLayout>
  );
}

export default MyApp;
