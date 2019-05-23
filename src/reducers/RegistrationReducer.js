import { userConstants } from '../constants/Constants';

export function registration(state = {}, action) {
    switch (action.type) {
        case userConstants.REGISTER_REQUEST:
            return { registering: true };
        case userConstants.REGISTER_SUCCESS:
            return {};
        case userConstants.REGISTER_FAILURE:
            return {
                registering: false,
                errors: action.errors
            };
        default:
            return state
    }
}