import React from "react";
import Image from "next/image"; // Assuming you're using Next.js

const Hero = ({ commodityName, variety, lastUpdate, price, unit }) => {
  const priceColor =
    price >= 1000
      ? "text-red-500"
      : price >= 500
      ? "text-yellow-500"
      : "text-green-500";

  return (
    <div className="bg-white text-black p-12 rounded-xl mx-auto mt-8 shadow-2xl max-w-screen-md">
      <div className="text-4xl font-extrabold mb-4 border-b-4 border-yellow-400 pb-2">
        {commodityName}
      </div>
      <div className="text-xl mb-6">Variety: {variety}</div>
      <div className="flex items-center justify-between">
        <div className="text-gray-500">Last Update: {lastUpdate.split(" ")[0]}</div>
      </div>

      <div className="flex items-end mt-8">
        <span className={`text-7xl font-extrabold mr-4 ${priceColor}`}>
          {price}
        </span>
        <span className="text-base mb-3 text-gray-700">per {unit}</span>
      </div>

      {/* Round Image of Onion at the Bottom */}
      <div className="flex justify-center mt-8">
        <Image
          src="/onion.jpg" // Path to your onion image
          alt="Onion"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Hero;
