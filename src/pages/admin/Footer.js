import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import menuActions from "../../redux/actions/menu.actions";

export const Footer = ({
  select,
  menu,
  menuSelect,
  handleEdit,
  show,
  handleClose,
  formData,
  handleChange,
  update,
  handleConfirmChange,
  handleReEdit,
  bookingNotDelete,
  tableName,
  comment,
  setShow,
  handleDeleteMenu,
  setFormData,
}) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  const uploadedImage = useSelector((state) => state.menu.image);
  const handleShow = () => {
    setShow(true);
    setFormData({ name: "", type: "", price: "" });
  };

  // alert !!!! have to use FormData

  const handleCloseAndCreate = async (e) => {
    const { name, type, price } = formData;
    e.preventDefault();
    dispatch(menuActions.uploadImageAndCreate(image, name, type, price));
    handleClose();
  };
  useEffect(() => {}, [dispatch, image, uploadedImage, menu.length]);
  return select && select === "Menu" ? (
    <footer
      className="footer"
      style={{
        backgroundImage: "url(images/top-menu-bg.jpg)",
        borderTop: "4px solid red",
        height: "8vh",
      }}
    >
      <center className="adminFooter">
        <div className="adminBookingFooter">
          Total Dishes:{" "}
          <span style={{ color: "#e6b800" }}>{`${menu.length}`}</span>{" "}
        </div>
        {!menuSelect ? null : (
          <div className="adminBookingFooter">{`${menuSelect}`}</div>
        )}
        {menuSelect ? (
          <div className="adminBookingFooter" style={{ width: "20%" }}>
            <Button
              style={{ padding: "1px" }}
              variant="outline-danger"
              onClick={handleEdit}
            >
              Edit Item
            </Button>
            <Button
              onClick={handleShow}
              style={{ padding: "1px" }}
              variant="outline-info"
            >
              Add Item
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header className="backModal text" closeButton>
                <Modal.Title>Add New Item</Modal.Title>
              </Modal.Header>
              <Modal.Body className="backModal text">
                <Form className="editCol2 ">
                  <div>
                    <h5>Dish Name</h5>
                    <Form.Control
                      className="formList"
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
                    >
                      <option>Choose Type</option>
                      <option>Drink</option>
                      <option>Food</option>
                    </Form.Control>
                  </div>
                  <div>
                    <h5>Price</h5>
                    <Form.Control
                      className="formList"
                      name="price"
                      type="price"
                      value={formData.price}
                      onChange={handleChange}
                    />

                    <Form.Control
                      name="image"
                      type="file"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  </div>
                </Form>
              </Modal.Body>
              <Modal.Footer className="backModal text">
                <Button variant="primary" onClick={handleCloseAndCreate}>
                  Add
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        ) : (
          <>
            <Button
              disabled
              style={{ padding: "1px" }}
              variant="outline-danger"
            >
              Edit Item
            </Button>
            <Button
              style={{ padding: "1px" }}
              variant="outline-info"
              onClick={handleShow}
            >
              Add Item
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header className="backModal text" closeButton>
                <Modal.Title>Add New Item</Modal.Title>
              </Modal.Header>
              <Modal.Body className="backModal text">
                <Form className="editCol2 ">
                  <div>
                    <h5>Dish Name</h5>
                    <Form.Control
                      className="formList"
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
                    >
                      <option>Choose Type</option>
                      <option>Drink</option>
                      <option>Food</option>
                    </Form.Control>
                  </div>
                  <div>
                    <h5>Price</h5>
                    <Form.Control
                      className="formList"
                      name="price"
                      type="price"
                      value={formData.price}
                      onChange={handleChange}
                    />
                    <Form.Control
                      name="image"
                      type="file"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  </div>
                </Form>
              </Modal.Body>
              <Modal.Footer className="backModal text">
                <Button variant="primary" onClick={handleCloseAndCreate}>
                  Add
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        )}
      </center>
    </footer>
  ) : select === "Edit Menu" ? (
    <footer
      className="footer"
      style={{
        backgroundImage: "url(images/top-menu-bg.jpg)",
        borderTop: "4px solid red",
        height: "8vh",
      }}
    >
      {update === 1 ? (
        <center className="adminFooter">
          <div className="adminBookingFooter">
            <Button variant="outline-warning" onClick={handleConfirmChange}>
              Confirm Change
            </Button>
          </div>
          <div className="adminBookingFooter">
            <Button onClick={handleDeleteMenu} variant="outline-danger">
              Delete
            </Button>
          </div>
        </center>
      ) : update === 2 ? (
        <center className="adminFooter">
          <div className="adminBookingFooter">
            <span>Nothing change </span>
            <Button
              style={{ marginLeft: "1vw" }}
              onClick={handleReEdit}
              variant="outline-light"
            >
              Back to Edit
            </Button>
          </div>
          <div className="adminBookingFooter">
            <Button onClick={handleDeleteMenu} variant="outline-danger">
              Delete
            </Button>
          </div>
        </center>
      ) : null}
    </footer>
  ) : (
    <footer
      className="footer"
      style={{
        backgroundImage: "url(images/top-menu-bg.jpg)",
      }}
    >
      <center className="adminFooter">
        <div className="adminBookingFooter">
          Total Booking:{" "}
          <span style={{ color: "#e6b800", marginLeft: "2px" }}>{`${
            bookingNotDelete && bookingNotDelete.length
          }`}</span>
        </div>
        <div className="adminBookingFooter">
          Table:
          <span
            style={{ color: "#e6b800", marginLeft: "2px" }}
          >{`${tableName}`}</span>
        </div>
        <div className="adminBookingFooter">
          {" "}
          Comments:
          <span
            style={{ color: "#e6b800", marginLeft: "2px" }}
          >{`${comment}`}</span>
        </div>
      </center>
    </footer>
  );
};
export default Footer;
