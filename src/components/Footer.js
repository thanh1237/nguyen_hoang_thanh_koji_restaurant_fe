import React from "react";
import { useSelector } from "react-redux";

export const Footer = () => {
  const scroll = useSelector((state) => state.scroll.scroll);
  //scroll = true -> is going down
  return (
    <div
      className={scroll === true ? "main-footer1" : "main-footer"}
      style={{
        backgroundImage:
          "url(https://res.cloudinary.com/dopdu3ttp/image/upload/v1612668306/top-menu-bg_ibwbrt.jpg)",
      }}
    >
      <footer>
        &copy; Copyright 2021{" "}
        <a style={{ color: "white", textDecoration: "none" }} href="#">
          Koji restaurant
        </a>{" "}
        |
        <a style={{ color: "white", textDecoration: "none" }} href="#">
          {" "}
          Private Policy
        </a>
      </footer>
    </div>
  );
};
export default Footer;
