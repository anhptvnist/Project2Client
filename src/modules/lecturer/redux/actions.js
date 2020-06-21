import { LecturerService } from "./services";
import { LecturerConstants } from "./constants";
import { setStorage, clearStorage } from '../../../config';

export const LecturerActions = {
   getListClassofLec, 
   infoClass,
   setPointOfStudent
      
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

function infoClass(id, idtern) {
    return dispatch => {
        dispatch({ type: LecturerConstants.INFO_CLASS_REQUEST});
        LecturerService.infoClass(id)
            .then(res => {
                dispatch({
                    type: LecturerConstants.INFO_CLASS_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({ type: LecturerConstants.INFO_CLASS_FAILURE});
            })
    }
};

function setPointOfStudent(listclass) {
    return dispatch => {
        dispatch({ type: LecturerConstants.SET_POINT_OF_STUDENT_REQUEST });
        LecturerService.setPointOfStudent(listclass)
            .then(res => {
                dispatch({
                    type: LecturerConstants.SET_POINT_OF_STUDENT_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({ type: LecturerConstants.SET_POINT_OF_STUDENT_FAILURE});
            })
    }
};