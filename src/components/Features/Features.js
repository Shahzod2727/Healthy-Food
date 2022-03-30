import React from "react";
import { Nav, Navbar, NavDropdown,Container,Row,Col } from "react-bootstrap";
import './Features.css';



const Features = () => {
//X-Small	None	<576px
// Small	sm	≥576px
// Medium	md	≥768px
// Large	lg	≥992px
// Extra large	xl	≥1200px
// Extra extra large	xxl	≥1400px

  return (
    <Container>
  <Row>
    <Col md={12}>
      <div className="featurs-navbar">
            <h1 className="featurs-title">Features</h1>
            <h1 className="featurs-subtitle">Food with a New Passion</h1>
      </div>
    </Col>
    <Col>
    </Col>
  </Row>
</Container>
  );
};

export default Features;

