import React, { useReducer } from "react";

const initialState = {
  isLogin: false,
};

const reducer = (state, action) => {

  switch (action.type) {

    case "LOGIN":
      return {
        isLogin: true,
      };

    case "LOGOUT":
      return {
        isLogin: false,
      };

    default:
      return state;
  }
};

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (

    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 gap-6">

      <h1 className="text-3xl font-bold">
        Login Logout App
      </h1>

      <div className="bg-white p-8 rounded-xl shadow-lg text-center w-80">

        <h2 className="text-2xl font-semibold mb-4">

          {state.isLogin
            ? "Welcome User 🎉"
            : "Please Login 🔐"}

        </h2>

        <p className="text-gray-600 mb-6">

          {state.isLogin
            ? "You are successfully logged in."
            : "You are currently logged out."}

        </p>

        <div className="flex justify-center gap-4">

          <button
            onClick={() => dispatch({ type: "LOGIN" })}
            className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Login
          </button>

          <button
            onClick={() => dispatch({ type: "LOGOUT" })}
            className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  );
};

export default App;