import { LecturerService } from "./services";
import { LecturerConstants } from "./constants";
import { setStorage, clearStorage } from '../../../config';

export const LecturerActions = {
   getListClassofLec   
};


function getListClassofLec(id, idtern) {
    return dispatch => {
        dispatch({ type: LecturerConstants.GET_LIST_CLASS_OF_LEC_REQUEST });
        LecturerService.getListClassofLec(id, idtern)
            .then(res => {
                dispatch({
                    type: LecturerConstants.GET_LIST_CLASS_OF_LEC_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({ type: LecturerConstants.GET_LIST_CLASS_OF_LEC_FAILURE});
            })
    }
};