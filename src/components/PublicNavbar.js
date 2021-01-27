import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../images/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import authActions from "../redux/actions/auth.actions";

const PublicNavbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const role = useSelector((state) => state.auth.user.role);
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();
  const history = useHistory();

  const location = useLocation();

  const handleLogout = () => {
    dispatch(authActions.logout());
    history.push("/login");
  };

  const authLinks = (
    <Nav>
      {location?.pathname === "/" && (
        <>
          <Nav.Link as={Link} smooth to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} smooth to="#story">
            Our Story
          </Nav.Link>
          <Nav.Link as={Link} smooth to="#menu">
            Signature Dishes
          </Nav.Link>
          <Nav.Link as={Link} smooth to="#booking">
            Reserve
          </Nav.Link>
          <Nav.Link smooth onClick={handleLogout}>
            Logout
          </Nav.Link>
        </>
      )}
    </Nav>
  );
  const adminLinks = (
    <Nav>
      <Nav.Link as={Link} smooth to="/admin/">
        Admin
      </Nav.Link>
      <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
    </Nav>
  );
  const publicLinks = (
    <Nav>
      {location?.pathname === "/" && (
        <>
          <Nav.Link as={Link} smooth to="#story">
            Our Story
          </Nav.Link>
          <Nav.Link as={Link} smooth to="#menu">
            Signature Dishes
          </Nav.Link>
          <Nav.Link as={Link} smooth to="#booking">
            Reserve
          </Nav.Link>
          <Nav.Link as={Link} smooth to="#career">
            Career
          </Nav.Link>
        </>
      )}
      <Nav.Link as={Link} to="/register">
        Register
      </Nav.Link>
      <Nav.Link as={Link} to="/login">
        Login
      </Nav.Link>
    </Nav>
  );

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("nav").style.top = "0";
    } else {
      document.getElementById("nav").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <Navbar
      expand="lg"
      style={{ backgroundImage: `url(images/top-menu-bg.jpg)` }}
      id="nav"
    >
      <Navbar.Brand as={Link} to="/" className="mr-auto">
        <img src={logo} alt="CoderSchool" width="200px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        {!loading && (
          <>
            {role === "admin"
              ? adminLinks
              : isAuthenticated
              ? authLinks
              : publicLinks}
          </>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default PublicNavbar;
