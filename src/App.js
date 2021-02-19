import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AlertMsg from "./components/AlertMsg";
import { useDispatch } from "react-redux";
import authActions from "./redux/actions/auth.actions";
import PrivateRoute from "./routes/PrivateRoute";
import UserLayout from "./routes/UserLayout";
import PublicLayout from "./routes/PublicLayout";
import AdminRoute from "./routes/AdminRoute";
import AdminLayout from "./routes/AdminLayout";
import scrollActions from "./redux/actions/scroll.action";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken && accessToken.startsWith("Bearer ")) {
      dispatch(authActions.getCurrentUser(accessToken));
    } else {
      dispatch(authActions.logout());
    }
  }, [dispatch]);

  let prevPos = window.pageYOffset;
  window.onscroll = function () {
    let curPos = window.pageYOffset;
    if (prevPos < curPos) {
      dispatch(scrollActions.scroll(true));
    } else {
      dispatch(scrollActions.scroll(false));
    }
    prevPos = curPos;
  };

  return (
    <>
      <Router>
        <AlertMsg />
        <Switch>
          <PrivateRoute exact path="/user" component={UserLayout} />
          <AdminRoute path="/admin" component={AdminLayout} />
          <Route path="/" component={PublicLayout} />
        </Switch>
      </Router>
    </>
  );
}
export default App;
