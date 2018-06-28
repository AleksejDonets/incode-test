const initialState = {
    
    users: [],
    activeUser: null
}


const userReducer = function(state = initialState, action){
    switch(action.type){
        case 'LOAD_USER':
            return Object.assign({}, state, {users: action.users})
        default:
            return state
    }
    
}

export default userReducer