import React from "react";
import { FormControl } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

export const Footer = ({
  select,
  menu,
  menuSelect,
  handleEdit,
  handleShow,
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
  inputFile,
  handleFileInputChange,
  fileInputState,

  previewSource,
  handleSubmitFile,
  handleDeleteMenu,
  handleCloseAndCreate,
}) => {
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
          <div className="adminBookingFooter">
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
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Woohoo, you're reading this text in a modal!
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseAndCreate}>
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
            {/* TODO */}
            <Modal show={show} onHide={handleClose}>
              <Modal.Header className="backModal text" closeButton>
                <Modal.Title>Add New Item</Modal.Title>
              </Modal.Header>
              <Modal.Body className="backModal text">
                <Form onSubmit={handleSubmitFile} className="editCol2 ">
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
                    {/* TODO */}
                    <Form.Control
                      name="image"
                      type="file"
                      value={fileInputState}
                      onChange={handleFileInputChange}
                    />

                    {previewSource && (
                      <>
                        <img
                          src={previewSource}
                          alt="chosen"
                          style={{ width: "20vw" }}
                        />
                      </>
                    )}
                  </div>
                  <button type="submit">submit</button>
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
            <span>Not thing change </span>
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
          <span style={{ color: "#e6b800" }}>{`${
            bookingNotDelete && bookingNotDelete.length
          }`}</span>
        </div>
        <div className="adminBookingFooter">
          Table:
          <span style={{ color: "#e6b800" }}>{`${tableName}`}</span>
        </div>
        <div className="adminBookingFooter">
          {" "}
          Comments:
          <span style={{ color: "#e6b800" }}>{`${comment}`}</span>
        </div>
      </center>
    </footer>
  );
};
export default Footer;
