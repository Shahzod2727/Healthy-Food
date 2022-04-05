import React from "react";
import { Nav, Navbar, NavDropdown,Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, Link, withRouter } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
// import Container from "@mui/material/Container";
import TelegramIcon from "@mui/icons-material/Telegram";
import CustomButtons from "../CustomButtons/CustomButtons";
import "./MainNavigation.css";
import Logo from "../../assets/images/logo.svg";
// import "./Header.css";
// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px
const MainNavigation = (props) => {
  const pathName = props?.location?.pathname;
  return (
    <Navbar bg="light" expand="md" className="navigation" sticky="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              className={pathName == "/" ? "header_link_active" : "header_link"}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/test"
              className={
                pathName == "/test" ? "header_link_active" : "header_link"
              }
            >
              About us
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/footer"
              className={
                pathName == "/footer" ? "header_link_active" : "header_link"
              }
            >
              Menu
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/test5"
              className={
                pathName == "/test5" ? "header_link_active" : "header_link"
              }
            >
              Features
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/test6"
              className={
                pathName == "/test6" ? "header_link_active" : "header_link"
              }
            >
              Contact us
            </Nav.Link>
          </Nav>
          <div className="header_right">
            <CustomButtons text={"Hire Me"}  />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default withRouter(MainNavigation);
