import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Button, Container, Row, Col } from 'reactstrap';

const Characters = (props) => {

        console.log(props);
        let statusLife;
        props.status !== "Alive" ? statusLife = "1": statusLife = "0"
        return(
         <Container>  
             <Row> 
                 <Col lg={12} md={5} xs ={12}>
                    <Card body outline color="primary">
                        <CardImg style={{filter: "grayscale("+statusLife+")"}} top width="50%" src={props.image} alt="Card image cap" />
                          <CardBody>
                            <CardTitle>{props.name}</CardTitle>
                              <CardText>ID: {props.id}</CardText>
                                <Button color="success" >See more</Button>
                          </CardBody>
                    </Card>
                 </Col>
            </Row>
        </Container>
                )    
}

export default Characters;