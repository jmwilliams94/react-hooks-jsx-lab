import React from "react";
import { city, name } from '../data/data';

const divStyle = {
  color: "firebrick",
};

function Home() {
  return <div id="home">
    <h1 style={divStyle}> {name} is a Web Developer from {city} </h1>
  </div>;
};

export default Home;
