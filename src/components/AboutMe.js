import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import image from "../images/marble-red-02.jpg";

export default function AboutMe() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container>
            <Row>
                <Col>
                    <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="example-modal-sizes-title-lg">
                        <Modal.Header closeButton>
                            <Modal.Title>Contact Form</Modal.Title>
                        </Modal.Header>
                        <Form>
                            <Modal.Body>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" placeholder="Send me a message :)" />
                                </Form.Group>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Submit
                                </Button>
                            </Modal.Footer>
                        </Form>
                    </Modal>
                </Col>
            </Row>
            <Row style={{ marginBottom: "100px", marginTop: "100px" }}>
                <Col>
                    <Container>
                        <Row>
                            <Col>
                                <br /><br /><br /><br />

                                <h6>A little about...</h6>
                                <h1>Marble Red</h1>

                                <br /><br />

                                <p>blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
                                <p>blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
                                <p>blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
                                <p>blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
                                <p>blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>

                                <br /><br />
                                <div style={{ textAlign: "center" }}>
                                    <Button variant="outline-dark" size="lg" onClick={handleShow}>Contact Me</Button>
                                </div>
                            </Col>
                            <Col>
                                <img src={image} alt="Marble Red" style={{ height: "600px", width: "400px" }} />
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}
