import { AdminService } from "./services";
import { AdminConstants } from "./constants";
import { setStorage, clearStorage } from '../../../config';

export const AdminActions = {
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

function getSubjects() {
    return dispatch => {
        dispatch({ type: AdminConstants.GET_SUBJECTS_REQUEST });
        AdminService.getSubjects()
            .then(res => {
                dispatch({
                    type: AdminConstants.GET_SUBJECTS_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({ type: AdminConstants.GET_SUBJECTS_FAILURE });
            })
    }
};


function createSubjects(subjects) {
    return dispatch => {
        dispatch({ type: AdminConstants.CREATE_SUBJECTS_REQUEST });
        AdminService.createSubjects(subjects)
            .then(res => {
                dispatch({
                    type: AdminConstants.CREATE_SUBJECTS_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({ type: AdminConstants.CREATE_SUBJECTS_FAILURE});
            })
    }
};


function getSubject() {
    return dispatch => {
        dispatch({ type: AdminConstants.GET_SUBJECT_REQUEST });
        AdminService.getSubject()
            .then(res => {
                dispatch({
                    type: AdminConstants.GET_SUBJECT_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({ type: AdminConstants.GET_SUBJECT_FAILURE });
            })
    }
};

function createSubject(subject) {
    return dispatch => {
        dispatch({ type: AdminConstants.CREATE_SUBJECT_REQUEST });
        AdminService.createSubject(subject)
            .then(res => {
                dispatch({
                    type: AdminConstants.CREATE_SUBJECT_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({ type: AdminConstants.CREATE_SUBJECT_FAILURE});
            })
    }
};

function getTern() {
    return dispatch => {
        dispatch({ type: AdminConstants.GET_TERN_REQUEST });
        AdminService.getTern()
            .then(res => {
                dispatch({
                    type: AdminConstants.GET_TERN_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({ type: AdminConstants.GET_TERN_FAILURE });
            })
    }
};

function createTern(tern) {
    return dispatch => {
        dispatch({ type: AdminConstants.CREATE_TERN_REQUEST });
        AdminService.createTern(tern)
            .then(res => {
                dispatch({
                    type: AdminConstants.CREATE_TERN_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({ type: AdminConstants.CREATE_TERN_FAILURE});
            })
    }
};

function startTern(id) {
    return dispatch => {
        dispatch({ type: AdminConstants.START_TERN_REQUEST });
        AdminService.startTern(id)
            .then(res => {
                dispatch({
                    type: AdminConstants.START_TERN_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({ type: AdminConstants.START_TERN_FAILURE});
            })
    }
};

function endTern(id) {
    return dispatch => {
        dispatch({ type: AdminConstants.END_TERN_REQUEST });
        AdminService.endTern(id)
            .then(res => {
                dispatch({
                    type: AdminConstants.END_TERN_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({ type: AdminConstants.END_TERN_FAILURE});
            })
    }
};

function getProfile(id) {
    return dispatch => {
        dispatch({ type: AdminConstants.GET_PROFILE_REQUEST });
        AdminService.getProfile(id)
            .then(res => {
                dispatch({
                    type: AdminConstants.GET_PROFILE_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({ type: AdminConstants.GET_PROFILE_FAILURE});
            })
    }
};
function editProfile(data) {
    return dispatch => {
        dispatch({ type: AdminConstants.EDIT_PROFILE_REQUEST });
        AdminService.editProfile(data)
            .then(res => {
                dispatch({
                    type: AdminConstants.EDIT_PROFILE_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({ type: AdminConstants.EDIT_PROFILE_FAILURE});
            })
    }
};


function getSession() {
    return dispatch => {
        dispatch({ type: AdminConstants.GET_SESSION_REQUEST });
        AdminService.getSession()
            .then(res => {
                dispatch({
                    type: AdminConstants.GET_SESSION_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({ type: AdminConstants.GET_SESSION_FAILURE });
            })
    }
};

function createSession(session) {
    return dispatch => {
        dispatch({ type: AdminConstants.CREATE_SESSION_REQUEST });
        AdminService.createSession(session)
            .then(res => {
                dispatch({
                    type: AdminConstants.CREATE_SESSION_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({ type: AdminConstants.CREATE_SESSION_FAILURE});
            })
    }
};


function startSession(id) {
    return dispatch => {
        dispatch({ type: AdminConstants.START_SESSION_REQUEST });
        AdminService.startSession(id)
            .then(res => {
                dispatch({
                    type: AdminConstants.START_SESSION_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({ type: AdminConstants.START_SESSION_FAILURE});
            })
    }
};

function endSession(id) {
    return dispatch => {
        dispatch({ type: AdminConstants.END_SESSION_REQUEST });
        AdminService.endSession(id)
            .then(res => {
                dispatch({
                    type: AdminConstants.END_SESSION_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({ type: AdminConstants.END_SESSION_FAILURE});
            })
    }
};

function deleteSession(id) {
    return dispatch => {
        dispatch({ type: AdminConstants.DELETE_SESSION_REQUEST });
        AdminService.deleteSession(id)
            .then(res => {
                dispatch({
                    type: AdminConstants.DELETE_SESSION_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({ type: AdminConstants.DELETE_SESSION_FAILURE});
            })
    }
};


function createClass(newclass) {
    return dispatch => {
        dispatch({ type: AdminConstants.CREATE_CLASS_REQUEST });
        AdminService.createClass(newclass)
            .then(res => {
                dispatch({
                    type: AdminConstants.CREATE_CLASS_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({ type: AdminConstants.CREATE_CLASS_FAILURE});
            })
    }
};

function getClass() {
    return dispatch => {
        dispatch({ type: AdminConstants. GET_CLASS_REQUEST });
        AdminService.getClass()
            .then(res => {
                dispatch({
                    type: AdminConstants. GET_CLASS_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({ type: AdminConstants. GET_CLASS_FAILURE});
            })
    }
};

function deleteClass(id) {
    return dispatch => {
        dispatch({ type: AdminConstants.DELETE_CLASS_REQUEST });
        AdminService.deleteClass(id)
            .then(res => {
                dispatch({
                    type: AdminConstants.DELETE_CLASS_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({ type: AdminConstants.DELETE_CLASS_FAILURE});
            })
    }
};

function assignment(id, idtern, idclass) {
    return dispatch => {
        dispatch({ type: AdminConstants.ASSIGNMENT_CLASS_REQUEST });
        AdminService.assignment(id, idtern, idclass)
            .then(res => {
                dispatch({
                    type: AdminConstants.ASSIGNMENT_CLASS_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({ type: AdminConstants.ASSIGNMENT_CLASS_FAILURE});
            })
    }
};

function getLecturer() {
    return dispatch => {
        dispatch({ type: AdminConstants.GET_LECTURER_REQUEST });
        AdminService.getLecturer()
            .then(res => {
                dispatch({
                    type: AdminConstants.GET_LECTURER_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({ type: AdminConstants.GET_LECTURER_FAILURE});
            })
    }
};

function getListClassofLec(id, idtern) {
    return dispatch => {
        dispatch({ type: AdminConstants.GET_LIST_CLASS_OF_LEC_REQUEST });
        AdminService.getListClassofLec(id, idtern)
            .then(res => {
                dispatch({
                    type: AdminConstants.GET_LIST_CLASS_OF_LEC_SUCCESS,
                    payload: res.data.content
                })
            })
            .catch(err => {
                dispatch({ type: AdminConstants.GET_LIST_CLASS_OF_LEC_FAILURE});
            })
    }
};