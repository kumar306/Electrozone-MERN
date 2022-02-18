import {USER_LOADING,USER_LOADED,AUTH_ERROR,LOGIN_SUCCESS,LOGIN_FAILURE,REGISTER_SUCCESS,REGISTER_FAILURE,LOGOUT_SUCCESS} from "./types";
import axios from "axios";
import { get_errors } from "./errorActions";

export const load_user = (dispatch,getState) => {
    
    dispatch({type:USER_LOADING});
    axios.get("/api/user",tokenConfig(getState))
    .then(res => dispatch({
        type:USER_LOADED,
        payload:res.data
    }))
    .catch(err => {
        dispatch(get_errors(err.response.data,err.response.status));
        dispatch({type:AUTH_ERROR});
    });
}

export const register = (name,email,password,history) => dispatch => {
    
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    const body=JSON.stringify({name,email,password});
    console.log(body);
    axios.post("/api/register",body,config)
    .then(res => {
        dispatch({
        type:REGISTER_SUCCESS,
        payload:res.data });
        history.push("/home");
        return;
    })
    .catch(err => { 
        dispatch(get_errors(err.response.data,err.response.status,'REGISTER_FAILURE'));
        dispatch({type:REGISTER_FAILURE});
    });
}

export const login = (email,password) => dispatch => {
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    const body=JSON.stringify({email,password});
    axios.post("/api/login",body,config)
    .then(res => {
        const {token} = res.data;
        localStorage.setItem("token",token);
        dispatch({ type:LOGIN_SUCCESS, payload:res.data });
        load_user(dispatch);
    })
    .catch(err => {
        dispatch(get_errors(err.response.data,err.response.status,'LOGIN_FAILURE'));
        dispatch({type:LOGIN_FAILURE});
    });
}

export const logout = () => dispatch => {
    dispatch({type:LOGOUT_SUCCESS});
}

export const tokenConfig = (getState) => {
    const token=getState().user.token;
    const config ={
        headers:{
            'Content-Type':'application/json'
        }
    }
    if(token)
        config.headers['x-auth-token']=token;
    
    return config;
}