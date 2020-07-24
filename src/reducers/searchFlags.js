export const initialState = {
  searchString: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SEARCH_STRING_CHANGED':
      return { ...state, searchString: action.payload };

    default:
      return state;
  }
}
