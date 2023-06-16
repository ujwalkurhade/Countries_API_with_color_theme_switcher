import React, { useEffect, useState } from "react";
import CountryList from "./CountryList";
import Header from "./Header";
import axios from "axios";

function Home() {
  const [value, setValue] = useState("");
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonblob.com/api/1119106135625056256")
      .then((res) => setFilterData(res.data));
  }, []);

  const handelChange = (e) => {
    setValue(e.target.value);
    setFilterData(
      filterData.filter(
        (data) =>
          data.name
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          data.region
            .toLowerCase()
            .includes(value.toLowerCase())
      )
    );
    console.log(filterData);
  };

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
            on
            onChange={handelChange}
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
      {<CountryList filterData={filterData} />}
    </div>
  );
}

export default Home;
