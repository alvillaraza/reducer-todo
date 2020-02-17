import React, { useState, useReducer } from 'react';
import { todoReducer, initialState } from '../reducers/reducer';

const Todo = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const [newTodo, setNewTodo] = useState('');

    const handleChanges = e => {
        setNewTodo(e.target.value);
    };

    return (
        <div>
            <h1>
                {state.item.map(i => {
                    return <p>{i}</p>
                })}
            </h1>
       
            <input type='text' name='newTodo' value={newTodo} onChange={handleChanges} />

            <button onClick={() => {
                dispatch({ type: 'UPDATE_TODO', payload: newTodo });
            }}>
                Add Todo Item
            </button>
            
        </div>
    )
}

export default Todo;