import React, { useState } from "react";
import CountryList from "./CountryList";
import Header from "./Header";

function Home() {
  const [value, setValue] = useState("");
  return (
    <div>
      {/* header */}
      <Header />
      {/* search */}
      <div className="filter">
        <div className="search">
          <input
            placeholder="Search for a country..."
            value={value}
            setValue={(e) => e.target.value}
          />
          <i className="bx bx-search "></i>
        </div>
        {/* dropdown button */}
        <div className="Region">
          <select placeholder="Find by Region">
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>

      {/* Countrys */}
      <CountryList />
    </div>
  );
}

export default Home;
