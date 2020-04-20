import * as APIUtil from "../util/session_api_util";
import jwt_decode from 'jwt-decode';

export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";

export const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
});

export const logout = () => despatch => {
    localStorage.removeItem('jwtToken');

    APIUtil.setAuthToken(false);
    dispatchEvent(logoutUser());
}