import React, { useState, useReducer } from "react";
import { todoReducer, initialState } from "../reducers/reducer";

import "./Todo.css";

const Todo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const [newTodo, setNewTodo] = useState("");
  // const [complete, setComplete] = useState('');

  const handleChanges = e => {
    setNewTodo(e.target.value);
  };

  return (
    <div>
      <h1>
        {state.map(i => {
          return (
            <div key={i.id} className="todo-list-item">
              <i
                className={`${
                  i.completed
                    ? "completed-check"
                    : "not-completed-check"
                } fa fa-check`}
                aria-hidden="true"
              />

              <span
                onClick={() => {
                  dispatch({ type: "TOGGLE_COMPLETE", payload: i });
                }}
              >
                {i.text}
              </span>
            </div>
          );
        })}
      </h1>

      <input
        type="text"
        name="newTodo"
        value={newTodo}
        onChange={handleChanges}
      />

      <button
        onClick={() => dispatch({ type: "UPDATE_TODO", payload: newTodo })}
      >
        Add Todo Item
      </button>

         
      <button
        onClick={() => {
          dispatch({ type: "CLEAR_TODO"});
        }}
      >
        Clear Completed
      </button>
              
          
    
    </div>
  );
};

export default Todo;
