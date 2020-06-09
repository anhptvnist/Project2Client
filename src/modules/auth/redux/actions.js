import { AuthService } from "./services";
import { AuthConstants } from "./constants";
import { setStorage, clearStorage } from '../../../config';

export const AuthActions = {
    login,
    logout,
    register,
    getUser,
    searchUser
}
function login(user) {

    return dispatch => {
        dispatch({ type: AuthConstants.LOGIN_REQUEST });
        AuthService.login(user)
            .then(res => {
                setStorage('jwt', res.data.content.token);
                setStorage('userId', res.data.content.user._id);
                if (res.data.content.user.role != null)
                    setStorage('currentRole', res.data.content.user.role);
                dispatch({
                    type: AuthConstants.LOGIN_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({ type: AuthConstants.LOGIN_FAILURE });
            })
    }
};


function logout() {
    // localStorage.clear();
    return dispatch => {
        dispatch({ type: AuthConstants.LOGOUT_REQUEST });
        AuthService.logout()
            .then(res => {
                // Do sẽ reset localStorage và redux, không cần gọi dispatch({type: AuthConstants.LOGOUT_SUCCESS});
                clearStorage();
                dispatch({
                    type: 'RESET_APP'
                })
            })
            .catch(err => {
                dispatch({ type: AuthConstants.LOGOUT_FAILURE });
            })
    }
}

function register(user) {
    return dispatch => {
        dispatch({ type: AuthConstants.REGISTER_REQUEST });
        AuthService.register(user)
            .then(res => {
                dispatch({
                    type: AuthConstants.REGISTER_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({ type: AuthConstants.REGISTER_FAILURE });
            })
    }
};

function getUser() {
    return dispatch => {
        dispatch({ type: AuthConstants.GET_USER_REQUEST });
        AuthService.getUser()
            .then(res => {
                dispatch({
                    type: AuthConstants.GET_USER_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({ type: AuthConstants.GET_USER_FAILURE });
            })
    }
};

function searchUser(role) {
    return dispatch => {
        dispatch({ type: AuthConstants.SEARCH_USER_REQUEST });
        AuthService.searchUser(role)
            .then(res => {
                dispatch({
                    type: AuthConstants.SEARCH_USER_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({ type: AuthConstants.SEARCH_USER_FAILURE });
            })
    }
};