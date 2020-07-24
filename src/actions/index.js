export const selectUser = (user) => {
  return {
    type: 'HOTEL_SELECTED',
    payload: user,
  };
};

export const changeSearchString = (searchString) => {
  return {
    type: 'SEARCH_STRING_CHANGED',
    payload: searchString,
  };
};
