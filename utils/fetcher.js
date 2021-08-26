import axios from "axios";

export const fetcher = axios.create({
  baseURL: "https://pro-api.coinmarketcap.com/v1/cryptocurrency",

  headers: {
    "X-CMC_PRO_API_KEY": process.env.CMC_API_KEY,
    "Accept-Encoding": "deflate, gzip",
    Accept: "application/json",
  },
});
