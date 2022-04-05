import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomButtons from "../CustomButtons/CustomButtons";
// import AppleIcon from "@mui/icons-material/Apple";
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Mobile from "../../assets/images/mobile.svg";
import "./TakeAway.css";
const TakeAway = () => {
  //X-Small	None	<576px
  // Small	sm	≥576px
  // Medium	md	≥768px
  // Large	lg	≥992px
  // Extra large	xl	≥1200px
  // Extra extra large	xxl	≥1400px
  return (
    <section id="take-away">
      <Container className="padding">
        <Row>
          <Col md={8}>
            <div className="take-way-content">
              <h3 className="title">Take away</h3>
              <h1 className="subtitle">
                Food Stalls with Persons but to Product marketing plane.{" "}
              </h1>
              <p className="text">
                There are many things are needed to start the Fast Food
                Business. You need not only Just Food Stalls with Persons but
                also specialized equipmentwith Persons but also Just Food Stalls
                with Persons.
              </p>
              <div className="buttons12">
                <CustomButtons text="App Store" className='btn-top' />
                <CustomButtons text="Google Play" />
              </div>
            </div>
          </Col>
          <Col md={4} className='position'>
            <div className="take-img"><img src={Mobile}/></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TakeAway;
