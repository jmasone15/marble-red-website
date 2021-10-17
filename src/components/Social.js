import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Fade from "react-reveal/Fade";

export default function Social() {
    return (
        <Container style={{ paddingBottom: "150px", paddingTop: "50px" }}>
            <Row className="ta">
                <Col className="follow">
                    <Fade top>
                        <h1 className="follow">Follow</h1>
                    </Fade>
                </Col>
                <Col>
                    <div className="wrapper">
                        <ul>
                            <Fade top>
                                <li className="spotify"><a href="https://open.spotify.com/artist/4OeVzPAcfd3hbo1KaiPMSy" target="_blank"><i className="fa fa-spotify fa-2x" aria-hidden="true"></i></a></li>
                            </Fade>
                            <Fade top>
                                <li className="apple"><a href="https://music.apple.com/us/artist/marble-red/1389288599" target="_blank"><i className="fa fa-apple fa-2x" aria-hidden="true"></i></a></li>
                            </Fade>
                            <Fade top>
                                <li className="twitch"><a href="https://www.twitch.tv/godgunsanime" target="_blank"><i className="fa fa-twitch fa-2x" aria-hidden="true"></i></a></li>
                            </Fade>
                            <Fade top>
                                <li className="facebook"><a href="https://www.facebook.com/matthew.trufant" target="_blank"><i className="fa fa-facebook fa-2x" aria-hidden="true"></i></a></li>
                            </Fade>
                            <Fade top>
                                <li className="instagram"><a href="https://www.instagram.com/matthewtrufant/" target="_blank"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a></li>
                            </Fade>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
