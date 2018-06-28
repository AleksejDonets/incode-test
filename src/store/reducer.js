const initialState = {
    loading: false,
    users: []
}

const userReducer = function(state = initialState, action){
    switch(action.type){
        case 'LOAD_USER':
            return Object.assign({}, state, {users: action.users, loading: true})
        default:
            return state
    }
    
}

export default userReducer