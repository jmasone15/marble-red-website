import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

export default function Music() {
    return (
        <Container>
            <Row style={{ marginTop: "100px", marginBottom: "200px" }}>
                <Col>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://via.placeholder.com/800x400.png?text=Album+Number+1"
                                alt="Album #1"
                            />
                            <Carousel.Caption>
                                <h3>First Album Title</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://via.placeholder.com/800x400.png?text=Album+Number+2"
                                alt="Album #2"
                            />

                            <Carousel.Caption>
                                <h3>Second Album Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://via.placeholder.com/800x400.png?text=Album+Number+3"
                                alt="Album #3"
                            />

                            <Carousel.Caption>
                                <h3>Third Album Titlel</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
}
