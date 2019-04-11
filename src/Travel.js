// src/Travel.js
import React from "react";

const Travel = ({ destination, country, photo, distance }) => (  //prop esel 1er argumento de una funcion 
  <figure>
    <h2>Travel.js:{destination}, {country}</h2>
    <img src={photo} />
    <p>Distance: {distance} km</p>
  </figure>
);

export default Travel;