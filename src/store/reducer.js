const initialState = {
  users: [],
  activeUser: {},
  searchQuery: '',
};

const userReducer = function (state = initialState, action) {
  switch (action.type) {
    case 'LOAD_USER':
      return Object.assign({}, state, { users: action.users });
    case 'SET_ACTIVE_USER':
      return Object.assign({}, state, { activeUser: action.index });
    case 'ADD_SEARCH':
      return Object.assign({}, state, { searchQuery: action.value });
    case 'ADD_FILTER_USERS':
      return Object.assign({}, state, { searchResult: action.searchResult });
    default:
      return state;
  }
};

export default userReducer;
