import React, { useState } from "react";
import Header from "./components/Header";
import TopBar from "./components/TopBar";
import Music from "./components/Music";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Social from "./components/Social";
import ContactModal from "./components/ContactModal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Bgv from "./images/marbleRedBGVideo.mp4"
import { useForm, ValidationError } from '@formspree/react';
import "./output.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [show, setShow] = useState(false);

  return (
    <Container fluid style={{ padding: "0" }}>
      <Container fluid>
        <video
          autoPlay
          loop
          muted
        >
          <source src={Bgv} type="video/mp4" />
        </video>
        <Row className="ta">
          <Col>
            <TopBar setShow={setShow} />
          </Col>
        </Row>
        <Row className="ta">
          <Col>
            <ContactModal show={show} setShow={setShow} />
          </Col>
        </Row>
        <Container fluid id="home" className="header-container">
          <Row>
            <Col>
              <Header />
            </Col>
          </Row>
          <Row className="arrow-row">
            <Col className="ta">
              <a className="arrow-icon" href="#social">
                <span className="left-bar"></span>
                <span className="right-bar"></span>
              </a>
            </Col>
          </Row>
        </Container>
      </Container >
      <Container fluid className="Social" id="social">
        <Row>
          <Col>
            <Social />
          </Col>
        </Row>
      </Container>
      <Container fluid className="music-parallax" id="music">
        <Row>
          <Col>
            <Music />
          </Col>
        </Row>
      </Container>
      <Container fluid className="divider">
        <Row>
          <Col>
            <h1 className="op0">Blank Title</h1>
          </Col>
        </Row>
      </Container>
      <Container fluid className="about-parallax" id="about">
        <Row>
          <Col>
            <AboutMe setShow={setShow} />
          </Col>
        </Row>
      </Container>
      <Container fluid className="Footer" id="contact">
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </ Container >
  );
}

export default App;
