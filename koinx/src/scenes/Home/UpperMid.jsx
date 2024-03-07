import { useEffect, useState } from "react";
import ChartContainer from "../../Components/ChartContainer";
import TrendingCoins from "../../Components/TrendingCoins";
import SideComponent from "../../Components/SideComponent";

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

    await setBitcoin(data.bitcoin);

    console.log(bitCoin);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="">
      <div className="mt-2 overflow-hidden">
        <span className="font-light"> Cryptocurrencies </span> &gt;&gt;
        <span className="font-semibold">Bitcoin</span>
      </div>
      <div className="flex mt-3">
        <div className="bg-white rounded-md p-3 w-[881px] h-[711px]">
          <img
            className="h-5 w-5 inline my-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"
            alt=""
          />{" "}
          <span className="font-bold text-lg">Bitcoin</span>{" "}
          <span className="font-light">BTC</span>
          <span className="ml-3 bg-gray-400 text-lg  rounded-md"> Rank #1</span>
          <div className="mt-2">
            <span className="font-semibold text-lg">
              ${bitCoin?.usd?.toLocaleString("en-US")}{" "}
            </span>
            <p className="mt-0 tex-sm font-light">
              {" "}
              ₹{bitCoin?.inr?.toLocaleString("en-US")}
            </p>
          </div>
          <hr className="my-3" />
          <span>Bitcoin Price Chart(USD)</span>
          <div className="w-[881px] h-[776px]">
            <ChartContainer />
          </div>
        </div>
        <div className="hidden lg:block">
        <SideComponent />
        </div>
      </div>
    </div>
  );
};

export default UpperMid;
