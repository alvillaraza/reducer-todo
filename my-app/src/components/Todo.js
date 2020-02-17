import React, { useReducer } from 'react';
import { todoReducer, initialState } from '../reducers/reducer';

const Todo = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <div>
            <h1>
                {state.item}
            </h1>
        </div>
    )
}

export default Todo;