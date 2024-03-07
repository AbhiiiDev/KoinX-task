import React, { useEffect, useState } from "react";

const YouLike = () => {
  const [trendCoins, setTrendCoins] = useState([]);

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
      setTrendCoins(coins.coins);
      console.log(coins.coins);
    } else throw new Error("failed to fetch trend coins");
  };

  useEffect(() => {
    fetchTrendingCoings();
  }, []);

  return (
    <div className="bg-white mt-4 rounded-md h-[528px] p-4 ">
      <div>
        <h1 className="font-semibold text-2xl mt-4 mx-4">You may like</h1>
        <div className="mt-2 flex gap-2 ">
          {trendCoins.slice(0, 6).map((item) => (
            <div key={item.item.id} className="border w-[252px] h-[160px] p-2">
              <div>
                <div className="flex gap-2">
                  <img
                    src={item.item.small}
                    className="w-[26px] h-[26px] rounded-xl"
                  />
                  <span>{item.item.symbol}</span>

                  {item.item.data.price_change_percentage_24h.usd < 0 ? (
                    <span className="bg-red-300 rounded-sm mt-1 text-red-600  h-[15px] w-[43px] text-[12px]">
                      <i className="fas fa-arrow-down"></i>{" "}
                      {"-" +
                        item.item.data.price_change_percentage_24h.usd.toFixed(
                          2
                        )}
                      %
                    </span>
                  ) : (
                    <span className="bg-green-300 rounded-md mt-1 text-green-600 h-[15px] w-[43px] text-[12px]">
                      {"+" +
                        item.item.data.price_change_percentage_24h.usd.toFixed(
                          2
                        )}
                      %
                    </span>
                  )}
                </div>
                <div className="m-4">
                  <span className="font-semibold text-xl">
                    {item.item.data.price}
                  </span>
                  <img src={item.item.data.sparkline} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h1 className="font-semibold text-2xl mt-4 mx-4">Trending Coins</h1>
        <div className="mt-2 flex gap-2 ">
          {trendCoins.slice(6, 12).map((item) => (
            <div key={item.item.id} className="border w-[252px] h-[160px] p-2">
              <div>
                <div className="flex gap-2">
                  <img
                    src={item.item.small}
                    className="w-[26px] h-[26px] rounded-xl"
                  />
                  <span>{item.item.symbol}</span>

                  {item.item.data.price_change_percentage_24h.usd < 0 ? (
                    <span className="bg-red-300 rounded-sm mt-1 text-red-600  h-[15px] w-[43px] text-[12px]">
                      <i className="fas fa-arrow-down"></i>{" "}
                      {
                        item.item.data.price_change_percentage_24h.usd.toFixed(
                          2
                        )}
                      %
                    </span>
                  ) : (
                    <span className="bg-green-300 rounded-md mt-1 text-green-600 h-[15px] w-[43px] text-[12px]">
                      {"+" +
                        item.item.data.price_change_percentage_24h.usd.toFixed(
                          2
                        )}
                      %
                    </span>
                  )}
                </div>
                <div className="m-4">
                  <span className="font-semibold text-xl">
                    {item.item.data.price}
                  </span>
                  <img src={item.item.data.sparkline} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YouLike;
