import React, { useEffect } from "react";
import userActions from "../redux/actions/user.actions";
import menuActions from "../redux/actions/menu.actions";
import { useDispatch, useSelector } from "react-redux";
import { Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export const Gallery = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users.length);
  const menu = useSelector((state) => state.menu.menu);
  const history = useHistory();

  const handleClickOnItem = (id) => {
    history.push(`/menu/${id}`);
  };

  useEffect(() => {
    dispatch(userActions.usersRequest());
    dispatch(menuActions.getMenuList());
  }, [dispatch]);
  return (
    <div className="main-gallery">
      <div className="gallery-header">
        <svg xmlns="images/table_2.png" className="gallery-logo">
          <image
            className="rounded-circle"
            height="100%"
            width="100%"
            href="https://res.cloudinary.com/dopdu3ttp/image/upload/v1611909715/logo_u7xd8n.png"
          />
        </svg>
        <div className="gallery-content">
          <h3>Koji Saigon Modern Izakaya</h3>
          <br />
          <div className="gallery-info">
            <div>
              <strong>{`${menu.length}`}</strong> dishes
            </div>
            <div style={{ marginLeft: "10%" }}>
              <strong>{`${users}`}</strong> followers
            </div>
          </div>
          <br />
          <div>𝐎𝐏𝐄𝐍: 11:30am - 2:00pm and 5:00pm - 12:00am</div>
          <div>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://www.facebook.com/profile.php?id=100012152715341"
              target="_blank"
            >
              {" "}
              @thanhlaaiiiii{" "}
            </a>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://www.facebook.com/ngathuydao165"
              target="_blank"
            >
              | @xucxich.trunglongdao
            </a>
          </div>
        </div>
      </div>
      <div className="gallery-body">
        <div
          className="divider-gallery"
          style={{
            textAlign: "center",
            width: "100%",
            height: "1px",
            margin: "5px 0",
          }}
        ></div>
        <div className="row">
          {menu
            .filter((item) => {
              return item.isDeleted === false;
            })
            .map((item) => {
              return (
                <div className="col-md-4 col-sm-6 gallery-items">
                  <img
                    className="img-fluid product-img"
                    src={`${item.image}`}
                  />
                  <div
                    className="overlay"
                    onClick={() => handleClickOnItem(item._id)}
                  >
                    <span style={{ fontSize: "1em" }}>
                      <i class="fas fa-heart back-img1 ">
                        {" "}
                        {` ${item.reactionCount}`}
                      </i>
                      <i class="fas fa-comment-dots back-img2">
                        {" "}
                        {` ${item.reviewCount}`}
                      </i>
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default Gallery;
