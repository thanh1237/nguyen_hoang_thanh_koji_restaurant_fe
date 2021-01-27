import React from "react";

export const HeaderAdmin = ({ select }) => {
  return select && select === "Menu" ? (
    <div
      style={{
        backgroundImage: "url(images/top-menu-bg.jpg)",
        borderBottom: "4px solid red",
        height: "8vh",
      }}
    >
      <center style={{ fontSize: "4vh" }}>Menu</center>
    </div>
  ) : select === "Edit Menu" ? (
    <div
      style={{
        backgroundImage: "url(images/top-menu-bg.jpg)",
        borderBottom: "4px solid red",
        height: "8vh",
      }}
    >
      <center style={{ fontSize: "4vh" }}>Edit Menu</center>
    </div>
  ) : (
    <div
      style={{
        backgroundImage: "url(images/top-menu-bg.jpg)",
        borderBottom: "4px solid red",
        height: "8vh",
      }}
    >
      <center style={{ fontSize: "4vh" }}>Booking List</center>
    </div>
  );
};
export default HeaderAdmin;
