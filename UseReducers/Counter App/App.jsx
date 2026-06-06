import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {

  switch (action.type) {

    case "increment":
      return {
        count: state.count + 1,
      };

    case "decrement":
      return {
        count: state.count - 1,
      };

    case "reset":
      return {
        count: 0,
      };

    default:
      return state;
  }
};

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "20px",
      }}
    >

      <h1>useReducer Counter App</h1>

      <h2>{state.count}</h2>

      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >

        <button
          onClick={() => dispatch({ type: "increment" })}
        >
          Increment
        </button>

        <button
          onClick={() => dispatch({ type: "decrement" })}
        >
          Decrement
        </button>

        <button
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>

      </div>

    </div>
  );
};

export default App;