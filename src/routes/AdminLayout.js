import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import AdminPage from "../pages/admin/AdminPage";
import PublicNavbar from "../components/PublicNavbar";

const AdminLayout = () => {
  return (
    <>
      <PublicNavbar />
      {/* <PublicNavbar /> */}
      <Container fluid>
        <Row>
          <Col md={9} lg={10}>
            {/* <AlertMsg /> */}
            <Switch>
              <Route path="/" component={AdminPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminLayout;
