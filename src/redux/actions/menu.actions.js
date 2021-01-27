import * as types from "../constants/menu.constants";
import api from "../../apiService";
import { toast } from "react-toastify";
import routeActions from "./route.actions";

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
  } catch (error) {
    dispatch({ type: types.UPDATE_MENU_FAILURE, payload: error });
  }
};

const deleteMenu = (id) => async (dispatch) => {
  dispatch({ type: types.DELETE_MENU_REQUEST, payload: null });
  try {
    const res = await api.delete(`/menu/${id}`);
    dispatch({
      type: types.DELETE_MENU_SUCCESS,
      payload: res.data.data,
    });
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

const menuActions = {
  getMenuList,
  updateMenu,
  deleteMenu,
  createMenu,
};

export default menuActions;
