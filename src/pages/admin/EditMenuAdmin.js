import React from "react";
import { Form, Image } from "react-bootstrap";
import { Col } from "react-bootstrap";

export const EditMenuAdmin = ({ formData, handleChange, editSelect }) => {
  return (
    <div className="scrollbar">
      <div className="adminPage" style={{ alignItems: "center" }}>
        <Col md={4} className="editCol1">
          {editSelect ? (
            <Image
              style={{ height: "35vh" }}
              src={editSelect.image}
              thumbnail
            />
          ) : (
            <h3>Please select item that you want to edit from Menu</h3>
          )}
        </Col>
        <Col md={7} style={{ height: "100%" }}>
          {editSelect ? (
            <Form className="editCol2 ">
              <div>
                <h5>Dish Name</h5>
                <Form.Control
                  className="formList"
                  placeholder={`${editSelect.name}`}
                  name="name"
                  type="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <h5>Type</h5>{" "}
                <Form.Control
                  className="formList"
                  as="select"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  defaultValue={`${editSelect.type}`}
                >
                  <option>{`${editSelect.type}`}</option>
                  {editSelect.type === "Food" ? (
                    <option>Drink</option>
                  ) : (
                    <option>Food</option>
                  )}
                </Form.Control>
              </div>
              <div>
                <h5>Price</h5>
                <Form.Control
                  className="formList"
                  name="price"
                  type="price"
                  placeholder={`${editSelect.price}`}
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>
            </Form>
          ) : null}
        </Col>
      </div>
    </div>
  );
};
export default EditMenuAdmin;
