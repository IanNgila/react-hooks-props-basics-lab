

import React from "react";

export default function Home({ color, name, city }) {
  return (
    <div id="home">
      <h1 style={{ color }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}



