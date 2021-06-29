import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

export default function AboutMe() {

    return (
        <Container fluid>
            <Row style={{ marginBottom: "100px", marginTop: "200px" }}>
                <Col>
                    <Container fluid>
                        <Row>
                            <Col>
                                <Fade top big cascade>
                                    <h1 className="about-name">Marble Red</h1>
                                </Fade>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{ marginTop: "30px" }}>
                                <Slide top cascade>
                                    <div className="about-card">
                                        <p className="about-text">blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</p>
                                    </div>
                                </Slide>
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{ textAlign: "center", marginTop: "30px" }}>
                                <Fade left>
                                    <span className="record-button"><span className="record-link"></span></span>
                                </Fade>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col>
                    <Container fluid>
                        <Row>
                            <Col style={{ marginRight: "20px", marginBottom: "20px" }}>
                                <div className="image-container">
                                    <div
                                        className="image-container__image">
                                    </div>
                                </div>
                            </Col>
                            <Col style={{ marginBottom: "20px" }}>
                                <div className="image-container">
                                    <div
                                        className="image-container__image">
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="image-container">
                                    <div
                                        className="image-container__image">
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}
