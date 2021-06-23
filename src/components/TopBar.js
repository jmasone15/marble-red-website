import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function TopBar({ setShow }) {

    const handleShow = () => setShow(true);

    return (
        <Navbar expand="xl" fixed="top" >
            <Navbar.Brand className="op0">Brand Test</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Container>
                    <Row>
                        <Col>
                            <div>
                                <h1 className="first-drop-text" style={{ display: "inline" }}><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Home</a></h1>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div>
                                <h1 className="second-drop-text" style={{ display: "inline" }}><a href="#music" style={{ color: "inherit", textDecoration: "none" }}>Music</a></h1>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div>
                                <h1 className="third-drop-text" style={{ display: "inline" }}><a href="#about" style={{ color: "inherit", textDecoration: "none" }}>About</a></h1>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div>
                                <h1 className="fourth-drop-text" style={{ display: "inline" }}><span onClick={handleShow} style={{ color: "inherit", textDecoration: "none" }}>Contact</span></h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Navbar.Collapse>
        </Navbar >
    )
}
