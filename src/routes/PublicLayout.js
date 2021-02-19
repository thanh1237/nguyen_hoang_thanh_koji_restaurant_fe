import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import NotFoundPage from "../pages/NotFoundPage";
import BookingPage from "../pages/BookingPage2";
import StoryPage2 from "../pages/StoryPage2";
import PublicNavbar from "../components/PublicNavbar";
import Footer from "../components/Footer";
import Gallery from "../pages/Gallery";
import PrivateRoute from "./PrivateRoute";
import ItemDetail from "../pages/ItemDetail";

const PublicLayout = () => {
  return (
    <>
      <PublicNavbar />
      <>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/story" component={StoryPage2} />
          <Route exact path="/bookingPage" component={BookingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/register" component={RegisterPage} />
          <PrivateRoute path="/menu/:id" component={ItemDetail} />
          <Route component={NotFoundPage} />
        </Switch>
      </>
      <Footer />
    </>
  );
};

export default PublicLayout;
