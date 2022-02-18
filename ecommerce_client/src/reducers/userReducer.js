import {USER_LOADING,USER_LOADED,AUTH_ERROR,LOGIN_SUCCESS,LOGIN_FAILURE,REGISTER_SUCCESS,REGISTER_FAILURE,LOGOUT_SUCCESS} from "./../actions/types";

const initialState = {
    token:localStorage.getItem("token"),
    isAuthenticated:false,
    user:null,
    isLoading:false
}

export default function(state=initialState,action) {
    
    switch(action.type) {

        case USER_LOADING:
            return {
                ...state,
                isLoading:true
            }
        case USER_LOADED:
            return {
                ...state,
                isLoading:false,
                isAuthenticated:true,
                user:action.payload
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isAuthenticated:true,
                isLoading:false
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isLoading:false
            }
        case AUTH_ERROR:
        case LOGIN_FAILURE:
        case REGISTER_FAILURE:
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token');
            return {
                token:null,
                isAuthenticated:false,
                user:null,
                isLoading:false
            }
        
        default:
            return state;
    }
}


