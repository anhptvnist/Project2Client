import axios from 'axios';
import { LOCAL_SERVER_API } from '../../../env';
import { getStorage } from '../../../config';
import { sendRequest } from '../../../common-components/requestHelper';
// import jwt from 'jsonwebtoken';
export const AuthService = {
    login,
    logout,
    register,
    getUser,
    searchUser,
    getUserByID
};

async function login(user) {
    return sendRequest({
        url: `${ LOCAL_SERVER_API }/auth/login`,
        method: 'POST',
        data: user
    }, false, true)
}
async function logout(user) {
    return sendRequest({
        url: `${ LOCAL_SERVER_API }/auth/logout`,
        method: 'POST',
        data: user,
    }, false, true);
}
async function register(user){
    return sendRequest({
        url: `${ LOCAL_SERVER_API }/auth/register`,
        method: 'POST',
        data: user,
    }, false, true)
}
async function getUser(){
    return sendRequest({
        url: `${ LOCAL_SERVER_API }/admin/user`,
        method: 'GET',
    }, false, true);
}
async function searchUser(role){
    return sendRequest({
        url: `${ LOCAL_SERVER_API }/admin/searchuser/${role}`,
        method: 'GET',
    }, false, true);
}
async function getUserByID(id){
    return sendRequest({
        url: `${ LOCAL_SERVER_API }/auth/getuserbyid/${id}`,
        method: 'GET',
    }, false, true);
}