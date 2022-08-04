export const searchReducer = (state = { text: '' }, action) => {
  switch (action.type) {
    case 'SEARCH_QUERY':
      return { ...state, ...action.payload }; //the payload is the text we want to search
    default:
      return state;
  }
};
