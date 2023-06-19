import React from "react";
import { Carousel } from "react-bootstrap";
import newOne from "../../includes/images/twoline.jpg";

const HomePageCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={newOne}
          style={{ width: "800px", height: "400px" }}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={newOne}
          style={{ width: "800px", height: "400px" }}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={newOne}
          style={{ width: "800px", height: "400px" }}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default HomePageCarousel;
