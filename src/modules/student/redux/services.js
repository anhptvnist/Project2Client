import axios from 'axios';
import { LOCAL_SERVER_API } from '../../../env';
import { getStorage } from '../../../config';
import { sendRequest } from '../../../common-components/requestHelper';
// import jwt from 'jsonwebtoken';
export const StudentService = {
   getListClassofTern,
   getlistClassofStudent,
   registerClass,
   deleteClass,
   getListClassTernofStudent,
   getPointOfStudent,
   getInfoStudent,
};

async function getListClassofTern(subject){
    return sendRequest({
        url: `${ LOCAL_SERVER_API }/student/listclassofsession/${subject}`,
        method: 'GET',
    }, false, true);
}
async function getlistClassofStudent(id){
    return sendRequest({
        url: `${ LOCAL_SERVER_API }/student/listclassoftern/${id}`,
        method: 'GET',
    }, false, true);
}
async function registerClass(id, idtern, idclass){
    return sendRequest({
        url: `${ LOCAL_SERVER_API }/student/registerclass/${id}/${idtern}/${idclass}`,
        method: 'POST',
    }, false, true);
}

async function deleteClass(id, idtern, idclass){
    return sendRequest({
        url: `${ LOCAL_SERVER_API }/student/deleteclass/${id}/${idtern}/${idclass}`,
        method: 'POST',
    }, false, true);
}

async function getListClassTernofStudent(id, idtern){
    return sendRequest({
        url: `${ LOCAL_SERVER_API }/student/getlistclassoftern/${id}/${idtern}`,
        method: 'GET',
    }, false, true);
}

async function getPointOfStudent (id, idtern){
    return sendRequest({
        url: `${ LOCAL_SERVER_API }/student/getpoint/${id}/${idtern}`,
        method: 'GET',
    }, false, true);
}

async function getInfoStudent (id){
    return sendRequest({
        url: `${ LOCAL_SERVER_API }/student/getinfo/${id}`,
        method: 'GET',
    }, false, true);
}