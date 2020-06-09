import React from 'react';

import Loading from './Loading'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
import { baseUrl } from '../Shared/baseUrl';




function RenderCard({item,loading}) {
const renderContent=(loading)?<Loading/>:(
    <Card>
      
            <CardImg src={baseUrl + item.image} alt={item.name} />
            <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
            <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
)
    return(
        <div>
          {renderContent}
          </div>
        
        
    );

}

function HomeComponent(props) {
    
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} loading={props.loading} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} loading={props.promoLoading} errMess={props.promoErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} loading={props.leaderLoading} errMess={props.leaderFailed} />
                </div>
            </div>
        </div>
    );
}

export default HomeComponent;