import React from "react";
import { Button, Card } from "react-bootstrap";

export const BookingAdmin = ({
  bookingList,
  handleConfirmBooking,
  handleComment,
  handleDeleteBooking,
}) => {
  return (
    <div className="scrollbar">
      <div className="adminPage">
        {bookingList?.map((booking) =>
          booking.isDeleted === false ? (
            <Card
              style={{
                width: "18rem",
                backgroundColor: "black",
                border: "1px solid white",
                marginBottom: "2vh",
              }}
            >
              <Card.Body>
                <Card.Title>{`${booking.user.name}`}</Card.Title>
                <div
                  style={{
                    backgroundColor: "white",
                    textAlign: "center",
                    width: "100%",
                    height: "1px",
                    marginTop: "5px ",
                    marginBottom: "3vh ",
                  }}
                ></div>
                <Card.Subtitle className="mb-2 " style={{ color: "#e6b800" }}>
                  {`${booking.tableId.tableName}`}
                </Card.Subtitle>
                <div className="cardText">
                  <Card.Text className="textCard">
                    <div>Came for: {`${booking.tableId.cameFor}`}</div>
                    <div>At: {`${booking.tableId.time}`}</div>
                  </Card.Text>
                  {booking.tableId.tableName === "T1" ||
                  booking.tableId.tableName === "T2" ||
                  booking.tableId.tableName === "T3" ? (
                    <svg width="9vw" height="9vw" xmlns="images/table_2.png">
                      <image
                        href="images/table_2.png"
                        height="100%"
                        width="100%"
                      />
                    </svg>
                  ) : booking.tableId.tableName === "T4" ||
                    booking.tableId.tableName === "T5" ? (
                    <svg width="9vw" height="9vw" xmlns="images/table_4.png">
                      <image
                        href="images/table_4.png"
                        height="100%"
                        width="100%"
                      />
                    </svg>
                  ) : booking.tableId.tableName === "T6" ? (
                    <svg width="9vw" height="9vw" xmlns="images/table_6.png">
                      <image
                        href="images/table_6.png"
                        height="100%"
                        width="100%"
                      />
                    </svg>
                  ) : (
                    <svg width="9vw" height="9vw" xmlns="images/table_8.png">
                      <image
                        href="images/table_8.png"
                        height="100%"
                        width="100%"
                      />
                    </svg>
                  )}
                </div>
                <div className="adminBookingFooter">
                  <Button
                    onClick={() =>
                      handleConfirmBooking(
                        booking._id,
                        booking.tableId._id,
                        booking.tableId.comment
                      )
                    }
                    variant="outline-success"
                  >
                    Accept
                  </Button>
                  <Button
                    onClick={() =>
                      handleComment(
                        booking.tableId.comment,
                        booking.tableId.tableName
                      )
                    }
                    variant="outline-warning"
                  >
                    Comment
                  </Button>
                  <Button
                    onClick={() =>
                      handleDeleteBooking(booking._id, booking.tableId._id)
                    }
                    variant="outline-danger"
                  >
                    Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ) : null
        )}
      </div>
    </div>
  );
};
export default BookingAdmin;
