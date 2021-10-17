import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Fade from "react-reveal/Fade";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function Music() {

    return (
        <Container>
            <Row style={{ marginTop: "200px", marginBottom: "200px" }}>
                <Col>
                    <Fade left>
                        <Carousel autoPlay emulateTouch={true} showThumbs={false} showIndicators={false} showStatus={false} swipeable={true} showIndicators={false} >
                            <div>
                                <img
                                    className="d-block w-100"
                                    src="https://via.placeholder.com/800x420.png?text=Album+Number+3"
                                    alt="Album #3"
                                />
                            </div>
                            <div>
                                <iframe title="For You" src="https://open.spotify.com/embed/track/6Q0LgI8oyye3lWsarz2AIG" width="100%" height="600" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                            </div>
                            <div>
                                <iframe title="20 Deep" src="https://open.spotify.com/embed/track/5UVK6Ey02ZZflXAUK8Jd0L" width="100%" height="600" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                            </div>
                        </Carousel>
                    </Fade>
                </Col>
            </Row>
        </Container>
    )
}
