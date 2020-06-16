import { StudentService } from "./services";
import { StudentConstants } from "./constants";
import { setStorage, clearStorage } from '../../../config';

export const StudentActions = {
   getListClassofTern,
   getlistClassofStudent,
   registerClass,
};


function getListClassofTern(subject) {
    return dispatch => {
        dispatch({ type: StudentConstants.GET_LIST_CLASS_OF_TERN_REQUEST });
        StudentService.getListClassofTern(subject)
            .then(res => {
                dispatch({
                    type: StudentConstants.GET_LIST_CLASS_OF_TERN_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({ type: StudentConstants.GET_LIST_CLASS_OF_TERN_FAILURE});
            })
    }
};


function getlistClassofStudent(id) {
    return dispatch => {
        dispatch({ type: StudentConstants.GET_LIST_CLASS_OF_STUDENT_REQUEST });
        StudentService.getlistClassofStudent(id)
            .then(res => {
                dispatch({
                    type: StudentConstants.GET_LIST_CLASS_OF_STUDENT_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({ type: StudentConstants.GET_LIST_CLASS_OF_STUDENT_FAILURE});
            })
    }
};


function registerClass(id, idtern, idclass) {
    return dispatch => {
        dispatch({ type: StudentConstants.REGISTER_CLASS_REQUEST});
        StudentService.registerClass(id, idtern, idclass)
            .then(res => {
                dispatch({
                    type: StudentConstants.REGISTER_CLASS_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({ type: StudentConstants.REGISTER_CLASS_FAILURE});
            })
    }
};