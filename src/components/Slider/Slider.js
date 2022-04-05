import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { SliderHeader } from "./SliderHeader";
import SliderMain from "./SliderMain";
import Testbutton from "../Testbutton/Testbutton";
 

const Slider = (props) => {
  return (
    <>
      <SliderHeader />
      <SliderMain />
      <Testbutton />
    </>
  );
};

export default Slider;
