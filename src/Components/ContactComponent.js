import React,{Component} from 'react';
import {Breadcrumb,BreadcrumbItem,FormGroup,Input,Label,Col,Container,Row,Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import {Control,Form,Errors} from 'react-redux-form'




class Contact extends Component {

    constructor(props)
    {
        super(props)

        this.state={
            firstName:'',
            lastName:'',
            email:'',
            phone:'',
            contact:false,
            feedback:'',
            contactType: 'Tel.'
            
        }
        this.handleInputChange=this.handleInputChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

   handleInputChange(e){
      this.setState({[e.target.name]: e.target.type==='checked'?e.target.checked:e.target.value})
   }

   handleSubmit(values)
   {
      // console.log('test')
      // console.log(JSON.stringify(values))
       console.log(values)
       this.props.resetFeedbackForm()
       this.props.submitForm(values)

   }


    render(){
        const required =  (val) => val && val.length;
        const maxLength = (len) => (val) => !(val) || (val.length <= len);
        const minLength = (len) => (val) => val && (val.length >= len);
        const isNumber = (val) => !isNaN(Number(val));
        const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
        
    return(
        <div className="container">
             <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contact Us</h3>
                    <hr />
                </div>   
            <div className="row row-content">




                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>

                <Container>
                    <Row className="mb-5">
                        <Col xs={12}>
                            <h1>Send Us Your Feedback</h1>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={9} >
                            <Form onSubmit={(values)=>this.handleSubmit(values)} model="feedback" > 
                                <div className="form-group">
                                    <Row>
                                    <Col sm={3}>
                                    <Label for="firstName">First Name</Label>
                                    </Col>

                                    <Col sm={9}> 
                                    <Control.text model=".firstname" id="firstName" name="firstName"
                                    placeholder="First Name"
                                    className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                   
                                    />
                                    <Errors
                                     show="touched"
                                     model=".firstname"
                                     className="text-danger"
                                     messages={{
                                         required:'Required',
                                         minLength:'Must be greater than 2 characters',
                                         maxLength: 'Must be 15 characters or less'

                                     }}

                                    />
                                    </Col>
                                    </Row>
                                </div>


                                <div className="form-group">

                                    <Row>
                                    <Col sm={3}>
                                    <Label for="lastName">First Name</Label>
                                    </Col>

                                    <Col sm={9}> 
                                    <Control.text model=".lastname" id="lastName" name="lastName"
                                    placeholder="Last Name"
                                    className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                    />

                                    <Errors
                                     show="touched"
                                     model=".lastname"
                                     className="text-danger"
                                     messages={{
                                         required:'Required',
                                         minLength:'Must be greater than 2 characters',
                                         maxLength: 'Must be 15 characters or less'

                                     }}

                                    />
                                    </Col>

                                    </Row>
                                </div>


                                 <div className="form-group">

                                    <Row>
                                    <Col sm={3}>
                                    <Label for="phone">Contact Tel.</Label>
                                    </Col>

                                    <Col sm={9}> 
                                    <Control.text model=".telnum" id="phone" name="phone"
                                    placeholder="Tel.Number"
                                    className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                    />



                                  <Errors
                                     show="touched"
                                     model=".telnum"
                                     className="text-danger"
                                     messages={{
                                         required:'Required',
                                         minLength:'Must be greater than 2 characters',
                                         maxLength: 'Must be 15 characters or less'

                                     }}

                                    />
                                    </Col>
                                    </Row>
                                </div>



                                





                                 <div className="form-group">

                                    <Row>
                                    <Col sm={3}>
                                    <Label for="email">Email</Label>
                                    </Col>

                                    <Col sm={9}> 
                                    <Control.text model=".email" id="email" name="email"
                                    placeholder="Email"
                                    className="form-control"
                                    validators={{
                                        required, validEmail
                                    }}
                                    />
                                      <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid Email Address'
                                        }}
                                     />
                                    </Col>

                                  
                                    </Row>
                                </div>



                                   <div className="form-group">
                                       <Row>

                                           <Col sm={{offset:3,size:9}}>

                                               <div className="form-group">

                                              <Row>

                                         <Col sm={9}>
                                            <div className="form-check">
                                        <Label check>
                                              <Control.checkbox model=".agree"  name="contact" 
                                              className="form-check-input"
                                              
                                              />
                                             <strong>May We contact you?</strong> 
                                             

                                           
                                        </Label>

                                        </div>

                                        </Col>


                                        <Col sm={3}>
                                         <Control.select model=".contactType"  name="contactType"   
                                         
                                

                                         className="form-control"
                                         >

                                          <option>Telephone</option>
                                          <option>Email</option>

                                         </Control.select>
                                        </Col>

                                        </Row>

                                        </div>
                                        </Col>

                                        </Row>
                                   </div>





                                      <div className="form-group">

                                    <Row>
                                    <Col sm={3}>
                                    <Label for="feedback">Your Feedback</Label>
                                    </Col>

                                    <Col sm={9}> 
                                    <Control.textarea model=".message" id="feedback" name="feedback"
                                    placeholder="feedback" rows="12"
                                    className="form-control"
                                    />
                                    </Col>
                                    </Row>
                                </div>

                                <FormGroup row>
                                <Col md={{size: 9, offset: 3}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>


                                
                            </Form>
                        </Col>
                    </Row>
                </Container>

        </div>
    );

    }
}

export default Contact;