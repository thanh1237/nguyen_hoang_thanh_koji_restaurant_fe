import * as types from "../constants/menu.constants";
const initialState = {
  menu: [],
  image: {},
  item: {},
  reaction: {},
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

    case types.UPLOAD_IMAGE_REQUEST:
      return { ...state, loading: true };
    case types.UPLOAD_IMAGE_SUCCESS:
      return { ...state, image: payload, loading: false };
    case types.UPLOAD_IMAGE_FAILURE:
      return { ...state, loading: false };

    case types.GET_SINGLE_ITEM_REQUEST:
      return { ...state, loading: true };
    case types.GET_SINGLE_ITEM_SUCCESS:
      return { ...state, item: payload, loading: false };
    case types.GET_SINGLE_ITEM_FAILURE:
      return { ...state, loading: false };

    case types.GET_SINGLE_REACTION_REQUEST:
      return { ...state, loading: true };
    case types.GET_SINGLE_REACTION_SUCCESS:
      return { ...state, reaction: payload, loading: false };
    case types.GET_SINGLE_REACTION_FAILURE:
      return { ...state, loading: false };

    case types.REACTION_REQUEST:
      return { ...state, loading: true };
    case types.REACTION_SUCCESS:
      return { ...state, reaction: payload, loading: false };
    case types.REACTION_FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default menuReducer;
