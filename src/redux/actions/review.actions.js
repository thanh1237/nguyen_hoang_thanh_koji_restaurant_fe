import * as types from "../constants/review.constants";
import api from "../../apiService";

const getReview = (id) => async (dispatch) => {
  dispatch({ type: types.GET_REVIEW_REQUEST, payload: null });
  try {
    const res = await api.get(`/review/${id}`);
    dispatch({
      type: types.GET_REVIEW_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: types.GET_REVIEW_FAILURE, payload: error });
  }
};

const createReview = (menuId, content) => async (dispatch) => {
  dispatch({ type: types.CREATE_REVIEW_REQUEST, payload: null });
  try {
    const body = { content };
    const res = await api.post(`/review/${menuId}`, body);
    dispatch({
      type: types.CREATE_REVIEW_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: types.CREATE_REVIEW_FAILURE, payload: error });
  }
};

const reviewActions = {
  getReview,
  createReview,
};

export default reviewActions;
