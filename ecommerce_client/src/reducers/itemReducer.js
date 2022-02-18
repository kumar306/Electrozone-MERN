import { GET_MOBILES,ADD_ITEM,DELETE_ITEM,UPDATE_ITEM,ITEMS_LOADING,VIEW_ITEM, GET_AUDIO, GET_CAMERAS, GET_LAPTOPS } from "../actions/types";

const initialState = {
    items: [],
    item:{},
    isLoading:false
}

export default function(state=initialState,action)
{
    switch(action.type){
        
        case ITEMS_LOADING:
            return {
                ...state,
                isLoading:true
            }
        
        case GET_MOBILES:
        case GET_AUDIO:
        case GET_CAMERAS:
        case GET_LAPTOPS:
            return {
                ...state,
                items:action.payload,
                isLoading:false
            }
        
        case VIEW_ITEM:
            return {
                ...state,
                item:action.payload
            }

        case ADD_ITEM:
            return {
                ...state,
                items:[action.payload,...state.items]
            }
        
        case DELETE_ITEM:
            return {
                ...state,
                items:state.items.filter(item => item._id!==action.payload)
            }
        
        case UPDATE_ITEM:
            const {id,data} = action.payload;
            return {
                ...state,
                items:state.items.map(item => {
                    if(item._id==id)
                        item=data;
                })
            }

        default:
            return state;
    }
}