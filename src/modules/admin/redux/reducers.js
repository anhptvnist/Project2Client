import { AdminConstants } from "./constants";
export function admin(state = {}, action) {
    switch (action.type) {
        case AdminConstants.GET_SUBJECTS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case AdminConstants.GET_SUBJECTS_SUCCESS:
            return {
                ...state,
                subjects: action.payload,
                isLoading: false,
                error: null
            };

        case AdminConstants.GET_SUBJECTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: action.payload,

            };
        // ============================CREATE_SUBJECTS==========================
        case AdminConstants.CREATE_SUBJECTS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case AdminConstants.CREATE_SUBJECTS_SUCCESS:
            return {
                ...state,
                subjects: action.payload,
                isLoading: false,
                error: null
            };

        case AdminConstants.CREATE_SUBJECTS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        // ====================Lấy danh sách học phần  ==================
        case AdminConstants.GET_SUBJECT_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case AdminConstants.GET_SUBJECT_SUCCESS:
            return {
                ...state,
                subject: action.payload,
                isLoading: false,
                error: null
            };

        case AdminConstants.GET_SUBJECT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: action.payload,

            };
        // ============================CREATE_SUBJECT==========================
        case AdminConstants.CREATE_SUBJECT_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case AdminConstants.CREATE_SUBJECT_SUCCESS:
            return {
                ...state,
                subject: action.payload,
                isLoading: false,
                error: null
            };

        case AdminConstants.CREATE_SUBJECT_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        // ====================Lấy danh sách học phần  ==================
        case AdminConstants.GET_TERN_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case AdminConstants.GET_TERN_SUCCESS:
            return {
                ...state,
                listtern: action.payload,
                isLoading: false,
                error: null
            };

        case AdminConstants.GET_TERN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: action.payload,

            };
        // ============================CREATE_SUBJECT==========================
        case AdminConstants.CREATE_TERN_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case AdminConstants.CREATE_TERN_SUCCESS:
            return {
                ...state,
                listtern: action.payload,
                isLoading: false,
                error: null
            };

        case AdminConstants.CREATE_TERN_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        // ===================START-TERN=======================
        case AdminConstants.START_TERN_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case AdminConstants.START_TERN_SUCCESS:
            return {
                ...state,
                listtern: action.payload,
                isLoading: false,
                error: null
            };

        case AdminConstants.START_TERN_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        // ===================END-TERN=========================
        case AdminConstants.END_TERN_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case AdminConstants.END_TERN_SUCCESS:
            return {
                ...state,
                listtern: action.payload,
                isLoading: false,
                error: null
            };

        case AdminConstants.END_TERN_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        // ===================GET-PROFILE=========================
        case AdminConstants.GET_PROFILE_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case AdminConstants.GET_PROFILE_SUCCESS:
            return {
                ...state,
                profile: action.payload,
                isLoading: false,
                error: null
            };

        case AdminConstants.GET_PROFILE_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        // ===================EDIT-PROFILE=========================
        case AdminConstants.EDIT_PROFILE_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case AdminConstants.EDIT_PROFILE_SUCCESS:
            return {
                ...state,
                profile: action.payload,
                isLoading: false,
                error: null
            };

        case AdminConstants.EDIT_PROFILE_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };

        case AdminConstants.GET_SESSION_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case AdminConstants.GET_SESSION_SUCCESS:
            return {
                ...state,
                listsession: action.payload,
                isLoading: false,
                error: null
            };

        case AdminConstants.GET_SESSION_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: action.payload,

            };
        // ============================CREATE_SESSION==========================
        case AdminConstants.CREATE_SESSION_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case AdminConstants.CREATE_SESSION_SUCCESS:
            return {
                ...state,
                listsession: action.payload,
                isLoading: false,
                error: null
            };

        case AdminConstants.CREATE_SESSION_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        // ===================START-SESSION=======================
        case AdminConstants.START_SESSION_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case AdminConstants.START_SESSION_SUCCESS:
            return {
                ...state,
                listsession: action.payload,
                isLoading: false,
                error: null
            };

        case AdminConstants.START_SESSION_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        // ===================END-SESSION=========================
        case AdminConstants.END_SESSION_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case AdminConstants.END_SESSION_SUCCESS:
            return {
                ...state,
                listsession: action.payload,
                isLoading: false,
                error: null
            };

        case AdminConstants.END_SESSION_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        // ===================DELETE-SESSION=========================
        case AdminConstants.DELETE_SESSION_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case AdminConstants.DELETE_SESSION_SUCCESS:
            return {
                ...state,
                listsession: action.payload,
                isLoading: false,
                error: null
            };

        case AdminConstants.DELETE_SESSION_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        // ========================CREATE_CLASS================
        case AdminConstants.CREATE_CLASS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case AdminConstants.CREATE_CLASS_SUCCESS:
            return {
                ...state,
                listclass: action.payload,
                isLoading: false,
                error: null
            };

        case AdminConstants.CREATE_CLASS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        case AdminConstants.GET_CLASS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case AdminConstants.GET_CLASS_SUCCESS:
            return {
                ...state,
                listclass: action.payload,
                isLoading: false,
                error: null
            };

        case AdminConstants.GET_CLASS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        // ===================DELETE-CLASS=========================
        case AdminConstants.DELETE_CLASS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case AdminConstants.DELETE_CLASS_SUCCESS:
            return {
                ...state,
                listclass: action.payload,
                isLoading: false,
                error: null
            };

        case AdminConstants.DELETE_CLASS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };

        case AdminConstants.ASSIGNMENT_CLASS_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case AdminConstants.ASSIGNMENT_CLASS_SUCCESS:
            return {
                ...state,
                listclass: action.payload,
                isLoading: false,
                error: null
            };

        case AdminConstants.ASSIGNMENT_CLASS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        case AdminConstants.GET_LECTURER_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case AdminConstants.GET_LECTURER_SUCCESS:
            return {
                ...state,
                listlecturer: action.payload,
                isLoading: false,
                error: null
            };

        case AdminConstants.GET_LECTURER_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        case AdminConstants.GET_LIST_CLASS_OF_LEC_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case AdminConstants.GET_LIST_CLASS_OF_LEC_SUCCESS:
            return {
                ...state,
                listclassoflec: action.payload,
                isLoading: false,
                error: null
            };

        case AdminConstants.GET_LIST_CLASS_OF_LEC_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        default:
            return { ...state };
    }
}