import * as types from "../constants/menu.constants";
import api from "../../apiService";
import Axios from "axios";
import { toast } from "react-toastify";

const getMenuList = () => async (dispatch) => {
  dispatch({ type: types.GET_MENU_REQUEST, payload: null });
  try {
    const res = await api.get("/menu");
    dispatch({
      type: types.GET_MENU_SUCCESS,
      payload: res.data.data.menu,
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: types.GET_MENU_FAILURE, payload: error });
  }
};

const updateMenu = (id, name, type, price) => async (dispatch) => {
  dispatch({ type: types.UPDATE_MENU_REQUEST, payload: null });
  try {
    const body = { name, type, price };
    const res = await api.put(`/menu/${id}`, body);
    dispatch({
      type: types.UPDATE_MENU_SUCCESS,
      payload: res.data.data,
    });
    toast.success(`${name} has successfully edited `);
  } catch (error) {
    dispatch({ type: types.UPDATE_MENU_FAILURE, payload: error });
  }
};

const deleteMenu = (id, name) => async (dispatch) => {
  dispatch({ type: types.DELETE_MENU_REQUEST, payload: null });
  try {
    const res = await api.delete(`/menu/${id}`);
    dispatch({
      type: types.DELETE_MENU_SUCCESS,
      payload: res.data.data,
    });
    toast.success(`${name} has been deleted`);
  } catch (error) {
    console.log(error);
    dispatch({ type: types.DELETE_MENU_FAILURE, payload: error });
  }
};

const createMenu = (name, type, price, image) => async (dispatch) => {
  dispatch({ type: types.CREATE_MENU_REQUEST, payload: null });
  try {
    const res = await api.post("/menu", { name, type, price, image });
    dispatch({ type: types.CREATE_MENU_SUCCESS, payload: res.data.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: types.CREATE_MENU_FAILURE, payload: error });
  }
};
const uploadImageAndCreate = (image, name, type, price) => async (dispatch) => {
  dispatch({ type: types.UPLOAD_IMAGE_REQUEST, payload: null });
  try {
    const imageData = new FormData();
    imageData.append("file", image);
    imageData.append("upload_preset", "cfurhwe4");

    const res = await Axios.post(
      "https://api.cloudinary.com/v1_1/dopdu3ttp/image/upload",
      imageData
    );
    dispatch({
      type: types.UPLOAD_IMAGE_SUCCESS,
      payload: res.data.secure_url,
    });
    dispatch(createMenu(name, type, price, res.data.secure_url));
    dispatch(getMenuList());
    toast.success(`Your Item: ${name} has been created`);
  } catch (error) {
    console.log(error);
    dispatch({ type: types.UPLOAD_IMAGE_FAILURE, payload: error });
  }
};

const getSingleItem = (id) => async (dispatch) => {
  dispatch({ type: types.GET_SINGLE_ITEM_REQUEST, payload: null });
  try {
    const res = await api.get(`/menu/${id}`);
    dispatch({
      type: types.GET_SINGLE_ITEM_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({ type: types.GET_SINGLE_ITEM_FAILURE, payload: error });
  }
};

const getReaction = (menuId) => async (dispatch) => {
  dispatch({ type: types.GET_SINGLE_REACTION_REQUEST, payload: null });
  try {
    const res = await api.get(`/reaction/${menuId}`);
    dispatch({
      type: types.GET_SINGLE_REACTION_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: types.GET_SINGLE_REACTION_FAILURE, payload: error });
  }
};

const react = (menuId) => async (dispatch) => {
  dispatch({ type: types.REACTION_REQUEST, payload: null });
  try {
    const body = { menuId };
    const res = await api.post(`/reaction`, body);
    dispatch({ type: types.REACTION_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: types.REACTION_FAILURE });
  }
};

const menuActions = {
  getMenuList,
  updateMenu,
  deleteMenu,
  createMenu,
  uploadImageAndCreate,
  getSingleItem,
  getReaction,
  react,
};

export default menuActions;
