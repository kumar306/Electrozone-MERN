import { ORDER_LOADING,GET_ORDERS,CHECKOUT } from "../actions/types";

const initialState = {
    orders:[],
    isLoading:false
}

export default function(state=initialState,action) 
{
    switch(action.type) {

        case ORDER_LOADING:
            return {
                ...state,
                isLoading:true
            }

        case GET_ORDERS:
            return {
                ...state,
                isLoading:false,
                orders:action.payload
            }

        case CHECKOUT:
            return {
                ...state,
                orders:[action.payload,...state.orders]
            }
        
        default:
            return state;
    }
}