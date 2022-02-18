import { GET_MOBILES,GET_LAPTOPS,GET_CAMERAS,GET_AUDIO,ADD_ITEM,DELETE_ITEM,UPDATE_ITEM,ITEMS_LOADING,VIEW_ITEM } from "./types";
import axios from "axios";
import { get_errors } from "./errorActions";

export const get_mobiles = () => dispatch => {
    axios.get("/api/items/mobiles")
    .then(res => {
        dispatch({type:GET_MOBILES,payload:res.data});
    })
    .catch(err => {
        dispatch(get_errors(err.response.data,err.response.status));
    });
}

export const get_laptops = () => dispatch => {
    axios.get("/api/items/laptops")
    .then(res => {
        dispatch({type:GET_LAPTOPS,payload:res.data});
    })
    .catch(err => {
        dispatch(get_errors(err.response.data,err.response.status));
    });
}

export const get_cameras = () => dispatch => {
    axios.get("/api/items/cameras")
    .then(res => {
        dispatch({type:GET_CAMERAS,payload:res.data});
    })
    .catch(err => {
        dispatch(get_errors(err.response.data,err.response.status));
    });
}

export const get_audio = () => dispatch => {
    axios.get("/api/items/audio")
    .then(res => {
        dispatch({type:GET_AUDIO,payload:res.data});
    })
    .catch(err => {
        dispatch(get_errors(err.response.data,err.response.status));
    });
}


export const view_item = (id) => dispatch => {
    axios.get(`/api/items/${id}`)
    .then(res => {
        dispatch({type:VIEW_ITEM,payload:res.data});
    })
}

export const add_item = (item) => dispatch => {
 
    axios.post("/api/items",item)
    .then(res => {
        dispatch({type:ADD_ITEM,payload:res.data});
    })
    .catch(err => {
        dispatch(get_errors(err.response.data,err.response.status));
    });
}

export const delete_item = (id) => dispatch => {
    axios.delete(`/api/items/${id}`)
    .then(res => {
        dispatch({type:DELETE_ITEM,payload:id});
    })
    .catch(err => {
        dispatch(get_errors(err.response.data,err.response.status));
    })
}

export const update_item = (id,item) => dispatch => {
    axios.put(`/api/items/${id}`,item)
    .then(res => {
        dispatch({
            type:UPDATE_ITEM,
            payload:Promise.all[id,res.data]
        });
    })
    .catch(err => {
        dispatch(get_errors(err.response.data,err.response.status));
    });
}

export const items_loading = () => {
    return {
        type:ITEMS_LOADING
    }
}