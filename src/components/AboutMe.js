import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import image from "../images/marble-red-03-removebg-preview.png";
import Fade from "react-reveal/Fade";
import Slide from 'react-reveal/Slide';

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
                    <Container fluid>
                        <Row>
                            <Col>
                                <Container>
                                    <Row style={{ marginLeft: "-100px" }}>
                                        <Col>
                                            <h1 className="about-head">A little about...</h1>
                                        </Col>
                                    </Row>
                                    <Row style={{ marginLeft: "-100px" }}>
                                        <Col>
                                            <Fade top big cascade>
                                                <h1 className="about-name">Marble Red</h1>
                                            </Fade>
                                        </Col>
                                    </Row>
                                    <Row style={{ marginLeft: "-120px" }}>
                                        <Col>
                                            <Fade left>
                                                <span className="contact-button"><span onClick={handleShow} className="contact-link"></span></span>
                                            </Fade>
                                        </Col>
                                    </Row>
                                    <Row style={{ marginTop: "150px", marginLeft: "-120px" }}>
                                        <Col>
                                            <Slide top cascade>
                                                <div className="about-card">
                                                    <h5 className="about-text">blah blah blah blah blah blah blah blah blah blah</h5>
                                                    <h5 className="about-text">blah blah blah blah blah blah blah blah blah blah</h5>
                                                    <h5 className="about-text">blah blah blah blah blah blah blah blah blah blah</h5>
                                                    <h5 className="about-text">blah blah blah blah blah blah blah blah blah blah</h5>
                                                    <h5 className="about-text">blah blah blah blah blah blah blah blah blah blah</h5>
                                                </div>
                                            </Slide>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                            <Col style={{ marginTop: "-300px", marginRight: "-400px" }}>
                                <Fade right>
                                    <img src={image} alt="Marble Red" style={{ height: "1000px", width: "800px" }} />
                                </Fade>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}
