import React, { Component } from 'react'
import {Container,Row,Col,Card,CardBody,CardText,CardImg,CardImgOverlay,Breadcrumb,BreadcrumbItem} from 'reactstrap'
import {Link} from 'react-router-dom'
import Loading from './Loading'
import { baseUrl } from '../Shared/baseUrl';
class MenuComponent extends Component{


  constructor(props){
        super(props)
      
}

   
    render()
    {
        const renderMenuCard=(this.props.loading)?<Loading/>:  this.props.dishes.map((item,index)=>{
           

             return(
              <Col md={5}  style={{marginBottom:4}}>
                 <Link to={`/menu/${item.id}`}>
                  <Card>
                      <CardImg src={baseUrl + item.image} width="100%" alt={item.name}/>
                      <CardImgOverlay>
                          <p>{item.name}</p>
                      </CardImgOverlay>
                  </Card>
                  </Link>
              </Col>
       
             )
         })
        return(
            <div>
               <Container style={{marginBottom:4}}>
               <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>                
                </div>
               <Row>
                   {
                     renderMenuCard
                   }
                   
                     
                   </Row>
               </Container>

            
            </div>
        )
    }
}
export default MenuComponent