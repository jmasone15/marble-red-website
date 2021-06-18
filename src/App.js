import React from "react";
import Header from "./components/Header";
import TopBar from "./components/TopBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container fluid style={{ padding: "0" }}>
      <TopBar />
      <Container fluid className="App">
        <Row style={{ marginTop: "25%", marginBottom: "25%" }}>
          <Col style={{ textAlign: "center" }}>
            <Header />
          </Col>
        </Row>
      </Container>
    </ Container>
  );
}

export default App;
