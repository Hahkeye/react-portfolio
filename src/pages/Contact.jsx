import { useState } from "react";
import {FormGroup, Form, FormLabel,FormControl, Col, Row, Button} from "react-bootstrap";

function Contact() {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = () => {

    console.log(name, email, message);
  };


  return (
        <>
            <Form onSubmit={submitForm}>
                <FormGroup as={Row} className="mb-3" controlId="name">
                    <FormLabel column sm="2">Name:</FormLabel>
                    <Col sm="10">
                        <FormControl/>
                    </Col>
                </FormGroup>
                <FormGroup as={Row} className="mb-3" controlId="email">
                    <FormLabel column sm="2">
                        Email:
                    </FormLabel>
                    <Col sm="10">
                        <FormControl type="email"/>
                    </Col>
                </FormGroup>
                <FormGroup as={Row} className="mb-3" controlId="concern">
                    <FormLabel column sm="2">
                        Concern:
                    </FormLabel>
                    <Col sm="10">
                        <FormControl/>
                    </Col>
                </FormGroup>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>



        </>
        
  );
}

export default Contact;