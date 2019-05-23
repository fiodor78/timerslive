import { userConstants } from '../constants/Constants'
//import { alertActions } from './AlertActions';
import { userService } from '../services/UserService';
import { history } from '../helpers/History';

export const userActions = {
    login,
    logout,
    register,
    getAll,
    delete: _delete
};

function login(username, password) {

    return dispatch => {

        // dispatch(alertActions.clear());
        dispatch(request({ username, password }));

        userService.login(username, password)
            .then(
                user => {
                    const { authorization_code, expires_at } = user.data;
                    const userdata = { authorization_code, expires_at, username, password };
                    dispatch(success(userdata));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    //dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(username, password) {
    return dispatch => {
        dispatch(request(username, password));

        userService.register(username, password)
            .then(
                user => {
                    console.log("Registered", user);
                    //dispatch(success());
                    dispatch(login(username, password));
                    //history.push('/login');
                    //dispatch(alertActions.success('Registration successful'));
                },
                errors => {
                    dispatch(failure(errors));
                    //dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(username, password) { return { type: userConstants.REGISTER_REQUEST, username, password } }
    //function success(username) { return { type: userConstants.REGISTER_SUCCESS, username } }
    function failure(errors) { return { type: userConstants.REGISTER_FAILURE, errors } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        userService.delete(id)
            .then(
                //user => dispatch(success(id)),
                () => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}