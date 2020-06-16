import axios from 'axios';
import { LOCAL_SERVER_API } from '../../../env';
import { getStorage } from '../../../config';
import { sendRequest } from '../../../common-components/requestHelper';
// import jwt from 'jsonwebtoken';
export const LecturerService = {
   getListClassofLec
};

async function getListClassofLec(id, idtern){
    return sendRequest({
        url: `${ LOCAL_SERVER_API }/lecturer/listclassoflec/${id}/${idtern}`,
        method: 'GET',
    }, false, true);
}

