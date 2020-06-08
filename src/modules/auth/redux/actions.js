import { AuthService } from "./services";
import { AuthConstants } from "./constants";
import { setStorage, clearStorage } from '../../../config';

export const AuthActions = {
    login,
    logout,
}
function login(user){
    console.log("====", user);
    return dispatch => {
        dispatch({type: AuthConstants.LOGIN_REQUEST});
        AuthService.login(user)
            .then(res => {
                setStorage('jwt', res.data.content.token);
                setStorage('userId', res.data.content.user._id);
                if(res.data.content.user.role  != null) 
                    setStorage('currentRole', res.data.content.user.role);
                dispatch({
                    type: AuthConstants.LOGIN_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({type: AuthConstants.LOGIN_FAILE});
            })
    }
};


function logout(){
    // localStorage.clear();
    return dispatch => {
        dispatch({type: AuthConstants.LOGOUT_REQUEST});
        AuthService.logout()
            .then(res => {
                // Do sẽ reset localStorage và redux, không cần gọi dispatch({type: AuthConstants.LOGOUT_SUCCESS});
                clearStorage();
                dispatch({
                type: 'RESET_APP'
            })
        })
            .catch(err => {
                dispatch({type: AuthConstants.LOGOUT_FAILE});
            })
    }
}


