import React from "react";
import "react-animation/dist/keyframes.css";
import LeftLayout from "../components/LeftLayout";

export const StoryPage = () => {
  return (
    <div id="story">
      <LeftLayout
        children={
          <p style={{ fontSize: "3vh", marginLeft: "5%", marginRight: "5%" }}>
            Unique, unforgettable, and experiential, Koji - with the meaning of
            “every thing” in Japanese, is the name that represents our desire to
            recreate and offer diners the timeless culinary delicacies from the
            land of the rising sun. For us, appreciating culinary arts is not
            about merely having a dish, but also an interactive journey.
          </p>
        }
        backdropImage={`images/me2.jpg`}
      />
    </div>
  );
};
export default StoryPage;
