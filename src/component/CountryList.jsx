import React, { useEffect, useState } from "react";

import Card from "./Card";

function CountryList({ filterData, country }) {
  return (
    <div className="container">
      <h1>CountryList</h1>
      <div className="countryList">
        {filterData.map((item, index) => {
          return (
            <Card
              key={`id is ${item.name}`}
              name={item.name}
              flag={item.flag}
              population={item.population}
              region={item.region}
              capital={item.capital}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CountryList;
