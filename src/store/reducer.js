const initialState = {
    users: [],
    activeUser: [],
    searchQuery: ''
}


const userReducer = function(state = initialState, action){
    switch(action.type){
        case 'LOAD_USER':
            return Object.assign({}, state, {users: action.users})
        case 'SET_ACTIVE_USER':
           return Object.assign({}, state, {
               activeUser: state.users.slice(action.index, action.index + 1)
            })

        case 'ADD_SEARCH': 
            return Object.assign({}, state, {searchQuery: action.value}  )
        default:
            return state
    }
    
}

export default userReducer