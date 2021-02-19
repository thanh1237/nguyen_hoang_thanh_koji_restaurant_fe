import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import authActions from "../redux/actions/auth.actions";
import bookingActions from "../redux/actions/booking.action";
import LoginPage from "./LoginPage";

export const BookingPage2 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    tableId: "",
    comment: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    tableId: "",
    comment: "",
  });

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const newTables = useSelector((state) => state.auth.newTables);
  const singleTable = useSelector((state) => state.auth.singleTable);
  const currentUserId = useSelector((state) => state.auth.user._id);
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(1);
  const [select, setSelect] = useState("ahihi");
  const [booking, setBooking] = useState(1);

  const handleClose = () => {
    dispatch(authActions.selectDate(formData.date));
    setShow(false);
  };

  const handleShow = (e) => {
    e.preventDefault();

    //if authenticated
    if (isAuthenticated && formData.tableId) {
      const { name, email, date, time, tableId, comment } = formData;
      if (singleTable.status === "Pending") {
        setModal(2);
      } else {
        dispatch(
          authActions.updateTable(tableId, comment, { status: "Pending" })
        );
        authActions.getTable();
        dispatch(bookingActions.createBooking(tableId, currentUserId));
        setModal(1);
      }
      setShow(true);
    }
    //else MODAL BODY, LOGIN
    else {
      setModal(3);
      setShow(true);
    }
  };

  const handleGetTable = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    const { name, email, date, time, tableId, comment } = formData;
    dispatch(authActions.getCurrentTable(tableId));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConfirmDate = (e) => {
    e.preventDefault();
    if (booking === 1) {
      dispatch(authActions.selectDate(formData.date));
      setBooking(2);
    } else {
      setBooking(1);
      setFormData({
        ...formData,
        tableId: "",
        time: "",
      });
    }
  };

  let d = new Date();
  let n = d.toISOString().split("T");

  const handleTime = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value, tableId: "" });
  };

  const test = (e) => {
    e.preventDefault();
    setSelect(e.target.value);
  };

  useEffect(() => {
    dispatch(authActions.getTable());
  }, [dispatch, formData, newTables]);
  return (
    <div
      className="booking darken-pseudo darken-with-text"
      id="booking"
      style={{ backgroundImage: "url(images/booking2.jpg)" }}
    >
      {formData.time ? (
        <div className="tables fade-in">
          <div>
            <center className="text">
              <h4>Choose table type</h4>
            </center>
          </div>
          <div className="table-list">
            {newTables &&
              newTables
                .filter((table) => {
                  return table.time === formData.time;
                })
                .reduce((total, table) => {
                  let tableArray = total.map((table) => table.tableName);
                  if (!tableArray.includes(table.tableName)) {
                    return [...total, table];
                  }
                  return total;
                }, [])
                .map((table) => {
                  return (
                    <div className="tablez">
                      {
                        <span
                          className={`centered ${
                            select === table._id
                              ? "select"
                              : table.status === "Booked"
                              ? "booked"
                              : table.status === "Pending"
                              ? "pending"
                              : ""
                          }`}
                        >{`${table.tableName}`}</span>
                      }
                      {table.tableName === "T1" ||
                      table.tableName === "T2" ||
                      table.tableName === "T3" ? (
                        <svg
                          width="9vw"
                          height="9vw"
                          xmlns="images/table_2.png"
                        >
                          <image
                            href="https://res.cloudinary.com/dopdu3ttp/image/upload/c_crop,h_128,w_128/v1612343365/table_2_ykidp6.png"
                            height="100%"
                            width="100%"
                          />
                        </svg>
                      ) : table.tableName === "T4" ||
                        table.tableName === "T5" ? (
                        <svg
                          width="9vw"
                          height="9vw"
                          xmlns="images/table_4.png"
                        >
                          <image
                            href="https://res.cloudinary.com/dopdu3ttp/image/upload/c_crop,h_128,w_135/v1612343380/table_4_alufqr.png"
                            height="100%"
                            width="100%"
                          />
                        </svg>
                      ) : table.tableName === "T6" ? (
                        <svg
                          width="9vw"
                          height="9vw"
                          xmlns="images/table_6.png"
                        >
                          <image
                            href="https://res.cloudinary.com/dopdu3ttp/image/upload/c_crop,h_128,w_180/v1612343390/table_6_rowrvn.png"
                            height="100%"
                            width="100%"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="9vw"
                          height="9vw"
                          xmlns="images/table_8.png"
                        >
                          <image
                            href="https://res.cloudinary.com/dopdu3ttp/image/upload/v1612343401/table_8_mncvrh.png"
                            height="100%"
                            width="100%"
                          />
                        </svg>
                      )}
                    </div>
                  );
                })}
          </div>
          <center className="tableFooter">
            <span style={{ color: "#00e6e6" }}>Your table</span>{" "}
            <span className="text">Available</span>{" "}
            <span style={{ color: " #df2329" }}>Booked</span>{" "}
            <span style={{ color: "  #e6b800" }}>Pending</span>
          </center>
        </div>
      ) : null}

      <div className="booking2">
        <center className="text" style={{ height: "10%", width: "80%" }}>
          <h4>BOOK A TABLE ONLINE</h4>
        </center>
        <div className="booking-in">
          {booking === 1 ? (
            <>
              {" "}
              <center className="text" style={{ height: "10%", width: "80%" }}>
                <h6>Choose your date </h6>
              </center>
              <Form.Control
                style={{
                  width: "50%",
                  backgroundColor: "black",
                  color: "white",
                }}
                type="name"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <Form.Control
                style={{
                  width: "50%",
                  backgroundColor: "black",
                  color: "white",
                }}
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {booking === 1 ? (
                <Form.Control
                  style={{
                    fontSize: "3vh",
                    width: "50%",
                    backgroundColor: "black",
                    color: "white",
                  }}
                  type="date"
                  custom
                  value={formData.date}
                  name="date"
                  onChange={handleChange}
                  min={`${n[0]}`}
                ></Form.Control>
              ) : (
                <Form.Control
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    fontSize: "3vh",
                    width: "50%",
                    backgroundColor: "black",
                    color: "white",
                  }}
                  type="date"
                  custom
                  disabled
                ></Form.Control>
              )}
            </>
          ) : (
            <div className="booking-in fade-in">
              <center className="text" style={{ height: "10%", width: "80%" }}>
                <h6>Last Step </h6>
              </center>
              <Form.Control
                onChange={handleTime}
                style={{
                  width: "50%",
                  backgroundColor: "black",
                  color: "white",
                }}
                as="select"
                custom
                name="time"
                value={formData.time}
                defaultValue="Time"
              >
                <option>Time</option>
                {newTables &&
                  newTables
                    .reduce((total, table) => {
                      let timeArray = total.map((table) => table.time);
                      if (!timeArray.includes(table.time)) {
                        return [...total, table];
                      }
                      return total;
                    }, [])
                    .map((table) => {
                      return <option>{`${table.time}`}</option>;
                    })}
              </Form.Control>
              <Form.Control
                style={{
                  width: "50%",
                  backgroundColor: "black",
                  color: "white",
                }}
                as="select"
                id="inlineFormCustomSelect"
                name="tableId"
                custom
                value={formData.tableId}
                onChange={handleGetTable}
                onClick={test}
                defaultValue="Choose your tablez"
              >
                <option>Choose your Table</option>
                {newTables &&
                  newTables
                    .filter((table) => {
                      return table.time === formData.time;
                    })
                    .reduce((total, table) => {
                      let tableArray = total.map((table) => table.tableName);
                      if (!tableArray.includes(table.tableName)) {
                        return [...total, table];
                      }
                      return total;
                    }, [])
                    .map((table) => {
                      if (table.status === "Booked") {
                        return (
                          <option
                            key={`${table._id}`}
                            disabled
                            style={{ color: "red" }}
                          >{`${table.tableName} (${table.status})`}</option>
                        );
                      }
                      if (table.status === "Pending") {
                        return (
                          <option
                            key={`${table._id}`}
                            disabled
                            style={{ color: "#e6b800" }}
                          >{`${table.tableName} (${table.status})`}</option>
                        );
                      } else {
                        return (
                          <option
                            key={`${table._id}`}
                            value={`${table._id}`}
                            style={{ color: "green" }}
                          >{`${table.tableName} (${table.status})`}</option>
                        );
                      }
                    })}
              </Form.Control>
              <Form.Control
                style={{
                  width: "50%",
                  backgroundColor: "black",
                  color: "white",
                }}
                type="comment"
                name="comment"
                placeholder="Special offer or allergic to.."
                value={formData.comment}
                onChange={handleChange}
              />
              <button
                className="booking-panel"
                onClick={handleShow}
                style={{
                  fontSize: "50%",
                  color: "white",
                  backgroundColor: "#b32d00",
                  width: "40%",
                  height: "20%",
                }}
              >
                Reserve a Table
              </button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header className="backModal" closeButton>
                  <Modal.Title style={{ color: "red" }}>
                    {" "}
                    Reservation Pending
                  </Modal.Title>
                </Modal.Header>

                {modal === 1 ? (
                  <Modal.Body className="backModal text">
                    Thank you for booking with Koji. Your booking has been sent
                    to us. We will send you an email to confirm your
                    reservation. Thank you!
                  </Modal.Body>
                ) : modal === 2 ? (
                  <Modal.Body className="backModal text">
                    Sorry, you can only book table at one time only. If you want
                    to change your decision, fell free to contact us. Thank you.
                  </Modal.Body>
                ) : (
                  <Modal.Body className="backModal text">
                    <LoginPage />
                  </Modal.Body>
                )}

                <Modal.Footer className="backModal text">
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          )}

          <button
            style={{
              fontSize: "50%",
              color: "white",
              backgroundColor: "#ffcc99",
              width: "45%",
              height: "10%",
            }}
            onClick={handleConfirmDate}
          >
            {booking === 1 ? "Confirm Date" : "Chose Another Day"}
          </button>
        </div>
        {/*  */}
      </div>
    </div>
  );
};
export default BookingPage2;
