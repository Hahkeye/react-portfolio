// import React from "react";
import { Button, Card } from "react-bootstrap";

const Project = (props) =>{
    return(
        <Card>
            <Card.Img variant="bottom" src={`img/${props.project.image}`}/>
            <Card.Body>
                <Card.Title>{props.project.title}</Card.Title>
                <Card.Text>
                    {props.project.description}
                </Card.Text>
                <Button as="a" href={props.project.link}>Get to da REPO!</Button>
            </Card.Body>
        </Card>
    );
}

export default Project;