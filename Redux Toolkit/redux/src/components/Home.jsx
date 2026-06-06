import React from "react";

import { useSelector } from "react-redux";

const Home = () => {

  const fruits = useSelector(
    (state) => state.fruitsInfo.fruits
  );

  console.log(fruits);

  return (

    <div>

      <h1>Fruits List</h1>

      {
        fruits.map((fruit, index) => (
          <h2 key={index}>
            {fruit}
          </h2>
        ))
      }

    </div>

  );
};

export default Home;