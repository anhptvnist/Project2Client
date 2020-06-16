import { AuthConstants } from "./constants";
export const CallApiStatus = {
    INITIALIZED: 0,
    CALLING: 1,
    FINISHED: 2,
}
var initState = {
    calledAPI: CallApiStatus.INITIALIZED,
    user: {},
    links: [],
    components: [],
    error: null,
    isLoading: false
}
export function auth(state = initState, action) {

    switch (action.type) {
        case AuthConstants.LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case AuthConstants.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isLoading: false,
                error: null
            };

        case AuthConstants.LOGIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                user: {
                    _id: null,
                    name: null,
                    email: null,
                    roles: null,
                    company: null
                },
                // error: action.payload.message
            };
        // ============================REGISTER==========================
        case AuthConstants.REGISTER_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case AuthConstants.REGISTER_SUCCESS:
            return {
                ...state,
                listuser: action.payload,
                isLoading: false,
                error: null
            };

        case AuthConstants.REGISTER_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
                // error: action.payload.message
            };
        // ============================GET-USER==========================
        case AuthConstants.GET_USER_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case AuthConstants.GET_USER_SUCCESS:
            return {
                ...state,
                listuser: action.payload,
                isLoading: false,
                error: null
            };

        case AuthConstants.GET_USER_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
                // error: action.payload.message
            };
        //============================SEARCH-USER==========================
        case AuthConstants.SEARCH_USER_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case AuthConstants.SEARCH_USER_SUCCESS:
            return {
                ...state,
                listuser: action.payload,
                isLoading: false,
                error: null
            };

        case AuthConstants.SEARCH_USER_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
                // error: action.payload.message
            };
        // =====================GET-USER-BY-ID===============
        case AuthConstants.GET_USER_BY_ID_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case AuthConstants.GET_USER_BY_ID_SUCCESS:
            return {
                ...state,
                userofme: action.payload,
                isLoading: false,
                error: null
            };

        case AuthConstants.GET_USER_BY_ID_FAILURE:
            return {
                ...state,
                error: action.payload,
                isLoading: false
                // error: action.payload.message
            };
        default:
            return { ...state };
    }
}