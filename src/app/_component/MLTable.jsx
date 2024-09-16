import React from "react";

const MLTable = () => {
  const forecastData = [
    { date: "Aug 27", Price: 8900.3 },
    { date: "Aug 28", Price: 5000.9 },
    { date: "Aug 29", Price: 1200.29 },
    { date: "Aug 30", Price: 6800.89 },
    { date: "Aug 31", Price: 4785.41 },
    { date: "Sep 1", Price: 4785.41 },
  ];

  return (
    <div className="flex items-center justify-center w-[500px]">
      <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-semibold text-blue-600">
          Commodity Pricing Plan
        </h2>
        <p className="mb-6 text-sm text-gray-600">
          Future commodity pricing is based on historical data.
        </p>
        <div className="px-4 py-2 mb-6 text-center text-white bg-blue-500 rounded-full">
          Pricing of Commodity
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {forecastData.map((item, index) => (
            <div
              key={index}
              className="p-4 text-center bg-green-100 rounded-lg shadow-md"
            >
              <p className="mb-2 font-medium text-gray-800">{item.date}</p>
              <div className="px-4 py-2 text-lg font-semibold bg-green-300 rounded-lg">
                {item.Price.toFixed(2)}
              </div>
              <p className="mt-2 text-gray-600">INR/100kg</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MLTable;
