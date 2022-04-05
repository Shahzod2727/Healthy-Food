import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Nav, Navbar, NavDropdown, Container, Row, Col } from "react-bootstrap";
// import resumeDate from "./../utils/resumeDate";
import resumeDate from "./../../utils/resumeDate";
import Woman from "../../assets/images/woman.svg";
import CustomButtons from "../CustomButtons/CustomButtons";
import "./Features.css";

const Features = () => {
  //X-Small	None	<576px
  // Small	sm	≥576px
  // Medium	md	≥768px
  // Large	lg	≥992px
  // Extra large	xl	≥1200px
  // Extra extra large	xxl	≥1400px
  useEffect(() =>{
    AOS.init({
      duration:1500,
      once: true, 
    })
  })
  

  return (
    <Container>
      <Row>
        <Col md={12}>
          <div className="featurs-navbar">
            <h1 className="featurs-title">Features</h1>
            <h1 className="featurs-subtitle">Food with a New Passion</h1>
          </div>
        </Col>
      </Row>
      <Row>
        {" "}
        <Col>
          <div className="card-wrapper">
            {resumeDate.features.map((featur, i) => (
              <div key={i} className="cards" data-aos="zoom-in-down">
                <img src={featur.img} className="cards-img" />

                <h1 className="cards-title">{featur.title}</h1>
                <p className="cards-subtitle">{featur.subtitle}</p>
              </div>
            ))}
          </div>
        </Col>
      </Row>
      <Row className="about">
        <Col md={6} data-aos="fade-right">
          <img className="woman" src={Woman} />
        </Col>
        <Col md={6} className="about-text" data-aos="fade-left">
          <h2 className="title">About us</h2>
          <h1 className="subtitle">
            Food Stalls with Persons but to Product marketing plane catlogues
            etc to.{" "}
          </h1>
          <p className="text">
            There are many things are needed to start the Fast Food Business.
            You need not only Just Food Stalls with Persons but also equipment
            make your marketing plane Effective.
          </p>
          <CustomButtons text="Read More" />
        </Col>
      </Row>
    </Container>
  );
};

export default Features;
