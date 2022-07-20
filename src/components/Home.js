import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  const style={color:"firebrick"}
  return( 
    <div id="home"> Home
    <h1 style={style}> Your{name} is a Web Developer from Your {city}</h1>
  </div>
  );
}

export default Home;
