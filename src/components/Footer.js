import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
    return (
        <Container>
            <Row>
                <Col style={{ textAlign: "center" }}>
                    <p style={{ opacity: "0.5", fontSize: "13px" }}>Terms of Use | Privacy Agreement | Marble Red Records LLC | Anti-Aliasing Agent</p>
                    <p style={{ opacity: "0.5" }}>&copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/jmasone15" style={{ color: "white" }}> Jordan Masone </a></p>
                </Col>
            </Row>
        </Container>
    )
}
