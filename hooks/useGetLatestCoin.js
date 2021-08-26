import useSWR from "swr";
import { fetcher } from "utils/fetcher";
export function useGetLatestCoin() {
  const { data, error } = useSWR(
    `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=10`,
    fetcher
  );

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}
