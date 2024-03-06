import React,{useState,useEffect} from 'react'

const TrendingCoins = () => {


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

     <div className="bg-white  mt-3 rounded-md p-3 w-[427px] h-[225px]">
            <h3 className="font-bold text-lg ">Trending coins (24h)</h3>
            <ul className="mt-4">
              {trendCoins.slice(0, 3).map((item) => (
                <div key={item?.item?.id} className="">
                  <li className="flex items-center my-4 justify-between">
                    <div className="flex gap-2">
                      <img src={item.item.small} className="h-6 w-6" />
                      <span className="font-semibold mx-1">
                        {item.item.name}
                      </span>
                    </div>
                    <div>
                      {item.item.data.price_change_percentage_24h.usd < 0 ? (
                        <span className="bg-red-300 rounded-md text-red-600">
                          <i className="fas fa-arrow-down"></i>{" "}
                          {item.item.data.price_change_percentage_24h.usd.toFixed(
                            2
                          )}
                          %
                        </span>
                      ) : (
                        <span className="bg-green-300 rounded-md text-green-600">
                          {item.item.data.price_change_percentage_24h.usd.toFixed(
                            2
                          )}
                          %
                        </span>
                      )}
                    </div>
                  </li>
                </div>
              ))}
            </ul>
          </div>

  )
}

export default TrendingCoins
