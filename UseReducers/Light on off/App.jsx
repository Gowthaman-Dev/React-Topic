import React, { useReducer } from "react";

const initialState = {
  isOn: false,
};

const reducer = (state, action) => {

  switch (action.type) {

    case "TURN_ON":
      return {
        isOn: true,
      };

    case "TURN_OFF":
      return {
        isOn: false,
      };

    default:
      return state;
  }
};

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (

    <div className="flex flex-col items-center justify-center h-screen gap-6 bg-gray-100">

      <h1 className="text-3xl font-bold">
        Light ON/OFF App
      </h1>

      <div
        className={`w-40 h-40 rounded-full transition-all duration-300 ${
          state.isOn
            ? "bg-yellow-400 shadow-[0_0_40px_yellow]"
            : "bg-gray-500 shadow-[0_0_20px_gray]"
        }`}
      ></div>

      <h2 className="text-2xl font-semibold">
        {state.isOn ? "Light ON 💡" : "Light OFF ⚫"}
      </h2>

      <div className="flex gap-4">

        <button
          onClick={() => dispatch({ type: "TURN_ON" })}
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          ON
        </button>

        <button
          onClick={() => dispatch({ type: "TURN_OFF" })}
          className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          OFF
        </button>

      </div>

    </div>
  );
};

export default App;