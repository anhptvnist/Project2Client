import axios from 'axios';
import { LOCAL_SERVER_API } from '../../../env';
import { getStorage } from '../../../config';
import { sendRequest } from '../../../common-components/requestHelper';
// import jwt from 'jsonwebtoken';
export const LecturerService = {
   getListClassofLec,
   infoClass,
   setPointOfStudent
};

async function getListClassofLec(id, idtern){
    return sendRequest({
        url: `${ LOCAL_SERVER_API }/lecturer/listclassoflec/${id}/${idtern}`,
        method: 'GET',
    }, false, true);
}

async function infoClass(id){
    return sendRequest({
        url: `${ LOCAL_SERVER_API }/lecturer/infoclass/${id}`,
        method: 'GET',
    }, false, true);
}

async function setPointOfStudent(listpoint){
    return sendRequest({
        url: `${ LOCAL_SERVER_API }/lecturer/setpoint`,
        method: 'POST',
        data: listpoint,
    }, false, true);
}