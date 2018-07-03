export const setActiveUser = index => ({
  index,
  type: 'SET_ACTIVE_USER',
});

export const searchInfo = value => ({
  value,
  type: 'ADD_SEARCH',
});

export const loadUsers = users => ({
  users,
  type: 'LOAD_USER',
});

export const filtredUsers = searchResult => ({
  searchResult,
  type: 'ADD_FILTER_USERS',
});
