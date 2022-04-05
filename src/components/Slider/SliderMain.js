import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import Loder from "../../assets/images/lodarimg.svg";
import Rating from "@mui/material/Rating";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  // { width: 550, itemsToShow: 2 },
  // { width: 768, itemsToShow: 3 },
  // { width: 1200, itemsToShow: 4 },
];

const SliderMain = (props) => {
  return (
    <>
      <Carousel breakPoints={breakPoints}>
        <Item>
          <img src={Loder} />
          <p>
            You need not only Just Food Stalls with Persons but also specialized
            equipment, Skills to manage Customers, Effective Product catlogues
            etc very successful to make your.
          </p>
          <Rating
            name="size-small"
            defaultValue={4}
            size="small"
            precision={0.5}
          />
          <h1>Augusta W. Reynoso</h1>
          <h3>UI&UX DeSIGNER</h3>
        </Item>
        <Item>Two</Item>
        <Item>Three</Item>
        <Item>Four</Item>
        <Item>Five</Item>
        <Item>Six</Item>
        <Item>Seven</Item>
        <Item>Eight</Item>
      </Carousel>
    </>
  );
};

export default SliderMain;
