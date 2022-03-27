import React from "react";
// import Container from "@mui/material/Container";
import {Container,Col,Row } from "react-bootstrap";
import Header from "../../components/Header/Header";
import Features from "../../components/Features/Features";

const Home = () => {
  // xs, extra-small: 0px
  // sm, small: 600px
  // md, medium: 900px
  // lg, large: 1200px
  // xl, extra-large: 1536px
  return (
    <Container>
     <Header/>
     <Features/>
    </Container>
  );
};

export default Home;
