import React, { useEffect, useRef, useState } from "react";
import api from "../../apiService";
import { Modal } from "react-bootstrap";
import {
  Col,
  Button,
  Nav,
  Row,
  Tab,
  Tabs,
  Card,
  Image,
  ListGroup,
  Form,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import authActions from "../../redux/actions/auth.actions";
import bookingActions from "../../redux/actions/booking.action";
import menuActions from "../../redux/actions/menu.actions";
import BookingAdmin from "./BookingAdmin";
import EditMenuAdmin from "./EditMenuAdmin";
import Footer from "./Footer";
import HeaderAdmin from "./HeaderAdmin";
import MenuAdmin from "./MenuAdmin";

export const AdminPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    price: "",
    fileInputState: "",
  });
  const dispatch = useDispatch();
  const bookingList = useSelector((state) => state.booking.booking);
  const menu = useSelector((state) => state.menu.menu);

  const bookingNotDelete = bookingList?.filter((booking) => {
    return booking.isDeleted === false;
  });
  const [comment, setComment] = useState("No comments");
  const [tableName, setTableName] = useState("");
  const [select, setSelect] = useState("");
  const [menuSelect, setMenuSelect] = useState("");
  const [editSelect, setEditSelect] = useState("");
  const [update, setUpdate] = useState(1);
  const [show, setShow] = useState(false);
  const inputFile = useRef(null);
  const [previewSource, setPreviewSource] = useState("");

  const [selectedFile, setSelectedFile] = useState("");

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const uploadImage = async (base64EncodedImage) => {
    console.log("huhu", base64EncodedImage);
    try {
      await api.post("/upload", JSON.stringify({ data: base64EncodedImage }));
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!previewSource) return;
    uploadImage(previewSource);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleCloseAndCreate = (e) => {
    setShow(false);
    const { name, type, price, fileInputState } = formData;
    dispatch(
      menuActions.creatMenu(
        formData.name,
        formData.type,
        formData.price,
        formData.fileInputState
      )
    );
  };
  const handleShow = () => setShow(true);

  const handleEdit = (e) => {
    e.preventDefault();
    setEditSelect(menu && menu.find((item) => item.name === menuSelect));
    setUpdate(1);
    setFormData({ name: "", type: "", price: "" });
  };

  const handleMenu = (name) => {
    setMenuSelect(name);
  };

  const handleConfirmBooking = (bookingId, tableId) => {
    dispatch(bookingActions.deleteBooking(bookingId));
    dispatch(bookingActions.getListOfBooking());
    dispatch(
      authActions.updateTable(tableId, { comment: "" }, { status: "Booked" })
    );
  };

  const handleDeleteBooking = (bookingId, tableId) => {
    dispatch(bookingActions.deleteBooking(bookingId));
    dispatch(bookingActions.getListOfBooking());
    dispatch(
      authActions.updateTable(tableId, { comment: "" }, { status: "Available" })
    );
  };
  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleComment = (comment, tableName) => {
    if (comment && tableName) {
      setComment(`${comment}`);
      setTableName(`${tableName}`);
    } else if (!comment && tableName) {
      setComment("No comments");
      setTableName(`${tableName}`);
    } else {
      setComment("No comments");
      setTableName("");
    }
  };

  const handleHeader = (e) => {
    e.preventDefault();
    setSelect(e.target.outerText);
  };

  const handleDeleteMenu = (e) => {
    e.preventDefault();
    const currentDishId = editSelect._id;
    dispatch(menuActions.deleteMenu(currentDishId));
    dispatch(menuActions.getMenuList());
    setEditSelect("");
  };

  const handleConfirmChange = () => {
    const { name, type, price } = formData;
    if (name && type && price) {
      if (
        name === `${editSelect.name}` &&
        type === `${editSelect.type}` &&
        price === `${editSelect.price}`
      ) {
        setUpdate(2);
      } else {
        dispatch(
          menuActions.updateMenu(`${editSelect._id}`, name, type, price)
        );
        dispatch(menuActions.getMenuList());
      }
    }
    if (name && !type && !price) {
      dispatch(
        menuActions.updateMenu(
          `${editSelect._id}`,
          name,
          `${editSelect.type}`,
          `${editSelect.price}`
        )
      );
      dispatch(menuActions.getMenuList());
    }
    if (name && type && !price) {
      dispatch(
        menuActions.updateMenu(
          `${editSelect._id}`,
          name,
          type,
          `${editSelect.price}`
        )
      );
      dispatch(menuActions.getMenuList());
    }
    if (name && !type && price) {
      dispatch(
        menuActions.updateMenu(
          `${editSelect._id}`,
          name,
          `${editSelect.type}`,
          price
        )
      );
      dispatch(menuActions.getMenuList());
    }
    if (!name && type && price) {
      dispatch(
        menuActions.updateMenu(
          `${editSelect._id}`,
          `${editSelect.name}`,
          type,
          price
        )
      );
      dispatch(menuActions.getMenuList());
    }
    if (!name && type && !price) {
      dispatch(
        menuActions.updateMenu(
          `${editSelect._id}`,
          `${editSelect.name}`,
          type,
          `${editSelect.price}`
        )
      );
      dispatch(menuActions.getMenuList());
    }
    if (!name && !type && price) {
      dispatch(
        menuActions.updateMenu(
          `${editSelect._id}`,
          `${editSelect.name}`,
          `${editSelect.type}`,
          price
        )
      );
      dispatch(menuActions.getMenuList());
    }
    if (!name && !type && !price) {
      setUpdate(2);
    }
  };

  const handleReEdit = () => {
    setUpdate(1);
  };

  useEffect(() => {
    dispatch(bookingActions.getListOfBooking());
    dispatch(menuActions.getMenuList());
  }, [dispatch, editSelect, formData, select]);

  return (
    <div style={{ marginTop: "10%" }} className="text">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav
              variant="tabs"
              className="flex-column"
              style={{ backgroundColor: "black" }}
            >
              <Nav.Item>
                <Nav.Link
                  style={{
                    color: "white",
                    backgroundColor: "black",
                    marginBottom: "1vh",
                  }}
                  eventKey="first"
                  onClick={handleHeader}
                >
                  Booking List
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  style={{
                    color: "white",
                    backgroundColor: "black",
                    marginBottom: "1vh",
                  }}
                  eventKey="second"
                  onClick={handleHeader}
                >
                  Menu
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  style={{
                    color: "white",
                    backgroundColor: "black",
                    marginBottom: "1vh",
                  }}
                  eventKey="third"
                  onClick={handleHeader}
                >
                  Edit Menu
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content style={{ border: "1px solid white" }}>
              <HeaderAdmin select={select} />
              <Tab.Pane eventKey="first">
                <BookingAdmin
                  bookingList={bookingList}
                  handleConfirmBooking={handleConfirmBooking}
                  handleComment={handleComment}
                  handleDeleteBooking={handleDeleteBooking}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <MenuAdmin
                  menu={menu}
                  handleMenu={handleMenu}
                  menuSelect={menuSelect}
                />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <EditMenuAdmin
                  editSelect={editSelect}
                  formData={formData}
                  handleChange={handleChange}
                />
              </Tab.Pane>
              <Footer
                inputFile={inputFile}
                select={select}
                menu={menu}
                menuSelect={menuSelect}
                handleEdit={handleEdit}
                handleShow={handleShow}
                show={show}
                handleClose={handleClose}
                formData={formData}
                handleChange={handleChange}
                update={update}
                handleConfirmChange={handleConfirmChange}
                handleReEdit={handleReEdit}
                bookingNotDelete={bookingNotDelete}
                tableName={tableName}
                comment={comment}
                handleFileInputChange={handleFileInputChange}
                fileInputState={formData.fileInputState}
                previewSource={previewSource}
                handleSubmitFile={handleSubmitFile}
                handleDeleteMenu={handleDeleteMenu}
                handleCloseAndCreate={handleCloseAndCreate}
              />
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default AdminPage;
