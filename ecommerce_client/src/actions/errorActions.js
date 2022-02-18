import {GET_ERRORS,CLEAR_ERRORS} from "./types";

export const get_errors = (msg,st,id) => {
    return {
        type:GET_ERRORS,
        payload:{msg,st,id}
    }
}

export const clear_errors = () => {
    return {
        type:CLEAR_ERRORS
    }
}