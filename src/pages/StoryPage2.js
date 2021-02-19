import React from "react";

export const StoryPage2 = () => {
  return (
    <div id="story" className="story2">
      <div className="story-content-2">
        <center>
          {" "}
          <h1>Koji's Story</h1>
        </center>
        <p style={{ fontSize: "3vh", marginLeft: "5%", marginRight: "5%" }}>
          Unique, unforgettable, and experiential, Koji - with the meaning of
          “eternal life” in Japanese, is the name that represents our desire to
          recreate and offer diners the timeless culinary delicacies from the
          land of the rising sun.
        </p>
        <p style={{ fontSize: "3vh", marginLeft: "5%", marginRight: "5%" }}>
          For us, appreciating culinary arts is not about merely having a dish,
          but also an interactive journey. Starting from the purest and finest
          ingredients, the variety of high-graded seafood of Koji mostly comes
          from the famous market Toyosu in Tokyo. Besides, some seasonal fishes
          are carefully picked from the Hokkaido seafood market and Nagasaki
          Bay. More especially, the blue-fin tuna is imported from Kochi - the
          city famed for its excellent wine and fish products.
        </p>
      </div>
      <img
        src="https://res.cloudinary.com/dopdu3ttp/image/upload/v1612687185/me2_uy2dzs.jpg"
        alt="me"
        className="story-image-2"
      />
    </div>
  );
};
export default StoryPage2;
