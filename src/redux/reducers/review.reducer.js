import * as types from "../constants/review.constants";
const initialState = {
  review: {},
};

const reviewReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_REVIEW_REQUEST:
      return { ...state, loading: true };
    case types.GET_REVIEW_SUCCESS:
      return { ...state, review: payload, loading: false };
    case types.GET_REVIEW_FAILURE:
      return { ...state, loading: false };

    case types.CREATE_REVIEW_REQUEST:
      return { ...state, loading: true };
    case types.CREATE_REVIEW_SUCCESS:
      return { ...state, review: payload, loading: false };
    case types.CREATE_REVIEW_FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default reviewReducer;
