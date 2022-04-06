import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loder from "../../assets/images/lodarimg.svg";
import Rating from "@mui/material/Rating";
import "./Carousel.css";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // swipe: true,
  };
  return (
    <div className="Carousel">
      <Slider {...settings}>

        <div>
          <div className="card-box">
            {" "}
            <img src={Loder} />
          </div>
          <div className="carousel-content">
            <p>
              You need not only Just Food Stalls with Persons but also
              specialized equipment, Skills to manage Customers, Effective
              Product catlogues etc very successful to make your.
            </p>
            <Rating
              name="size-small"
              defaultValue={4}
              size="small"
              precision={0.5}
            />
            <h1>Augusta W. Reynoso</h1>
            <h3>UI&UX DeSIGNER</h3>
          </div>
        </div>


        
        <div>
          <div className="card-box">
            {" "}
            <img src={Loder} />
          </div>
          <div className="carousel-content">
            <p>
              You need not only Just Food Stalls with Persons but also
              specialized equipment, Skills to manage Customers, Effective
              Product catlogues etc very successful to make your.
            </p>
            <Rating
              name="size-small"
              defaultValue={4}
              size="small"
              precision={0.5}
            />
            <h1>Augusta W. Reynoso</h1>
            <h3>UI&UX DeSIGNER</h3>
          </div>
        </div>

        

      </Slider>
    </div>
  );
};

export default Carousel;
