import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import MRImage from "../images/22D8FD5A-4A84-4BFF-B9DE-BEA07DDEC15B.JPG"

export default function AboutMe({ setShow }) {

    const handleShow = () => setShow(true);

    return (
        <Container fluid>
            <Row>
                <Col className="about-header-image">
                    <Fade top big cascade>
                        <h1 style={{ fontSize: "80px" }}>Marble Red</h1>
                    </Fade>
                    <img alt="Marble Red" src={MRImage} className="about-image" />
                </Col>
                <Col className="about-text">
                    <p>
                        <p className="about-marble-red-text">Marble Red</p> was born in September 1185 in the area now known as the Pacific Ocean. He built
                        his first guitar on his two-month birthday using the shell of a sea turtle and Dave Grohl’s hair,
                        and after learning what a power chord is, hasn’t stopped playing since.
                    </p>
                    <p>
                        His music is a mix of rock, lo-fi, pop, and indie that contains no added glucose while still
                        providing enough calories for the average person’s musical needs.
                    </p>
                    <p>
                        Want <p className="about-marble-red-text">Marble Red</p> at your venue? Shoot him a message. Now booking at all stages, centers, halls,
                        bars, auditoriums, and birthday parties.
                    </p>
                    <span className="record-button" onClick={handleShow}><span className="record-link"></span></span>
                </Col>
            </Row>
        </Container>
    )
}
