import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Row, Col } from "react-bootstrap";
// import resumeDate from "./../../utils/resumeDate";
import resumeDate from "../../utils/resumeDate";
import AddIcon from "@mui/icons-material/Add";
import Food from "../../assets/images/vegie.svg";
import Vector from "../../assets/images/Vector.svg";
import Rating from "@mui/material/Rating";
import CustomButtons from "../CustomButtons/CustomButtons";

import "./MenuItem.css";

const MenuItem = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  });
  //X-Small	None	<576px
  // Small	sm	≥576px
  // Medium	md	≥768px
  // Large	lg	≥992px
  // Extra large	xl	≥1200px
  // Extra extra large	xxl	≥1400px
  return (
    <>
      {" "}
      <Row>
        <Col className="menu">
          <h2 className="title">Menu</h2>
          <h1 className="subtitle">Food Full of treaty Love</h1>
          <p className="menu-text">
            There are many things are needed to start the Fast Food Business.
            You need not only Just Food Stalls with Persons but also specialized
            equipment, Skills to manage Customers,{" "}
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <div className="card-menu-wrapper">
            {/* {resumeDate.menus.map(( menu,i) => (
              <div key={i} className="cards">
                
                <img src={menu.img}/> 
                <h1 className="card-menu-title">{menu.title}</h1>
                <p className="card-menu-subtitle">{menu.subtitle}</p>

              </div>
            ))} */}
            {resumeDate.menus.map((menu, i) => (
              <div key={i} className="card-menu" data-aos="zoom-in-down">
                <div className="images">
                  {" "}
                  <img src={menu.img} className="imags" />
                </div>
                <div className="menu-header">
                  {" "}
                  <h1>{menu.title}</h1> <span>${menu.price.toString()}</span>
                </div>
                <div className="menu-header-text">
                  <p>{menu.subtitle}</p>
                </div>
                <div className="icons">
                  <div className="box">
                    <AddIcon />
                  </div>
                  <Rating
                    name="size-small"
                    defaultValue={menu.starts.toString()}
                    size="small"
                    precision={0.5}
                  />
                </div>
              </div>
            ))}
          </div>
        </Col>
        <Col className="menu-button">
          <CustomButtons text="Read More" />
        </Col>
      </Row>
    </>
  );
};

export default MenuItem;
