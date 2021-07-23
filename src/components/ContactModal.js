import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import { useForm, ValidationError } from '@formspree/react';

export default function ContactModal({ show, setShow }) {

    const handleClose = () => setShow(false);
    const [state, handleSubmit] = useForm("mqkwdnvg");

    if (state.succeeded) {
        handleClose();
    };

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
                                    <form onSubmit={handleSubmit}>
                                        <div className="app-form">
                                            <div className="app-form-group">
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    className="app-form-control"
                                                    placeholder="NAME"
                                                />
                                                <ValidationError
                                                    prefix="Name"
                                                    field="name"
                                                    errors={state.errors}
                                                />
                                            </div>
                                            <div className="app-form-group">
                                                <input
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    className="app-form-control"
                                                    placeholder="EMAIL"
                                                />
                                                <ValidationError
                                                    prefix="Email"
                                                    field="email"
                                                    errors={state.errors}
                                                />
                                            </div>
                                            <div className="app-form-group">
                                                <input
                                                    type="text"
                                                    id="contact"
                                                    name="contact"
                                                    className="app-form-control"
                                                    placeholder="CONTACT NO"
                                                />
                                                <ValidationError
                                                    prefix="Contact"
                                                    field="contact"
                                                    errors={state.errors}
                                                />
                                            </div>
                                            <div className="app-form-group message">
                                                <input
                                                    type="text"
                                                    className="app-form-control"
                                                    placeholder="MESSAGE"
                                                    id="message"
                                                    name="message"
                                                />
                                                <ValidationError
                                                    prefix="Message"
                                                    field="message"
                                                    errors={state.errors}
                                                />
                                            </div>
                                            <div className="app-form-group buttons">
                                                <button
                                                    type="submit"
                                                    className="app-form-button"
                                                    disabled={state.submitting}>
                                                    SEND
                                                </button>
                                                <button className="app-form-button" onClick={handleClose}>CANCEL</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Modal>
                </Col>
            </Row>
        </Container>
    )
}



