import { LecturerConstants } from "./constants";
export function lecturer(state = {}, action) {
    switch (action.type) {
        // ===================EDIT-PROFILE=========================
        case LecturerConstants.GET_LIST_CLASS_OF_LEC_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case LecturerConstants.GET_LIST_CLASS_OF_LEC_SUCCESS:
            return {
                ...state,
                listclassoflec: action.payload,
                isLoading: false,
                error: null
            };

        case LecturerConstants.GET_LIST_CLASS_OF_LEC_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        case LecturerConstants.INFO_CLASS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case LecturerConstants.INFO_CLASS_SUCCESS:
            return {
                ...state,
                infoclass: action.payload,
                isLoading: false,
                error: null
            };

        case LecturerConstants.INFO_CLASS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        case LecturerConstants.SET_POINT_OF_STUDENT_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case LecturerConstants.SET_POINT_OF_STUDENT_SUCCESS:
            return {
                ...state,
                infoclass: action.payload,
                isLoading: false,
                error: null
            };

        case LecturerConstants.SET_POINT_OF_STUDENT_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return { ...state };
    }
}