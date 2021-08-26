import ETH from "content/eth.mdx";
import BTC from "content/btc.mdx";
import DOT from "content/dot.mdx";
import BNB from "content/bnb.mdx";
import USDT from "content/usdt.mdx";
import USDC from "content/usdc.mdx";
import XRP from "content/xrp.mdx";
import ADA from "content/ada.mdx";
import DOGE from "content/doge.mdx";
import SOL from "content/sol.mdx";
import { MDXProvider } from "@mdx-js/react";
import { useRouter } from "next/router";
const components = {
  pre: (props) => <div {...props} />,
  code: (props) => <pre style={{ color: "tomato" }} {...props} />,
  h4: (props) => <h4 style={{ marginTop: "2.5rem" }} {...props} />,
  h5: (props) => (
    <h4 style={{ marginTop: "2.5rem", fontSize: "1.2rem" }} {...props} />
  ),
  p: (props) => <p style={{ marginTop: "1.25rem" }} {...props} />,
};

const info = (id) => {
  switch (id) {
    case "1":
      return <BTC />;
    case "1027":
      return <ETH />;
    case "2010":
      return <ADA />;
    case "1839":
      return <BNB />;
    case "825":
      return <USDT />;
    case "52":
      return <XRP />;
    case "74":
      return <DOGE />;
    case "3408":
      return <USDC />;
    case "6636":
      return <DOT />;
    case "5426":
      return <SOL />;

    default:
      return <BTC />;
  }
};

const Information = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <MDXProvider components={components}>
      <main>{info(id)}</main>

      {/* <h4 className="mt-10">What Is Bitcoin (BTC)?</h4>
        <p className="mt-5 text-base">
          Bitcoin is a decentralized cryptocurrency originally described in a 2008
          whitepaper by a person, or group of people, using the alias Satoshi
          Nakamoto. It was launched soon after, in January 2009.
        </p>
  
        <p className="mt-5 text-base">
          Bitcoin is a peer-to-peer online currency, meaning that all transactions
          happen directly between equal, independent network participants, without
          the need for any intermediary to permit or facilitate them. Bitcoin was
          created, according to Nakamoto’s own words, to allow “online payments to
          be sent directly from one party to another without going through a
          financial institution.”
        </p>
  
        <p className="mt-5 text-base">
          Some concepts for a similar type of a decentralized electronic currency
          precede BTC, but Bitcoin holds the distinction of being the first-ever
          cryptocurrency to come into actual use.
        </p>
  
        <h4 className="mt-10">Who Are the Founders of Bitcoin?</h4>
        <p className="mt-5 text-base">
          Bitcoin’s original inventor is known under a pseudonym, Satoshi
          Nakamoto. As of 2020, the true identity of the person — or organization
          — that is behind the alias remains unknown.
        </p>
  
        <p className="mt-5 text-base">
          On October 31, 2008, Nakamoto published Bitcoin’s whitepaper, which
          described in detail how a peer-to-peer, online currency could be
          implemented. They proposed to use a decentralized ledger of transactions
          packaged in batches (called “blocks”) and secured by cryptographic
          algorithms — the whole system would later be dubbed “blockchain.”
        </p>
  
        <p className="mt-5 text-base">
          Just two months later, on January 3, 2009, Nakamoto mined the first
          block on the Bitcoin network, known as the genesis block, thus launching
          the world’s first cryptocurrency.
        </p>
  
        <p className="mt-5 text-base">
          However, while Nakamoto was the original inventor of Bitcoin, as well as
          the author of its very first implementation, over the years a large
          number of people have contributed to improving the cryptocurrency’s
          software by patching vulnerabilities and adding new features.
        </p>
  
        <p className="mt-5 text-base">
          Bitcoin’s source code repository on GitHub lists more than 750
          contributors, with some of the key ones being Wladimir J. van der Laan,
          Marco Falke, Pieter Wuille, Gavin Andresen, Jonas Schnelli and others.
        </p> */}
    </MDXProvider>
  );
};

export default Information;
