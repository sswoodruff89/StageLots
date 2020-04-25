import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_LOGOUT,
  RECEIVE_USER_SIGN_IN,
} from "../../actions/session_actions";

const initialState = {
    isAuthenticated: false,
    user: null
}

export default (state = initialState, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            let session = {
                isAuthenticated: !!action.user,
                user: action.user
            };
            return Object.assign({}, state, session);
        case RECEIVE_USER_LOGOUT:
            return {
                isAuthenticated: false,
                user: null
            };
        default:
            return state;
    }
}