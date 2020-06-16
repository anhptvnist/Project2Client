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
        default:
            return { ...state };
    }
}