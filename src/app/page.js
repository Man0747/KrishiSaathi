"use client";
import React, { useState } from "react";
import Hero from "./_component/Hero";
import Navbar from "./_component/Navbar";
import TopMarkets from "./_component/TopMarkets";
import MarketMap from "./_component/MarketMap";
import { ContainerWithChildren } from "postcss/lib/container";
import { Chart } from "./_component/Chart";
import MLTable from "./_component/MLTable";

export default function Home() {
  const [selectedCommodityData, setSelectedCommodityData] = useState(null);
  const [topMarkets, setTopMarkets] = useState([]);

  const handleCommoditySelect = (commodityData) => {
    setSelectedCommodityData(commodityData);
  };

  const handleFilterChange = ({ filtered, topRated }) => {
    const selectedMarket = selectedCommodityData?.Market;

    // Filter out the selected market
    const otherMarkets = filtered.filter(
      (item) => item.Market !== selectedMarket
    );

    // Sort the remaining markets by Modal_Price and take the top 5
    const topMarkets = topRated
      ? topRated
          ?.sort((a, b) => b.Modal_Price - a.Modal_Price)
          .slice(0, 5)
          .map((item) => ({
            name: item.Market,
            price: item.Modal_Price,
            state: item.State,
            district: item.District,
          }))
      : [];

    setTopMarkets(topMarkets);
  };

  return (
    <div>
      <Navbar
        onCommoditySelect={handleCommoditySelect}
        onFilterChange={handleFilterChange}
      />
      <div className="flex w-3/4 mx-auto">
        <div className="flex-1 p-4">
          {selectedCommodityData && (
            <Hero
              commodityName={selectedCommodityData.Commodity}
              variety={selectedCommodityData.Variety}
              lastUpdate={selectedCommodityData.Arrival_Date}
              price={selectedCommodityData.Modal_Price}
              unit="Quintal"
            />
          )}
        </div>
        <div className="flex-1 p-4">
          {topMarkets.length > 0 && (
            <TopMarkets
              title={`Top 5 Markets for ${
                selectedCommodityData?.Commodity || "Commodity"
              }`}
              markets={topMarkets}
              priceLabel="Price"
            />
          )}
        </div>
      </div>
      <div
        className="flex w-3/4 gap-2 mx-auto bg-white shadow-custom-shadow rounded-2xl"
        style={{ paddingRight: "20px" }}
      >
        <MLTable />
        <MarketMap />
      </div>
      <div
        className="flex w-3/4 gap-2 mx-auto my-6 bg-white shadow-custom-shadow rounded-2xl"
        style={{ paddingRight: "20px" }}
      >
        <Chart />
      </div>
    </div>
  );
}
