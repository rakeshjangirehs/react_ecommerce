import userActionTypes from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    error: null,
}

const userReducer = (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case userActionTypes.SIGN_IN_SUCCESS :
            return {
                ...state,
                currentUser: action.payload,
                error: null,
            }
        break;
        case userActionTypes.SIGN_OUT_SUCCESS :
            return {
                ...state,
                currentUser: null,
                error: null,
            }
        break;
        case userActionTypes.SIGN_IN_FAILURE:
        case userActionTypes.SIGN_OUT_FAILURE:
        case userActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                error: action.payload,
            }
        break;
        /* case userActionTypes.SET_CURRENT_USER :
            return {
                ...state,
                currentUser: action.payload,
            } */
        default:
            return state;
    }
}

export default userReducer;