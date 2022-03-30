import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import Food from "../../assets/images/food.svg";
import CustomButtons from "../CustomButtons/CustomButtons";
import "./Header.css";
const Header = () => {
  // X-Small	None	<576px
  // Small	sm	≥576px
  // Medium	md	≥768px
  // Large	lg	≥992px
  // Extra large	xl	≥1200px
  // Extra extra large	xxl	≥1400px

  return (
    <Container className="header">
      {" "}
      <Row>
        <Col md={6} className="header_left">
          <h1>Making time a good time by making food the good food.</h1>
          <p>
            There are many things are needed to start the Fast Food Business.
            You need not only Just Food Stalls with Persons but also specialized
            equipment,
          </p>
          <div className="btn">
            <CustomButtons text='Order Now'/>
          </div>
        </Col>
        <Col md={6} className="header_left">
          <img src={Food} className="imags" />
        </Col>
        {/* <Col sm={6} className="header_right"><img src={Food}/></Col> */}
      </Row>
    </Container>
  );
};

export default Header;
