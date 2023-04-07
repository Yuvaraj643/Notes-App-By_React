const initialState = {
  notes: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_NOTE':
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            title: action.title,
            content: action.content,
          },
        ],
      };
    case 'REMOVE_NOTE':
      return {
        ...state,
        notes: state.notes.filter((note, index) => index !== action.id),
      };
    case 'UPDATE_NOTE':
      return {
        ...state,
        notes: state.notes.map((note, index) => {
          if (index === action.id) {
            return {
              ...note,
              title: action.title,
              content: action.content,
            };
          } else {
            return note;
          }
        }),
      };
    default:
      return state;
  }
}

export default rootReducer;
