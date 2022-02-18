import { CART_LOADING,GET_CART,ADD_TO_CART,DELETE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY } from "./types";
import {get_errors} from "./errorActions";
import axios from "axios";
import product from "../components/product";

export const get_cart = (id) => dispatch => {
    dispatch(cart_loading());
    axios.get(`/api/cart/${id}`)
    .then(res => {
        dispatch({type:GET_CART,payload:res.data});
    })
    .catch(err => {
        dispatch(get_errors(err.response.data,err.response.status));
    })
} 

export const add_to_cart = (id,productId,quantity,src) => dispatch => {
    
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    const body=JSON.stringify({productId,quantity,src});
    axios.post(`/api/cart/${id}`,body,config)
    .then(res => {
        dispatch({type:ADD_TO_CART,payload:res.data});
    })
    .catch(err => {
        dispatch(get_errors(err.response.data,err.response.status));
    });
}

export const delete_from_cart = (userId,product_id) => dispatch => {

    axios.delete(`/api/cart/${userId}/${product_id}`)
    .then(res => {
        dispatch({type:DELETE_FROM_CART,payload:res.data});
    })
    .catch(err => {
        dispatch(get_errors(err.response.data,err.reponse.status));
    });
}

export const cart_loading = () => {
    return {
        type:CART_LOADING
    }
}

export const increase_quantity = (userId,product_id) => dispatch => {

    axios.put(`/api/cart/${userId}/${product_id}/inc`)
    .then(res => {
        dispatch({type:INCREASE_QUANTITY,payload:res.data});
    })
    .catch(err => {
        dispatch(get_errors(err.response.data,err.response.status));
    });
}

export const decrease_quantity = (userId,product_id) => dispatch => {
    axios.put(`/api/cart/${userId}/${product_id}/dec`)
    .then(res => {
        dispatch({type:DECREASE_QUANTITY,payload:res.data});
    })
    .catch(err => {
        dispatch(get_errors(err.response.data,err.response.status));
    });
}