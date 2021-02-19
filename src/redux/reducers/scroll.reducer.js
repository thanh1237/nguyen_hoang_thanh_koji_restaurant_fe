import * as types from "../constants/scroll.constants";
const initialState = {
  scroll: false,
};

const scrollReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SCROLL:
      return { ...state, scroll: payload };
    default:
      return state;
  }
};

export default scrollReducer;
