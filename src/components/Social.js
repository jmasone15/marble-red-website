import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Social() {
    return (
        <Container style={{ paddingBottom: "200px", paddingTop: "100px" }}>
            <Row style={{ textAlign: "center" }}>
                <Col>
                    <div className="wrapper">
                        <ul>
                            <li className="spotify"><a href="#"><i className="fa fa-spotify fa-2x" aria-hidden="true"></i></a></li>
                            <li className="apple"><a href="#"><i className="fa fa-apple fa-2x" aria-hidden="true"></i></a></li>
                            <li className="twitch"><a href="#"><i className="fa fa-twitch fa-2x" aria-hidden="true"></i></a></li>
                            <li className="facebook"><a href="#"><i className="fa fa-facebook fa-2x" aria-hidden="true"></i></a></li>
                            <li className="instagram"><a href="#"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
