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

        case AuthConstants.LOGIN_FAILE:
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
        default:
            return {...state};
    }
}