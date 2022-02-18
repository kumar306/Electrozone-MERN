import { ORDER_LOADING,GET_ORDERS,CHECKOUT,EMPTY_CART } from "./types";
import { get_errors } from "./errorActions";
import axios from "axios";

export const order_loading = () => {
    return {
        type:ORDER_LOADING
    }
}

export const get_orders = (id) => dispatch => {
    dispatch(order_loading());
    axios.get(`/api/order/${id}`)
    .then(res => {
        dispatch({type:GET_ORDERS,payload:res.data});
    })
    .catch(err => {
        dispatch(get_errors(err.response.data,err.response.status));
    });
}

export const checkout = (id,source) => dispatch => {
    axios.post(`/api/order/${id}`,{source})
    .then(res => {
        dispatch({type:EMPTY_CART,payload:""});
        dispatch({type:CHECKOUT,payload:res.data});
    })
    .catch(err => {
        dispatch(get_errors(err.response.data,err.response.status));
    });
}