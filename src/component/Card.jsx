import React, { useEffect, useState } from "react";

function Card({
  name,
  flag,
  population,
  region,
  capital,
}) {
  //   console.log("name is", name);
  //   console.log("flag is", flag);
  //   console.log("population is", population);
  //   console.log("region is", region);
  //   console.log("capital is", capital);
  return (
    <div className="country">
      <div className="">
        <img src={flag} alt={`country is ${name}`} />
      </div>
      <div className="countryData">
        <h3>{name}</h3>
        <div>
          <p>
            <strong>Population: </strong>
            &nbsp; {population}
          </p>
          <p>
            <strong>Region: </strong>
            &nbsp;{region}
          </p>
          <p>
            <strong>Capital: </strong>
            &nbsp; {capital}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
