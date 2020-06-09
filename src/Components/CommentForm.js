import React,{Component} from 'react'


class CommentForm extends Component{


    constructor(props)
    {
        super(props)

    }
    render()
    {
        
        return(
            <div>
                 <button className="btn btn-outline-secondary" 
                 onClick={()=>this.props.toggleModel()}
                 
                 ><span className="fa fa-edit"></span>Submit Comment</button>    
            </div>
        )
    }
}
export default CommentForm
