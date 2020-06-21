import { StudentConstants } from "./constants";
export function student(state = {}, action) {
    switch (action.type) {
        // ===================EDIT-PROFILE=========================
        case StudentConstants.GET_LIST_CLASS_OF_TERN_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case StudentConstants.GET_LIST_CLASS_OF_TERN_SUCCESS:
            return {
                ...state,
                listclassoftern: action.payload,
                isLoading: false,
                error: null
            };

        case StudentConstants.GET_LIST_CLASS_OF_TERN_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        case StudentConstants.GET_LIST_CLASS_OF_STUDENT_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case StudentConstants.GET_LIST_CLASS_OF_STUDENT_SUCCESS:
            return {
                ...state,
                listclassofstudent: action.payload,
                isLoading: false,
                error: null
            };

        case StudentConstants.GET_LIST_CLASS_OF_STUDENT_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };

        case StudentConstants.REGISTER_CLASS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case StudentConstants.REGISTER_CLASS_SUCCESS:
            return {
                ...state,
                listclassofstudent: action.payload,
                isLoading: false,
                error: null
            };

        case StudentConstants.REGISTER_CLASS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        case StudentConstants.DELETE_CLASS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case StudentConstants.DELETE_CLASS_SUCCESS:
            return {
                ...state,
                listclassofstudent: action.payload,
                isLoading: false,
                error: null
            };

        case StudentConstants.DELETE_CLASS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };

        case StudentConstants.GET_POINT_OF_STUDENT_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case StudentConstants.GET_POINT_OF_STUDENT_SUCCESS:
            return {
                ...state,
                listpoint: action.payload,
                isLoading: false,
                error: null
            };

        case StudentConstants.GET_POINT_OF_STUDENT_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        case StudentConstants.GET_LIST_CLASS_TERN_OF_STUDENT_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case StudentConstants.GET_LIST_CLASS_TERN_OF_STUDENT_SUCCESS:
            return {
                ...state,
                listclassternofstudent: action.payload,
                isLoading: false,
                error: null
            };

        case StudentConstants.GET_LIST_CLASS_TERN_OF_STUDENT_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        case StudentConstants.GET_INFO_OF_STUDENT_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case StudentConstants.GET_INFO_OF_STUDENT_SUCCESS:
            return {
                ...state,
                info: action.payload,
                isLoading: false,
                error: null
            };

        case StudentConstants.GET_INFO_OF_STUDENT_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return { ...state };
    }
}