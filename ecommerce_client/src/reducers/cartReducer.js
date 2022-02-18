import { CART_LOADING,GET_CART,ADD_TO_CART,DELETE_FROM_CART,INCREASE_QUANTITY,DECREASE_QUANTITY,EMPTY_CART } from "../actions/types";

const initialState = {
    cart:{},
    isLoading:false
}

export default function(state=initialState,action) {

    switch(action.type) {
        case CART_LOADING:
            return {
                ...state,
                isLoading:true
            }
        
        case GET_CART: 
            return {
                ...state,
                cart:action.payload,
                isLoading:false
            }

        
        case ADD_TO_CART: 
            return {
                ...state,
                cart:action.payload
            }


        case DELETE_FROM_CART: 
            return {
                ...state,
                cart:action.payload
            }

        case INCREASE_QUANTITY:
            return {
                ...state,
                cart:action.payload
            }
        
        case DECREASE_QUANTITY:
            return {
                ...state,
                cart:action.payload
            }
        
        case EMPTY_CART:
            return {
                ...state,
                cart:{}
            }
        
        default:
            return state;
    
    }
}