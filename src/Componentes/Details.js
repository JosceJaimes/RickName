import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Container, Row, Col } from 'reactstrap';


const Details = (props) => {
    console.log(props);
    let statusLife;
        props.status !== "Alive" ? statusLife = "1": statusLife = "0"

return(
    <Container>  
             <Row> 
                 <Col lg = {12} xs = {12}>
                    <Card>
                        <CardImg style={{filter: "grayscale("+statusLife+")"}} top width="100%" src={props.image} alt="Card image cap" />
                        <CardBody >
                            <CardTitle>Name: {props.name}</CardTitle>
                             <CardSubtitle>Status: {props.status}</CardSubtitle>
                              <CardText>Spiece: {props.species}</CardText>
                              <CardText>Type: {props.type}</CardText>
                              <CardText>Gender: {props.gender}</CardText>
                              <CardText>Origin: {props.origin.name}</CardText>
                        </CardBody>
                    </Card>
                 </Col>
            </Row>
        </Container>
)
     
}
 export default Details;