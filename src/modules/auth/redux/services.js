import axios from 'axios';
import { LOCAL_SERVER_API } from '../../../env';
import { getStorage } from '../../../config';
import { sendRequest } from '../../../common-components/requestHelper';
// import jwt from 'jsonwebtoken';
export const AuthService = {
    login,
    logout
};

async function login(user) {
    return sendRequest({
        url: `${ LOCAL_SERVER_API }/auth/login`,
        method: 'POST',
        data: user
    }, false, true)
}
async function logout() {
    return sendRequest({
        url: `${ LOCAL_SERVER_API }/auth/logout`,
        method: 'GET',
    }, false, true, 'auth');
}