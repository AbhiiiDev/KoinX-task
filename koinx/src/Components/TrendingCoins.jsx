import { useState, useEffect } from 'react';

const TrendingCoins = () => {
  const [trendCoins, setTrendCoins] = useState([]);

  const fetchTrendingCoins = async () => {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/search/trending',
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
        }
      );
      if (response.ok) {
        const coins = await response.json();
        setTrendCoins(coins.coins);
      } else {
        throw new Error('Failed to fetch trend coins');
      }
    } catch (error) {
      console.error('Error fetching trend coins:', error);
    }
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, []);

  return (
    <div className="bg-white mt-3 rounded-md p-3  md:w-[427px] md:h-[225px] lg:w-[406px] lg:h-[300px]">
      <h3 className="font-bold text-lg">Trending coins (24h)</h3>
      <ul className="mt-4">
        {trendCoins.slice(0, 3).map((item) => (
          <div key={item?.item?.id} className="md:flex md:items-center md:justify-between">
            <li className="flex items-center my-4">
              <img src={item.item.small} className="h-6 w-6 mr-2" alt={`${item.item.name} icon`} />
              <span className="font-semibold">{item.item.name}</span>
              <div>
                {item.item.data.price_change_percentage_24h.usd < 0 ? (
                  <span className="bg-red-300 rounded-md text-red-600 px-2 py-1 ml-2">
                    <i className="fas fa-arrow-down"></i>{' '}
                    {item.item.data.price_change_percentage_24h.usd.toFixed(2)}%
                  </span>
                ) : (
                  <span className="bg-green-300 rounded-md text-green-600 px-2 py-1 ml-2">
                    {item.item.data.price_change_percentage_24h.usd.toFixed(2)}%
                  </span>
                )}
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TrendingCoins;
