
import * as actionTypes from './actionTypes'
import { actions } from 'react-redux-form'
export const dishReducer=(state={
dishes:[],
loading:true,
error:null

},action)=>{
    switch (action.type) {
        case actionTypes.ADD_DISHES:
            return {...state,loading:false,dishes:action.payload,error:null}
        case actionTypes.ERROR_DISHES:

            return {...state,loading:false,error:action.payload}
        case actionTypes.LOADING_DISHS:
            return {...state,loading:true,error:null}

        default:
            return state
    }
}