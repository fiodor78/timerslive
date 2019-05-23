import { userConstants } from '../constants/Constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user.username,
                password: action.user.password,
                errors: {}
            };
        case userConstants.LOGIN_SUCCESS:
            console.log("SUCCESS", action);
            return {
                loggingIn: true,
                user: action.user.username,
                password: action.user.password,
                authorization_code: action.user.authorization_code,
                expires_at: action.user.expires_at

            };
        case userConstants.LOGIN_FAILURE:
            return {
                loggingIn: false,
                password: '',
                errors : action.error
            };
        case userConstants.LOGOUT:
            return {
                password: '',
                loggingIn: false
            };
        default:
            return state
    }
}