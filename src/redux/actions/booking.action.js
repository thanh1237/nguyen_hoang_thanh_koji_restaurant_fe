import * as types from "../constants/booking.constants";
import api from "../../apiService";

const createBooking = (tableId, user) => async (dispatch) => {
  dispatch({ type: types.CREATE_BOOKING_REQUEST, payload: null });
  try {
    const res = await api.post("/booking", { tableId, user });
    dispatch({ type: types.CREATE_BOOKING_SUCCESS, payload: res.data.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: types.CREATE_BOOKING_FAILURE, payload: error });
  }
};

const getListOfBooking = () => async (dispatch) => {
  dispatch({ type: types.GET_BOOKING_REQUEST, payload: null });
  try {
    const res = await api.get("/booking");
    dispatch({
      type: types.GET_BOOKING_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: types.GET_BOOKING_FAILURE, payload: error });
  }
};

const deleteBooking = (bookingId) => async (dispatch) => {
  dispatch({ type: types.DELETE_BOOKING_REQUEST, payload: null });
  try {
    const res = await api.delete(`/booking/${bookingId}`);
    dispatch({
      type: types.DELETE_BOOKING_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: types.DELETE_BOOKING_FAILURE, payload: error });
  }
};

const bookingActions = {
  createBooking,
  getListOfBooking,
  deleteBooking,
};
export default bookingActions;
