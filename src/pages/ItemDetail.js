import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import menuActions from "../redux/actions/menu.actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "react-bootstrap";
import reviewActions from "../redux/actions/review.actions";

export const ItemDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();
  const users = useSelector((state) => state.user.users);
  const currentDish = useSelector((state) => state.menu.item);
  const reaction = useSelector((state) => state.menu.reaction);
  const currentUser = useSelector((state) => state.auth.user._id);
  const review = useSelector((state) => state.review.review.reviews);
  const [dropDown, setDropDown] = useState(false);

  const [formData, setFormData] = useState({
    content: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBack = (e) => {
    e.preventDefault();
    history.push("/gallery");
  };

  const handleReaction = (e) => {
    e.preventDefault();
    dispatch(menuActions.react(reaction.menuId));
  };

  const handleReview = (e) => {
    e.preventDefault();
    const { content } = formData;
    dispatch(reviewActions.createReview(params.id, content));
    dispatch(reviewActions.getReview(params.id));
    setFormData({ content: "" });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    if (dropDown === false) {
      setDropDown(true);
    } else {
      setDropDown(false);
    }
  };

  useEffect(() => {
    if (params?.id) {
      dispatch(reviewActions.getReview(params.id));
      dispatch(menuActions.getSingleItem(params.id));
      dispatch(menuActions.getReaction(params.id));
    }
  }, [dispatch, params, formData]);

  return (
    <div className="item-main">
      <div className="close">
        <FontAwesomeIcon
          onClick={handleBack}
          icon={faTimes}
          color="white"
          size="1.5x"
        />
      </div>

      <Row className="item">
        <Col
          lg={8}
          md={7}
          xs={12}
          className="item-image"
          style={{ padding: 0 }}
        >
          {currentDish ? (
            <img className="img-side" src={`${currentDish.image}`} alt="dish" />
          ) : null}
        </Col>
        <Col
          lg={4}
          md={5}
          xs={12}
          className="item-content d-flex"
          style={{ padding: 0 }}
        >
          <div className="item-content-1">
            {" "}
            <svg xmlns="images/table_2.png" className="img-logo">
              <image
                className="rounded"
                height="100%"
                width="100%"
                href="https://res.cloudinary.com/dopdu3ttp/image/upload/v1611909911/whiteonblack_wbmiqk.png"
              />
            </svg>
            <div className="item-content">
              {" "}
              <h6>
                <strong>kojisaigon</strong>
              </h6>
              <div>
                {" "}
                <h7>Koji Modern Izakaya</h7>
              </div>
            </div>
          </div>

          <div className="item-content-2">
            {review &&
              review.map((rev) => {
                return (
                  <div className="review">
                    {users &&
                      users.map((user) => {
                        if (user._id === rev.user) {
                          return (
                            <svg
                              xmlns="images/table_2.png"
                              className="img-logo"
                            >
                              <image
                                className="rounded"
                                height="100%"
                                width="100%"
                                href={`${user.avatarUrl}`}
                              />
                            </svg>
                          );
                        }
                      })}

                    <div className="content-item  d-flex flex-column flex-wrap">
                      <div className="edit-content">
                        <h6>
                          <strong>{`${rev.user.name}`}</strong>
                        </h6>
                      </div>
                      <h7> {`${rev.content}`}</h7>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="item-content-3">
            <div
              className="icon"
              style={{ marginLeft: "5%", fontSize: "1.5em" }}
            >
              {reaction &&
              reaction.userId &&
              currentUser &&
              reaction.userId.includes(currentUser) === true ? (
                <i
                  style={{ marginRight: "5%", color: "red" }}
                  onClick={handleReaction}
                  class="fas fa-heart"
                ></i>
              ) : reaction &&
                reaction.userId &&
                currentUser &&
                reaction.userId.includes(currentUser) === false ? (
                <i
                  onClick={handleReaction}
                  style={{ marginRight: "5%" }}
                  class="far fa-heart"
                ></i>
              ) : (
                <i
                  onClick={handleReaction}
                  style={{ marginRight: "5%" }}
                  class="far fa-heart"
                ></i>
              )}

              <i class="far fa-comment"></i>
            </div>
            {reaction && reaction.userId && reaction.userId.length > 1 ? (
              <div style={{ marginLeft: "5%" }}>{`${
                reaction.userId.length - 1
              } lượt thích`}</div>
            ) : (
              <div style={{ marginLeft: "5%" }}>{`0 lượt thích`}</div>
            )}
          </div>
          <div className="item-content-4">
            <input
              onsubmit
              type="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Add Comments..."
              style={{
                marginLeft: "5%",
                border: 0,
                height: "100%",
                width: "80%",
              }}
            />

            <h7 onClick={handleReview} className="post">
              Post
            </h7>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default ItemDetail;
