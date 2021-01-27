import React from "react";
import { Card, Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

export const MenuAdmin = ({ menu, handleMenu, menuSelect }) => {
  return (
    <div>
      <div className="scrollbar">
        <Row>
          <Col className="menu">
            <h3>Food:</h3>
            <div className="fb">
              {menu
                .filter((dish) => dish.isDeleted === false)
                .map((dish) => {
                  if (dish.type === "Food") {
                    return (
                      <Card
                        onClick={() => handleMenu(dish.name)}
                        className={` ${
                          menuSelect === dish.name ? "cardSelect" : "card"
                        }`}
                      >
                        <Card.Img
                          variant="top"
                          src={`${process.env.REACT_APP_BACKEND_API}/images/${dish.image}`}
                        />
                        <Card.Body>
                          <Card.Title>{`${dish.name}`}</Card.Title>
                          <Card.Text className="price">
                            Price: {`${dish.price}`}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    );
                  }
                })}
            </div>
          </Col>

          <Col className="menu">
            <h3>Drink:</h3>
            <div className="fb">
              {menu
                .filter((dish) => dish.isDeleted === false)
                .map((dish) => {
                  if (dish.type === "Drink") {
                    return (
                      <Card
                        className={` ${
                          menuSelect === dish.name ? "cardSelect" : "card"
                        }`}
                        onClick={() => handleMenu(dish.name)}
                      >
                        <Card.Img
                          variant="top"
                          src={`${process.env.REACT_APP_BACKEND_API}/images/${dish.image}`}
                        />
                        <Card.Body>
                          <Card.Title>{`${dish.name}`}</Card.Title>
                          <Card.Text className="price">
                            Price: {`${dish.price}`}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    );
                  }
                })}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default MenuAdmin;
