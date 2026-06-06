import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { setFruit } from "./slices/fruitsSlice";

import Home from "./components/Home";

const App = () => {

  // Users State
  const users = useSelector(
    (state) => state.usersInfo.users
  );

  console.log(users);

  // Fruit State
  const [fruit, setFruitInfo] = useState("");

  const dispatch = useDispatch();

  // Add Fruit
  const addFruit = () => {

    if (!fruit) return;

    dispatch(setFruit(fruit));

    setFruitInfo("");
  };

  return (
    <>

      <div>Hello World</div>

      {/* Fruit Input */}
      <div>

        <h1>Contact</h1>

        <input
          type="text"
          placeholder="Enter a Fruit"
          value={fruit}
          onChange={(e) =>
            setFruitInfo(e.target.value)
          }
        />

        <button onClick={addFruit}>
          Add Fruit
        </button>

      </div>

      {/* Router */}
      <BrowserRouter>

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

        </Routes>

      </BrowserRouter>

    </>
  );
};

export default App;