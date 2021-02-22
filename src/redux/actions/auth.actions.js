import * as types from "../constants/auth.constants";
import api from "../../apiService";
import { toast } from "react-toastify";
import routeActions from "./route.actions";

const loginRequest = ({ email, password }) => async (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST, payload: null });
  try {
    const res = await api.post("/auth/login", { email, password });
    dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.data });
    toast.success(`Welcome ${email}`);
  } catch (error) {
    console.log(error);
    dispatch({ type: types.LOGIN_FAILURE, payload: error });
  }
};

const loginFacebook = (access_token) => async (dispatch) => {
  dispatch({ type: types.LOGIN_FACEBOOK_REQUEST, payload: null });
  try {
    const res = await api.post("/auth/login/facebook", { access_token });
    dispatch({ type: types.LOGIN_FACEBOOK_SUCCESS, payload: res.data.data });
    const name = res.data.data.user.name;
    toast.success(`Welcome ${name}`);
  } catch (error) {
    console.log(error);
    dispatch({ type: types.LOGIN_FACEBOOK_FAILURE, payload: error });
  }
};

const loginGoogle = (access_token) => async (dispatch) => {
  dispatch({ type: types.LOGIN_GOOGLE_REQUEST, payload: null });
  try {
    const res = await api.post("/auth/login/google", { access_token });
    dispatch({ type: types.LOGIN_GOOGLE_SUCCESS, payload: res.data.data });
    const name = res.data.data.user.name;
    toast.success(`Welcome ${name}`);
  } catch (error) {
    console.log(error);
    dispatch({ type: types.LOGIN_GOOGLE_FAILURE, payload: error });
  }
};

const register = ({
  name,
  email,
  password,

  redirectTo = "__GO_BACK__",
}) => async (dispatch) => {
  dispatch({ type: types.REGISTER_REQUEST, payload: null });
  try {
    const res = await api.post("/users", { name, email, password });
    dispatch({ type: types.REGISTER_SUCCESS, payload: res.data.data });
    toast.success(`Thank you for your registration, ${name}!`);
    dispatch(routeActions.redirect(redirectTo));
  } catch (error) {
    dispatch({ type: types.REGISTER_FAILURE, payload: error });
  }
};

const getCurrentUser = (accessToken) => async (dispatch) => {
  dispatch({ type: types.GET_CURRENT_USER_REQUEST, payload: null });
  try {
    api.defaults.headers.common["authorization"] = accessToken;
    const res = await api.get("/users/me");
    dispatch({
      type: types.GET_CURRENT_USER_SUCCESS,
      payload: { user: res.data.data, accessToken },
    });
  } catch (error) {
    dispatch({ type: types.GET_CURRENT_USER_FAILURE, payload: error });
  }
};

const logout = () => (dispatch) => {
  delete api.defaults.headers.common["authorization"];
  localStorage.removeItem("accessToken");
  dispatch({ type: types.LOGOUT, payload: null });
};

const getTable = () => async (dispatch) => {
  dispatch({ type: types.GET_TABLE_REQUEST, payload: null });
  try {
    const res = await api.get("/table");
    dispatch({
      type: types.GET_TABLE_SUCCESS,
      payload: { table: res.data.data },
    });
  } catch (error) {
    dispatch({ type: types.GET_TABLE_FAILURE, payload: error });
  }
};

const selectDate = (date) => async (dispatch) => {
  dispatch({ type: types.CREATE_TABLE_REQUEST, payload: null });
  try {
    const res = await api.post("/table", { date });
    dispatch({ type: types.CREATE_TABLE_SUCCESS, payload: res.data.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: types.CREATE_TABLE_FAILURE, payload: error });
  }
};

const getCurrentTable = (tableId) => async (dispatch) => {
  dispatch({ type: types.GET_CURRENT_TABLE_REQUEST, payload: null });
  try {
    const res = await api.get(`/table/${tableId}`);
    dispatch({
      type: types.GET_CURRENT_TABLE_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({ type: types.GET_CURRENT_TABLE_FAILURE, payload: error });
  }
};

const updateTable = (tableId, comment, status) => async (dispatch) => {
  dispatch({ type: types.UPDATE_TABLE_REQUEST, payload: null });
  try {
    const body = { comment, status };
    const res = await api.put(`/table/${tableId}`, body);
    dispatch({
      type: types.UPDATE_TABLE_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({ type: types.UPDATE_TABLE_FAILURE, payload: error });
  }
};

const authActions = {
  loginRequest,
  register,
  loginFacebook,
  loginGoogle,
  getCurrentUser,
  logout,
  getTable,
  getCurrentTable,
  updateTable,
  selectDate,
};
export default authActions;
