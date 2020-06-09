
import React,{Component} from 'react'
import Header from './Header';
import Footer from './Footer';
import HomeComponent from './HomeComponent'

import MenuComponent from './MenuComponent'
import ContactComponent from './ContactComponent'
import {Switch, Route, Router,Redirect,withRouter} from 'react-router-dom'
import DishDetailComponent from './DishDetailComponent'
import AboutComponent from './AboutComponent'
import {connect} from 'react-redux'
import { postComment, fetchDishes, fetchComments, fetchPromos,fetchLeaders,postFeedback } from '../Redux/actionCreators';
import {actions} from 'react-redux-form'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
const mapStateToProps=(state)=>{
  
    return {
        
      DISHES:state.dishReducer,
      COMMENTS:state.commentReducer,
      PROMOTIONS:state.pormotionsReducer,
      LEADERS:state.leaderReducer

    
    }
}


const mapDispatchToProps = dispatch => ({
  
 
  fetchDishes:()=>dispatch(fetchDishes()),
  resetFeedbackForm:()=>dispatch(actions.reset("feedback")),
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders:()=>dispatch(fetchLeaders()),
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  postFeedback:(feedback)=>dispatch(postFeedback(feedback))

});




class Main extends Component {

    constructor(props) {
      super(props);
  

    }

    componentDidMount() {
      this.props.fetchDishes();  
      this.props.fetchComments();
      this.props.fetchPromos();
      this.props.fetchLeaders()
    }
   
    
    render()
    {

      
        const HomePage=()=>{
           
            return(
                
            <HomeComponent 
            dish={this.props.DISHES.dishes.filter((dish) => dish.featured)[0]}
            promotion={this.props.PROMOTIONS.promotions.filter((promo) => promo.featured)[0]}
            promoLoading={this.props.PROMOTIONS.isLoading}
            promoErrMess={this.props.PROMOTIONS.errMess}
            leader={this.props.LEADERS.leaders.filter((leader) => leader.featured)[0]}
            loading={this.props.DISHES.loading}
            leaderLoading={this.props.LEADERS.loading}
            leaderFailed={this.props.LEADERS.err}
             />
            )
            
        }

        const DishWithId = ({match}) => {
          
            return(
                <DishDetailComponent dish={this.props.DISHES.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
                  comments={this.props.COMMENTS.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
                  
                  postComment={this.props.postComment}
                  dishId={parseInt(match.params.dishId,10)[0]}
                  
                  commentsErrMess={this.props.COMMENTS.errMess}
                  
                  
                  />
            );
          };
       
        
        return(

              <div>    
                    
                  <Header/>
                  <TransitionGroup>
            <CSSTransition key={this.props.location.key} classNames="page" timeout={500}>
                    <Switch location={this.props.location}>
                        <Route path="/Home" component={HomePage}  />
                        <Route exact path="/Menu" component={()=><MenuComponent dishes={this.props.DISHES.dishes} 
                        
                        loading={this.props.DISHES.loading}/>} />
                        <Route path="/contactus" component={()=><ContactComponent
                        
                        resetFeedbackForm={this.props.resetFeedbackForm}
                        submitForm={this.props.postFeedback}
                        />} />
                        <Route path='/menu/:dishId' component={DishWithId} />
                        <Route path='/aboutus' component={()=><AboutComponent 
                        
                        leaders={this.props.LEADERS.leaders}
                        loading={this.props.LEADERS.loading}
                      
                        
                        />} />

                  
                        <Redirect to="/home" />
                    </Switch>
                    </CSSTransition>
          </TransitionGroup>
           
         
              <Footer/>

              </div>
        )
    }
  
      
           
        
    

    }
    export default  withRouter(connect(mapStateToProps,mapDispatchToProps)(Main))
      