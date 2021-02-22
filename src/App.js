import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AlertMsg from "./components/AlertMsg";
import { useDispatch, useSelector } from "react-redux";
import authActions from "./redux/actions/auth.actions";
import PrivateRoute from "./routes/PrivateRoute";
import UserLayout from "./routes/UserLayout";
import PublicLayout from "./routes/PublicLayout";
import AdminRoute from "./routes/AdminRoute";
import AdminLayout from "./routes/AdminLayout";
import scrollActions from "./redux/actions/scroll.action";
import { ClipLoader } from "react-spinners";
function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
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
      {isAuthenticated === null ? (
        <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
          <ClipLoader color="#f86c6b" size={150} loading={true} />
        </div>
      ) : (
        <Router>
          <AlertMsg />
          <Switch>
            <PrivateRoute exact path="/user" component={UserLayout} />
            <AdminRoute path="/admin" component={AdminLayout} />
            <Route path="/" component={PublicLayout} />
          </Switch>
        </Router>
      )}
    </>
  );
}
export default App;
