
import * as actionTypes from './actionTypes'
export const leaderReducer=(state={
    loading:true,
    leaders:[],
    err:null
},action)=>{
    switch (action.type) {
        case actionTypes.LEADERS_LOADING:
            return {...state,loading:true,err:null,leaders:[]}

        case actionTypes.LEADERS_FAILED:
            return {...state,loading:false,err:action.payload,leaders:[]}


         case actionTypes.ADD_LEADERS:
            console.log('reducer'+action.payload)
             return {...state,loading:false,leaders:action.payload,err:null}   

        default:
            return state
    }
}