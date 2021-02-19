import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export const MenuPage2 = () => {
  const history = useHistory();
  const [select, setSelect] = useState(1);
  const handleChangeDrink = (e) => {
    e.preventDefault();
    setSelect(2);
  };
  const handleChangeFood = (e) => {
    e.preventDefault();
    setSelect(1);
  };

  const handleClick = (e) => {
    e.preventDefault();
    history.push("/gallery");
  };

  return (
    <div className="menuC">
      <div className="menuNav">
        <h3 onClick={handleChangeFood} className="textMenu">
          FOOD
        </h3>
        <svg width="4vw" height="4vw" xmlns="images/table_4.png">
          <image href="images/line.png" height="100%" width="100%" />
        </svg>
        <h3 onClick={handleChangeDrink} className="textMenu">
          DRINK
        </h3>
      </div>
      <div className="menu1">
        {select === 1 ? (
          <Carousel
            indicators={false}
            style={{ width: "100%", height: "100%" }}
          >
            <Carousel.Item
              style={{ width: "100%", height: "100%" }}
              interval={1000}
            >
              <img
                style={{ width: "100%", height: "100%", objectFit: "fill" }}
                className="d-block"
                src="https://res.cloudinary.com/dopdu3ttp/image/upload/v1612669073/signature4_sxrrzl.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item
              style={{ width: "100%", height: "100%" }}
              interval={1000}
            >
              <img
                style={{ width: "100%", height: "100%", objectFit: "fill" }}
                className="d-block"
                src="https://res.cloudinary.com/dopdu3ttp/image/upload/v1612669074/signature1_z9bhdj.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item
              interval={1000}
              style={{ width: "100%", height: "100%" }}
            >
              <img
                style={{ width: "100%", height: "100%", objectFit: "fill" }}
                className="d-block "
                src="https://res.cloudinary.com/dopdu3ttp/image/upload/v1612669075/signature2_ombtty.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        ) : (
          <Carousel
            indicators={false}
            style={{ width: "100%", height: "100%" }}
          >
            <Carousel.Item
              style={{ width: "100%", height: "100%" }}
              interval={1000}
            >
              <img
                style={{ width: "100%", height: "100%", objectFit: "fill" }}
                className="d-block"
                src="https://res.cloudinary.com/dopdu3ttp/image/upload/v1612669918/cocktail1_ish1uw.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item
              style={{ width: "100%", height: "100%" }}
              interval={1000}
            >
              <img
                style={{ width: "100%", height: "100%", objectFit: "fill" }}
                className="d-block"
                src="https://res.cloudinary.com/dopdu3ttp/image/upload/v1612669919/cocktail2_pwn4sz.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item
              interval={1000}
              style={{ width: "100%", height: "100%" }}
            >
              <img
                style={{ width: "100%", height: "100%", objectFit: "fill" }}
                className="d-block "
                src="https://res.cloudinary.com/dopdu3ttp/image/upload/v1612669918/cocktail4_xs7pyr.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        )}
        <section className="gallery portfolio-experiment">
          <a>
            <div onClick={handleClick}>View All Menu</div>
            <span className="line -right"></span>
            <span className="line -top"></span>
            <span className="line -left"></span>
            <span className="line -bottom"></span>
          </a>
        </section>
      </div>
    </div>
  );
};
export default MenuPage2;
