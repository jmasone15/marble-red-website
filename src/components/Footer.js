import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaApple, FaFacebook, FaSpotify, FaTwitch, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <Container>
            <Row style={{ textAlign: "center" }}>
                <Col style={{ marginRight: "-300px" }}>
                    <h3>Social Links</h3>
                </Col>
                <Col>
                    <Container>
                        <Row>
                            <Col style={{ marginRight: "-300px", cursor: "pointer" }}>
                                <FaFacebook />
                            </Col>
                            <Col style={{ marginRight: "-300px", cursor: "pointer" }}>
                                <FaTwitter />
                            </Col>
                            <Col style={{ marginRight: "-300px", cursor: "pointer" }}>
                                <FaSpotify />
                            </Col>
                            <Col style={{ marginRight: "-300px", cursor: "pointer" }}>
                                <FaApple />
                            </Col>
                            <Col style={{ cursor: "pointer" }}>
                                <FaTwitch />
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Row style={{ marginTop: "50px" }}>
                <Col style={{ textAlign: "center", marginTop: "20px" }}>
                    <p style={{ opacity: "0.5" }}>&copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/jmasone15" style={{ color: "white" }}> Jordan Masone </a></p>
                </Col>
            </Row>
        </Container>
    )
}
