import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Fade from "react-reveal/Fade";

export default function Music() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Container>
            <Row style={{ marginTop: "200px", marginBottom: "200px" }}>
                <Col>
                    <Fade left>
                        <Carousel activeIndex={index} onSelect={handleSelect} style={{ paddingBottom: "100px" }} controls={false}>
                            <Carousel.Item interval={10000000}>
                                <iframe title="For You" src="https://open.spotify.com/embed/track/6Q0LgI8oyye3lWsarz2AIG" width="100%" height="600" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                            </Carousel.Item>
                            <Carousel.Item interval={10000000}>
                                <iframe title="20 Deep" src="https://open.spotify.com/embed/track/5UVK6Ey02ZZflXAUK8Jd0L" width="100%" height="600" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                            </Carousel.Item>
                            <Carousel.Item interval={10000000}>
                                <img
                                    className="d-block w-100"
                                    src="https://via.placeholder.com/800x420.png?text=Album+Number+3"
                                    alt="Album #3"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Fade>
                </Col>
            </Row>
        </Container>
    )
}
