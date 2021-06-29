import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function ContactModal({ show, setShow }) {

    const handleClose = () => setShow(false);

    return (
        <Container>
            <Row>
                <Col>
                    <Modal show={show} onHide={handleClose} size="lg" centered="true">
                        <div className="screen">
                            <div className="screen-header">
                                <div className="screen-header-left">
                                    <div className="screen-header-button close"></div>
                                    <div className="screen-header-button maximize"></div>
                                    <div className="screen-header-button minimize"></div>
                                </div>
                                <div className="screen-header-right">
                                    <div className="screen-header-ellipsis"></div>
                                    <div className="screen-header-ellipsis"></div>
                                    <div className="screen-header-ellipsis"></div>
                                </div>
                            </div>
                            <div className="screen-body">
                                <div className="screen-body-item left">
                                    <div className="app-title">
                                        <p>CONTACT ME</p>
                                    </div>
                                    <div className="app-contact">
                                        <p>Feel free to reach out to me with questions, concerns, or business requests.</p>
                                        <p>I usually respond within 1-2 business days.</p>
                                    </div>
                                </div>
                                <div className="screen-body-item">
                                    <div className="app-form">
                                        <div className="app-form-group">
                                            <input className="app-form-control" placeholder="NAME" />
                                        </div>
                                        <div className="app-form-group">
                                            <input className="app-form-control" placeholder="EMAIL" />
                                        </div>
                                        <div className="app-form-group">
                                            <input className="app-form-control" placeholder="CONTACT NO" />
                                        </div>
                                        <div className="app-form-group message">
                                            <input className="app-form-control" placeholder="MESSAGE" />
                                        </div>
                                        <div className="app-form-group buttons">
                                            <button className="app-form-button" onClick={handleClose}>CANCEL</button>
                                            <button className="app-form-button">SEND</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal>
                </Col>
            </Row>
        </Container>
    )
}



