export const initialState = [
  {
    text: "Learn about reducers",
    id: 3892987589,
    completed: false
  },
  {
    text: "Learn about",
    id: 3892987587,
    completed: false
  }
];

export const todoReducer = (state, action) => {
  console.log("state: ", state, "action: ", action);
  switch (action.type) {
    case "UPDATE_TODO":
      return [
        ...state,
        {
          text: action.payload,
          id: Date.now(),
          completed: false
        }
      ];

    case "TOGGLE_COMPLETE":
      // Find the associated item, then mark it as complete

      // Find the object in the current state
      state.forEach(i => {
        // console.log("Show i and action.payload", i, action.payload);

        // Does each object match the current payload?
        if (i.id === action.payload.id) { // action.payload.id is what you clicked on exactly
          // If so, change the completed
          //   console.log(i, action.payload, "Match!");
          i.completed = !i.completed;
        }
      });

      return [...state];

    case "CLEAR_TODO":
      state = state.filter(i => !i.completed);

    default:
      return state;
  }
};
