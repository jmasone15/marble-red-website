import React, { useState } from "react";
import Header from "./components/Header";
import TopBar from "./components/TopBar";
import Music from "./components/Music";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./output.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Social from "./components/Social";
import ContactModal from "./components/ContactModal";

function App() {

  const [show, setShow] = useState(false);

  return (
    <Container fluid className="parallax" style={{ padding: "0" }}>
      <Container>
        <Row style={{ textAlign: "center" }}>
          <Col>
            <TopBar setShow={setShow} />
          </Col>
        </Row>
        <Row style={{ textAlign: "center" }}>
          <Col>
            <ContactModal show={show} setShow={setShow} />
          </Col>
        </Row>
        <Container fluid id="home">
          <Row style={{ marginTop: "33%", marginLeft: "30px" }}>
            <Col>
              <Header />
            </Col>
          </Row>
          <Row style={{ marginBottom: "300px", marginTop: "450px", textAlign: "center" }}>
            <Col className="scroll">
              <div className="scrolldown" >
                <div className="chevrons">
                  <div className="chevrondown"></div>
                  <div className="chevrondown"></div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="Social" id="social">
        <Row>
          <Col>
            <Social />
          </Col>
        </Row>
      </Container>
      <Container fluid className="parallax-music" id="music">
        <Row>
          <Col>
            <Music />
          </Col>
        </Row>
      </Container>
      <Container fluid className="divider">
        <Row>
          <Col>
            <h1 style={{ opacity: "0" }}>Blank Title</h1>
          </Col>
        </Row>
      </Container>
      <Container fluid className="parallax-about" id="about">
        <Row>
          <Col>
            <AboutMe />
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
