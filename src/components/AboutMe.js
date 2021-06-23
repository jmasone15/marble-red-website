import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Fade from "react-reveal/Fade";
import Slide from 'react-reveal/Slide';
// import Sound from "react-sound";

export default function AboutMe() {

    const [spin, setSpin] = useState(false);

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
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}
