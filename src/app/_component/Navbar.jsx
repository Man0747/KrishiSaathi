"use client";
import React, { useState, useEffect } from "react";
import commodityData from "../../../data/csvjson.json"; // Import the JSON file instead of CSV
import Select from "react-select";
import Image from "next/image";

function Navbar({ onCommoditySelect, onFilterChange }) {
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedMarket, setSelectedMarket] = useState("");
  const [filteredCommodities, setFilteredCommodities] = useState([]);
  const [selectedCommodity, setSelectedCommodity] = useState(null);

  // Process the JSON data on component mount
  useEffect(() => {
    setFilteredCommodities(commodityData);
  }, []);

  // Get unique states from the JSON data
  const states = [...new Set(commodityData.map((item) => item.State))];
  
  // Get unique districts based on the selected state
  const districts = selectedState
    ? [
        ...new Set(
          commodityData
            .filter((item) => item.State === selectedState)
            .map((item) => item.District)
        ),
      ]
    : [];

  // Get unique markets based on the selected district
  const markets = selectedDistrict
    ? [
        ...new Set(
          commodityData
            .filter((item) => item.District === selectedDistrict)
            .map((item) => item.Market)
        ),
      ]
    : [];

  // Filter commodities based on selected state, district, and market
  useEffect(() => {
    if (selectedState && selectedDistrict && selectedMarket) {
      const filtered = commodityData.filter(
        (item) =>
          item.State === selectedState &&
          item.District === selectedDistrict &&
          item.Market === selectedMarket
      );

      setFilteredCommodities(filtered);
      onFilterChange({ filtered });
    } else {
      setFilteredCommodities([]);
      onFilterChange({ filtered: [] });
    }
  }, [selectedState, selectedDistrict, selectedMarket, onFilterChange]);

  // Generate options for the commodity dropdown based on the filtered commodities
  const commodityOptions = filteredCommodities.map((item) => ({
    value: item,
    label: `${item.Commodity} - ${item.Variety} (${item.Grade})`,
  }));

  // Handle commodity selection
  const handleCommodityChange = (selectedOption) => {
    setSelectedCommodity(selectedOption);
    onCommoditySelect(selectedOption ? selectedOption.value : null);
  };

  return (
    <nav className="sticky top-0 z-10 bg-white shadow-2xl backdrop-filter backdrop-blur-2xl bg-opacity-10 border-slate-800">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <a href="/" className="flex items-center gap-3">
          <Image
            src="/KrishiSaathiLogo.png"
            alt="Krishi Saathi Logo"
            height={45}
            width={45}
            className="w-10 h-10 lg:w-14 lg:h-14"
          />
          <span className="text-xl font-semibold text-black lg:text-3xl krishi-saathi-text ">
            Krishi Saathi
          </span>
        </a>

        <div className="w-full md:w-auto md:order-1 md:flex">
          <ul className="flex flex-col items-center md:flex-row md:space-x-8">
            <div className="flex items-center space-x-4 text-black">
              {/* Add your links here */}
            </div>

            <div className="flex space-x-4">
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="block p-2 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" disabled>
                  Select State
                </option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>

              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="block p-2 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                disabled={!selectedState}
              >
                <option value="" disabled>
                  Select District
                </option>
                {districts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>

              <select
                value={selectedMarket}
                onChange={(e) => setSelectedMarket(e.target.value)}
                className="block p-2 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                disabled={!selectedDistrict}
              >
                <option value="" disabled>
                  Select Market
                </option>
                {markets.map((market) => (
                  <option key={market} value={market}>
                    {market}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex space-x-4">
              <Select
                options={commodityOptions}
                placeholder="Select Commodity"
                isClearable
                value={selectedCommodity}
                onChange={handleCommodityChange}
                className="w-full text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
