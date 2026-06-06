import React, { useReducer, useState } from "react";

const initialState = {
  todos: [],
  editIndex: null,
  editValue: "",
};

const reducer = (state, action) => {

  switch (action.type) {

    // ADD TODO
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    // DELETE TODO
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter(
          (_, index) => index !== action.payload
        ),
      };

    // SET EDIT
    case "SET_EDIT":
      return {
        ...state,
        editIndex: action.payload.index,
        editValue: action.payload.value,
      };

    // UPDATE TODO
    case "UPDATE_TODO":

      const updatedTodos = state.todos.map((todo, index) =>
        index === state.editIndex ? action.payload : todo
      );

      return {
        ...state,
        todos: updatedTodos,
        editIndex: null,
        editValue: "",
      };

    default:
      return state;
  }
};

const App = () => {

  const [input, setInput] = useState("");

  const [state, dispatch] = useReducer(reducer, initialState);

  // ADD
  const handleAdd = () => {
    if (input.trim() === "") return;

    dispatch({
      type: "ADD_TODO",
      payload: input,
    });

    setInput("");
  };

  // UPDATE
  const handleUpdate = () => {
    if (state.editValue.trim() === "") return;

    dispatch({
      type: "UPDATE_TODO",
      payload: state.editValue,
    });
  };

  return (

    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold mb-8">
        FULL CRUD Todo App 📝
      </h1>

      {/* INPUT SECTION */}
      <div className="flex gap-4 mb-8">

        <input
          className="border px-4 py-2 rounded-lg w-72"
          value={state.editIndex !== null ? state.editValue : input}
          placeholder="Enter todo"
          onChange={(e) =>
            state.editIndex !== null
              ? dispatch({
                  type: "SET_EDIT",
                  payload: {
                    index: state.editIndex,
                    value: e.target.value,
                  },
                })
              : setInput(e.target.value)
          }
        />

        {state.editIndex !== null ? (
          <button
            onClick={handleUpdate}
            className="bg-yellow-500 text-white px-6 py-2 rounded-lg"
          >
            Update
          </button>
        ) : (
          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg"
          >
            Add
          </button>
        )}

      </div>

      {/* LIST */}
      <div className="w-full max-w-md space-y-4">

        {state.todos.map((todo, index) => (

          <div
            key={index}
            className="flex justify-between items-center bg-white p-4 rounded-lg shadow"
          >

            <h2>{todo}</h2>

            <div className="flex gap-2">

              <button
                onClick={() =>
                  dispatch({
                    type: "SET_EDIT",
                    payload: { index, value: todo },
                  })
                }
                className="bg-green-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>

              <button
                onClick={() =>
                  dispatch({
                    type: "DELETE_TODO",
                    payload: index,
                  })
                }
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default App;