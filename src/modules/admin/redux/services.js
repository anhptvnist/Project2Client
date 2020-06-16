import axios from 'axios';
import { LOCAL_SERVER_API } from '../../../env';
import { getStorage } from '../../../config';
import { sendRequest } from '../../../common-components/requestHelper';
// import jwt from 'jsonwebtoken';
export const AdminService = {
    getSubjects,
    createSubjects,
    getSubject,
    createSubject,
    getTern,
    createTern,
    startTern,
    endTern,
    getProfile,
    editProfile,
    getSession,
    createSession,
    startSession,
    endSession,
    deleteSession,
    createClass,
    getClass,
    deleteClass,
    assignment,
    getLecturer,
    getListClassofLec
};

async function getSubjects(){
    return sendRequest({
        url: `${ LOCAL_SERVER_API }/admin/getsubjects`,
        method: 'GET',
    }, false, true);
}

async function createSubjects(subjects){
    return sendRequest({
        url: `${ LOCAL_SERVER_API }/admin/createsubjects`,
        method: 'POST',
        data: subjects,
    }, false, true);
}

async function getSubject(){
    return sendRequest({
        url: `${ LOCAL_SERVER_API }/admin/getsubject`,
        method: 'GET',
    }, false, true);
}

async function createSubject(subject){
    return sendRequest({
        url: `${ LOCAL_SERVER_API }/admin/createsubject`,
        method: 'POST',
        data: subject,
    }, false, true);
}

async function getTern(){
    return sendRequest({
        url: `${ LOCAL_SERVER_API }/admin/gettern`,
        method: 'GET',
    }, false, true);
}

async function createTern(tern){
    return sendRequest({
        url: `${ LOCAL_SERVER_API }/admin/createtern`,
        method: 'POST',
        data: tern,
    }, false, true);
}
async function startTern(id){
    return sendRequest({
        url: `${ LOCAL_SERVER_API }/admin/starttern/${id}`,
        method: 'PUT',
    }, false, true);
}
async function endTern(id){
    return sendRequest({
        url: `${ LOCAL_SERVER_API }/admin/endtern/${id}`,
        method: 'PUT',
    }, false, true);
}

async function getProfile(id){
    return sendRequest({
        url: `${ LOCAL_SERVER_API }/admin/getprofile/${id}`,
        method: 'GET',
    }, false, true);
}
async function editProfile(profile){
    return sendRequest({
        url: `${ LOCAL_SERVER_API }/admin/editprofile`,
        method: 'POST',
        data: profile,
    }, false, true);
}
async function getSession(){
    return sendRequest({
        url: `${ LOCAL_SERVER_API }/admin/getsession`,
        method: 'GET',
    }, false, true);
}

async function createSession(session){
    return sendRequest({
        url: `${ LOCAL_SERVER_API }/admin/createsession`,
        method: 'POST',
        data: session,
    }, false, true);
}

async function startSession(id){
    return sendRequest({
        url: `${ LOCAL_SERVER_API }/admin/startsession/${id}`,
        method: 'PUT',
    }, false, true);
}
async function endSession(id){
    return sendRequest({
        url: `${ LOCAL_SERVER_API }/admin/endsession/${id}`,
        method: 'PUT',
    }, false, true);
}

async function deleteSession(id){
    return sendRequest({
        url: `${ LOCAL_SERVER_API }/admin/deletesession/${id}`,
        method: 'DELETE',
    }, false, true);
}
async function createClass(newclass){
    return sendRequest({
        url: `${ LOCAL_SERVER_API }/admin/createclass`,
        method: 'POST',
        data: newclass,
    }, false, true);
}

async function getClass(){
    return sendRequest({
        url: `${ LOCAL_SERVER_API }/admin/getclass`,
        method: 'GET',
    }, false, true);
}
async function deleteClass(id){
    return sendRequest({
        url: `${ LOCAL_SERVER_API }/admin/deleteclass/${id}`,
        method: 'DELETE',
    }, false, true);
}
async function assignment(id, idtern, idclass){
    return sendRequest({
        url: `${ LOCAL_SERVER_API }/admin/assignment/${id}/${idtern}/${idclass}`,
        method: 'POST',
    }, false, true);
}
async function getLecturer(){
    return sendRequest({
        url: `${ LOCAL_SERVER_API }/admin/getlecturer`,
        method: 'GET',
    }, false, true);
}

async function getListClassofLec(id, idtern){
    return sendRequest({
        url: `${ LOCAL_SERVER_API }/admin/listclassoflec/${id}/${idtern}`,
        method: 'GET',
    }, false, true);
}