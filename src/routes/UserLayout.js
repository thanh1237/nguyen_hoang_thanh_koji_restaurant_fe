import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";

const UserLayout = () => {
  return (
    <>
      {/* <PublicNavbar /> */}
      <Container fluid>
        <Row>
          <Col md={9} lg={10}>
            {/* <AlertMsg /> */}
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route component={NotFoundPage} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserLayout;
