import React from "react";
// import Container from "@mui/material/Container";
import { Container } from "react-bootstrap";
import Header from "../../components/Header/Header";
import Features from "../../components/Features/Features";
import MenuItem from "../../components/Menu/MenuItem";
import TakeAway from "../../components/TakeAway/TakeAway";
// import Slider from "../../components/Slider/Slider";
import SliderHeader from "../../components/Slider/SliderHeader";
import Carousel from "../../components/Carousel/Carousel";
// import Swiper from "../../components/Swiper/Swiper";
import Contact from "../../components/Contact/Contact";
// import Footer from "../Footer/Footer";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  // xs, extra-small: 0px
  // sm, small: 600px
  // md, medium: 900px
  // lg, large: 1200px
  // xl, extra-large: 1536px
  return (
    <>
      <Container>
        <Header />
        <Features />
        <MenuItem />
      </Container>
      <TakeAway />
      <Container>
        <SliderHeader />
        <Carousel />
      </Container>
      <Contact />
      {/* <Contact /> */}
      <Footer/>
      
    </>
  );
};

export default Home;
