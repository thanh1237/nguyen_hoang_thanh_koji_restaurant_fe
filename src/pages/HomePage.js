import React from "react";
import { FullPage, Slide } from "react-full-page";
import StoryPage2 from "./StoryPage2";
import BookingPage2 from "./BookingPage2";

import MenuPage2 from "./MenuPage2";

const HomePage = () => {
  return (
    <FullPage>
      <Slide id="main">
        <div className="open ">
          <div id="row">
            <div className="aside text fade-in">
              <h2 style={{ color: "red" }}>OPERATION</h2>
              <h2 style={{ color: "red" }}> HOURS</h2>
              <h4>LUNCH</h4>
              <p>Mon - Sun:</p>
              <p style={{ color: "red" }}>11:30AM - 2PM</p>
              <div
                className="divider"
                style={{
                  textAlign: "center",
                  width: "100%",
                  height: "1px",
                  margin: "5px 0",
                }}
              ></div>
              <h4>DINNER</h4>
              <p>Mon - Sun:</p>
              <p style={{ color: "red" }}>6PM - Midnight</p>

              <div
                className="divider"
                style={{
                  textAlign: "center",
                  width: "100%",
                  height: "1px",
                  margin: "5px 0",
                }}
              ></div>
              <h2 style={{ color: "red" }}>HOTLINE</h2>
              <p>1900 6886</p>
            </div>
          </div>
        </div>
        <img
          className="home"
          style={{ width: "100%", height: "100%" }}
          src={`images/home_xl.jpg`}
          alt="home"
        />
      </Slide>

      <Slide>
        <StoryPage2 />
      </Slide>
      <Slide>
        <MenuPage2 />
      </Slide>
      <Slide>
        <BookingPage2 />
      </Slide>
    </FullPage>
  );
};

export default HomePage;
