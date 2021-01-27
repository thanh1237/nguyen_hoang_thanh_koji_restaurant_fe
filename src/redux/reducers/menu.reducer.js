import * as types from "../constants/menu.constants";
const initialState = {
  menu: [],
};

const menuReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_MENU_REQUEST:
      return { ...state, loading: true };
    case types.GET_MENU_SUCCESS:
      return { ...state, menu: payload, loading: false };
    case types.GET_MENU_FAILURE:
      return { ...state, loading: false };

    case types.UPDATE_MENU_REQUEST:
      return { ...state, loading: true };
    case types.UPDATE_MENU_SUCCESS:
      return { ...state, loading: false };
    case types.UPDATE_MENU_FAILURE:
      return { ...state, loading: false };

    case types.DELETE_MENU_REQUEST:
      return { ...state, loading: true };
    case types.DELETE_MENU_SUCCESS:
      return { ...state, loading: false };
    case types.DELETE_MENU_FAILURE:
      return { ...state, loading: false };

    case types.CREATE_MENU_REQUEST:
      return { ...state, loading: true };
    case types.CREATE_MENU_SUCCESS:
      return { ...state, booking: payload.booking, loading: false };
    case types.CREATE_MENU_FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default menuReducer;
