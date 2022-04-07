import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LogoFooter from "../../assets/images/logo_footer.svg";
import "./Footer.css";

const Footer = () => {
  // xs, extra-small: 0px
  // sm, small: 600px
  // md, medium: 900px
  // lg, large: 1200px
  // xl, extra-large: 1536px
  return (
    <section className="footer">
      <Container>
        <Row>
          <Col xs={6} sm={4} md={3}>
            <ul>
              <li className="footer-logo">
                <img src={LogoFooter} />
              </li>
              <li>www.company name.com</li>
              <li>company@gmail.com</li>
              <li>Phone: +7 485-118-03-25</li>
            </ul>
          </Col>
          <Col xs={6} sm={4} md={3}>
            <h1>Home</h1>
            <ul>
              <li>Landingpage</li>
              <li>Documentation</li>
              <li>Referral Program</li>
              <li>UI & UX Design</li>
              <li>Web Design</li>
            </ul>
          </Col>
          <Col xs={6} sm={4} md={3}>
            {" "}
            <h1>Menu</h1>
            <ul>
              <li>Landingpage</li>
              <li>Documentation</li>
              <li>Referral Program</li>
              <li>UI & UX Design</li>
              <li>Web Design</li>
            </ul>
          </Col>
          <Col xs={6} sm={4} md={3}>
            {" "}
            <h1>Company</h1>
            <ul>
              <li>Landingpage</li>
              <li>Documentation</li>
              <li>Referral Program</li>
              <li>UI & UX Design</li>
              <li>Web Design</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
