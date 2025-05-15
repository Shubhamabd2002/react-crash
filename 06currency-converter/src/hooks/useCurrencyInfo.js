import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      "https://latest.currency-api.pages.dev/v1/currencies/${currency}.json"
    ).then((res) => {
      setData(res.json()[currency]);
      console.log("🚀 ~ useEffect ~ res:", res.json());
      console.log("🚀 ~ useCurrencyInfo ~ data:", data);
    });
  }, [currency]);
  return data;
};

export default useCurrencyInfo;
