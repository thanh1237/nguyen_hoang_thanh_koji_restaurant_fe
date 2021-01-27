import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import NotFoundPage from "../pages/NotFoundPage";
import BookingPage from "../pages/BookingPage2";
import StoryPage from "../pages/StoryPage";
import PublicNavbar from "../components/PublicNavbar";

const PublicLayout = () => {
  return (
    <>
      <PublicNavbar />
      <>
        {/* <AlertMsg /> */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/story" component={StoryPage} />
          <Route exact path="/bookingPage" component={BookingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </>
    </>
  );
};

export default PublicLayout;
