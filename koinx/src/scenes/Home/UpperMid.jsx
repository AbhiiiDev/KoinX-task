import React, { useEffect, useState } from "react";
import ChartContainer from "../../Components/ChartContainer";
import TrendingCoins from "../../Components/TrendingCoins";

const UpperMid = () => {
  const [bitCoin, setBitcoin] = useState({});


  const fetchData = async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    );

    const data = await response.json();
    await setBitcoin(data);

    console.log(bitCoin);
  };

  const fetchTrendingCoings = async () => {
    const respnonse = await fetch(
      "https://api.coingecko.com/api/v3/search/trending",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      }
    );
    if (respnonse.ok) {
      const coins = await respnonse.json();

      console.log(coins.coins);
    } else throw new Error("failed to fetch trend coins");
  };

  useEffect(() => {
    fetchData();

  }, []);

  return (
    <div className="mx-10">
      <div className="mt-2">
        <span className="font-light"> Cryptocurrencies </span> &gt;&gt;
        <span className="font-semibold">Bitcoin</span>
      </div>
      <div className="flex mt-3">
        <div className="bg-white rounded-md p-3 ">
          <img
            className="h-5 w-5 inline my-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"
            alt=""
          />{" "}
          <span className="font-bold text-lg">Bitcoin</span>{" "}
          <span className="font-light">BTC</span>
          <span className="ml-3 bg-gray-400 text-lg  rounded-md"> Rank #1</span>
          <div className="mt-2">
            <span className="font-semibold text-lg">$ 43000</span>
            <p className="mt-0 tex-sm font-light">43,000</p>
          </div>
          <hr className="my-3" />
          <span>Bitcoin Price Chart(USD)</span>
          <ChartContainer />
        </div>
        <div className="ml-4 mr-4">
          <div className="hidden sm:block  bg-blue-700 text-white rounded-md h-96 w-80">
            <h4 className="text-center font-bold mt-4 text-2xl p-2 px-3">
              Get started with KoinX for FREE
            </h4>
          </div>
          <TrendingCoins/>
        </div>
      </div>
    </div>
  );
};

export default UpperMid;
