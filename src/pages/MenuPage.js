import React, { useState } from "react";
import { Carousel, Container } from "react-bootstrap";

export const MenuPage = () => {
  const [select, setSelect] = useState(1);
  const [item, setItem] = useState(1);

  const handleChangeDrink = (e) => {
    e.preventDefault();
    setSelect(2);
  };
  const handleChangeFood = (e) => {
    e.preventDefault();
    setSelect(1);
  };

  const handleItem1 = (e) => {
    e.preventDefault();
    setItem(1);
  };
  const handleItem2 = (e) => {
    e.preventDefault();
    setItem(2);
  };
  const handleItem3 = (e) => {
    e.preventDefault();
    setItem(3);
  };
  const handleItem4 = (e) => {
    e.preventDefault();
    setItem(4);
  };

  return (
    <div id="menu" className="menuC">
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
      {select === 1 ? (
        item === 1 ? (
          <div
            className="menu1"
            style={{ backgroundImage: "url(images/signature1.jpg" }}
          >
            <h1 onClick={handleItem4} className="text menuButton">
              {"<"}
            </h1>
            <h1 onClick={handleItem2} className="text menuButton">
              {">"}
            </h1>
          </div>
        ) : item === 2 ? (
          <div
            className="menu1 "
            style={{ backgroundImage: "url(images/signature2.jpg" }}
          >
            <h1 onClick={handleItem1} className="text menuButton">
              {"<"}
            </h1>
            <h1 onClick={handleItem3} className="text menuButton">
              {">"}
            </h1>
          </div>
        ) : item === 3 ? (
          <div
            className="menu1 "
            style={{ backgroundImage: "url(images/signature3.jpg" }}
          >
            <h1 onClick={handleItem2} className="text menuButton">
              {"<"}
            </h1>
            <h1 onClick={handleItem4} className="text menuButton">
              {">"}
            </h1>
          </div>
        ) : item === 4 ? (
          <div
            className="menu1 "
            style={{ backgroundImage: "url(images/signature4.jpg" }}
          >
            <h1 onClick={handleItem3} className="text menuButton">
              {"<"}
            </h1>
            <h1 onClick={handleItem1} className="text menuButton">
              {">"}
            </h1>
          </div>
        ) : null
      ) : item === 1 ? (
        <div
          className="menu1"
          style={{ backgroundImage: "url(images/cocktail1.jpg" }}
        >
          <h1 onClick={handleItem4} className="text menuButton">
            {"<"}
          </h1>
          <h1 onClick={handleItem2} className="text menuButton">
            {">"}
          </h1>
        </div>
      ) : item === 2 ? (
        <div
          className="menu1 "
          style={{ backgroundImage: "url(images/cocktail.jpg" }}
        >
          <h1 onClick={handleItem1} className="text menuButton">
            {"<"}
          </h1>
          <h1 onClick={handleItem3} className="text menuButton">
            {">"}
          </h1>
        </div>
      ) : item === 3 ? (
        <div
          className="menu1 "
          style={{ backgroundImage: "url(images/whisky.jpg" }}
        >
          <h1 onClick={handleItem2} className="text menuButton">
            {"<"}
          </h1>
          <h1 onClick={handleItem4} className="text menuButton">
            {">"}
          </h1>
        </div>
      ) : item === 4 ? (
        <div
          className="menu1 "
          style={{ backgroundImage: "url(images/cocktail2.jpg" }}
        >
          <h1 onClick={handleItem3} className="text menuButton">
            {"<"}
          </h1>
          <h1 onClick={handleItem1} className="text menuButton">
            {">"}
          </h1>
        </div>
      ) : null}
    </div>
  );
};
export default MenuPage;
