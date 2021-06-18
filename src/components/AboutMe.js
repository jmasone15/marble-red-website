import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function AboutMe() {
    return (
        <Container>
            <Row style={{ marginTop: "100px", marginBottom: "100px" }}>
                <Col>
                    <h1>About Me</h1>
                </Col>
            </Row>
            <Row style={{ textAlign: "center", marginBottom: "100px" }}>
                <Col style={{ backgroundColor: "white", marginRight: "100px" }}>
                    <div>
                        <h3>A little about Marble Red...</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </Col>
                <Col style={{ backgroundColor: "white" }}>
                    <h3>Image here</h3>
                    <img src="https://via.placeholder.com/200" alt="Marble Red" />
                </Col>
            </Row>
            <Row style={{ textAlign: "center", marginBottom: "100px" }}>
                <Col>
                    <Button variant="outline-dark" size="lg">Contact Me</Button>
                </Col>
            </Row>
        </Container>
    )
}
