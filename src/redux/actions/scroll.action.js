import * as types from "../constants/scroll.constants";

const scroll = (e) => (dispatch) => {
  dispatch({ type: types.SCROLL, payload: e });
};

const scrollActions = {
  scroll,
};
export default scrollActions;
