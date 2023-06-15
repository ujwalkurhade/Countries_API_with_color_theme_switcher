import React, { useEffect, useState } from "react";
import data from "../data.json";
import Card from "./Card";

function CountryList({ value }) {
  const [country, setcountry] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    setcountry(data);
  }, []);

  setFilterData(
    country.filter((data) =>
      data.name.toLowerCase().includes(value.toLowerCase())
    )
  );

  return (
    <div className="container">
      <h1>CountryList</h1>
      <div className="countryList">
        {country.map((item, index) => {
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
