import React, { Component } from 'react'

import {Container,Row,Col,Card,CardBody,CardText,CardTitle, CardImg,CardImgOverlay,Breadcrumb,BreadcrumbItem,

Modal,ModalHeader,ModalBody,Label,Button

} from 'reactstrap'
import { baseUrl } from '../Shared/baseUrl';
import {Link} from 'react-router-dom'
import {LocalForm,Control,Errors} from 'react-redux-form'

import CommentForm from './CommentForm'

import {connect} from 'react-redux'

class DishDetailComponent extends Component{
    constructor(props)
    {
        super(props)
        this.state={
            isModelShown:false
        }
        this.toggleModel=this.toggleModel.bind(this)
    
    }

    toggleModel()
    {
        this.setState({isModelShown:!this.state.isModelShown})
    }

    submitData(values){
      //  alert(JSON.stringify(values))
        console.log(this.props)
        this.props.postComment(this.props.dish.id,values.rating,values.name,values.comment)
        
    }

    
    render()
    {

      
        const maxLength = (len) => (val) => !(val) || (val.length <= len);
        const minLength = (len) => (val) => val && (val.length >= len);

        return(
            <div>
                <Container >
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{this.props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                    <Row >
                        <Col sm={5}   >

                            <Card>
                                <CardImg top width="100%" src={baseUrl+this.props.dish.image} alt={this.props.dish.name}/>
                                <CardBody>
                                     <CardTitle>
                                         {this.props.dish.label}
                                     </CardTitle>
                                     <CardText>
                                     {this.props.dish.description}
                                     </CardText>
                                 </CardBody>
                                
                            </Card>
                        </Col>
                        <Col xs={{size:12}} sm={{size:5}}>

                            <Card>
                                <CardBody>
                                    <CardTitle>Comments</CardTitle>
                                    <CardText>
                                     {
                                        this.props.comments.map((item,index)=>{
                                            return(
                                                <div>
                                                    <p >{item.comment}</p>
                                                    <small>--{item.author} {item.date}</small>
                                                </div>
                                            )
                                        })
                                     }
                                     </CardText>

                                     <CommentForm toggleModel={this.toggleModel} />
                                 </CardBody>
                                 </Card>
                        </Col>

                        
                    </Row>

                    <Modal  isOpen={this.state.isModelShown}  toggle={this.toggleModel}>
                        <ModalHeader toggle={this.toggleModel} >Submit Comment</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={(values)=>this.submitData(values)}>
                                <div className="form-group">
                                    <Label for="rating">Rating</Label>
                                    <Control.select model=".rating" id="rating" name="rating"
                                    className="form-control"
                                    
                                    
                                    >
                                        <option  value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        </Control.select>
                
                                </div>


                                <div className="form-group">
                                    <Label for="name">Your Name</Label>
                                    <Control.text model=".name" id="name" name="name"
                                    className="form-control"

                                    validators={{
                                        minLength:minLength(3),
                                        maxLength:maxLength(15)
                                    }}
                                   />

                                   <Errors
                                   model=".name"
                                   className="text-danger"
                                   show="touched"
                                   messages={{
                                    minLength:"Must be greater than 2 characters",
                                    maxLength:"Must be 15 characters or less"
                                   }}
                                   

                                   ></Errors>
                                    
                                  
                
                                </div>



                                <div className="form-group">
                                    <Label for="comment">Comment</Label>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                    className="form-control"
                                    
                                    rows="6"
                                    
                                    />
                
                                </div>

                                <div className="form-group">
                                    <button className="btn btn-primary" type="submit">Submit</button>
                                </div>




                            </LocalForm>
                        </ModalBody>
                    </Modal>
                </Container>
            </div>
        )
    }
}
export default  DishDetailComponent