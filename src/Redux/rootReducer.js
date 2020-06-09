import {combineReducers} from 'redux'
import {dishReducer} from './dishReducer'
import {commentReducer} from './commentReducer'
import {leaderReducer} from './leaderReducer'
import {pormotionsReducer} from './pormotionsReducer'
import {createForms} from 'react-redux-form'
import {InitialFeedback} from './forms'

export const rootReducer=combineReducers({

    dishReducer,
    commentReducer,
    leaderReducer,
    pormotionsReducer,
    ...createForms({
        feedback:InitialFeedback
    })

})