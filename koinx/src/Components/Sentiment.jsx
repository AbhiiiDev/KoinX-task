import React from "react";

const Sentiment = () => {
  return (
    <div className="bg-white mx-10 mt-4 rounded-md p-4">
      <h2 className="text-2xl font-semibold">Sentiment</h2>
      <h4>Key Events</h4>
      <div className="flex gap-4">
        <div className="bg-blue-100 rounded-md w-[400px] h-40 text-wrap p-2 flex">
          <img src="anty" alt="img" />
          <p>
            <span className="font-semibold">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel,
              debitis?
            </span>
            <p className="text-sm mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              corporis molestias quis aliquam voluptatibus harum dolorum cum,
              veritatis optio fuga saepe!
            </p>
          </p>
        </div>
        <div className="bg-blue-100 rounded-md w-96 h-40 text-wrap p-2 flex">
          <img src="anty" alt="img" />
          <p>
            <span className="font-semibold">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel,
              debitis?
            </span>
            <p className="text-sm mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              corporis molestias quis aliquam voluptatibus harum dolorum cum,
              veritatis optio fuga saepe!
            </p>
          </p>
        </div>

      </div>
      <div className="mt-5">
        <h4 className="font-semibold mb-3">Analyst Estimates</h4>
         <div className="mt-3">
            <span className="bg-green-200 rounded-full text-xl text-green-500 font-semibold  p-5">
75%
            </span>
         </div>
      </div>
    </div>
  );
};

export default Sentiment;
