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
import Sound from "react-sound";

export default function AboutMe() {

    const [show, setShow] = useState(false);
    const [spin, setSpin] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSpin = (e) => {
        e.preventDefault();

        if (spin === false) {
            setSpin(true);
        } else {
            setSpin(false);
        };
    };

    return (
        <Container fluid>
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
            <Row style={{ marginBottom: "100px", marginTop: "150px" }}>
                <Col>
                    <Container fluid>
                        <Row>
                            <Col>
                                <Container fluid>
                                    <Row>
                                        <Col>
                                            <h1 className="about-head">A little about...</h1>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Fade top big cascade>
                                                <h1 className="about-name">Marble Red</h1>
                                            </Fade>
                                        </Col>
                                    </Row>
                                    <Row style={{ marginLeft: "-30px" }}>
                                        <Col>
                                            <Fade left>
                                                <span className="record-button"><span onClick={(e) => handleSpin(e)} className="record-link"></span></span>
                                            </Fade>
                                        </Col>
                                    </Row>
                                    <Row style={{ marginTop: "170px", paddingBottom: "100px" }}>
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
                            <Col>
                                {spin === false && (
                                    <div className='record'></div>
                                )}
                                {spin === true && (
                                    <div className='record-spin'></div>
                                )}
                            </Col>
                        </Row>
                        <Row style={{ marginTop: "30px" }}>
                            <iframe src="https://open.spotify.com/embed/track/6Q0LgI8oyye3lWsarz2AIG" width="100%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}
