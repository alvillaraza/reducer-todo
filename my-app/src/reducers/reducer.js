export const initialState = {
    editing: false,
    item: ['Learn about reducers'],
    completed: false,
    id: 3892987589
      
}

export const todoReducer = (state, action) => {
    console.log(action);
    switch (action.type) {
       
        case 'UPDATE_TODO':
            return {
                ...state,
                item: [...state.item, action.payload],
                editing: false,
                id: newDate()
            };
            default:    
            return state; 
    }
}