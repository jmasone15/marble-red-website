import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Header() {
    return (
        <Container fluid className="App">
            <Row style={{ marginTop: "25%", marginBottom: "25%" }}>
                <Col style={{ textAlign: "center" }}>
                    <h1 className="header">Marble Red</h1>
                </Col>
            </Row>
        </Container>
    )
}
