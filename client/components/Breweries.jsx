import React from 'react';
import Brewery from './Brewery.jsx';

export default function Breweries({ breweries, showMap }) {
  return (
    <section className="characterCards">
      {breweries
        ? breweries.map((brewery, i) => (
            <Brewery key={i} brewery={brewery} showMap={showMap}></Brewery>
          ))
        : null}
    </section>
  );
}
