import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function TopBar() {
    return (
        <Navbar expand="lg" fixed="top" >
            <Navbar.Brand className="op0">Brand Test</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Container>
                    <Row>
                        <Col>
                            <div>
                                <h1 className="first-drop-text" style={{ display: "inline" }}>Home</h1>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div>
                                <h1 className="second-drop-text" style={{ display: "inline" }}>Music</h1>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div>
                                <h1 className="third-drop-text" style={{ display: "inline" }}>About</h1>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div>
                                <h1 className="fourth-drop-text" style={{ display: "inline" }}>Contact</h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Navbar.Collapse>
        </Navbar >
    )
}
