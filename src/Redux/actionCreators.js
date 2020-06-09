import * as ActionTypes from './actionTypes'
import { baseUrl } from '../Shared/baseUrl';


export const fetchDishes=()=>dispatch=>{
    dispatch(dishLoading())

    return fetch(baseUrl + 'dishes')
    .then(response => response.json())
    .then(dishes => {
       
        return dispatch(dishAdding(dishes))
    }
        
        
        
        );
}

export const dishLoading=()=>({type:ActionTypes.LOADING_DISHS})
export const dishError=(err)=>({type:ActionTypes.ERROR_DISHES,payload:err})

export const dishAdding=(dishes)=>({type:ActionTypes.ADD_DISHES,payload:dishes})



export const fetchComments = () => (dispatch) => {    
    return fetch(baseUrl + 'comments')
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)));
};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos = () => (dispatch) => {
    
    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions')
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});


export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {

    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    };
    newComment.date = new Date().toISOString();
    
    return fetch(baseUrl + 'comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
};


export const fetchLeaders=()=>dispatch=>{
    dispatch(leadersLoading())

    fetch(baseUrl+'leaders').then(response=>response.json()).then(data=>


        {
            console.log(data)
            dispatch(addLeaders(data))
        })
      
}

export const addLeaders=(leader)=>({
    type:ActionTypes.ADD_LEADERS,
    payload:leader
})

export const leadersFailed=(errmess)=>({
    type:ActionTypes.LEADERS_FAILED
})
export const leadersLoading=()=>({
    type:ActionTypes.LEADERS_LOADING
})




export const postFeedback=(feedback)=>dispatch=>{

       const newFeedBack={...feedback}
       newFeedBack.date=new Date().toISOString()

      
       return fetch(baseUrl + 'feedback', {
        method: "POST",
        body: JSON.stringify(newFeedBack),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => alert("Thank you for your feedback\n"+JSON.stringify(response)))
    .catch(error =>  { console.log('post feedback', error.message); alert('Your feedback could not be posted\nError: '+error.message); });
};